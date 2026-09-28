"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const TechnicalPerformance = ({ data }: any) => {
    const { headingParts, label, listOne, listTwo, description } = data || {};
    return (
        <div className="relative bg-[#0B1E2D]">
            <MaxWidth className=" overflow-hidden space-y-12 py-10 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[50%_18%] justify-between">
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

                    <div className="mt-auto pl-4">
                        <p className="text-[14px] text-[#39B972] pt-2">PET STRAP REFERENCE RANGE</p>
                        <h3 className="text-[36px]  py-2 font-bold text-[#ffffff]">9–32 mm</h3>
                        <p className="text-[14px] text-[#647077]">Width availability varies by grade and application requirement.</p>
                    </div>
                </div>

                {/* ================= SERVICES ================= */}
                <div className="flex gap-4 justify-between">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {listOne?.map((service: any, index: number) => {
                            console.log(service, "service1212")
                            return (
                                <div
                                    key={service.title}
                                    className={`
                  group relative
                  p-6
                  transition-all duration-300
                  bg-transparent
                  hover:bg-[#0B1E2D]/20
                  
                `}
                                >
                                    {/* Icon */}
                                    <div
                                        className="
                    flex h-11 w-11 mx-auto lg:mx-0 items-center justify-center
                    rounded-full
                    bg-[#132B3A]
                    p-2
                    transition-transform duration-300
                    group-hover:-translate-y-1
                  "
                                    >
                                        <Image src={"/images/service/icon_6.svg"} width={20} height={20} alt="img" />
                                    </div>

                                    {/* Content */}
                                    <div className="mt-8">
                                        <h3 className="text-[20px] text-center lg:text-left font-bold tracking-[-0.01em] text-[#ffffff]">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 text-[15px] text-center lg:text-left leading-7 text-[#DCE5E8]">
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
                                        {/* <ArrowUpRight size={17} strokeWidth={1.8} /> */}
                                    </div>

                                    {/* Hover Line */}
                                    <div
                                        className="
                    absolute bottom-0 left-0
                    h-0.5 w-0
                    bg-[#218B55]
                    transition-all duration-300
                    group-hover:w-full
                  "
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="">
                        {listTwo?.map((service: any, index: number) => {
                            return (
                                <div
                                    key={service.title}
                                    className={`
                  group relative
                  border-b border-[#D7D9D3]
                  p-6
                  transition-all duration-300
                  bg-white
                  hover:bg-[#FAF9FF]
                  border rounded-[5px]
                `}
                                >
                                    {/* Content */}
                                    <div className="mt-8 flex gap-10">
                                        <p className="text-[15px] text-center lg:text-left my-auto  leading-7 text-[#647077]">
                                            {service?.label}
                                        </p>
                                        <h3 className="text-[20px] text-center text-nowrap my-auto lg:text-left font-bold tracking-[-0.01em] text-[#101820]">
                                            {service?.title}
                                        </h3>
                                        <p className=" text-[15px] text-center lg:text-left my-auto  leading-7 text-[#647077]">
                                            {service?.description}
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
                                        {/* <ArrowUpRight size={17} strokeWidth={1.8} /> */}
                                    </div>

                                    {/* Hover Line */}
                                    <div
                                        className="
                    absolute bottom-0 left-0
                    h-0.5 w-0
                    bg-[#218B55]
                    transition-all duration-300
                    group-hover:w-full
                  "
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default TechnicalPerformance;
