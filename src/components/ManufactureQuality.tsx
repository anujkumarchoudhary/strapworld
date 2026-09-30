"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight, MdCheck } from "react-icons/md";
import Image from "next/image";
import SaveAndCancel from "./common/SaveAndCancel";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const ManufactureQuality = ({ data }: any) => {
    const { headingParts, label, list, labels, description } = data || {};
    const { isDesktop } = useResponsive()
    return (
        <div className="bg-[#FCFBF7] py-10 sm:py-12 lg:py-16">
            <MaxWidth className=" ">
                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_50%] justify-between gap-14">
                    <div className="relative w-full aspect-[16/15] overflow-hidden rounded-[30px]">
                        <Image
                            src="/images/manufacture_quality/image_1.png"
                            fill
                            alt="SolutionsByApplication"
                            className="object-cover"
                        />

                        <div
                            className="
      absolute
      top-[clamp(16px,2vw,24px)]
      left-[clamp(16px,2vw,24px)]
      w-[clamp(260px,28vw,360px)]
      rounded-[15px]
      bg-[#0B1E2D]
      p-[clamp(16px,1.5vw,20px)]
    "
                        >
                            <p className="text-[clamp(10px,0.8vw,12px)] font-bold text-[#39B972]">
                                PROCESS CONTROL / WINDING
                            </p>

                            <p className="mt-2 text-[clamp(12px,1.2vw,14px)] font-normal leading-6 text-[#DCE5E8]">
                                Profile, surface and winding quality are reviewed through production—not only at dispatch.
                            </p>
                        </div>
                    </div>
                    <div>
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
                            className="w-[90%]"
                        />
                        <div className="space-y-4 divide divide-y divide-gray-300">
                            {list?.map((service: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="
        group relative
        flex gap-4
        bg-transparent
        py-5 sm:py-6
        transition-all duration-300
      "
                                    >
                                        {/* Index */}
                                        <div
                                            className="
          flex
          h-[clamp(38px,3.5vw,44px)]
          w-[clamp(38px,3.5vw,44px)]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#2E9B4F]
          p-2
          lg:my-auto
        "
                                        >
                                            <p className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#FFFFFF]">
                                                0{index + 1}
                                            </p>
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1 space-y-1">
                                            <h3
                                                className="
            text-left
            text-[clamp(17px,1.5vw,20px)]
            font-bold
            leading-tight
            tracking-[-0.01em]
            text-[#101820]
          "
                                            >
                                                {service.title}
                                            </h3>

                                            <p
                                                className="
            text-left
            text-[clamp(13px,1.1vw,15px)]
            leading-6 sm:leading-7
            text-[#647077]
          "
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grid justify-center lg:justify-center-0 lg:grid-cols-3 border-t border-t-gray-300 py-8 gap-4">
                            <SaveAndCancel saveText={data?.button} saveBgColor="#0B1E2D" saveTextColor="#ffffff" />
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default ManufactureQuality;
