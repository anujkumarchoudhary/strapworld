"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import {
  MessageCircle,
  X,
  Mail,
  Phone,
  MessageSquareText,
  ArrowUpRight,
  Send,
  Minimize2,
  Headset,
  LoaderCircle,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import GetEnquiryForm from "./form/GetEnquiryForm";

type ChatMessage = {
  _id?: string;
  sender: "visitor" | "agent";
  message: string;
  createdAt?: string;
};

type ChatSession = {
  conversationId: string;
  token: string;
};

type CreateConversationResponse = {
  success?: boolean;
  conversationId?: string;
  token?: string;
  status?: string;
  message?: string;
};

type HistoryResponse = {
  success?: boolean;
  messages?: ChatMessage[];
  data?: ChatMessage[] | { messages?: ChatMessage[] };
  message?: string;
};

type SocketResponse = {
  success?: boolean;
  message?: string;
};

const API_BASE = "/api/v1/chat";
const SESSION_KEY = "strap-world-live-chat-session";

const ChatWidget = () => {
  const [openForm, setOpenForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [session, setSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState("");

  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const [isStarting, setIsStarting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState("");

  const widgetRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const sessionRef = useRef<ChatSession | null>(null);
  const joinedConversationRef = useRef<string | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, []);

  useEffect(() => {
    sessionRef.current = session;
  }, [session]);

  // Close the contact menu when clicking outside the widget.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsLiveChatOpen(false);
        setIsMinimized(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Restore the visitor session and connect to Socket.IO.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY);

      if (saved) {
        const parsed = JSON.parse(saved) as ChatSession;

        if (parsed.conversationId && parsed.token) {
          sessionRef.current = parsed;
          setSession(parsed);
        }
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }

    const socket = io(window.location.origin, {
      autoConnect: false,
      withCredentials: true,
      transports: ["websocket", "polling"],
    });

    socketRef.current = socket;

    const joinConversation = (activeSession: ChatSession) => {
      if (!socket.connected) return;

      socket.emit(
        "chat:join",
        {
          conversationId: activeSession.conversationId,
          token: activeSession.token,
        },
        (response?: SocketResponse) => {
          if (response?.success === false) {
            setError(
              response.message || "Unable to reconnect to your conversation.",
            );
            return;
          }

          joinedConversationRef.current =
            activeSession.conversationId;

          setIsConnected(true);
        },
      );
    };

    const handleConnect = () => {
      setIsConnected(true);

      const activeSession = sessionRef.current;

      if (activeSession) {
        joinConversation(activeSession);
      }
    };

    const handleDisconnect = () => {
      setIsConnected(false);
      joinedConversationRef.current = null;
    };

    const handleConnectError = () => {
      setIsConnected(false);
    };

    const handleMessage = (incoming: ChatMessage) => {
      if (!incoming || !incoming.message) return;

      setMessages((current) => {
        if (
          incoming._id &&
          current.some((item) => item._id === incoming._id)
        ) {
          return current;
        }

        return [...current, incoming];
      });
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("connect_error", handleConnectError);
    socket.on("chat:message", handleMessage);

    socket.connect();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);
      socket.off("chat:message", handleMessage);
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  // Join a newly created conversation if the socket is already connected.
  useEffect(() => {
    if (!session || !isConnected || !socketRef.current) return;

    if (
      joinedConversationRef.current === session.conversationId
    ) {
      return;
    }

    socketRef.current.emit(
      "chat:join",
      {
        conversationId: session.conversationId,
        token: session.token,
      },
      (response?: SocketResponse) => {
        if (response?.success === false) {
          setError(
            response.message || "Unable to join the conversation.",
          );
          return;
        }

        joinedConversationRef.current = session.conversationId;
      },
    );
  }, [session, isConnected]);

  // Load message history for the saved conversation.
  useEffect(() => {
    if (!session) return;

    let cancelled = false;

    const loadHistory = async () => {
      setIsLoadingHistory(true);

      try {
        const response = await fetch(
          `${API_BASE}/conversations/${encodeURIComponent(
            session.conversationId,
          )}/messages`,
          {
            headers: {
              "x-chat-token": session.token,
            },
          },
        );

        const result = (await response
          .json()
          .catch(() => ({}))) as HistoryResponse;

        if (!response.ok) {
          throw new Error(
            result.message || "Could not load chat history.",
          );
        }

        const history = Array.isArray(result.messages)
          ? result.messages
          : Array.isArray(result.data)
            ? result.data
            : result.data?.messages ?? [];

        if (!cancelled) {
          setMessages((current) => {
            // Preserve any messages received live while history loaded.
            const combined = [...history, ...current];
            const seen = new Set<string>();

            return combined.filter((item) => {
              if (item._id) {
                if (seen.has(item._id)) return false;
                seen.add(item._id);
              }

              return true;
            });
          });
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Could not load chat history.",
          );
        }
      } finally {
        if (!cancelled) {
          setIsLoadingHistory(false);
        }
      }
    };

    void loadHistory();

    return () => {
      cancelled = true;
    };
  }, [session]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const startConversation = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError("");

    const name = visitorName.trim();
    const email = visitorEmail.trim();
    const details = projectDetails.trim();

    if (!name || !email || !details) {
      setError("Please fill in all fields.");
      return;
    }

    setIsStarting(true);

    try {
      const response = await fetch(`${API_BASE}/conversations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          visitorName: name,
          visitorEmail: email,
          projectDetails: details,
          currentPage: window.location.href,
        }),
      });

      const result = (await response
        .json()
        .catch(() => ({}))) as CreateConversationResponse;

      if (
        !response.ok ||
        !result.conversationId ||
        !result.token
      ) {
        throw new Error(
          result.message || "Unable to start a conversation.",
        );
      }

      const newSession: ChatSession = {
        conversationId: result.conversationId,
        token: result.token,
      };

      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify(newSession),
      );

      sessionRef.current = newSession;
      setSession(newSession);

      // The API saves projectDetails as the initial visitor message.
      setMessages([
        {
          sender: "visitor",
          message: details,
          createdAt: new Date().toISOString(),
        },
      ]);

      setVisitorName(name);
      setVisitorEmail(email);
      setProjectDetails("");
      setError("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to start a conversation.",
      );
    } finally {
      setIsStarting(false);
    }
  };

  const sendMessage = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const text = message.trim();
    const socket = socketRef.current;

    if (!text || !session || isSending) return;

    if (text.length > 3000) {
      setError("Messages must be 3000 characters or fewer.");
      return;
    }

    if (!socket?.connected) {
      setError("Reconnecting to chat. Please try again shortly.");
      return;
    }

    if (
      joinedConversationRef.current !== session.conversationId
    ) {
      setError("Connecting to your conversation. Please try again.");
      return;
    }

    setError("");
    setIsSending(true);

    socket.timeout(10000).emit(
      "chat:message",
      {
        conversationId: session.conversationId,
        message: text,
      },
      (timeoutError: Error | null, response?: SocketResponse) => {
        setIsSending(false);

        if (timeoutError) {
          setError("Message sending timed out. Please try again.");
          return;
        }

        if (response?.success === false) {
          setError(response.message || "Message could not be sent.");
          return;
        }

        setMessage("");
      },
    );
  };

  const openLiveChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setIsLiveChatOpen(true);
    setError("");
  };

  const closeLiveChat = () => {
    setIsLiveChatOpen(false);
    setIsMinimized(false);
  };

  const openEnquiry = () => {
    setIsOpen(false);
    setOpenForm(true);

    document.getElementById("enquiry")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-5 right-5 z-[9999] sm:bottom-6 sm:right-6"
    >
      {/* ================= CONTACT MENU ================= */}
      {!isLiveChatOpen && (
        <div
          className={`
            absolute bottom-[72px] right-0
            w-[calc(100vw-40px)] max-w-[360px]
            overflow-hidden rounded-[20px] bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            transition-all duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none translate-y-5 scale-95 opacity-0"
            }
          `}
        >
          {/* Header */}
          <div className="bg-[#063F3D] px-5 py-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#39B972]">
                  Strap World
                </p>

                <h3 className="mt-1 text-[21px] font-semibold leading-tight text-white">
                  How can we help?
                </h3>

                <p className="mt-2 text-[13px] leading-5 text-white/70">
                  Tell us about your PET strapping requirement.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close contact menu"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-2 p-4">
            {/* Live Chat */}
            <button
              type="button"
              onClick={openLiveChat}
              className="group flex w-full items-center gap-3 rounded-[12px] border border-[#39B972]/30 bg-[#F5FBF7] p-3 text-left transition-all duration-300 hover:border-[#39B972] hover:bg-[#EAF7EF]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6F5EC] text-[#218B55]">
                <Headset className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-[#101820]">
                  Live Chat
                </p>
                <p className="text-[12px] text-[#647077]">
                  Message our support team
                </p>
              </div>

              <ArrowUpRight className="h-4 w-4 text-[#39B972] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919978735708"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-[12px] border border-gray-200 p-3 transition-all duration-300 hover:border-[#39B972]/40 hover:bg-[#F5FBF7]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6F5EC] text-[#218B55]">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-[#101820]">
                  WhatsApp
                </p>
                <p className="text-[12px] text-[#647077]">
                  Chat with our team
                </p>
              </div>

              <ArrowUpRight className="h-4 w-4 text-[#39B972] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Email */}
            <a
              href="mailto:nalandaindustri@gmail.com"
              className="group flex items-center gap-3 rounded-[12px] border border-gray-200 p-3 transition-all duration-300 hover:border-[#39B972]/40 hover:bg-[#F5FBF7]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6F5EC] text-[#218B55]">
                <Mail className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-[#101820]">
                  Email us
                </p>
                <p className="truncate text-[12px] text-[#647077]">
                  nalandaindustri@gmail.com
                </p>
              </div>

              <ArrowUpRight className="h-4 w-4 text-[#39B972] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Call */}
            <a
              href="tel:+919978735708"
              className="group flex items-center gap-3 rounded-[12px] border border-gray-200 p-3 transition-all duration-300 hover:border-[#39B972]/40 hover:bg-[#F5FBF7]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6F5EC] text-[#218B55]">
                <Phone className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-[#101820]">
                  Call us
                </p>
                <p className="text-[12px] text-[#647077]">
                  +91 997 873 5708
                </p>
              </div>

              <ArrowUpRight className="h-4 w-4 text-[#39B972] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Enquiry */}
            <button
              type="button"
              onClick={openEnquiry}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#39B972] px-4 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#218B55]"
            >
              <MessageSquareText className="h-4 w-4" />
              Send an enquiry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      )}

      {/* ================= LIVE CHAT PANEL ================= */}
      {isLiveChatOpen && !isMinimized && (
        <section
          aria-label="Strap World live chat"
          className="mb-4 flex h-[min(620px,calc(100dvh-120px))] w-[calc(100vw-40px)] max-w-[360px] flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        >
          {/* Header */}
          <header className="flex items-center justify-between bg-[#063F3D] px-4 py-4 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Headset size={21} />
              </div>

              <div className="min-w-0">
                <h2 className="text-[17px] font-semibold text-white">
                  Live Chat
                </h2>

                <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/75">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isConnected
                        ? "bg-[#39B972]"
                        : "bg-yellow-300"
                    }`}
                  />
                  {isConnected
                    ? "Connected"
                    : "Connecting to support..."}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                aria-label="Minimize live chat"
                className="rounded-lg p-2 transition hover:bg-white/15"
              >
                <Minimize2 size={17} />
              </button>

              <button
                type="button"
                onClick={closeLiveChat}
                aria-label="Close live chat"
                className="rounded-lg p-2 transition hover:bg-white/15"
              >
                <X size={19} />
              </button>
            </div>
          </header>

          {/* Start Conversation */}
          {!session ? (
            <form
              onSubmit={startConversation}
              className="flex-1 space-y-4 overflow-y-auto p-4"
            >
              <div className="rounded-xl bg-[#F5FBF7] p-3">
                <p className="text-sm font-semibold text-[#063F3D]">
                  Welcome to Strap World
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Share your details and PET strapping requirements.
                  Our team can respond through this chat.
                </p>
              </div>

              <div>
                <label
                  htmlFor="strap-chat-name"
                  className="mb-1.5 block text-xs font-semibold text-gray-700"
                >
                  Your name
                </label>
                <input
                  id="strap-chat-name"
                  value={visitorName}
                  onChange={(event) =>
                    setVisitorName(event.target.value)
                  }
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm outline-none transition focus:border-[#39B972] focus:ring-2 focus:ring-[#39B972]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="strap-chat-email"
                  className="mb-1.5 block text-xs font-semibold text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="strap-chat-email"
                  type="email"
                  value={visitorEmail}
                  onChange={(event) =>
                    setVisitorEmail(event.target.value)
                  }
                  placeholder="you@company.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-3 text-sm outline-none transition focus:border-[#39B972] focus:ring-2 focus:ring-[#39B972]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="strap-chat-details"
                  className="mb-1.5 block text-xs font-semibold text-gray-700"
                >
                  Your requirement
                </label>
                <textarea
                  id="strap-chat-details"
                  value={projectDetails}
                  onChange={(event) =>
                    setProjectDetails(event.target.value)
                  }
                  placeholder="Product, strap width, quantity, destination..."
                  rows={4}
                  maxLength={2000}
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 px-3.5 py-3 text-sm outline-none transition focus:border-[#39B972] focus:ring-2 focus:ring-[#39B972]/15"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isStarting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#39B972] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#218B55] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isStarting ? (
                  <>
                    <LoaderCircle
                      size={17}
                      className="animate-spin"
                    />
                    Starting chat...
                  </>
                ) : (
                  <>
                    Start conversation
                    <ArrowUpRight size={17} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <>
              {/* Visitor welcome strip */}
              <div className="flex items-center gap-3 border-b border-gray-100 bg-[#F5FBF7] px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6F5EC] text-[#218B55]">
                  <Headset size={18} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#101820]">
                    Hello, {visitorName.trim() || "there"}!
                  </p>
                  <p className="text-[11px] text-gray-500">
                    How can we help you today?
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div
                aria-live="polite"
                className="flex-1 space-y-3 overflow-y-auto bg-white p-4"
              >
                {isLoadingHistory && messages.length === 0 && (
                  <div className="flex justify-center py-4 text-xs text-gray-500">
                    <LoaderCircle
                      size={16}
                      className="mr-2 animate-spin"
                    />
                    Loading messages...
                  </div>
                )}

                {messages.map((item, index) => {
                  const isVisitor = item.sender === "visitor";

                  return (
                    <div
                      key={
                        item._id ??
                        `${item.createdAt ?? "message"}-${index}`
                      }
                      className={`flex ${
                        isVisitor
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-[13px] leading-5 ${
                          isVisitor
                            ? "rounded-br-md bg-[#063F3D] text-white"
                            : "rounded-bl-md border border-gray-100 bg-[#F5FBF7] text-[#26332E]"
                        }`}
                      >
                        {item.message}

                        {item.createdAt && (
                          <p
                            className={`mt-1.5 text-[10px] ${
                              isVisitor
                                ? "text-white/65"
                                : "text-gray-400"
                            }`}
                          >
                            {new Date(
                              item.createdAt,
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}

                {!isLoadingHistory && messages.length === 0 && (
                  <p className="py-8 text-center text-xs text-gray-500">
                    Send a message to start your conversation.
                  </p>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Message input */}
              <form
                onSubmit={sendMessage}
                className="border-t border-gray-100 bg-white p-3"
              >
                {error && (
                  <p
                    role="alert"
                    className="mb-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600"
                  >
                    {error}
                  </p>
                )}

                {!isConnected && (
                  <p className="mb-2 px-1 text-[10px] text-amber-600">
                    Reconnecting... Sending is temporarily unavailable.
                  </p>
                )}

                <div className="flex items-end gap-2">
                  <textarea
                    aria-label="Your message"
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" &&
                        !event.shiftKey &&
                        !event.nativeEvent.isComposing
                      ) {
                        event.preventDefault();
                        event.currentTarget.form?.requestSubmit();
                      }
                    }}
                    placeholder="Type your message..."
                    rows={1}
                    maxLength={3000}
                    className="max-h-28 min-h-11 flex-1 resize-y rounded-xl border border-gray-200 px-3 py-3 text-sm outline-none transition focus:border-[#39B972] focus:ring-2 focus:ring-[#39B972]/15"
                  />

                  <button
                    type="submit"
                    disabled={
                      !message.trim() ||
                      isSending ||
                      !isConnected
                    }
                    aria-label="Send message"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#39B972] text-white transition hover:bg-[#218B55] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSending ? (
                      <LoaderCircle
                        size={18}
                        className="animate-spin"
                      />
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-center text-[10px] text-gray-400">
                  Enter to send · Shift + Enter for a new line
                </p>
              </form>
            </>
          )}
        </section>
      )}

      {/* Minimized live chat */}
      {isLiveChatOpen && isMinimized && (
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="mb-3 flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-xl ring-1 ring-gray-200 transition hover:bg-[#F5FBF7]"
        >
          <MessageCircle
            size={18}
            className="text-[#218B55]"
          />
          Strap World Live Chat
          <ArrowLeft
            size={15}
            className="rotate-180 text-gray-400"
          />
        </button>
      )}

      {/* ================= FLOATING BUTTON ================= */}
      {!isLiveChatOpen && (
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#39B972] text-white shadow-[0_8px_30px_rgba(33,139,85,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 hover:bg-[#218B55] focus:outline-none focus:ring-4 focus:ring-[#39B972]/25 sm:h-[60px] sm:w-[60px]"
        >
          {!isOpen && (
            <span className="absolute inset-0 animate-ping rounded-full bg-[#39B972] opacity-40" />
          )}

          <span
            className={`relative z-10 transition-all duration-300 ${
              isOpen
                ? "rotate-90 scale-90"
                : "rotate-0 scale-100"
            }`}
          >
            {isOpen ? (
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </span>
        </button>
      )}

      <GetEnquiryForm
        isOpen={openForm}
        handleClose={() => setOpenForm(false)}
      />
    </div>
  );
};

export default ChatWidget;