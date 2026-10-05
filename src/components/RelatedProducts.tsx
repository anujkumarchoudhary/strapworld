"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight } from "react-icons/md";
import Image from "next/image";
import React from "react";
import SaveAndCancel from "./common/SaveAndCancel";
import { useStaggerReveal } from "../hooks/useStaggerReveal";
import ButtonLink from "./common/ButtonLink";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

const RelatedProducts = ({ data }: any) => {
  const { headingParts, label, list, description } = data || {};
  const { isDesktop } = useResponsive();
  const {
    ref: productsRef,
    visibleItems,
  } = useStaggerReveal(list?.length || 0, {
    delay: 150,
    threshold: 0.15,
  });

  return (
    <div 
    style={{
      background: data?.bgColor || "#063F3D",
    }}
    id="our-products" ref={productsRef} className=" py-10 sm:py-12 lg:py-16">

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
          <div className="hidden lg:flex gap-2 justify-end h-fit mt-auto">
            <ButtonLink  saveText={data?.button ?? "View all products"} btnColor="#063F3D" href={data?.href ?? "/content"} />

          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list?.map((product: any, index: number) => {
            const isCardVisible = visibleItems.includes(index);

            return (
              <div
                key={product.title}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                className=
                {`group
    flex h-full flex-col
    overflow-hidden
    rounded-[10px]
    bg-white
    transition-all duration-300  ${isCardVisible
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
                    <h3 className="text-center font-semibold tracking-[-0.01em] text-[#16161D] lg:text-left">
                      {product?.title}
                    </h3>

                    <p className="text-[clamp(10px,4vw,26px)] font-bold text-[#218B55]/60">
                      0{index + 1}
                    </p>
                  </div>

                  <p className="text-[#000000]/80 text-left">
                    {product.description}
                  </p>

                  <div className="flex mt-auto  items-end justify-between gap-4">
                    {/* Labels */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      {product?.labels?.map((item: string, idx: number) => (
                        <React.Fragment key={idx}>
                          {idx > 0 && (
                            <span className="text-[10px] text-[#A0A8AD]">
                              •
                            </span>
                          )}

                          <p className="text-[clamp(9px,0.75vw,10px)] font-semibold uppercase text-[#647077]">
                            {item}
                          </p>
                        </React.Fragment>
                      ))}
                    </div>

                    {/* View */}
                    <Link
                      href={product?.href}
                      className="mt-auto flex h-fit cursor-pointer items-center justify-end gap-2 shrink-0"
                    >
                      <p className="my-auto text-[clamp(12px,1vw,14px)] font-bold text-[#101820]">
                        {product.button}
                      </p>

                      <MdArrowBack
                        className="my-auto rotate-180 text-[#39B972] transition-all duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex lg:hidden gap-2 pt-10  justify-center h-fit mt-auto">
            <ButtonLink  saveText={data?.button ?? "View all products"} btnColor="#063F3D" href={data?.href ?? "/content"} />
        </div>
      </MaxWidth>
    </div>
  );
};

export default RelatedProducts;
