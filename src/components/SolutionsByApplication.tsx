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
        <div className="bg-[#ffffff] py-10 sm:py-12 lg:py-16">

            <MaxWidth className=" ">
                {/* ================= HEADER ================= */}
                <div className="mb-12 grid grid-cols-2">
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
                    />  <div className="flex gap-2 cursor-pointer justify-end h-fit mt-auto">
                        <p className="text-[14px] font-bold text-[#101820] my-auto">Discuss your application</p>
                        <MdArrowBack className="text-[#39B972] rotate-180 my-auto" />
                    </div>
                </div>

                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] justify-between gap-10">
                    <div className="relative h-125">
                        <Image src={"/images/home/solutionsbyapplication.png"} fill alt="SolutionsByApplication" className="object-fill" />
                        <div className="absolute bottom-6 left-6 bg-[#0B1E2D] w-90 p-5 rounded-[5px]">
                            <p className="text-[#39B972] text-[12px] font-bold">LOAD STUDY / EXPORT PALLET</p>
                            <p  className="text-[#ffffff] text-[28px] font-bold">Containment that stays stable beyond the factory gate.</p>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-4 divide divide-y">
                            {list?.map((service: any, index: number) => {
                                return (
                                    <div
                                        key={service.title}
                                        className={`
                                            flex gap-4
                              group relative
                              py-6
                              transition-all duration-300
                              bg-transparent                              
                            `}
                                    >
                                        {/* Icon */}
                                        <div
                                            className="
                                flex h-11 w-11 lg:my-auto
                                justify-center
                                justify-items-center
                                rounded-full
                                bg-[#E6F5EC]
                                p-2
                              "
                                        >
                                            <Image src={"/images/service/icon_6.svg"} width={20} height={20} alt="img" />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-1">
                                            <h3 className="text-[20px] text-center lg:text-left font-bold tracking-[-0.01em] text-[#101820]">
                                                {service.title}
                                            </h3>

                                            <p className="text-[15px] text-center lg:text-left leading-7 text-[#647077]">
                                                {service.description}
                                            </p>
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
                                            <MdArrowBack className="text-[#101820] group-hover:text-[#218B55] rotate-[140deg]"/>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default SolutionsByApplication;
