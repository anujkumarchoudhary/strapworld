"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight, MdCheck } from "react-icons/md";
import Image from "next/image";
import SaveAndCancel from "./common/SaveAndCancel";
import { useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";
import { FiMapPin } from "react-icons/fi";
import ButtonLink from "./common/ButtonLink";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const ManufactureProcess = ({ data }: any) => {
    const [open, setOpen] = useState(false);
    const { headingParts, label, list, labels, description } = data || {};
    const { isDesktop } = useResponsive()
    return (
        <div
            style={{ background: data?.bgColor ?? "#FCFBF7" }}
            className="py-10 md:12 lg:py-20">
            <MaxWidth className=" ">
                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_50%] justify-between gap-14">
                    <div
                        style={{ aspectRatio: data?.aspectRatio }}
                        className="relative w-full  overflow-hidden rounded-[30px]">
                        <Image
                            src={data?.image ?? "/images/home/process_01.png"}
                            fill
                            alt="SolutionsByApplication"
                            className="object-cover"
                        />

                        <div
                            className="
      absolute
      top-[clamp(16px,2vw,24px)]
      left-[clamp(16px,2vw,24px)]
      w-fit
      rounded-[15px]
      bg-[#FFFFFF]
      p-[clamp(16px,1.5vw,20px)]
      flex gap-2
    "
                        >
                            {data?.floatingCardOne?.icon && <FiMapPin size={20} className="text-[#2E9B4F]" />}
                            <p className="text-[clamp(10px,1.2vw,14px)] uppercase font-bold text-[#101820]">
                                {data?.floatingCardOne?.title ?? "In-process inspection"}
                            </p>
                        </div>
                        <div
                            className="
      absolute
      bottom-[clamp(16px,2vw,24px)]
      left-[clamp(16px,2vw,24px)]
      w-fit
      rounded-[15px]
      bg-transparent
      p-[clamp(16px,1.5vw,20px)]
      flex gap-2
    "
                        >
                            <h3 className=" capitalize font-normal leading-8 lg:leading-11 pr-10 lg:pr-40 text-[#FFFFFF]">
                                {data?.floatingCardTwo?.description ?? "In-process inspection"}
                            </h3>
                        </div>
                    </div>
                    <div className="space-y-4">
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
                        <div className=" divide divide-y divide-gray-300">
                            {list?.map((service: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="
        group relative
        flex gap-4
        bg-transparent
        py-4 sm:py-5
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
          bg-[#E6F5EC]
          p-2
          lg:mb-auto
        "
                                        >
                                            <p className="text-[clamp(10px,0.9vw,12px)] font-bold text-[#2E9B4F]">
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
                            {data?.href && <ButtonLink saveText={data?.button} btnBgColor={"#063F3D"} btnColor={"#ffffff"} href={data?.href} />}
                            {data?.isButton && <SaveAndCancel saveText={data?.button} saveBgColor={"#063F3D"} saveTextColor={"#ffffff"} handleClick={()=>setOpen(!open)} />}

                        </div>
                    </div>
                </div>
            </MaxWidth>
            <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
        </div>
    );
};

export default ManufactureProcess;
