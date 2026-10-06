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

const OurProducts = ({ data }: any) => {
  const { headingParts, label, list, description } = data || {};
  const { isDesktop } = useResponsive();
  const {
    ref: productsRef,
    visibleItems,
  } = useStaggerReveal(list?.length || 0, {
    delay: 150,
    threshold: 0.15,
  });
  const [top, bottom] = data?.padding ?? ["5rem", "5rem"]
  return (
    <div
      style={{
        paddingTop: isDesktop && top,
        paddingBottom: isDesktop && bottom,
        background: data?.bgColor || "#063F3D",
      }}
      id="our-products" ref={productsRef} className=" py-10 sm:py-12 lg:py-0">

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
            
            <ButtonLink saveText={data?.button ?? "View all products"} btnColor="#063F3D" href={data?.href ?? "/content"} />

          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {list.map((product: any, index: number) => {
            const isCardVisible = visibleItems.includes(index);

            return (
              <div
                key={product.title}
                // style={{
                //   transitionDelay: `${index * 20}ms`,
                // }}
                className=
                {`group
    flex h-full flex-col
    overflow-hidden
    rounded-[10px]
    bg-white
    transition-all duration-300  `}

              >
                {/* image */}
                <div className="relative w-full aspect-16/16">
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
                <div className="space-y-3 p-6">
                  <div className="flex justify-between"><h3 className="text-center text-[20px] font-semibold tracking-[-0.01em] text-[#16161D] lg:text-left">
                    {product?.title}

                  </h3>
                    <Link
                      href={product?.slug ?? "#"}
                      className="mt-auto flex h-fit cursor-pointer items-center justify-end gap-2 shrink-0"
                    >
                      <MdArrowBack
                        size={40}
                        className="my-auto rotate-180 text-[#39B972] bg-[w#063F3D] p-2 transition-all duration-300 rounded-full group-hover:translate-x-1"
                      />
                    </Link></div>
                  <p className="text-[#000000]/80 text-[16px] text-left">
                    {product.description?.slice(0, 50)}
                  </p>

                  {/* View */}

                </div>
              </div>
            );
          })}
        </div>
        <div className="flex lg:hidden gap-2 pt-10  justify-center h-fit mt-auto">
          <ButtonLink saveText={data?.button ?? "View all products"} btnColor="#FFFFFF" btnBgColor="#2E9B4F" href={data?.href ?? "/content"} />
        </div>
      </MaxWidth>
    </div>
  );
};

export default OurProducts;
