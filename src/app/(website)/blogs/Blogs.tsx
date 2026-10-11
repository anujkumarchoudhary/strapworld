"use client";

import React, { useMemo, useState } from "react";
import MaxWidth from "@/src/components/layout/MaxWidth";
import Heading from "@/src/components/common/Heading";
import Image from "next/image";
import {
  ArrowUpRight,
  Search,
  CalendarDays,
  TrendingUp,
  FolderOpen,
} from "lucide-react";
import Pagination from "@/src/components/Pagination";
import Link from "next/link";
import { useResponsive } from "@/src/hooks/useResponsive";
import SaveAndCancel from "@/src/components/common/SaveAndCancel";
import { useStaggerReveal } from "@/src/hooks/useStaggerReveal";

interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  category?: string;
  author?: string;
  status?: "draft" | "published";
  createdAt?: string;
  views?: number;
  tags?: string[];
}

interface BlogsProps {
  data: BlogItem[];
  label?: string;
  headingParts?: { text: string; color?: string }[];
  description?: string;
  postsPerPage?: number;
}

const Blogs = ({
  data,
  label = "OUR BLOGS",
  headingParts = [
    { text: "Latest ", color: "#101820" },
    { text: "Blogs", color: "#218B55" },
  ],
  description = "Explore our latest insights, updates, and industry news.",
  postsPerPage = 6,
}: BlogsProps) => {
  const { isDesktop } = useResponsive();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Blog data
  const allBlogs = useMemo(
    () =>
      (Array.isArray(data) ? data : []).filter(
        (blog) => blog.status !== "draft"
      ),
    [data]
  );

  // Categories and counts
  const categories = useMemo(() => {
    const counts = new Map<string, number>();

    allBlogs.forEach((blog) => {
      const category = blog.category?.trim() || "Uncategorized";
      counts.set(category, (counts.get(category) || 0) + 1);
    });

    return [
      { name: "All", count: allBlogs.length },
      ...Array.from(counts.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([name, count]) => ({ name, count })),
    ];
  }, [allBlogs]);

  // Search and category filtering
  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allBlogs.filter((blog) => {
      const category = blog.category?.trim() || "Uncategorized";

      const matchesCategory =
        selectedCategory === "All" ||
        category === selectedCategory;

      const searchableText = [
        blog.title,
        blog.excerpt,
        blog.category,
        blog.author,
        ...(blog.tags || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [allBlogs, search, selectedCategory]);

  // Recent blogs
  const recentBlogs = useMemo(
    () =>
      [...allBlogs]
        .sort(
          (a, b) =>
            new Date(b.createdAt || 0).getTime() -
            new Date(a.createdAt || 0).getTime()
        )
        .slice(0, 5),
    [allBlogs]
  );

  // Popular blogs (requires views field from the API)
  const popularBlogs = useMemo(
    () =>
      [...allBlogs]
        .filter((blog) => typeof blog.views === "number")
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 5),
    [allBlogs]
  );

  // Pagination
  const totalPages = Math.ceil(
    filteredBlogs.length / postsPerPage
  );

  const startIndex = (currentPage - 1) * postsPerPage;

  const blogs = filteredBlogs.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const { ref: productsRef, visibleItems } = useStaggerReveal(
    blogs.length,
    {
      delay: 180,
      threshold: 0.25,
    }
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const formatDate = (date?: string) => {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return "";

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section
      ref={productsRef}
      className="bg-white py-10 md:py-12 lg:py-20"
    >
      <MaxWidth>
        {/* Search Toolbar */}
        <div className="mb-8 space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#647077]"
              />

              <input
                type="search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search articles, topics, categories..."
                aria-label="Search blogs"
                className="w-full rounded-xl border border-[#647077]/20 bg-white py-3.5 pl-11 pr-4 text-sm text-[#101820] outline-none transition focus:border-[#218B55] focus:ring-2 focus:ring-[#218B55]/10"
              />
            </div>

            <p className="text-sm text-[#647077]">
              {filteredBlogs.length}{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"} found
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => handleCategory(category.name)}
                className={`rounded-lg px-4 py-2.5 text-sm transition ${selectedCategory === category.name
                    ? "border border-[#218B55] bg-[#218B55] text-white"
                    : "border border-[#647077]/20 bg-white text-[#647077] hover:border-[#218B55] hover:text-[#218B55]"
                  }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[75%_25%] lg:gap-10">
          {/* Blog Listing */}
          <div className="min-w-0">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-[#101820]">
                {selectedCategory === "All"
                  ? "Latest Articles"
                  : selectedCategory}
              </h3>

              {(search || selectedCategory !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setCurrentPage(1);
                  }}
                  className="shrink-0 text-sm font-semibold text-[#218B55] hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Existing Blog Cards */}
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {blogs.map((item, index) => {
                  const isCardVisible =
                    visibleItems.includes(index);

                  return (
                    <article
                      key={item._id}
                      style={{
                        transitionDelay: `${index * 150}ms`,
                      }}
                      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#647077]/20 bg-white transition-all duration-300 hover:border-[#218B55]/20 `}
                    >
                      {/* Image */}
                      <Link
                        href={`/blogs/${item.slug}`}
                        className="relative block aspect-[16/12] overflow-hidden bg-gray-50"
                      >
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                      </Link>

                      {/* Content */}
                      <div className="flex flex-1 flex-col space-y-4 px-6 py-5">
                        <div className="flex items-center justify-between gap-3 text-gray-500">
                          <span className="text-[12px] font-bold uppercase text-[#218B55]">
                            {item.category || "Uncategorized"}
                          </span>

                          <span className="shrink-0 text-[12px] font-normal">
                            {formatDate(item.createdAt)}
                          </span>
                        </div>

                        <Link href={`/blogs/${item.slug}`}>
                          <h3 className="line-clamp-2 text-2xl font-semibold leading-tight tracking-tight text-primary-color transition-colors group-hover:text-[#218B55]">
                            {item.title}
                          </h3>
                        </Link>

                        <p className="line-clamp-3 text-[15px] leading-6 text-[#647077]">
                          {item.excerpt}
                        </p>

                        <Link
                          href={`/blogs/${item.slug}`}
                          className="group/link mt-auto flex items-center gap-2 p-2 text-sm font-bold text-[#101820] transition-colors hover:text-primary-color"
                        >
                          Read more
                          <ArrowUpRight className="h-4 w-4 rotate-45 font-bold text-[#218B55] transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-[#647077]/20 px-6 py-16 text-center">
                <Search
                  size={32}
                  className="mx-auto mb-4 text-[#647077]"
                />

                <h3 className="text-xl font-semibold text-[#101820]">
                  No blogs found
                </h3>

                <p className="mt-2 text-sm text-[#647077]">
                  Try another search term or select a different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setCurrentPage(1);
                  }}
                  className="mt-5 rounded-lg bg-[#218B55] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#176D41]"
                >
                  Show all blogs
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 space-y-6 lg:sticky lg:top-24">
            {/* Recent Blogs */}
            <div className="rounded-xl border border-[#647077]/15 bg-white p-5">
              <h3 className="mb-5 flex items-center gap-2 border-b border-[#647077]/15 pb-3 text-lg font-semibold text-[#101820]">
                <CalendarDays
                  size={19}
                  className="text-[#218B55]"
                />
                Recent Blogs
              </h3>

              <div className="space-y-5">
                {recentBlogs.map((item) => (
                  <Link
                    key={item._id}
                    href={`/blogs/${item.slug}`}
                    className="group flex gap-3"
                  >
                    <div className="relative h-[68px] w-[76px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="76px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase text-[#218B55]">
                        {item.category || "Uncategorized"}
                      </p>

                      <h4 className="line-clamp-2 text-sm font-semibold leading-5 text-[#101820] transition-colors group-hover:text-[#218B55]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs text-[#647077]">
                        {formatDate(item.createdAt)}
                      </p>
                    </div>
                  </Link>
                ))}

                {recentBlogs.length === 0 && (
                  <p className="text-sm text-[#647077]">
                    No recent blogs available.
                  </p>
                )}
              </div>
            </div>

            {/* Categories Sidebar */}
            <div className="rounded-xl border border-[#647077]/15 bg-white p-5">
              <h3 className="mb-4 flex items-center gap-2 border-b border-[#647077]/15 pb-3 text-lg font-semibold text-[#101820]">
                <FolderOpen
                  size={19}
                  className="text-[#218B55]"
                />
                Categories
              </h3>

              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => handleCategory(category.name)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${selectedCategory === category.name
                        ? "bg-[#218B55]/10 font-semibold text-[#218B55]"
                        : "text-[#647077] hover:bg-gray-50 hover:text-[#218B55]"
                      }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Blogs */}
            <div className="rounded-xl border border-[#647077]/15 bg-white p-5">
              <h3 className="mb-4 flex items-center gap-2 border-b border-[#647077]/15 pb-3 text-lg font-semibold text-[#101820]">
                <TrendingUp
                  size={19}
                  className="text-[#218B55]"
                />
                Popular Blogs
              </h3>

              {popularBlogs.length > 0 ? (
                <div className="space-y-4">
                  {popularBlogs.map((item, index) => (
                    <Link
                      key={item._id}
                      href={`/blogs/${item.slug}`}
                      className="group flex gap-3"
                    >
                      <span className="text-2xl font-bold text-[#218B55]/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h4 className="line-clamp-2 text-sm font-semibold leading-5 text-[#101820] transition-colors group-hover:text-[#218B55]">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs text-[#647077]">
                          {item.views?.toLocaleString("en-IN")} views
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-6 text-[#647077]">
                  Popular blogs will appear here when view counts are
                  available from the API.
                </p>
              )}
            </div>
          </aside>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Blogs;