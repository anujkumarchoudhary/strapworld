import { Server, Socket } from "socket.io";
import mongoose from "mongoose";
import { timingSafeEqual } from "crypto";

import { hashChatToken } from "../controllers/chat.controller";
import ChatConversation from "../model/ChatConversation";
import ChatMessage from "../model/ChatMessage";

type ChatAck = (result: Record<string, unknown>) => void;

const safeEqual = (a: string, b: string): boolean => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  return (
    left.length === right.length &&
    timingSafeEqual(left, right)
  );
};

export const registerChatSocket = (io: Server): void => {
  io.on("connection", (socket: Socket) => {
    console.log("[SOCKET] Client connected:", socket.id);

    // Join the admin inbox room.
    // No admin authentication is performed in this handler.
    socket.on(
      "admin:join",
      (
        _data: { accessToken?: string },
        callback?: ChatAck,
      ) => {
        socket.data.chatRole = "agent";
        socket.join("chat:agents");

        console.log("[SOCKET] Client joined admin inbox:", socket.id);

        callback?.({ success: true });
      },
    );

    // Visitors join only after their conversation token is verified.
    socket.on(
      "chat:join",
      async (
        data: {
          conversationId?: string;
          token?: string;
        },
        callback?: ChatAck,
      ) => {
        try {
          const { conversationId, token } = data || {};

          if (
            typeof conversationId !== "string" ||
            !mongoose.isValidObjectId(conversationId) ||
            typeof token !== "string" ||
            token.length > 200
          ) {
            callback?.({
              success: false,
              message: "Invalid chat session.",
            });
            return;
          }

          const conversation = await ChatConversation.findById(
            conversationId,
          ).select("+visitorTokenHash");

          if (
            !conversation ||
            typeof conversation.visitorTokenHash !== "string" ||
            !safeEqual(
              conversation.visitorTokenHash,
              hashChatToken(token),
            )
          ) {
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
        } catch (error) {
          console.error("[SOCKET] chat:join error:", error);

          callback?.({
            success: false,
            message: "Unable to join chat.",
          });
        }
      },
    );

    // Handle messages sent by visitors and agents.
    socket.on(
      "chat:message",
      async (
        data: {
          conversationId?: string;
          message?: string;
        },
        callback?: ChatAck,
      ) => {
        try {
          console.log("[SOCKET] chat:message received:", {
            socketId: socket.id,
            role: socket.data.chatRole,
          });

          const role = socket.data.chatRole;

          const conversationId =
            role === "visitor"
              ? socket.data.conversationId
              : data?.conversationId;

          const messageText = String(
            data?.message ?? "",
          ).trim();

          if (
            (role !== "visitor" && role !== "agent") ||
            typeof conversationId !== "string" ||
            !mongoose.isValidObjectId(conversationId) ||
            !messageText ||
            messageText.length > 3000
          ) {
            callback?.({
              success: false,
              message: "Invalid message.",
            });
            return;
          }

          if (
            role === "agent" &&
            !socket.rooms.has("chat:agents")
          ) {
            callback?.({
              success: false,
              message: "Admin room access required.",
            });
            return;
          }

          const conversation = await ChatConversation.findById(
            conversationId,
          );

          if (!conversation) {
            callback?.({
              success: false,
              message: "Conversation not found.",
            });
            return;
          }

          if (
            role === "visitor" &&
            String(conversation._id) !==
              String(socket.data.conversationId)
          ) {
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
          const savedMessage = await ChatMessage.create({
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
          io.to(`chat:${conversation._id}`).emit(
            "chat:message",
            payload,
          );

          // Critical fix: deliver visitor messages to the admin inbox live.
          if (sender === "visitor") {
            io.to("chat:agents").emit(
              "chat:message",
              payload,
            );
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
        } catch (error) {
          console.error("[SOCKET] chat:message error:", error);

          callback?.({
            success: false,
            message: "Unable to send message.",
          });
        }
      },
    );

    socket.on("disconnect", (reason) => {
      console.log("[SOCKET] Client disconnected:", {
        socketId: socket.id,
        reason,
      });
    });
  });
};