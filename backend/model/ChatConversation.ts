import { Schema, model, models } from "mongoose";

const ChatConversationSchema = new Schema(
  {
    visitorName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    visitorEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    projectDetails: {
      type: String,
      default: "",
      maxlength: 2000,
    },
    currentPage: {
      type: String,
      default: "/",
      maxlength: 2048,
    },
    visitorTokenHash: {
      type: String,
      required: true,
      select: false,
    },
    status: {
      type: String,
      enum: ["open", "pending", "resolved"],
      default: "open",
    },
    lastMessage: {
      type: String,
      default: "",
      maxlength: 3000,
    },
    lastMessageAt: {
      type: Date,
      default: Date.now,
    },
    assignedAgent: {
      type: Schema.Types.ObjectId,
      default: null,
    },
  },
  { timestamps: true },
);

ChatConversationSchema.index({ status: 1, lastMessageAt: -1 });

const ChatConversation =
  models.ChatConversation ||
  model("ChatConversation", ChatConversationSchema);

export default ChatConversation;