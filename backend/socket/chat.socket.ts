import { Server, Socket } from "socket.io";
import mongoose from "mongoose";
import { timingSafeEqual } from "crypto";

import { hashChatToken } from "../controllers/chat.controller";
import ChatConversation from "../model/ChatConversation";
import ChatMessage from "../model/ChatMessage";

type ChatAck = (result: Record<string, unknown>) => void;

const safeEqual = (a: string, b: string) => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);

  return (
    left.length === right.length &&
    timingSafeEqual(left, right)
  );
};

export const registerChatSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    // Authenticate the agent before allowing access to admin events.
    socket.on(
      "admin:join",
      async (
        data: { accessToken?: string },
        callback?: ChatAck,
      ) => {
        try {
          const token = data?.accessToken;
          const expectedToken = process.env.CHAT_ADMIN_SOCKET_TOKEN;

          if (
            !token ||
            !expectedToken ||
            !safeEqual(token, expectedToken)
          ) {
            return callback?.({
              success: false,
              message: "Admin authentication failed.",
            });
          }

          socket.data.chatRole = "agent";
          socket.join("chat:agents");

          return callback?.({ success: true });
        } catch (error) {
          console.error("admin:join:", error);
          return callback?.({
            success: false,
            message: "Unable to authenticate admin.",
          });
        }
      },
    );

    // Visitors authenticate with their private conversation token.
    socket.on(
      "chat:join",
      async (
        data: { conversationId?: string; token?: string },
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
            return callback?.({
              success: false,
              message: "Invalid chat session.",
            });
          }

          const conversation = await ChatConversation.findById(
            conversationId,
          ).select("+visitorTokenHash");

          if (
            !conversation ||
            !safeEqual(
              conversation.visitorTokenHash,
              hashChatToken(token),
            )
          ) {
            return callback?.({
              success: false,
              message: "Chat access denied.",
            });
          }

          socket.data.chatRole = "visitor";
          socket.data.conversationId = String(conversation._id);

          socket.join(`chat:${conversation._id}`);

          return callback?.({
            success: true,
            status: conversation.status,
          });
        } catch (error) {
          console.error("chat:join:", error);
          return callback?.({
            success: false,
            message: "Unable to join chat.",
          });
        }
      },
    );

    // Both visitors and authenticated agents send messages through this event.
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
          const role = socket.data.chatRole;
          const conversationId =
            role === "visitor"
              ? socket.data.conversationId
              : data?.conversationId;

          const messageText = String(data?.message ?? "").trim();

          if (
            (role !== "visitor" && role !== "agent") ||
            typeof conversationId !== "string" ||
            !mongoose.isValidObjectId(conversationId) ||
            !messageText ||
            messageText.length > 3000
          ) {
            return callback?.({
              success: false,
              message: "Invalid message.",
            });
          }

          // Agents may send only after authenticating with admin:join.
          if (role === "agent" && !socket.rooms.has("chat:agents")) {
            return callback?.({
              success: false,
              message: "Admin authentication required.",
            });
          }

          const conversation = await ChatConversation.findById(
            conversationId,
          );

          if (!conversation || conversation.status === "resolved") {
            return callback?.({
              success: false,
              message: "This conversation is closed.",
            });
          }

          const sender = role === "agent" ? "agent" : "visitor";

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

          // Deliver to the visitor and any admin viewing this conversation.
          io.to(`chat:${conversation._id}`).emit(
            "chat:message",
            payload,
          );

          // Notify authenticated admin dashboards only.
          io.to("chat:agents").emit("chat:inbox-update", {
            conversationId: String(conversation._id),
            lastMessage: messageText,
            lastMessageAt: savedMessage.createdAt,
            sender,
            status: conversation.status,
          });

          return callback?.({
            success: true,
            message: payload,
          });
        } catch (error) {
          console.error("chat:message:", error);
          return callback?.({
            success: false,
            message: "Unable to send message.",
          });
        }
      },
    );
  });
};