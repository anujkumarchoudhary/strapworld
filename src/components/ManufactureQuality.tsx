"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight } from "react-icons/md";
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
    return (
        <div className="bg-[#ffffff] py-10 sm:py-12 lg:py-16">
            <MaxWidth className=" ">
                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] justify-between gap-14">
                    <div className="relative h-175">
                        <Image src={"/images/home/solutionsbyapplication.png"} fill alt="SolutionsByApplication" className="object-fill" />
                        <div className="absolute top-6 left-6 bg-[#0B1E2D] w-90 p-5 rounded-[5px]">
                            <p className="text-[#39B972] text-[12px] font-bold">LOAD STUDY / EXPORT PALLET</p>
                            <p className="text-[#ffffff] text-[28px] font-bold">Containment that stays stable beyond the factory gate.</p>
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
                                bg-[#0B1E2D]
                                p-2
                              "
                                        >
                                            <p className="text-[#39B972] tex-[12px] font-bold">0{index + 1}</p>
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
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grid grid-cols-3 border-t py-8 gap-4">
                            {labels?.map((item: any, idx: number) => {
                                return (
                                    <div className="bg-[#E6F5EC] flex gap-4 px-6 py-4 rounded-[10px]">
                                        <Image src={""} width={16} h-16 alt="" />
                                        <p className="text-[#101820] text-[12px] font-bold">{item?.label}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <SaveAndCancel saveText={data?.button}/>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default ManufactureQuality;
