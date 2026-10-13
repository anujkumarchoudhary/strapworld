"use client";

import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { io, type Socket } from "socket.io-client";
import {
    Search,
    MessageCircle,
    Headset,
    Send,
    MoreVertical,
    CheckCheck,
    Clock3,
    CheckCircle2,
    Circle,
    ArrowLeft,
    PanelLeftClose,
    Mail,
    Globe,
    RefreshCw,
    LoaderCircle,
    AlertCircle,
    UserRound,
} from "lucide-react";
import { BaseUrl } from "@/src/app/baseurl";

type Status = "Open" | "Pending" | "Resolved";
type Sender = "visitor" | "agent";
type Filter = "All" | Status;
type ApiStatus = "open" | "pending" | "resolved";

type Message = {
    id: string;
    sender: Sender;
    text: string;
    time: string;
};

type Conversation = {
    id: string;
    name: string;
    email: string;
    initials: string;
    color: string;
    status: Status;
    page: string;
    lastMessage: string;
    lastTime: string;
    unread: number;
    messages: Message[];
};

type ApiConversation = {
    _id: string;
    visitorName: string;
    visitorEmail: string;
    currentPage?: string;
    status: ApiStatus;
    lastMessage?: string;
    lastMessageAt?: string;
    createdAt?: string;
};

type ApiMessage = {
    _id: string;
    conversationId?: string;
    sender: Sender;
    message: string;
    createdAt: string;
};

type ApiResult = {
    success?: boolean;
    message?: string | ApiMessage;
    conversations?: ApiConversation[];
    messages?: ApiMessage[];
    conversation?: ApiConversation;
    data?: unknown;
};

const SOCKET_URL =
    process.env.NEXT_PUBLIC_CHAT_SOCKET_URL ||
    "http://localhost:8000";

const AVATAR_COLORS = [
    "bg-emerald-100 text-emerald-800",
    "bg-violet-100 text-violet-800",
    "bg-amber-100 text-amber-800",
    "bg-sky-100 text-sky-800",
];

const FILTERS: Filter[] = [
    "All",
    "Open",
    "Pending",
    "Resolved",
];

const toStatus = (status: ApiStatus): Status => {
    const map: Record<ApiStatus, Status> = {
        open: "Open",
        pending: "Pending",
        resolved: "Resolved",
    };

    return map[status];
};

const toApiStatus = (status: Status): ApiStatus => {
    const map: Record<Status, ApiStatus> = {
        Open: "open",
        Pending: "pending",
        Resolved: "resolved",
    };

    return map[status];
};

const formatTime = (date?: string) => {
    if (!date) return "";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) return "";

    return parsed.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
};

const getInitials = (name: string) =>
    name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase() || "V";

const toMessage = (item: ApiMessage): Message => ({
    id: item._id,
    sender: item.sender,
    text: item.message,
    time: formatTime(item.createdAt),
});

const toConversation = (
    item: ApiConversation,
    index: number,
): Conversation => ({
    id: item._id,
    name: item.visitorName || "Website visitor",
    email: item.visitorEmail || "",
    initials: getInitials(item.visitorName || "Visitor"),
    color: AVATAR_COLORS[index % AVATAR_COLORS.length],
    status: toStatus(item.status),
    page: item.currentPage || "/",
    lastMessage: item.lastMessage || "",
    lastTime: formatTime(item.lastMessageAt || item.createdAt),
    unread: 0,
    messages: [],
});

async function parseResponse<T>(
    response: Response,
): Promise<T> {
    const contentType =
        response.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
        throw new Error(
            response.ok
                ? "The chat API returned a non-JSON response. Check your API URL."
                : `Request failed (${response.status}).`,
        );
    }

    const body = (await response.json()) as T & {
        message?: unknown;
        success?: boolean;
    };

    if (!response.ok || body.success === false) {
        throw new Error(
            typeof body.message === "string"
                ? body.message
                : `Request failed (${response.status}).`,
        );
    }

    return body;
}

async function getAdminAccessToken(): Promise<string> {
    if (typeof window === "undefined") {
        throw new Error("Browser session is unavailable.");
    }

    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error(
            "Admin session not found. Please sign in to the admin dashboard.",
        );
    }

    return token;
}

function authHeaders(
    token: string,
    json = false,
): HeadersInit {
    return {
        Authorization: `Bearer ${token}`,
        ...(json
            ? { "Content-Type": "application/json" }
            : {}),
    };
}

function StatusBadge({
    status,
}: {
    status: Status;
}) {
    const styles: Record<Status, string> = {
        Open: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
        Pending: "bg-amber-50 text-amber-700 ring-amber-600/15",
        Resolved: "bg-gray-100 text-gray-600 ring-gray-500/15",
    };

    const dotStyles: Record<Status, string> = {
        Open: "bg-emerald-500",
        Pending: "bg-amber-500",
        Resolved: "bg-gray-400",
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${styles[status]}`}
        >
            <span
                className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`}
            />
            {status}
        </span>
    );
}

export default function AdminChatPage() {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [filter, setFilter] = useState<Filter>("All");
    const [search, setSearch] = useState("");
    const [reply, setReply] = useState("");
    const [mobileChatOpen, setMobileChatOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(true);
    const [messagesLoading, setMessagesLoading] = useState(false);
    const [sending, setSending] = useState(false);
    const [updatingStatus, setUpdatingStatus] = useState(false);
    const [error, setError] = useState("");
    const [socketConnected, setSocketConnected] = useState(false);

    const socketRef = useRef<Socket | null>(null);
    const tokenRef = useRef<string | null>(null);
    const selectedIdRef = useRef<string | null>(null);
    const messageContainerRef = useRef<HTMLDivElement | null>(null);
    const loadingMessagesRef = useRef(new Set<string>());

    const selected = useMemo(
        () =>
            conversations.find(
                (item) => item.id === selectedId,
            ) || null,
        [conversations, selectedId],
    );

    useEffect(() => {
        selectedIdRef.current = selectedId;
    }, [selectedId]);

    const filteredConversations = useMemo(() => {
        const query = search.toLowerCase().trim();

        return conversations.filter((conversation) => {
            const matchesFilter =
                filter === "All" ||
                conversation.status === filter;

            const matchesSearch =
                !query ||
                conversation.name.toLowerCase().includes(query) ||
                conversation.email.toLowerCase().includes(query) ||
                conversation.lastMessage.toLowerCase().includes(query);

            return matchesFilter && matchesSearch;
        });
    }, [conversations, filter, search]);

    const counts = useMemo(
        () => ({
            All: conversations.length,
            Open: conversations.filter(
                (item) => item.status === "Open",
            ).length,
            Pending: conversations.filter(
                (item) => item.status === "Pending",
            ).length,
            Resolved: conversations.filter(
                (item) => item.status === "Resolved",
            ).length,
        }),
        [conversations],
    );

    const refreshInbox = useCallback(
        async (token: string) => {
            const response = await fetch(
                `${BaseUrl}/chat/admin/conversations`,
                {
                    headers: authHeaders(token),
                    cache: "no-store",
                },
            );

            const result =
                await parseResponse<ApiResult>(response);

            const items = (result.conversations || [])
                .map(toConversation);

            setConversations((current) => {
                const existing = new Map(
                    current.map((conversation) => [
                        conversation.id,
                        conversation,
                    ]),
                );

                return items.map((incoming) => {
                    const previous = existing.get(incoming.id);

                    return previous
                        ? {
                            ...incoming,
                            messages: previous.messages,
                            unread: previous.unread,
                        }
                        : incoming;
                });
            });

            setSelectedId((current) => {
                if (
                    current &&
                    items.some((item) => item.id === current)
                ) {
                    return current;
                }

                return items[0]?.id ?? null;
            });
        },
        [],
    );

    const loadMessages = useCallback(
        async (
            conversationId: string,
            token: string,
        ) => {
            if (
                loadingMessagesRef.current.has(conversationId)
            ) {
                return;
            }

            loadingMessagesRef.current.add(conversationId);
            setMessagesLoading(true);

            try {
                const response = await fetch(
                    `${BaseUrl}/chat/admin/conversations/${encodeURIComponent(
                        conversationId,
                    )}/messages`,
                    {
                        headers: authHeaders(token),
                        cache: "no-store",
                    },
                );

                const result =
                    await parseResponse<ApiResult>(response);

                const messages = (result.messages || [])
                    .map(toMessage);

                setConversations((current) =>
                    current.map((conversation) =>
                        conversation.id === conversationId
                            ? {
                                ...conversation,
                                messages,
                                unread: 0,
                            }
                            : conversation,
                    ),
                );
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "Unable to load messages.",
                );
            } finally {
                loadingMessagesRef.current.delete(conversationId);
                setMessagesLoading(
                    loadingMessagesRef.current.size > 0,
                );
            }
        },
        [],
    );

    const selectConversation = useCallback(
        (id: string) => {
            setSelectedId(id);
            selectedIdRef.current = id;
            setMobileChatOpen(true);
            setShowDetails(false);
            setError("");

            setConversations((current) =>
                current.map((conversation) =>
                    conversation.id === id
                        ? { ...conversation, unread: 0 }
                        : conversation,
                ),
            );

            const token = tokenRef.current;

            if (token) {
                void loadMessages(id, token);
            }

            socketRef.current?.emit(
                "admin:conversation:join",
                { conversationId: id },
            );
        },
        [loadMessages],
    );

    useEffect(() => {
        let cancelled = false;
        let socket: Socket | null = null;

        async function start() {
            try {
                setLoading(true);
                setError("");

                const token = await getAdminAccessToken();

                if (cancelled) return;

                tokenRef.current = token;

                await refreshInbox(token);

                if (cancelled) return;

                socket = io(SOCKET_URL, {
                    transports: ["websocket", "polling"],
                    auth: { token },
                    reconnection: true,
                    reconnectionAttempts: Infinity,
                });

                socketRef.current = socket;

                socket.on("connect", () => {
                    if (cancelled) return;

                    setSocketConnected(true);

                    // Join the admin inbox room using the existing backend event.
                    socket?.emit(
                        "admin:join",
                        {},
                        (ack?: {
                            success?: boolean;
                            message?: string;
                        }) => {
                            if (!ack?.success) {
                                setError(
                                    ack?.message ||
                                    "Unable to join the live chat inbox.",
                                );
                                return;
                            }

                            const activeId = selectedIdRef.current;

                            if (activeId) {
                                socket?.emit(
                                    "admin:conversation:join",
                                    { conversationId: activeId },
                                );
                            }
                        },
                    );
                });

                socket.on("disconnect", () => {
                    setSocketConnected(false);
                });

                socket.on("connect_error", (err) => {
                    setSocketConnected(false);
                    setError(
                        `Live chat connection failed: ${err.message}`,
                    );
                });

                socket.on(
                    "chat:inbox-update",
                    (payload?: {
                        conversationId?: string;
                    }) => {
                        void (async () => {
                            try {
                                await refreshInbox(token);

                                const activeId =
                                    selectedIdRef.current;

                                if (
                                    activeId &&
                                    (!payload?.conversationId ||
                                        payload.conversationId === activeId)
                                ) {
                                    await loadMessages(activeId, token);
                                }
                            } catch (err) {
                                setError(
                                    err instanceof Error
                                        ? err.message
                                        : "Unable to refresh chat messages.",
                                );
                            }
                        })();
                    },
                );

                socket.on(
                    "chat:message",
                    (
                        message: ApiMessage & {
                            conversationId: string;
                        },
                    ) => {
                        const conversationId =
                            message.conversationId;

                        if (!conversationId || !message._id) {
                            return;
                        }

                        const incoming = toMessage(message);
                        const isActive =
                            selectedIdRef.current === conversationId;

                        setConversations((current) =>
                            current.map((conversation) => {
                                if (
                                    conversation.id !== conversationId
                                ) {
                                    return conversation;
                                }

                                if (
                                    conversation.messages.some(
                                        (item) =>
                                            item.id === incoming.id,
                                    )
                                ) {
                                    return conversation;
                                }

                                return {
                                    ...conversation,
                                    lastMessage: incoming.text,
                                    lastTime: incoming.time,
                                    unread:
                                        message.sender === "visitor" &&
                                            !isActive
                                            ? conversation.unread + 1
                                            : conversation.unread,
                                    messages: [
                                        ...conversation.messages,
                                        incoming,
                                    ],
                                };
                            }),
                        );
                    },
                );

                socket.on(
                    "chat:status-update",
                    (payload: {
                        conversationId: string;
                        status: ApiStatus;
                    }) => {
                        if (
                            !payload.conversationId ||
                            !payload.status
                        ) {
                            return;
                        }

                        setConversations((current) =>
                            current.map((conversation) =>
                                conversation.id ===
                                    payload.conversationId
                                    ? {
                                        ...conversation,
                                        status: toStatus(payload.status),
                                    }
                                    : conversation,
                            ),
                        );
                    },
                );
            } catch (err) {
                if (!cancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Unable to load the chat inbox.",
                    );
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        void start();

        return () => {
            cancelled = true;
            socket?.removeAllListeners();
            socket?.disconnect();

            if (socketRef.current === socket) {
                socketRef.current = null;
            }

            tokenRef.current = null;
        };
    }, [refreshInbox, loadMessages]);

    useEffect(() => {
        if (!selectedId || !tokenRef.current) return;

        const current = conversations.find(
            (item) => item.id === selectedId,
        );

        if (current && current.messages.length === 0) {
            void loadMessages(
                selectedId,
                tokenRef.current,
            );
        }
    }, [selectedId, conversations, loadMessages]);

    useEffect(() => {
        const container = messageContainerRef.current;

        if (!container) return;

        container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth",
        });
    }, [selected?.messages.length, selectedId]);

    async function sendReply(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        const text = reply.trim();
        const conversation = selected;
        const token = tokenRef.current;

        if (!text || !conversation || sending || !token) return;

        setSending(true);
        setError("");

        try {
            const response = await fetch(
                `${BaseUrl}/chat/admin/conversations/${encodeURIComponent(
                    conversation.id,
                )}/messages`,
                {
                    method: "POST",
                    headers: authHeaders(token, true),
                    body: JSON.stringify({ message: text }),
                },
            );

            const result =
                await parseResponse<ApiResult>(response);

            if (
                !result.message ||
                typeof result.message === "string"
            ) {
                throw new Error(
                    "The server did not return the saved message.",
                );
            }

            const savedMessage =
                result.message as ApiMessage;

            const outgoing = toMessage(savedMessage);

            setConversations((current) =>
                current.map((item) => {
                    if (item.id !== conversation.id) return item;

                    const exists = item.messages.some(
                        (existing) => existing.id === outgoing.id,
                    );

                    return {
                        ...item,
                        status:
                            item.status === "Resolved"
                                ? "Open"
                                : item.status,
                        lastMessage: outgoing.text,
                        lastTime: outgoing.time,
                        messages: exists
                            ? item.messages
                            : [...item.messages, outgoing],
                    };
                }),
            );

            setReply("");
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Unable to send your reply.",
            );
        } finally {
            setSending(false);
        }
    }

    async function updateStatus(status: Status) {
        if (
            !selected ||
            updatingStatus ||
            !tokenRef.current
        ) {
            return;
        }

        const conversationId = selected.id;
        const previousStatus = selected.status;
        const token = tokenRef.current;

        setUpdatingStatus(true);
        setError("");

        // Optimistic UI update.
        setConversations((current) =>
            current.map((item) =>
                item.id === conversationId
                    ? { ...item, status }
                    : item,
            ),
        );

        try {
            const response = await fetch(
                `${BaseUrl}/chat/admin/conversations/${encodeURIComponent(
                    conversationId,
                )}/status`,
                {
                    method: "PATCH",
                    headers: authHeaders(token, true),
                    body: JSON.stringify({
                        status: toApiStatus(status),
                    }),
                },
            );

            await parseResponse<ApiResult>(response);
        } catch (err) {
            setConversations((current) =>
                current.map((item) =>
                    item.id === conversationId
                        ? {
                            ...item,
                            status: previousStatus,
                        }
                        : item,
                ),
            );

            setError(
                err instanceof Error
                    ? err.message
                    : "Unable to update conversation status.",
            );
        } finally {
            setUpdatingStatus(false);
        }
    }

    async function handleRefresh() {
        const token = tokenRef.current;

        if (!token) {
            setError(
                "Your admin session has expired. Please sign in again.",
            );
            return;
        }

        setLoading(true);
        setError("");

        try {
            await refreshInbox(token);

            const activeId = selectedIdRef.current;

            if (activeId) {
                await loadMessages(activeId, token);
            }
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Unable to refresh inbox.",
            );
        } finally {
            setLoading(false);
        }
    }

    function handleReplyKeyDown(
        event: KeyboardEvent<HTMLTextAreaElement>,
    ) {
        if (
            event.key === "Enter" &&
            !event.shiftKey &&
            !event.nativeEvent.isComposing
        ) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
        }
    }

    return (
        <main className="mx-auto w-full px-3 py-4 sm:px-5 sm:py-6 lg:px-7">
            {/* Page title and refresh */}
            <div className="mb-5 flex flex-col justify-between gap-4 sm:mb-6 sm:flex-row sm:items-center">
                <div className="min-w-0 space-y-2">
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#218B55]">
                        <MessageCircle size={14} />
                        Customer support
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Live chat inbox
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage visitor conversations and customer enquiries.
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs sm:hidden">
                        <span
                            className={`h-2 w-2 rounded-full ${socketConnected
                                    ? "bg-emerald-500"
                                    : "bg-amber-500"
                                }`}
                        />
                        {socketConnected
                            ? "Live chat connected"
                            : "Connecting chat"}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleRefresh}
                    disabled={loading}
                    className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50 sm:w-auto"
                >
                    <RefreshCw
                        size={15}
                        className={loading ? "animate-spin" : ""}
                    />
                    Refresh inbox
                </button>
            </div>

            {/* Error message */}
            {error && (
                <div
                    role="alert"
                    className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 sm:p-4"
                >
                    <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0"
                    />

                    <div className="min-w-0 flex-1 break-words">
                        {error}
                    </div>

                    <button
                        type="button"
                        onClick={() => setError("")}
                        className="shrink-0 font-semibold"
                    >
                        Dismiss
                    </button>
                </div>
            )}
            {/* Responsive inbox and conversation layout */}
            <div className="grid h-[75vh] grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[290px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)_250px] 2xl:grid-cols-[340px_minmax(0,1fr)_270px]">
                {/* Conversation sidebar */}
                <aside
                    className={`${mobileChatOpen ? "hidden lg:flex" : "flex"
                        } min-h-0 min-w-0 flex-col overflow-hidden border-r border-gray-200`}
                >
                    <div className="shrink-0 border-b border-gray-100 p-3 sm:p-4">
                        <div className="mb-3 flex items-center justify-between gap-2 sm:mb-4">
                            <h3 className="font-semibold text-gray-900">
                                Conversations
                            </h3>

                            <span className="rounded-lg bg-[#E6F5EC] px-2 py-1 text-xs font-semibold text-[#218B55]">
                                {filteredConversations.length}
                            </span>
                        </div>

                        <div className="relative">
                            <Search
                                size={17}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search conversations..."
                                className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#39B972] focus:bg-white"
                            />
                        </div>

                        <div className="mt-3 flex gap-1 overflow-x-auto pb-1 sm:mt-4">
                            {FILTERS.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setFilter(item)}
                                    className={`shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition ${filter === item
                                            ? "bg-[#063F3D] text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                        {loading ? (
                            <div className="flex items-center justify-center gap-2 p-6 text-sm text-gray-500">
                                <LoaderCircle
                                    size={18}
                                    className="animate-spin"
                                />
                                Loading conversations...
                            </div>
                        ) : filteredConversations.length === 0 ? (
                            <div className="p-6 text-center sm:p-8">
                                <MessageCircle
                                    size={26}
                                    className="mx-auto text-gray-300"
                                />
                                <p className="mt-3 text-sm font-medium text-gray-700">
                                    No conversations found
                                </p>
                                <p className="mt-1 text-xs text-gray-400">
                                    New visitor chats will appear here.
                                </p>
                            </div>
                        ) : (
                            filteredConversations.map((conversation) => (
                                <button
                                    key={conversation.id}
                                    type="button"
                                    onClick={() =>
                                        selectConversation(conversation.id)
                                    }
                                    className={`w-full border-b border-gray-100 p-3 text-left transition hover:bg-[#F7FBF8] sm:p-4 ${selectedId === conversation.id
                                            ? "bg-[#F0F8F2]"
                                            : "bg-white"
                                        }`}
                                >
                                    <div className="flex min-w-0 items-start gap-3">
                                        <div
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:h-10 sm:w-10 ${conversation.color}`}
                                        >
                                            {conversation.initials}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex min-w-0 items-center justify-between gap-2">
                                                <p className="truncate text-sm font-semibold text-gray-900">
                                                    {conversation.name}
                                                </p>

                                                <span className="shrink-0 text-[10px] text-gray-400">
                                                    {conversation.lastTime}
                                                </span>
                                            </div>

                                            <p className="mt-1 truncate text-xs text-gray-500">
                                                {conversation.lastMessage ||
                                                    "No messages yet"}
                                            </p>

                                            <div className="mt-2 flex items-center justify-between gap-2">
                                                <StatusBadge
                                                    status={conversation.status}
                                                />

                                                {conversation.unread > 0 && (
                                                    <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-[#39B972] px-1.5 text-[10px] font-bold text-white">
                                                        {conversation.unread}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))
                        )}
                    </div>
                </aside>

                {/* Main chat panel */}
                <section
                    className={`${mobileChatOpen ? "flex" : "hidden lg:flex"
                        } min-h-0 min-w-0 flex-col overflow-hidden`}
                >
                    {selected ? (
                        <>
                            {/* Chat header */}
                            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-gray-200 px-3 py-3 sm:gap-3 sm:px-5 sm:py-4">
                                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMobileChatOpen(false);
                                            setShowDetails(false);
                                        }}
                                        aria-label="Back to conversations"
                                        className="shrink-0 rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
                                    >
                                        <ArrowLeft size={18} />
                                    </button>

                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:h-10 sm:w-10 ${selected.color}`}
                                    >
                                        {selected.initials}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="truncate text-sm font-semibold text-gray-900">
                                            {selected.name}
                                        </h3>
                                        <p className="truncate text-xs text-gray-500">
                                            {selected.email || "Website visitor"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                                    <select
                                        value={selected.status}
                                        disabled={updatingStatus}
                                        onChange={(event) =>
                                            void updateStatus(
                                                event.target.value as Status,
                                            )
                                        }
                                        aria-label="Conversation status"
                                        className="max-w-[112px] min-w-0 rounded-lg border border-gray-200 bg-white px-2 py-2 text-xs font-medium text-gray-700 outline-none focus:border-[#39B972] disabled:opacity-60 sm:max-w-[130px] sm:px-3"
                                    >
                                        <option value="Open">Open</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowDetails((value) => !value)
                                        }
                                        aria-label="Toggle visitor details"
                                        aria-expanded={showDetails}
                                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-gray-50 xl:hidden"
                                    >
                                        <MoreVertical size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Mobile/tablet visitor details */}
                            {showDetails && (
                                <div className="shrink-0 border-b border-gray-200 bg-white p-3 sm:p-4 xl:hidden">
                                    <div className="flex items-start gap-3">
                                        <UserRound
                                            size={17}
                                            className="mt-0.5 shrink-0 text-gray-400"
                                        />

                                        <div className="min-w-0 flex-1 text-xs">
                                            <p className="font-semibold text-gray-800">
                                                Visitor details
                                            </p>

                                            <p className="mt-1 break-all text-gray-500">
                                                {selected.email || "Not provided"}
                                            </p>

                                            <p className="mt-1 break-all text-gray-500">
                                                Page: {selected.page}
                                            </p>

                                            <p className="mt-1 break-all text-gray-500">
                                                ID: {selected.id}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Scrollable message history */}
                            <div
                                ref={messageContainerRef}
                                className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#F8FAF9] p-3 sm:p-5 lg:p-6"
                            >
                                <div className="mb-4 text-center sm:mb-6">
                                    <span className="inline-block max-w-full break-all rounded-full border border-gray-200 bg-white px-3 py-1 text-[10px] text-gray-500">
                                        Conversation {selected.id}
                                    </span>
                                </div>

                                {messagesLoading &&
                                    selected.messages.length === 0 ? (
                                    <div className="flex h-full min-h-32 items-center justify-center gap-2 text-sm text-gray-500">
                                        <LoaderCircle
                                            size={18}
                                            className="animate-spin"
                                        />
                                        Loading messages...
                                    </div>
                                ) : selected.messages.length === 0 ? (
                                    <div className="flex h-full min-h-32 flex-col items-center justify-center text-center">
                                        <MessageCircle
                                            size={30}
                                            className="text-gray-300"
                                        />
                                        <p className="mt-3 text-sm text-gray-500">
                                            No messages in this conversation yet.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-4 sm:space-y-5">
                                        {selected.messages.map((item) => {
                                            const isAgent =
                                                item.sender === "agent";

                                            return (
                                                <div
                                                    key={item.id}
                                                    className={`flex min-w-0 ${isAgent
                                                            ? "justify-end"
                                                            : "justify-start"
                                                        }`}
                                                >
                                                    {!isAgent && (
                                                        <div
                                                            className={`mr-2 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold sm:mr-2.5 ${selected.color}`}
                                                        >
                                                            {selected.initials}
                                                        </div>
                                                    )}

                                                    <div className="min-w-0 max-w-[88%] sm:max-w-[80%] lg:max-w-[75%]">
                                                        <div
                                                            className={`whitespace-pre-wrap break-words rounded-2xl px-3 py-2.5 text-sm leading-6 sm:px-4 sm:py-3 ${isAgent
                                                                    ? "rounded-br-md bg-[#063F3D] text-white"
                                                                    : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
                                                                }`}
                                                        >
                                                            {item.text}
                                                        </div>

                                                        <div
                                                            className={`mt-1 flex items-center gap-1 text-[10px] text-gray-400 ${isAgent
                                                                    ? "justify-end"
                                                                    : "justify-start"
                                                                }`}
                                                        >
                                                            {item.time}

                                                            {isAgent && (
                                                                <CheckCheck
                                                                    size={13}
                                                                    className="text-[#218B55]"
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* Reply composer stays at the bottom */}
                            <form
                                onSubmit={sendReply}
                                className="shrink-0 border-t border-gray-200 bg-white p-3 sm:p-4"
                            >
                                {selected.status === "Resolved" && (
                                    <p className="mb-2 text-xs text-amber-700">
                                        Sending a reply will reopen this conversation.
                                    </p>
                                )}

                                <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 transition focus-within:border-[#39B972] focus-within:bg-white">
                                    <textarea
                                        value={reply}
                                        onChange={(event) =>
                                            setReply(event.target.value)
                                        }
                                        onKeyDown={handleReplyKeyDown}
                                        rows={2}
                                        maxLength={3000}
                                        placeholder="Write your reply..."
                                        disabled={sending}
                                        className="max-h-32 w-full resize-y bg-transparent px-2 py-1 text-sm outline-none disabled:opacity-60"
                                    />

                                    <div className="flex flex-wrap items-center justify-between gap-2 px-1 pt-2">
                                        <span className="text-[10px] text-gray-400">
                                            Enter to send · Shift + Enter for a new line
                                        </span>

                                        <button
                                            type="submit"
                                            disabled={
                                                !reply.trim() ||
                                                sending ||
                                                !tokenRef.current
                                            }
                                            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#39B972] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-[#218B55] disabled:cursor-not-allowed disabled:opacity-50 sm:px-4"
                                        >
                                            {sending ? (
                                                <>
                                                    <LoaderCircle
                                                        size={14}
                                                        className="animate-spin"
                                                    />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send reply
                                                    <Send size={14} />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="flex flex-1 flex-col items-center justify-center p-6 text-center sm:p-8">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F5EC] text-[#218B55] sm:h-16 sm:w-16">
                                <MessageCircle size={30} />
                            </div>

                            <h3 className="mt-4 font-semibold text-gray-900">
                                {loading
                                    ? "Loading conversations..."
                                    : "Select a conversation"}
                            </h3>

                            <p className="mt-1 max-w-xs text-sm text-gray-500">
                                Choose a visitor from the inbox to view their messages.
                            </p>
                        </div>
                    )}
                </section>

                {/* Desktop visitor details */}
                <aside className="hidden min-h-0 min-w-0 flex-col overflow-y-auto overscroll-contain border-l border-gray-200 p-4 xl:flex 2xl:p-5">
                    {selected ? (
                        <>
                            <div className="mb-5 flex items-center justify-between gap-2">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    Visitor details
                                </h3>

                                <PanelLeftClose
                                    size={17}
                                    className="shrink-0 text-gray-400"
                                />
                            </div>

                            <div className="flex flex-col items-center border-b border-gray-100 pb-5 text-center">
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold sm:h-16 sm:w-16 ${selected.color}`}
                                >
                                    {selected.initials}
                                </div>

                                <h4 className="mt-3 break-words text-sm font-semibold text-gray-900">
                                    {selected.name}
                                </h4>

                                <p className="mt-1 break-all text-xs text-gray-500">
                                    {selected.email || "Not provided"}
                                </p>

                                <div className="mt-3">
                                    <StatusBadge status={selected.status} />
                                </div>
                            </div>

                            <div className="space-y-5 py-5">
                                <div>
                                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
                                        Contact information
                                    </p>

                                    <div className="flex min-w-0 items-start gap-2.5">
                                        <Mail
                                            size={16}
                                            className="mt-0.5 shrink-0 text-gray-400"
                                        />

                                        <span className="break-all text-xs leading-5 text-gray-600">
                                            {selected.email || "Not provided"}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
                                        Visited page
                                    </p>

                                    <div className="flex min-w-0 items-start gap-2.5">
                                        <Globe
                                            size={16}
                                            className="mt-0.5 shrink-0 text-gray-400"
                                        />

                                        <span className="break-all text-xs leading-5 text-gray-600">
                                            {selected.page}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
                                        Conversation ID
                                    </p>

                                    <p className="break-all rounded-lg bg-gray-50 p-2 text-xs text-gray-600">
                                        {selected.id}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto rounded-xl bg-[#F5FBF7] p-3">
                                <p className="text-xs font-semibold text-[#063F3D]">
                                    Strap World Support
                                </p>

                                <p className="mt-1 text-[11px] leading-5 text-gray-500">
                                    Respond to product questions, bulk orders, and export enquiries.
                                </p>
                            </div>
                        </>
                    ) : (
                        <p className="text-sm text-gray-500">
                            Visitor details will appear here.
                        </p>
                    )}
                </aside>
            </div>

            <p className="mt-4 text-center text-xs text-gray-400">
                Strap World · Customer Support Dashboard
            </p>
        </main>
    );
}