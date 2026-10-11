import { Request, Response } from "express";
import mongoose from "mongoose";
import Blog from "../model/blog.model";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

// Generate a URL-friendly slug.
const generateSlug = (title: string): string =>
  title
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Generate a unique slug, excluding the current blog during updates.
const getUniqueSlug = async (
  title: string,
  excludeId?: string,
): Promise<string> => {
  const baseSlug = generateSlug(title);

  if (!baseSlug) {
    throw new Error("A valid title is required to generate a slug.");
  }

  let slug = baseSlug;
  let counter = 1;

  while (
    await Blog.exists({
      slug,
      ...(excludeId ? { _id: { $ne: excludeId } } : {}),
    })
  ) {
    slug = `${baseSlug}-${counter++}`;
  }

  return slug;
};

// Parse SEO metadata from JSON or an object.
const parseMetaDetails = (value: unknown) => {
  const parsed = typeof value === "string" ? JSON.parse(value) : value;

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("Invalid metaDetails format.");
  }

  const meta = parsed as Record<string, unknown>;

  const keywords = Array.isArray(meta.keywords)
    ? meta.keywords
        .map(String)
        .map((item) => item.trim())
        .filter(Boolean)
    : typeof meta.keywords === "string"
      ? meta.keywords
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];

  return {
    title: String(meta.title ?? "").trim(),
    description: String(meta.description ?? "").trim(),
    keywords,
    canonical: String(meta.canonical ?? "").trim(),
    index:
      meta.index === undefined
        ? true
        : meta.index === true || meta.index === "true",
  };
};

// CREATE BLOG
export const createBlog = async (req: Request, res: Response) => {
  try {
    const title = String(req.body.title ?? "").trim();
    const description = String(req.body.description ?? "").trim();

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Blog image is required.",
      });
    }

    let metaDetails;

    try {
      metaDetails = parseMetaDetails(req.body.metaDetails);
    } catch {
      return res.status(400).json({
        success: false,
        message: "Invalid metaDetails JSON.",
      });
    }

    if (!metaDetails.title || !metaDetails.description) {
      return res.status(400).json({
        success: false,
        message: "Meta title and meta description are required.",
      });
    }

    const slug = await getUniqueSlug(title);

    const uploadedImage = await uploadToCloudinary(
      req.file.buffer,
      "blogs",
      req.file.originalname,
    );

    if (!uploadedImage?.secure_url) {
      throw new Error("Failed to upload blog image.");
    }

    const blog = await Blog.create({
      title,
      slug,
      description,
      image: uploadedImage.secure_url,
      imagePublicId: uploadedImage.public_id,
      metaDetails,
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully.",
      data: blog,
    });
  } catch (error: unknown) {
    console.error("CREATE BLOG ERROR:", error);

    return res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create blog.",
    });
  }
};

// GET ALL BLOGS
export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();

    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error: unknown) {
    console.error("GET ALL BLOGS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blogs.",
    });
  }
};

// GET SINGLE BLOG BY SLUG
export const getBlogBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({ slug }).lean();

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error: unknown) {
    console.error("GET BLOG BY SLUG ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog.",
    });
  }
};

// UPDATE BLOG
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID.",
      });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    if (req.body.title !== undefined) {
      const title = String(req.body.title).trim();

      if (!title) {
        return res.status(400).json({
          success: false,
          message: "Title cannot be empty.",
        });
      }

      if (title !== blog.title) {
        blog.slug = await getUniqueSlug(title, id);
      }

      blog.title = title;
    }

    if (req.body.description !== undefined) {
      const description = String(req.body.description).trim();

      if (!description) {
        return res.status(400).json({
          success: false,
          message: "Description cannot be empty.",
        });
      }

      blog.description = description;
    }

    if (req.body.metaDetails !== undefined) {
      try {
        const metaDetails = parseMetaDetails(req.body.metaDetails);

        if (!metaDetails.title || !metaDetails.description) {
          return res.status(400).json({
            success: false,
            message: "Meta title and meta description are required.",
          });
        }

        blog.metaDetails = metaDetails as typeof blog.metaDetails;
      } catch {
        return res.status(400).json({
          success: false,
          message: "Invalid metaDetails JSON.",
        });
      }
    }

    // Replace the image only when a new one is uploaded.
    if (req.file) {
      const uploadedImage = await uploadToCloudinary(
        req.file.buffer,
        "blogs",
        req.file.originalname,
      );

      if (!uploadedImage?.secure_url) {
        throw new Error("Failed to upload replacement image.");
      }

      blog.image = uploadedImage.secure_url;
      blog.imagePublicId = uploadedImage.public_id;
    }

    await blog.save();

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully.",
      data: blog,
    });
  } catch (error: unknown) {
    console.error("UPDATE BLOG ERROR:", error);

    return res.status(500).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to update blog.",
    });
  }
};

// DELETE BLOG
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID.",
      });
    }

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully.",
      data: {
        id: blog._id,
        title: blog.title,
      },
    });
  } catch (error: unknown) {
    console.error("DELETE BLOG ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete blog.",
    });
  }
};
