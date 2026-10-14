"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChatConversationSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        default: null,
    },
}, { timestamps: true });
ChatConversationSchema.index({ status: 1, lastMessageAt: -1 });
const ChatConversation = mongoose_1.models.ChatConversation ||
    (0, mongoose_1.model)("ChatConversation", ChatConversationSchema);
exports.default = ChatConversation;
