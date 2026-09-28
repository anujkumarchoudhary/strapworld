"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
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
        <div className="relative bg-[#0B1E2D]">
            <MaxWidth className="py-10 sm:py-12 lg:py-16 space-y-14 divide divide-y">
                <div className=" overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-14 pb-10 space-y-10 ">
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
                                        className={`
                  group relative
                  py-2
                  transition-all duration-300
                  bg-transparent
                  hover:bg-[#0B1E2D]/20
                  flex gap-2
                `}
                                    >
                                        <MdCheckCircle size={25} className="text-[#39B972]" />

                                        <p className=" text-[15px] font-semibold text-center lg:text-left leading-7 text-[#DCE5E8]">
                                            {item?.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="relative h-100">
                        <Image src={"/images/home/export_global_reach.png"} fill alt="export_global_reach.png" className="object-fill rounded-[10px]" />
                    </div>
                </div>
                <div className="flex justify-between">
                    {specifications?.map((item: any, idx: number) => {
                        return (
                            <div>
                                <h3 className="text-[44px] font-bold text-[#ffffff]">{item?.value}</h3>
                                <p className="text-[14px] font-medium text-[#DCE5E8]">{item?.label}</p>
                            </div>
                        )
                    })}
                </div>
            </MaxWidth>
        </div>
    );
};

export default ExportAndGlobalReach;
