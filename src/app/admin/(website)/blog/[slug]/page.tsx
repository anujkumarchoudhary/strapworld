"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { BaseUrl } from "@/src/app/baseurl";
import InputField from "@/src/components/ui/InputField";
import SelectField from "@/src/components/ui/SelectField";
import ImageUpload from "@/src/components/ui/ImageUpload";
import QuillEditor from "@/src/components/QuillEditor";
import SaveAndCancel from "@/src/components/common/SaveAndCancel";

interface CategoryType {
  label: string;
  value: string;
}

interface BlogForm {
  title: string;
  slug: string;
  category: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    focusKeyword: string;
  };
}

const CreateBlog = ({ refresh }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const blogId = params?.slug;
  const isEditMode = Boolean(blogId && blogId !== "create");

  const [categoryOptions, setCategoryOptions] = useState<CategoryType[]>([]);
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [blog, setBlog] = useState<any>(null);

  const [inputVal, setInputVal] = useState<BlogForm>({
    title: "",
    slug: "",
    category: "",
    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      focusKeyword: "",
    },
  });

  // Generate slug from title
  const generateSlug = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // Handle normal and nested fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("seo.")) {
      const key = name.split(".")[1] as keyof BlogForm["seo"];

      setInputVal((prev) => ({
        ...prev,
        seo: {
          ...prev.seo,
          [key]: value,
        },
      }));
    } else {
      setInputVal((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputVal((prev) => ({
      ...prev,
      title: value,
      slug: generateSlug(value),
    }));
  };

  // Image upload
  const handleImageUpload = (file: File) => {
    setSelectedFile(file);
  };

  // Submit blog
  const handleSubmit = async () => {
    const { title, slug, category, seo } = inputVal;

    if (
      !title.trim() ||
      !slug.trim() ||
      !category ||
      !content.trim() ||
      !seo.metaTitle.trim() ||
      !seo.metaDescription.trim() ||
      !seo.keywords.trim() ||
      !seo.focusKeyword.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    if (!isEditMode && !selectedFile) {
      toast.error("Please upload a blog image");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please log in again");
      return;
    }

    const formData = new FormData();

    // Backend fields
    formData.append("title", title.trim());
    formData.append("slug", slug);
    formData.append("description", content);

    // Map existing SEO form fields to backend metaDetails
    formData.append(
      "metaDetails",
      JSON.stringify({
        title: seo.metaTitle.trim(),
        description: seo.metaDescription.trim(),
        keywords: seo.keywords
          .split(",")
          .map((keyword) => keyword.trim())
          .filter(Boolean),
        canonical: "",
        index: true,
        focusKeyword: seo.focusKeyword.trim(),
      })
    );

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (isEditMode) {
        await axios.patch(
          `${BaseUrl}/blogs/update/${blogId}`,
          formData,
          config
        );

        toast.success("Blog updated successfully");
      } else {
        await axios.post(`${BaseUrl}/blogs`, formData, config);

        toast.success("Blog created successfully");
      }

      refresh?.();
      router.push("/admin/blog");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(
          err.response?.data?.message || "Something went wrong"
        );
        console.error(err.response?.data || err.message);
      } else {
        toast.error("Something went wrong");
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories (existing UI retained)
  const getCategories = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/categories`);

      if (res.status === 200) {
        setCategoryOptions(res.data?.data ?? []);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  // Fetch single blog for editing
  const getSingleBlog = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/blogs/slug/${blogId}`);

      if (res.status === 200) {
        const blogData = res.data?.data;

        setBlog(blogData);

        setInputVal({
          title: blogData.title ?? "",
          slug: blogData.slug ?? "",
          category: blogData.category ?? "",
          seo: {
            metaTitle: blogData.metaDetails?.title ?? "",
            metaDescription: blogData.metaDetails?.description ?? "",
            keywords: Array.isArray(blogData.metaDetails?.keywords)
              ? blogData.metaDetails.keywords.join(", ")
              : "",
            focusKeyword: blogData.metaDetails?.focusKeyword ?? "",
          },
        });

        setContent(blogData.description ?? "");
      }
    } catch (err) {
      console.error("Failed to fetch blog:", err);
      toast.error("Failed to load blog");
    }
  };

  useEffect(() => {
    void getCategories();

    if (isEditMode) {
      void getSingleBlog();
    }
  }, [blogId]);

  return (
    <div className="p-10 m-5 space-y-6 bg-white rounded-lg shadow">
      <h3>{isEditMode ? "Update" : "Create"} Blog</h3>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 space-y-4">
          <InputField
            label="Title"
            name="title"
            placeholder="Enter Heading"
            value={inputVal.title}
            handleChange={handleTitleChange}
            required={true}
          />

          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Slug"
              name="slug"
              placeholder="Enter Slug"
              value={inputVal.slug}
              handleChange={handleChange}
              required={true}
            />

            <SelectField
              label="Category"
              name="category"
              value={inputVal.category}
              handleChange={handleChange}
              options={categoryOptions}
              required={true}
            />
          </div>
        </div>

        <ImageUpload
          existingImage={
            blog?.image ??
            blog?.featuredImage ??
            blog?.seo?.openGraph?.image
          }
          onUpload={handleImageUpload}
        />
      </div>

      <QuillEditor value={content} onChange={setContent} />

      {/* SEO Section — existing UI retained */}
      <div className="space-y-4">
        <p className="font-semibold">Meta Tags</p>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="SEO Title"
            name="seo.metaTitle"
            placeholder="Enter SEO Title"
            value={inputVal.seo.metaTitle}
            handleChange={handleChange}
            required={true}
          />

          <InputField
            label="Keyword"
            name="seo.keywords"
            placeholder="Enter Keywords"
            value={inputVal.seo.keywords}
            handleChange={handleChange}
            required={true}
          />
        </div>

        <InputField
          label="Focus Keyword"
          name="seo.focusKeyword"
          placeholder="Enter Focus Keyword"
          value={inputVal.seo.focusKeyword}
          handleChange={handleChange}
          required={true}
        />

        <InputField
          label="Description"
          name="seo.metaDescription"
          placeholder="Enter Description"
          value={inputVal.seo.metaDescription}
          handleChange={handleChange}
          required={true}
        />
      </div>

      <div className="flex justify-end gap-2">
        <SaveAndCancel
          saveText={loading ? "Saving..." : "Submit"}
          handleClick={handleSubmit}
          cancelText="Cancel"
          cancelTextColor="#000000"
        />
      </div>
    </div>
  );
};

export default CreateBlog;