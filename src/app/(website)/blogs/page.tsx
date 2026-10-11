"use client";

import Blog from "@/src/components/Blog";
import CommonBanner from "@/src/components/CommonBanner";
import MaxWidth from "@/src/components/layout/MaxWidth";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../baseurl";
import Blogs from "./Blogs";

export interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author?: string;
  category?: string;
  tags: string[];
  image: string;
  status: "draft" | "published";
  publishedAt?: string;
  createdAt: string;
  metaDetails?: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    index: boolean;
  };
}

const Page = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/blogs`
        );

        const result = response.data;

        console.log("Blogs API response:", result?.data);

        if (result?.success) {
          setBlogs(result?.data)
        }

      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (
    <div>
      <CommonBanner
        label="OUR BLOGS"
        headingParts={[
          { text: "Latest Blogs", color: "#FFFFFF" },

        ]}
        description="Explore our latest insights, updates, and industry news."
      />
      {loading ? (
        <p className="py-10 text-center">Loading blogs...</p>
      ) : (
        <Blogs data={blogs} />
      )}
    </div>
  );
};

export default Page;