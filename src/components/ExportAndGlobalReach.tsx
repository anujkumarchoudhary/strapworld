"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { MdArrowBack, MdCheck, MdCheckCircle } from "react-icons/md";
import Image from "next/image";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const ExportAndGlobalReach = ({ data }: any) => {
    const { headingParts, label, labels, specifications, description } = data || {};
    return (
        <div className="relative bg-[#1E2928]">
            <MaxWidth className="py-10 sm:py-12 lg:py-16 space-y-10">
                <div className=" overflow-hidden grid grid-cols-1 lg:grid-cols-[45%_45%] justify-between ">
                    <div className="space-y-5">
                        <Heading
                            as="h2"
                            isDart={true}
                            isAccentLine={true}
                            label={label}
                            labelColor="#39B972"
                            accentColor="#39B972"
                            textColor="#DCE5E8"
                            isGradient={true}
                            headingParts={headingParts}
                            description={description}
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-3 pb-8 lg:pb-0">
                            {labels?.map((item: any, index: number) => {
                                return (
                                    <div
                                        key={item.label}
                                        className="
    group relative
    flex gap-2
    bg-transparent
    lg:py-2
    transition-all duration-300
    hover:bg-[#0B1E2D]/20
  "
                                    >
                                        <MdCheckCircle
                                            className="
      mt-1
      shrink-0
      text-[clamp(18px,2vw,25px)]
      text-[#39B972]
    "
                                        />

                                        <p
                                            className="
      text-center
      text-[clamp(13px,1.1vw,15px)]
      font-semibold
      leading-7
      text-[#DCE5E8]
      lg:text-left
    "
                                        >
                                            {item?.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[10px]">
                        <Image
                            src="/images/home/export_global_reach.png"
                            fill
                            alt="Global export reach"
                            className="rounded-[10px] object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-y-6 rounded-[20px] bg-white p-5 sm:p-7 lg:flex lg:gap-0 lg:p-10">
                    {specifications?.map((item: any, idx: number) => (
                        <div
                            key={idx}
                            className={`
        flex-1
        px-4 sm:px-6
        lg:px-0
        ${idx % 2 !== 0 ? "border-l border-dotted border-black/20" : ""}
        ${idx >= 2 ? "border-t border-dotted border-black/20 pt-6 lg:border-t-0 lg:pt-0" : ""}
        ${idx !== 0 ? "lg:border-l lg:border-dotted lg:border-black/20 lg:pl-15" : "lg:pr-10"}
      `}
                        >
                            <h3 className="text-[clamp(38px,5vw,75px)] font-normal leading-none text-[#000000]">
                                {item?.value}
                                {item?.suffix}
                            </h3>

                            <p className="mt-2 text-[clamp(14px,1.5vw,22px)] font-semibold leading-tight text-[#000000]">
                                {item?.label}
                            </p>
                        </div>
                    ))}
                </div>
            </MaxWidth>
        </div>
    );
};

export default ExportAndGlobalReach;
