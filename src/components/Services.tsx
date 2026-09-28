"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight } from "react-icons/md";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

const Services = ({ data }: any) => {
  const { headingParts, label, list, description } = data || {};
  const { isDesktop } = useResponsive();
  return (
    <div className="bg-[#F3F1EA] py-10 sm:py-12 lg:py-16">

      <MaxWidth className=" ">
        {/* ================= HEADER ================= */}
        <div className="mb-12 grid grid-cols-2">
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
              />          <div className="flex gap-2 cursor-pointer justify-end h-fit mt-auto">
            <p className="text-[14px] font-bold text-[#101820] my-auto">View all products</p>
            <MdArrowBack className="text-[#39B972] rotate-180 my-auto" />
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((service: any, index: number) => {
            return (
              <div
                key={service.title}
                className="relative h-110 bg-white rounded-[10px] border border-[#D7D9D3]"
              >
                {/* image */}
                <div className="absolute h-70 w-full">
                  <Image src={service?.image} fill alt={service.title} className="object-fill rounded-tl-[10px] rounded-tr-[10px]" />
                </div>

                {/* Content */}
                <div className="mt-8 space-y-2 absolute bottom-0 w-full py-10 px-6">
                  <div className="flex justify-between">
                    <h3 className="text-[28px] text-center lg:text-left font-semibold tracking-[-0.01em] text-[#16161D]">
                      {service.title}
                    </h3>
                    <p className="text-[#218B55] text-[12px] font-bold">0{index + 1}</p>
                  </div>

                  <p className="text-[14px] text-center lg:text-left leading-7 text-[#647077]">
                    {service.description}
                  </p>

                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      {service?.labels?.map((item: any, idx: number) => {
                        return (
                          <p className="text-[10px] text-[#647077] font-semibold uppercase">{item}</p>
                        )
                      })}
                    </div>
                    <div className="flex gap-2 cursor-pointer justify-end h-fit mt-auto">
                      <p className="text-[14px] font-bold text-[#101820] my-auto">View</p>
                      <MdArrowBack className="text-[#39B972] rotate-180 my-auto" />
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div
                  className="
                    absolute bottom-5 right-5
                    flex h-7 w-7 items-center justify-center
                    text-[#9999A3]
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#7C3AED]
                  "
                >
                  {/* <ArrowUpRight size={17} strokeWidth={1.8} /> */}
                </div>

                {/* Hover Line */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-[2px] w-0
                    bg-gradient-to-r
                    from-[#A855F7]
                    to-[#2563EB]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </div>
  );
};

export default Services;
