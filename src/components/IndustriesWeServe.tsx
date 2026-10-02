"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowOutward, MdArrowRight } from "react-icons/md";
import Image from "next/image";
import React, { useState } from "react";
import SaveAndCancel from "./common/SaveAndCancel";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

const IndustriesWeServe = ({ data }: any) => {
  const { headingParts, label, list, description } = data || {};
  const { isDesktop } = useResponsive();
  const {
    ref: productsRef,
    visibleItems,
  } = useStaggerReveal(data?.list?.length || 0, {
    delay: 180,
    threshold: 0.25,
  });
  return (
    <div ref={productsRef} className="bg-[#F5F7F2] py-10 sm:py-12 lg:py-16">

      <MaxWidth className=" ">
        {/* ================= HEADER ================= */}
        <div className="mb-12 grid lg:grid-cols-[45%_25%] justify-between">
          {/* Left */}
          <Heading
            as="h2"
            isDart={true}
            isCenter={isDesktop ? false : true}
            isAccentLine={true}
            label={label}
            labelColor="#39B972"
            accentColor="#39B972"
            textColor={data?.textColor || "#ffffff"}
            isGradient={true}
            headingParts={headingParts}
            description={description}
          />
          {/* <div className="hidden md:flex gap-2 cursor-pointer justify-end h-fit mt-auto">
            <SaveAndCancel saveText="View all products" />
          </div> */}
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((product: any, index: number) => {
            const isCardVisible = visibleItems.includes(index);

            return (
              <div
                key={product.title}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                className=
                {`   group
    flex h-full flex-col
    overflow-hidden
    rounded-[10px]
    bg-white
    transition-all duration-300 ${isCardVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
              >
                {/* image */}
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={product?.image}
                    fill
                    alt={product.title}
                    className="rounded-tl-[10px] rounded-tr-[10px] object-cover   transition-transform
              duration-500
              ease-out
              group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col w-full space-y-5 p-8">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-center text-[21px] font-semibold tracking-[-0.01em] text-[#16161D] lg:text-left">
                      {product?.title}
                    </h3>

                    <MdArrowOutward size={21} className="text-[#2E9B4F]" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </div>
  );
};

export default IndustriesWeServe;
