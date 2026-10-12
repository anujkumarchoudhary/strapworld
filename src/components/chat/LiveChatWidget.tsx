
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

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "/api/v1/chat";

const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4000";

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

  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const sessionRef = useRef<ChatSession | null>(null);
  const joinedConversationRef = useRef<string | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    sessionRef.current = session;
  }, [session]);

  // Restore the visitor's session and connect to Socket.IO.
  useEffect(() => {
    let restoredSession: ChatSession | null = null;

    try {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as ChatSession;
        if (parsed.conversationId && parsed.token) {
          restoredSession = parsed;
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
            setError(response.message || "Unable to reconnect to chat.");
            return;
          }

          joinedConversationRef.current = activeSession.conversationId;
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

  // Join when a new conversation is created while the socket is already connected.
  useEffect(() => {
    if (!session || !isConnected || !socketRef.current) return;
    if (joinedConversationRef.current === session.conversationId) return;

    socketRef.current.emit(
      "chat:join",
      {
        conversationId: session.conversationId,
        token: session.token,
      },
      (response?: { success?: boolean; message?: string }) => {
        if (response?.success === false) {
          setError(response.message || "Unable to join the conversation.");
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
          },
        );

        const result = (await response.json()) as HistoryResponse;

        if (!response.ok) {
          throw new Error(result.message || "Could not load chat history.");
        }

        const history = Array.isArray(result.messages)
          ? result.messages
          : Array.isArray(result.data)
            ? result.data
            : result.data?.messages ?? [];

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
        if (!cancelled) setIsLoadingHistory(false);
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

  const startConversation = async (event: React.FormEvent<HTMLFormElement>) => {
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

      const result = (await response.json()) as CreateConversationResponse;

      if (!response.ok || !result.conversationId || !result.token) {
        throw new Error(result.message || "Unable to start a conversation.");
      }

      const newSession: ChatSession = {
        conversationId: result.conversationId,
        token: result.token,
      };

      localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
      sessionRef.current = newSession;
      setSession(newSession);

      // The server stores projectDetails as the initial visitor message.
      setMessages([
        {
          sender: "visitor",
          message: details,
          createdAt: new Date().toISOString(),
        },
      ]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to start a conversation.",
      );
    } finally {
      setIsStarting(false);
    }
  };

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = message.trim();
    const socket = socketRef.current;

    if (!text || !session || !socket?.connected || isSending) {
      if (!socket?.connected) {
        setError("Reconnecting to chat. Please try again in a moment.");
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
          setError(response.message || "Message could not be sent.");
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
    <div className="fixed bottom-5 right-5 z-[9999]">
      {isOpen && !isMinimized && (
        <section
          aria-label="Live chat"
          className="mb-4 flex h-125 w-100 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* Header */}
          <header className="flex items-center justify-between bg-[#063F3D] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Headset size={22} />
              </div>

              <div>
                <h2 className="font-semibold text-[20px] text-[#FFFFFF]">How can we help?</h2>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-100">
                  <span
                    className={`h-2 w-2 rounded-full ${isConnected ? "bg-green-400" : "bg-yellow-300"
                      }`}
                  />
                  {isConnected ? "Chat connection active" : "Connecting..."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
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

          {!session ? (
            <>
              <form
                onSubmit={startConversation}
                className="flex-1 space-y-4 overflow-y-auto p-5"
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
                    onChange={(event) => setVisitorName(event.target.value)}
                    placeholder="Enter your name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-sm outline-none transition"
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
                    onChange={(event) => setVisitorEmail(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-3 text-sm outline-none transition"
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
                    onChange={(event) => setProjectDetails(event.target.value)}
                    placeholder="Tell us about your project..."
                    rows={4}
                    maxLength={2000}
                    required
                    className="w-full resize-none rounded-xl border border-gray-300 px-3.5 py-3 text-sm outline-none transition"
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
                  className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-xl bg-[#2E9B4F]/90 px-4 py-3 font-medium text-white transition hover:bg-[#2E9B4F] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isStarting ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
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
            </>
          ) : (
            <>
              <div className="flex items-start gap-3 border-b border-gray-100 bg-gray-50 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Headset size={19} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Welcome, {visitorName.trim() || "there"}!
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Send a message to continue your conversation.
                  </p>
                </div>
              </div>

              <div
                aria-live="polite"
                className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4"
              >
                {isLoadingHistory && messages.length === 0 && (
                  <div className="flex justify-center py-4 text-sm text-gray-500">
                    <LoaderCircle size={17} className="mr-2 animate-spin" />
                    Loading messages...
                  </div>
                )}

                {messages.map((item, index) => {
                  const isVisitor = item.sender === "visitor";

                  return (
                    <div
                      key={item._id ?? `${item.createdAt ?? "message"}-${index}`}
                      className={`flex ${isVisitor ? "justify-end" : "justify-start"
                        }`}
                    >
                      <div
                        className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-5 ${isVisitor
                          ? "rounded-br-md bg-blue-700 text-white"
                          : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
                          }`}
                      >
                        {item.message}
                        {item.createdAt && (
                          <p
                            className={`mt-1.5 text-[10px] ${isVisitor ? "text-blue-100" : "text-gray-400"
                              }`}
                          >
                            {new Date(item.createdAt).toLocaleTimeString([], {
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

                <div ref={messagesEndRef} />
              </div>

              <form
                onSubmit={sendMessage}
                className="border-t border-gray-200 bg-white p-3"
              >
                {error && (
                  <p role="alert" className="mb-2 px-1 text-xs text-red-600">
                    {error}
                  </p>
                )}

                <div className="flex items-end gap-2">
                  <textarea
                    aria-label="Your message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
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
                    className="max-h-28 min-h-11 flex-1 resize-y rounded-xl border border-gray-300 px-3.5 py-3 text-sm outline-none transition focus:border-none"
                  />

                  <button
                    type="submit"
                    disabled={!message.trim() || isSending || !isConnected}
                    aria-label="Send message"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2E9B4F]/60 text-white transition hover:bg-[#2E9B4F] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSending ? (
                      <LoaderCircle size={19} className="animate-spin" />
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
        </section>
      )}

      {isOpen && isMinimized && (
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="mb-3 flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-xl ring-1 ring-gray-200 transition hover:bg-gray-50"
        >
          <MessageCircle size={18} className="text-[#2E9B4F]" />
          Strap World
          <ArrowLeft size={15} className="rotate-180 text-gray-400" />
        </button>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open live chat"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#2E9B4F] text-white shadow-xl transition duration-200 hover:scale-105 hover:bg-[#2E9B4F] focus:outline-none focus:ring-4"
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
