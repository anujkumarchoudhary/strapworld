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

const SolutionsByApplication = ({ data }: any) => {
    const { headingParts, label, list, description } = data || {};
    const { isDesktop } = useResponsive();
    return (
        <div className="bg-[#FFFFFF] py-12 lg:py-16">

            <MaxWidth className=" ">
                {/* ================= HEADER ================= */}
                <div className="mb-12 grid grid-cols-1 lg:grid-cols-[50%_20%] justify-between">
                    <Heading
                        as="h2"
                        isDart={true}
                        isAccentLine={true}
                        label={label}
                        isCenter={isDesktop ? false : true}
                        labelColor="#39B972"
                        accentColor="#39B972"
                        textColor="#000000"
                        isGradient={true}
                        headingParts={headingParts}
                        description={description}
                    />
                    <div className="group mt-auto hidden lg:flex h-fit cursor-pointer items-center justify-end gap-2">
                        <p className="my-auto text-[clamp(12px,1vw,14px)] font-bold text-[#101820]">
                            Discuss your application
                        </p>

                        <MdArrowBack
                            className="
      my-auto
      rotate-180
      text-[#39B972]
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
                        />
                    </div>
                </div>

                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] justify-between gap-10">
                    <div className="relative w-full aspect-[16/12] overflow-hidden rounded-[30px]">
                        <Image
                            src="/images/home/solutionsbyapplication.png"
                            fill
                            alt="SolutionsByApplication"
                            className="object-cover"
                        />

                        <div
                            className="
      absolute
      bottom-[clamp(16px,2vw,24px)]
      left-[clamp(16px,2vw,24px)]
      right-[clamp(16px,2vw,24px)]
      rounded-[20px]
      pr-20
      bg-[#2E9B4F]
      p-[clamp(16px,1.5vw,20px)]
    "
                        >
                            <p className="text-[clamp(10px,0.8vw,15px)] font-bold text-[#FFFFFF]">
                                LOAD STUDY / EXPORT PALLET
                            </p>

                            <p className="mt-2 text-[clamp(18px,2vw,25px)] font-semibold leading-[1.2] text-white">
                                Containment that stays stable beyond the factory gate.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-4 divide divide-dotted divide-y">
                            {list?.map((service: any, index: number) => {
                                return (
                                    <div
                                        key={service.title}
                                        className="
    group relative
    block lg:flex gap-4
    bg-transparent
    py-6
    transition-all duration-300
  "
                                    >
                                        {/* Icon */}
                                        <div
                                            className="
    flex
    h-[clamp(40px,3.5vw,44px)]
    w-[clamp(40px,3.5vw,44px)]
    shrink-0
    items-center
    justify-center
    mx-auto
    lg:mx-0
    rounded-full
    bg-[#E6F5EC]
    p-2
    transition-colors
    duration-300
    group-hover:bg-[#218B55]
    lg:my-auto
  "
                                        >
                                            <span
                                                className="
      block
      h-5
      w-5
      bg-[#218B55]
      transition-colors
      duration-300
      group-hover:bg-white
      [mask-image:var(--icon)]
      [mask-position:center]
      [mask-repeat:no-repeat]
      [mask-size:contain]
      [-webkit-mask-image:var(--icon)]
      [-webkit-mask-position:center]
      [-webkit-mask-repeat:no-repeat]
      [-webkit-mask-size:contain]
    "
                                                style={{
                                                    "--icon": `url(${service?.image})`,
                                                } as React.CSSProperties}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-1">
                                            <h3
                                                className="
        text-center
        text-[clamp(17px,1.5vw,20px)]
        font-bold
        tracking-[-0.01em]
        text-[#101820]
        lg:text-left
      "
                                            >
                                                {service.title}
                                            </h3>

                                            <p
                                                className="
        text-center
        text-[clamp(13px,1.1vw,15px)]
        leading-7
        text-[#647077]
        lg:text-left
      "
                                            >
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        <div
                                            className="
      absolute
      bottom-5
      right-5
      hidden
      lg:flex
      h-7
      w-7
      items-center
      justify-center
      text-[#9999A3]
      transition-all
      duration-300
      group-hover:translate-x-1
    "
                                        >
                                            <MdArrowBack
                                                size={40}
                                                className="
        rotate-[140deg]
        text-[#101820]
        transition-colors
        duration-300
        group-hover:text-[#218B55]
      "
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="group mt-auto flex lg:hidden h-fit cursor-pointer items-center justify-center gap-2">
                    <p className="my-auto text-[clamp(12px,1vw,14px)] font-bold text-[#101820]">
                        Discuss your application
                    </p>

                    <MdArrowBack
                        className="
      my-auto
      rotate-180
      text-[#39B972]
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
                    />
                </div>
            </MaxWidth>
        </div>
    );
};

export default SolutionsByApplication;
