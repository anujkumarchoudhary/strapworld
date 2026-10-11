import { Router } from "express";
import multer from "multer";

import {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});

// Create
router.post("/", upload.single("image"), createBlog);

// Get all
router.get("/", getAllBlogs);

// Get one by slug
router.get("/slug/:slug", getBlogBySlug);

// Update
router.patch("/update/:id", upload.single("image"), updateBlog);

// Delete
router.delete("/:id", deleteBlog);

export default router;