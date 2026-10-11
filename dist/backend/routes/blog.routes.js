"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const blog_controller_1 = require("../controllers/blog.controller");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5 MB
    },
});
// Create
router.post("/", upload.single("image"), blog_controller_1.createBlog);
// Get all
router.get("/", blog_controller_1.getAllBlogs);
// Get one by slug
router.get("/slug/:slug", blog_controller_1.getBlogBySlug);
// Update
router.patch("/update/:id", upload.single("image"), blog_controller_1.updateBlog);
// Delete
router.delete("/:id", blog_controller_1.deleteBlog);
exports.default = router;
