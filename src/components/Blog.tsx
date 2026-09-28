"use client";

import React, { useState } from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import blog from "../../public/images/blog_1.jpg";
import blog2 from "../../public/images/blog2.jpg";
import blog3 from "../../public/images/blog3.jpg";
import Image from "next/image";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import Button from "./common/Button";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Pagination from "./Pagination";
import Link from "next/link";

const Blog = ({ data }: any) => {
  const { ref, isVisible } =
    useInViewOnce<HTMLDivElement>();

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const allBlogs = data?.list ?? [];

  const totalPages = Math.ceil(
    allBlogs.length / postsPerPage
  );

  const startIndex =
    (currentPage - 1) * postsPerPage;

  const blogs = allBlogs.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section
      ref={ref}
      className="py-12 lg:py-16"
    >
      <MaxWidth>
        <div className="w-[70%] mx-auto">
          <Heading
          label="Our Blog"
          labelColor="#9333EA"
          accentColor="#9333EA"
          isAccentLine
          textColor="#000000"
          isVisible={isVisible}
          isCenter={true}
          as="h2"
          className="mx-auto text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          headingParts={[
            {
              text: "Ideas that ",
              color: "#000000",
              weight: 700,
            },
            {
              text: "inspire. Insights",
              gradient: "linear-gradient(to right, #9333EA, #3B82F6)",
              weight: 700,
            }
          ]}
          description="Explore practical insights, technology trends, and expert perspectives on building digital products, creating better experiences, and growing your business with technology."
        />
        </div>

        {/* BLOG CARDS */}
        <div className="mt-4 grid grid-cols-1 gap-[1rem] lg:mt-16 lg:grid-cols-3 lg:gap-[2rem]">
          {blogs.map((item: any, index: number) => (
            <div
              key={item.href || index}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              className={`
                group relative overflow-hidden rounded-2xl
                border-2 border-[#000000]/40
                bg-secondary-bg
                transition-all duration-700
                hover:-translate-y-2
                hover:border-purple-500/40
                ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
                }
              `}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Date + Read Time */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>
                    {new Date(item.date).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-purple-500" />

                  <span>{item.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-primary-color">
                  {item.title}
                </h3>

                {/* Description */}
                {/* <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-gray-500">
                  {item.excerpt}
                </p> */}

                {/* Gradient accent */}
                <div className="mt-8 h-px w-full bg-[#000000]/20">
                  <div className="h-px w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Read More */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
                    SoftQivo
                  </span>

                  <Link
                    href={item.href}
                    className="group/link flex items-center gap-2 text-sm font-semibold text-primary-color/60 transition-colors hover:text-primary-color"
                  >
                    Read More

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover/link:border-purple-500/50 group-hover/link:bg-purple-500/10">
                      <ArrowUpRight className="h-4 w-4 text-gray-400 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-purple-400" />
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

      </MaxWidth>
    </section>
  );
};

export default Blog;