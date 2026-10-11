"use client";

import React, { useState } from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import blog from "../../public/images/blog_1.jpg";
import blog2 from "../../public/images/blog2.jpg";
import blog3 from "../../public/images/blog3.jpg";
import Image from "next/image";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Pagination from "./Pagination";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { useResponsive } from "../hooks/useResponsive";
import SaveAndCancel from "./common/SaveAndCancel";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

const Blog = ({ data }: any) => {
  const { ref, isVisible } =
    useInViewOnce<HTMLDivElement>();
  const { isDesktop } = useResponsive()
  const {
    ref: productsRef,
    visibleItems,
  } = useStaggerReveal(data?.list?.length || 0, {
    delay: 180,
    threshold: 0.25,
  });

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
      ref={productsRef}
      className="py-10 md:py-12 lg:py-20 bg-[#FFFFFF]"
    >
      <MaxWidth>
        {/* ================= HEADER ================= */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-[70%_30%]">
          <Heading
            as="h2"
            isDart={true}
            isAccentLine={true}
            isCenter={isDesktop ? false : true}
            label={data?.label}
            labelColor="#39B972"
            accentColor="#39B972"
            textColor="#647077"
            isGradient={true}
            headingParts={data?.headingParts}
            description={data?.description}
            className="w-full lg:w-150"
          />
          <div className="hidden lg:flex gap-2 cursor-pointer justify-end h-fit mt-auto">
            <SaveAndCancel saveText="View All Blogs" />
          </div>
        </div>

        {/* BLOG CARDS */}
        <div className="mt-4 grid grid-cols-1 gap-[1rem] lg:mt-16 lg:grid-cols-3 lg:gap-[2rem]">
          {blogs?.map((item: any, index: number) => {
            const isCardVisible = visibleItems.includes(index);

            return (
              <div
                key={item.href || index}

                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                className={`
                group relative overflow-hidden rounded-2xl flex flex-col
                border border-[#647077]/20
                bg-white
                hover:border-[#218B55]/20
                transition-all duration-300
                ${isCardVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                  }
              `}
              >
                {/* Image */}
                <div className="relative aspect-[16/12] overflow-hidden">
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col space-y-4 px-6 py-5">

                  {/* Date + Read Time */}
                  <div className="flex justify-between gap-3 text-gray-500">
                    <span className="text-[12px] font-bold text-[#218B55] uppercase">{item?.category}</span>
                    <span className="text-[12px] font-normal">{item?.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-primary-color">
                    {item?.title}
                  </h3>

                  {/* Description */}
                  <p className="line-clamp-3 text-[15px] leading-6 text-[#647077]">
                    {item.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={item.href}
                    className="group/link p-2 mt-auto flex items-center gap-2 text-sm font-bold text-[#101820] transition-colors hover:text-primary-color"
                  >
                    Read more
                    <ArrowUpRight className="h-4 w-4 rotate-45 font-bold text-[#218B55] transition-all duration-300 group-hover/link:-translate-x-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-[#218B55]" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pagination */}
        {/* {blog &&
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />} */}
      </MaxWidth>
    </section>
  );
};

export default Blog;