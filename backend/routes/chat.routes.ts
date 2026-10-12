import { Router } from "express";

import {
  createConversation,
  getConversationHistory,
  getAdminConversations,
  getAdminConversationMessages,
  updateConversationStatus,
  sendAdminMessage,
} from "../controllers/chat.controller";

import { verifyAdmin } from "../middleware/verifyAdmin";

const router = Router();

router.post("/conversations", createConversation);

router.get(
  "/conversations/:id/messages",
  getConversationHistory,
);

router.get(
  "/admin/conversations",
  getAdminConversations,
);

router.get(
  "/admin/conversations/:id/messages",
  getAdminConversationMessages,
);

router.post(
  "/admin/conversations/:id/messages",
  sendAdminMessage,
);

router.patch(
  "/admin/conversations/:id/status",
  updateConversationStatus,
);

export default router;