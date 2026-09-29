"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight } from "react-icons/md";
import Image from "next/image";
import React from "react";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

const OurProducts = ({ data }: any) => {
  const { headingParts, label, list, description } = data || {};
  const { isDesktop } = useResponsive();
  return (
    <div className="bg-[#F3F1EA] py-10 sm:py-12 lg:py-16">

      <MaxWidth className=" ">
        {/* ================= HEADER ================= */}
        <div className="mb-12 grid grid-cols-[45%_25%] justify-between">
          {/* Left */}
          <Heading
            as="h2"
            isDart={true}
            isAccentLine={true}
            label={label}
            labelColor="#39B972"
            accentColor="#39B972"
            textColor="#647077"
            isGradient={true}
            headingParts={headingParts}
            description={description}
          />
          <div className="flex gap-2 cursor-pointer justify-end h-fit mt-auto">
            <p className="my-auto text-[clamp(12px,1vw,14px)] font-bold text-[#101820]">
              View all products
            </p>
            <MdArrowBack className="text-[#39B972] rotate-180 my-auto" />
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((service: any, index: number) => {
            return (
              <div
                key={service.title}
                className="group overflow-hidden   transition-all duration-300 bg-white rounded-[10px] border border-[#D7D9D3]"
              >
                {/* image */}
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={service?.image}
                    fill
                    alt={service.title}
                    className="rounded-tl-[10px] rounded-tr-[10px] object-cover   transition-transform
              duration-500
              ease-out
              group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="w-full space-y-3 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[clamp(20px,2vw,28px)] text-center font-semibold tracking-[-0.01em] text-[#16161D] lg:text-left">
                      {service.title}
                    </h3>

                    <p className="text-[clamp(10px,0.85vw,12px)] font-bold text-[#218B55]">
                      0{index + 1}
                    </p>
                  </div>

                  <p className="text-[clamp(12px,1vw,14px)] text-center leading-7 text-[#647077] lg:text-left">
                    {service.description}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    {/* Labels */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      {service?.labels?.map((item: string, idx: number) => (
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
                    <div className="mt-auto flex h-fit cursor-pointer items-center justify-end gap-2 shrink-0">
                      <p className="my-auto text-[clamp(12px,1vw,14px)] font-bold text-[#101820]">
                        View
                      </p>
                      <MdArrowBack className="my-auto rotate-180 text-[#39B972] transition-all duration-300
                    group-hover:translate-x-1" />
                    </div>
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

export default OurProducts;
