import { NextFunction, Request, Response } from "express";
import { createHash, randomBytes } from "crypto";
import mongoose from "mongoose";
import ChatConversation from "../model/ChatConversation";
import ChatMessage from "../model/ChatMessage";
import { getChatIO } from "../socket/chat.io";

export const hashChatToken = (token: string): string =>
  createHash("sha256").update(token).digest("hex");

export const createConversation = async (req: Request, res: Response) => {
  try {
    // Match the frontend field names.
    const name = String(req.body?.visitorName ?? req.body?.name ?? "").trim();

    const email = String(req.body?.visitorEmail ?? req.body?.email ?? "")
      .trim()
      .toLowerCase();

    const details = String(
      req.body?.projectDetails ?? req.body?.details ?? "",
    ).trim();

    const currentPage = String(req.body?.currentPage ?? "/").trim();

    // Validate name.
    if (
      !name ||
      name.length > 100 ||
      !/^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(name)
    ) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid name.",
      });
    }

    // Validate email.
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email.",
      });
    }

    // Match the ChatConversation schema limit.
    if (details.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Project details must be 2000 characters or fewer.",
      });
    }

    if (currentPage.length > 2048) {
      return res.status(400).json({
        success: false,
        message: "Current page URL is too long.",
      });
    }

    const token = randomBytes(32).toString("hex");

    const conversation = await ChatConversation.create({
      visitorName: name,
      visitorEmail: email,
      projectDetails: details,
      currentPage: currentPage || "/",
      visitorTokenHash: hashChatToken(token),
    });

    if (details) {
      const chatMessage = await ChatMessage.create({
        conversationId: conversation._id,
        sender: "visitor",
        message: details,
      });

      conversation.lastMessage = details;
      conversation.lastMessageAt = chatMessage.createdAt;
      await conversation.save();
    }

    return res.status(201).json({
      success: true,
      conversationId: String(conversation._id),
      token,
      visitorName: name,
      status: conversation.status,
    });
  } catch (error) {
    console.error("createConversation:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to start conversation.",
    });
  }
};

export const getConversationHistory = async (req: Request, res: Response) => {
  try {
    const conversationId = req.params.id;
    const token = req.header("x-chat-token");

    if (
      !mongoose.isValidObjectId(conversationId) ||
      !token ||
      token.length > 200
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid chat session.",
      });
    }

    const conversation =
      await ChatConversation.findById(conversationId).select(
        "+visitorTokenHash",
      );

    if (
      !conversation ||
      conversation.visitorTokenHash !== hashChatToken(token)
    ) {
      return res.status(403).json({
        success: false,
        message: "Chat access denied.",
      });
    }

    const messages = await ChatMessage.find({
      conversationId: conversation._id,
    })
      .sort({ createdAt: 1 })
      .limit(100)
      .select("sender message createdAt")
      .lean();

    return res.status(200).json({
      success: true,
      conversationId: String(conversation._id),
      status: conversation.status,
      messages,
    });
  } catch (error) {
    console.error("getConversationHistory:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to load chat history.",
    });
  }
};

export const getAdminConversations = async (req: Request, res: Response) => {
  try {
    const conversations = await ChatConversation.find()
      .sort({ lastMessageAt: -1 })
      .limit(200)
      .select(
        "visitorName visitorEmail projectDetails currentPage status lastMessage lastMessageAt createdAt",
      )
      .lean();

    return res.json({
      success: true,
      conversations: conversations.map((item) => ({
        ...item,
        _id: String(item._id),
      })),
    });
  } catch (error) {
    console.error("getAdminConversations:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to load conversations.",
    });
  }
};

export const getAdminConversationMessages = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid conversation ID.",
      });
      return;
    }

    const conversation = await ChatConversation.findById(id).lean();

    if (!conversation) {
      res.status(404).json({
        success: false,
        message: "Conversation not found.",
      });
      return;
    }

    const messages = await ChatMessage.find({
      conversationId: conversation._id,
    })
      .sort({ createdAt: 1 })
      .limit(500)
      .select("_id conversationId sender message createdAt")
      .lean();

    res.status(200).json({
      success: true,
      conversationId: String(conversation._id),
      messages: messages.map((item) => ({
        _id: String(item._id),
        conversationId: String(item.conversationId),
        sender: item.sender,
        message: item.message,
        createdAt: item.createdAt,
      })),
    });
    return;
  } catch (error) {
    console.error("getAdminConversationMessages:", error);

    res.status(500).json({
      success: false,
      message: "Unable to load messages.",
    });
    return;
  }
};

export const updateConversationStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const allowedStatuses = ["open", "pending", "resolved"];

    if (
      !mongoose.isValidObjectId(id) ||
      !allowedStatuses.includes(req.body?.status)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid conversation or status.",
      });
    }

    const conversation = await ChatConversation.findByIdAndUpdate(
      id,
      { status: req.body.status },
      { new: true, runValidators: true },
    );

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found.",
      });
    }

    return res.json({
      success: true,
      conversation: {
        _id: String(conversation._id),
        status: conversation.status,
      },
    });
  } catch (error) {
    console.error("updateConversationStatus:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to update status.",
    });
  }
};

export const sendAdminMessage = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const messageText = req.body?.message;

    if (!mongoose.isValidObjectId(id)) {
      res.status(400).json({
        success: false,
        message: "Invalid conversation ID.",
      });
      return;
    }

    if (typeof messageText !== "string" || !messageText.trim()) {
      res.status(400).json({
        success: false,
        message: "Message is required.",
      });
      return;
    }

    const trimmedMessage = messageText.trim();

    if (trimmedMessage.length > 3000) {
      res.status(400).json({
        success: false,
        message: "Message cannot exceed 3000 characters.",
      });
      return;
    }

    const conversation = await ChatConversation.findById(id);

    if (!conversation) {
      res.status(404).json({
        success: false,
        message: "Conversation not found.",
      });
      return;
    }

    const savedMessage = await ChatMessage.create({
      conversationId: conversation._id,
      sender: "agent",
      message: trimmedMessage,
    });

    conversation.lastMessage = trimmedMessage;
    conversation.lastMessageAt = savedMessage.createdAt;

    if (conversation.status === "resolved") {
      conversation.status = "open";
    }

    await conversation.save();

    const io = getChatIO();

    const payload = {
      _id: String(savedMessage._id),
      conversationId: String(conversation._id),
      sender: "agent",
      message: savedMessage.message,
      createdAt: savedMessage.createdAt,
    };

    // Send the message to the visitor and conversation viewers.
    io?.to(`chat:${conversation._id}`).emit(
      "chat:message",
      payload,
    );

    // Update connected admin inboxes.
    io?.to("chat:agents").emit("chat:inbox-update", {
      conversationId: String(conversation._id),
      lastMessage: savedMessage.message,
      lastMessageAt: savedMessage.createdAt,
      sender: "agent",
      status: conversation.status,
    });

    // Send exactly one HTTP response.
    res.status(201).json({
      success: true,
      message: payload,
    });
    return;
  } catch (error) {
    console.error("sendAdminMessage:", error);

    if (res.headersSent) {
      return;
    }

    res.status(500).json({
      success: false,
      message: "Unable to send message.",
    });
    return;
  }
};
