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
    const { headingParts, label, labels, specifications, listOne, listTwo, description } = data || {};
    return (
        <div className="relative bg-[#101820]">
            <MaxWidth className="py-10 sm:py-12 lg:py-16 space-y-10 divide divide-y">
                <div className=" overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-14 pb-15 space-y-10 ">
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
                        <div className="grid grid-cols-3">
                            {labels?.map((item: any, index: number) => {
                                return (
                                    <div
                                        key={item.label}
                                        className="
    group relative
    flex gap-2
    bg-transparent
    py-2
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
                <div className="flex justify-between gap-4">
                    {specifications?.map((item: any, idx: number) => (
                        <div key={idx}>
                            <h3 className="text-[clamp(28px,3.2vw,44px)] font-bold text-[#ffffff]">
                                {item?.value}
                            </h3>

                            <p className="text-[clamp(11px,1vw,14px)] font-medium text-[#DCE5E8]">
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
