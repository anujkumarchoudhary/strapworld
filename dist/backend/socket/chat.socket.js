"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerChatSocket = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const crypto_1 = require("crypto");
const chat_controller_1 = require("../controllers/chat.controller");
const ChatConversation_1 = __importDefault(require("../model/ChatConversation"));
const ChatMessage_1 = __importDefault(require("../model/ChatMessage"));
const safeEqual = (a, b) => {
    const left = Buffer.from(a);
    const right = Buffer.from(b);
    return (left.length === right.length &&
        (0, crypto_1.timingSafeEqual)(left, right));
};
const registerChatSocket = (io) => {
    io.on("connection", (socket) => {
        console.log("[SOCKET] Client connected:", socket.id);
        // Join the admin inbox room.
        // No admin authentication is performed in this handler.
        socket.on("admin:join", (_data, callback) => {
            socket.data.chatRole = "agent";
            socket.join("chat:agents");
            console.log("[SOCKET] Client joined admin inbox:", socket.id);
            callback?.({ success: true });
        });
        // Visitors join only after their conversation token is verified.
        socket.on("chat:join", async (data, callback) => {
            try {
                const { conversationId, token } = data || {};
                if (typeof conversationId !== "string" ||
                    !mongoose_1.default.isValidObjectId(conversationId) ||
                    typeof token !== "string" ||
                    token.length > 200) {
                    callback?.({
                        success: false,
                        message: "Invalid chat session.",
                    });
                    return;
                }
                const conversation = await ChatConversation_1.default.findById(conversationId).select("+visitorTokenHash");
                if (!conversation ||
                    typeof conversation.visitorTokenHash !== "string" ||
                    !safeEqual(conversation.visitorTokenHash, (0, chat_controller_1.hashChatToken)(token))) {
                    callback?.({
                        success: false,
                        message: "Chat access denied.",
                    });
                    return;
                }
                socket.data.chatRole = "visitor";
                socket.data.conversationId = String(conversation._id);
                socket.join(`chat:${conversation._id}`);
                callback?.({
                    success: true,
                    status: conversation.status,
                });
            }
            catch (error) {
                console.error("[SOCKET] chat:join error:", error);
                callback?.({
                    success: false,
                    message: "Unable to join chat.",
                });
            }
        });
        // Handle messages sent by visitors and agents.
        socket.on("chat:message", async (data, callback) => {
            try {
                console.log("[SOCKET] chat:message received:", {
                    socketId: socket.id,
                    role: socket.data.chatRole,
                });
                const role = socket.data.chatRole;
                const conversationId = role === "visitor"
                    ? socket.data.conversationId
                    : data?.conversationId;
                const messageText = String(data?.message ?? "").trim();
                if ((role !== "visitor" && role !== "agent") ||
                    typeof conversationId !== "string" ||
                    !mongoose_1.default.isValidObjectId(conversationId) ||
                    !messageText ||
                    messageText.length > 3000) {
                    callback?.({
                        success: false,
                        message: "Invalid message.",
                    });
                    return;
                }
                if (role === "agent" &&
                    !socket.rooms.has("chat:agents")) {
                    callback?.({
                        success: false,
                        message: "Admin room access required.",
                    });
                    return;
                }
                const conversation = await ChatConversation_1.default.findById(conversationId);
                if (!conversation) {
                    callback?.({
                        success: false,
                        message: "Conversation not found.",
                    });
                    return;
                }
                if (role === "visitor" &&
                    String(conversation._id) !==
                        String(socket.data.conversationId)) {
                    callback?.({
                        success: false,
                        message: "Chat access denied.",
                    });
                    return;
                }
                if (conversation.status === "resolved") {
                    callback?.({
                        success: false,
                        message: "This conversation is closed.",
                    });
                    return;
                }
                const sender = role === "agent" ? "agent" : "visitor";
                // Save the message before broadcasting it.
                const savedMessage = await ChatMessage_1.default.create({
                    conversationId: conversation._id,
                    sender,
                    message: messageText,
                });
                conversation.lastMessage = messageText;
                conversation.lastMessageAt = savedMessage.createdAt;
                if (sender === "agent") {
                    conversation.status = "open";
                }
                await conversation.save();
                const payload = {
                    _id: String(savedMessage._id),
                    conversationId: String(conversation._id),
                    sender,
                    message: savedMessage.message,
                    createdAt: savedMessage.createdAt,
                };
                // Deliver to the visitor and all clients in this conversation room.
                io.to(`chat:${conversation._id}`).emit("chat:message", payload);
                // Critical fix: deliver visitor messages to the admin inbox live.
                if (sender === "visitor") {
                    io.to("chat:agents").emit("chat:message", payload);
                }
                // Update admin inbox previews and status.
                io.to("chat:agents").emit("chat:inbox-update", {
                    conversationId: String(conversation._id),
                    lastMessage: savedMessage.message,
                    lastMessageAt: savedMessage.createdAt,
                    sender,
                    status: conversation.status,
                });
                console.log("[SOCKET] Message saved and broadcast:", {
                    messageId: String(savedMessage._id),
                    conversationId: String(conversation._id),
                    sender,
                });
                callback?.({
                    success: true,
                    message: payload,
                });
            }
            catch (error) {
                console.error("[SOCKET] chat:message error:", error);
                callback?.({
                    success: false,
                    message: "Unable to send message.",
                });
            }
        });
        socket.on("disconnect", (reason) => {
            console.log("[SOCKET] Client disconnected:", {
                socketId: socket.id,
                reason,
            });
        });
    });
};
exports.registerChatSocket = registerChatSocket;
