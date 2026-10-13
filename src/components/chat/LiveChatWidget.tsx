"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Headset,
  LoaderCircle,
  ArrowLeft,
  Phone,
  Mail,
} from "lucide-react";

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

type ContactTab = "chat" | "whatsapp" | "phone" | "email";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "/api/v1/chat";

const SOCKET_URL =
  process.env.NEXT_PUBLIC_CHAT_SOCKET_URL ||
  (typeof window !== "undefined" ? window.location.origin : "");

const SESSION_KEY = "adaired-live-chat-session";

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  const [activeTab, setActiveTab] = useState<ContactTab>("chat");

  const socketRef = useRef<Socket | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const sessionRef = useRef<ChatSession | null>(null);
  const joinedConversationRef = useRef<string | null>(null);

  const widgetSectionRef = useRef<HTMLElement | null>(null);
  const wheelHandlerRef = useRef<((event: WheelEvent) => void) | null>(
    null,
  );

  // Attach a non-passive wheel listener to the document.
  // Wheel events originating inside the widget are redirected to messages.
  const setWidgetSectionRef = useCallback(
    (node: HTMLElement | null) => {
      const previousHandler = wheelHandlerRef.current;

      if (previousHandler) {
        document.removeEventListener(
          "wheel",
          previousHandler,
          true,
        );
      }

      widgetSectionRef.current = node;
      wheelHandlerRef.current = null;

      if (!node) return;

      const handleWheel = (event: WheelEvent) => {
        const widget = widgetSectionRef.current;
        const container = messagesContainerRef.current;
        const target = event.target;

        if (
          !widget ||
          !(target instanceof Node) ||
          !widget.contains(target)
        ) {
          return;
        }

        // Do not allow the page to scroll while using the widget.
        // Preserve browser pinch-to-zoom gestures.
        if (!container || event.deltaY === 0 || event.ctrlKey) {
          if (!event.ctrlKey && event.deltaY !== 0) {
            event.preventDefault();
            event.stopPropagation();
          }
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        let delta = event.deltaY;

        // Normalize line and page wheel units.
        if (event.deltaMode === 1) {
          delta *= 16;
        } else if (event.deltaMode === 2) {
          delta *= container.clientHeight;
        }

        // Do not let the website scroll when the message list
        // reaches its top or bottom.
        container.scrollTop += delta;
      };

      wheelHandlerRef.current = handleWheel;

      document.addEventListener("wheel", handleWheel, {
        capture: true,
        passive: false,
      });
    },
    [],
  );

  // Scroll only the message container.
  const scrollToBottom = useCallback(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    sessionRef.current = session;
  }, [session]);

  // Restore the visitor session and connect to Socket.IO.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY);

      if (saved) {
        const parsed = JSON.parse(saved) as ChatSession;

        if (parsed.conversationId && parsed.token) {
          setSession(parsed);
          sessionRef.current = parsed;
        }
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }

    const socket = io(SOCKET_URL, {
      autoConnect: false,
      withCredentials: true,
      transports: ["polling", "websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
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
        (response?: { success?: boolean; message?: string }) => {
          if (response?.success === false) {
            setError(
              response.message || "Unable to reconnect to chat.",
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

    const handleMessage = (incoming: ChatMessage) => {
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
    socket.on("chat:message", handleMessage);

    socket.connect();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("chat:message", handleMessage);
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  // Join the conversation when a new session is created.
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
      (response?: { success?: boolean; message?: string }) => {
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

  // Load existing messages for a restored conversation.
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
            cache: "no-store",
          },
        );

        const result = (await response.json()) as HistoryResponse;

        if (!response.ok || result.success === false) {
          throw new Error(
            result.message || "Could not load chat history.",
          );
        }

        let history: ChatMessage[] = [];

        if (Array.isArray(result.messages)) {
          history = result.messages;
        } else if (Array.isArray(result.data)) {
          history = result.data;
        } else if (result.data) {
          history = result.data.messages ?? [];
        }

        if (!cancelled) {
          setMessages(history);
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

  // Keep the newest message visible without scrolling the page.
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
          currentPage: window.location.pathname,
        }),
      });

      const result =
        (await response.json()) as CreateConversationResponse;

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

      // The backend stores projectDetails as the initial visitor message.
      setMessages([
        {
          sender: "visitor",
          message: details,
          createdAt: new Date().toISOString(),
        },
      ]);
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

    if (!text || !session || !socket?.connected || isSending) {
      if (!socket?.connected) {
        setError(
          "Reconnecting to chat. Please try again in a moment.",
        );
      }

      return;
    }

    if (text.length > 3000) {
      setError("Messages must be 3000 characters or fewer.");
      return;
    }

    setError("");
    setIsSending(true);

    socket.emit(
      "chat:message",
      {
        conversationId: session.conversationId,
        message: text,
      },
      (response?: { success?: boolean; message?: string }) => {
        setIsSending(false);

        if (response?.success === false) {
          setError(
            response.message || "Message could not be sent.",
          );
          return;
        }

        setMessage("");
      },
    );
  };

  const closeWidget = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <div className="fixed bottom-3 right-3 z-[9999] sm:bottom-5 sm:right-5">
      {isOpen && !isMinimized && (
        <section
          ref={setWidgetSectionRef}
          aria-label="Contact support"
          className="mb-3 flex h-[min(650px,calc(100dvh-32px))] min-h-0 w-[calc(100vw-24px)] max-w-[400px] flex-col overflow-hidden overscroll-contain bg-white rounded-2xl shadow-2xl sm:mb-4 sm:h-[625px] sm:w-[400px]"
        >
          {/* Header */}
          <header className="flex shrink-0 items-center justify-between bg-[#063F3D] px-4 py-3.5 text-white sm:px-5 sm:py-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Headset size={22} />
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-lg font-semibold text-white sm:text-xl">
                  Contact us
                </h2>

                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-100">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      isConnected ? "bg-green-400" : "bg-yellow-300"
                    }`}
                  />
                  {isConnected
                    ? "Chat connection active"
                    : "Connecting..."}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                aria-label="Minimize chat"
                className="rounded-lg p-2 transition hover:bg-white/15"
              >
                <Minimize2 size={18} />
              </button>

              <button
                type="button"
                onClick={closeWidget}
                aria-label="Close chat"
                className="rounded-lg p-2 transition hover:bg-white/15"
              >
                <X size={20} />
              </button>
            </div>
          </header>

          {/* Contact method tabs */}
          <nav
            aria-label="Choose contact method"
            className="grid shrink-0 grid-cols-4 gap-1 border-b border-gray-200 bg-white p-2 sm:gap-2"
          >
            {(
              [
                { id: "chat", label: "Live Chat", icon: MessageCircle },
                { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
                { id: "phone", label: "Call Us", icon: Phone },
                { id: "email", label: "Email", icon: Mail },
              ] as const
            ).map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={activeTab === id}
                onClick={() => {
                  setActiveTab(id);

                  if (id === "whatsapp") {
                    window.open(
                      "https://wa.me/919876543210",
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }

                  if (id === "phone") {
                    window.location.href = "tel:+919876543210";
                  }

                  if (id === "email") {
                    window.location.href = "mailto:hello@strapworld.in";
                  }
                }}
                className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-[10px] font-medium transition sm:flex-row sm:gap-1.5 sm:px-2 sm:py-2.5 sm:text-xs ${
                  activeTab === id
                    ? "bg-[#E8F5EC] text-[#176B35]"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <span className="truncate">{label}</span>
              </button>
            ))}
          </nav>

          {/* Live chat */}
          {activeTab === "chat" && (
            <>
              {!session ? (
                <form
                  onSubmit={startConversation}
                  className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain p-4 sm:p-5"
                >
                  <div>
                    <label
                      htmlFor="chat-name"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Your name
                    </label>

                    <input
                      id="chat-name"
                      value={visitorName}
                      onChange={(event) =>
                        setVisitorName(event.target.value)
                      }
                      placeholder="Enter your name"
                      autoComplete="name"
                      maxLength={100}
                      required
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-sm outline-none transition focus:border-[#2E9B4F] focus:ring-2 focus:ring-[#2E9B4F]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="chat-email"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>

                    <input
                      id="chat-email"
                      type="email"
                      value={visitorEmail}
                      onChange={(event) =>
                        setVisitorEmail(event.target.value)
                      }
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-sm outline-none transition focus:border-[#2E9B4F] focus:ring-2 focus:ring-[#2E9B4F]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="chat-details"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      How can we help?
                    </label>

                    <textarea
                      id="chat-details"
                      value={projectDetails}
                      onChange={(event) =>
                        setProjectDetails(event.target.value)
                      }
                      placeholder="Tell us about your requirement..."
                      rows={4}
                      maxLength={2000}
                      required
                      className="w-full resize-none rounded-xl border border-gray-300 px-3.5 py-3 text-sm outline-none transition focus:border-[#2E9B4F] focus:ring-2 focus:ring-[#2E9B4F]/15"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm text-red-600">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isStarting}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2E9B4F] px-4 py-3 font-medium text-white transition hover:bg-[#247D3F] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isStarting ? (
                      <>
                        <LoaderCircle
                          size={18}
                          className="animate-spin"
                        />
                        Starting chat...
                      </>
                    ) : (
                      <>
                        Start conversation
                        <Send size={17} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <>
                  {/* Conversation header */}
                  <div className="flex shrink-0 items-start gap-3 border-b border-gray-100 bg-gray-50 px-4 py-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F5EC] text-[#176B35]">
                      <Headset size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800">
                        Welcome, {visitorName.trim() || "there"}!
                      </p>

                      <p className="mt-0.5 text-xs text-gray-500">
                        Send us a message to continue your conversation.
                      </p>
                    </div>
                  </div>

                  {/* Scrollable messages */}
                  <div
                    ref={messagesContainerRef}
                    aria-live="polite"
                    className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain touch-pan-y bg-gray-50 p-3 sm:p-4"
                  >
                    {isLoadingHistory && messages.length === 0 && (
                      <div className="flex justify-center py-4 text-sm text-gray-500">
                        <LoaderCircle
                          size={17}
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
                            isVisitor ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-sm leading-5 sm:max-w-[85%] ${
                              isVisitor
                                ? "rounded-br-md bg-[#2E9B4F] text-white"
                                : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
                            }`}
                          >
                            {item.message}

                            {item.createdAt && (
                              <p
                                className={`mt-1.5 text-[10px] ${
                                  isVisitor
                                    ? "text-blue-100"
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
                      <p className="py-8 text-center text-sm text-gray-500">
                        Send us a message to get started.
                      </p>
                    )}
                  </div>

                  {/* Message input */}
                  <form
                    onSubmit={sendMessage}
                    className="shrink-0 border-t border-gray-200 bg-white p-3"
                  >
                    {error && (
                      <p
                        role="alert"
                        className="mb-2 px-1 text-xs text-red-600"
                      >
                        {error}
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
                        className="max-h-28 min-h-11 min-w-0 flex-1 resize-y rounded-xl border border-gray-300 px-3.5 py-3 text-sm outline-none transition focus:border-[#2E9B4F] focus:ring-2 focus:ring-[#2E9B4F]/15"
                      />

                      <button
                        type="submit"
                        disabled={
                          !message.trim() || isSending || !isConnected
                        }
                        aria-label="Send message"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2E9B4F] text-white transition hover:bg-[#247D3F] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSending ? (
                          <LoaderCircle
                            size={19}
                            className="animate-spin"
                          />
                        ) : (
                          <Send size={19} />
                        )}
                      </button>
                    </div>

                    <p className="mt-2 text-center text-[10px] text-gray-400">
                      Press Enter to send · Shift + Enter for a new line
                    </p>
                  </form>
                </>
              )}
            </>
          )}

          {/* Alternative contact methods */}
          {activeTab !== "chat" && (
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-8 text-center">
              {activeTab === "whatsapp" && (
                <>
                  <MessageCircle
                    size={42}
                    className="mb-4 mx-auto text-green-600"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Chat with us on WhatsApp
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Continue your conversation directly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/+919978735708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
                  >
                    <MessageCircle size={18} />
                    Open WhatsApp
                  </a>
                </>
              )}

              {activeTab === "phone" && (
                <>
                  <Phone
                    size={42}
                    className="mb-4 mx-auto text-[#176B35]"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Call our team
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Speak directly with our support team.
                  </p>
                  <a
                    href="tel:+919978735708"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#063F3D] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0A5551]"
                  >
                    <Phone size={18} />
                    Call us now
                  </a>
                </>
              )}

              {activeTab === "email" && (
                <>
                  <Mail
                    size={42}
                    className="mb-4 mx-auto text-[#176B35]"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Email our team
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Send your enquiry and we will get back to you.
                  </p>
                  <a
                    href="mailto:nalandaindustri@gmail.com"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#063F3D] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0A5551]"
                  >
                    <Mail size={18} />
                    Send an email
                  </a>
                </>
              )}
            </div>
          )}
        </section>
      )}

      {/* Minimized widget */}
      {isOpen && isMinimized && (
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="mb-3 flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-xl ring-1 ring-gray-200 transition hover:bg-gray-50"
        >
          <MessageCircle
            size={18}
            className="text-[#2E9B4F]"
          />
          Strap World
          <ArrowLeft
            size={15}
            className="rotate-180 text-gray-400"
          />
        </button>
      )}

      {/* Floating launcher */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          aria-label="Open contact widget"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#2E9B4F] text-white shadow-xl transition duration-200 hover:scale-105 hover:bg-[#247D3F] focus:outline-none focus:ring-4 focus:ring-[#2E9B4F]/30"
        >
          <MessageCircle
            size={26}
            className="transition-transform group-hover:scale-110"
          />
        </button>
      )}
    </div>
  );
};

export default LiveChatWidget;