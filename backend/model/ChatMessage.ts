import { Schema, model, models } from "mongoose";

const ChatMessageSchema = new Schema(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: "ChatConversation",
      required: true,
    },
    sender: {
      type: String,
      enum: ["visitor", "agent"],
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 3000,
    },
    readAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

ChatMessageSchema.index({ conversationId: 1, createdAt: 1 });

const ChatMessage =
  models.ChatMessage ||
  model("ChatMessage", ChatMessageSchema);

export default ChatMessage;