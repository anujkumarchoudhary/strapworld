"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChatMessageSchema = new mongoose_1.Schema({
    conversationId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
ChatMessageSchema.index({ conversationId: 1, createdAt: 1 });
const ChatMessage = mongoose_1.models.ChatMessage ||
    (0, mongoose_1.model)("ChatMessage", ChatMessageSchema);
exports.default = ChatMessage;
