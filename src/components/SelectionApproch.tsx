"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight, MdCheck } from "react-icons/md";
import Image from "next/image";
import SaveAndCancel from "./common/SaveAndCancel";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const SelectionApproch = ({ data }: any) => {
    const { isDesktop } = useResponsive()
    return (
        <div className="bg-[#FFFFFF] py-12 lg:py-16">
            <MaxWidth className=" space-y-10">
                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_50%] justify-between gap-14">
                    <div className="space-y-8">
                        <Heading
                            as="h2"
                            isDart={true}
                            isAccentLine={true}
                            label={data?.label}
                            labelColor="#39B972"
                            accentColor="#39B972"
                            textColor="#647077"
                            isGradient={true}
                            headingParts={data?.headingParts}
                            description={data?.description}
                            className="w-[90%]"
                        />
                        <div className="space-y-4">
                            {data?.labels?.map((service: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="
                                        bg-[#063F3D]
        group relative
        flex gap-4
        rounded-[15px]
        py-5 sm:py-6
          px-6 sm:px-8
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
          lg:my-auto
        "
                                        >
                                            {/* <Image src={service?.icon} width={21} height={21} alt={service?.name} /> */}
                                            <IoShieldCheckmarkOutline size={31} className="text-[#FFFFFF]"/>
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1 space-y-1">
                                           {/*  <p
                                                className="
            text-left
            font-bold
            leading-7
            tracking-[-0.01em]
            text-[#FFFFFF]
          "
                                            >
                                                {service.name}
                                            </p> */}

                                            <p
                                                className="
            text-left
            text-[clamp(13px,1.1vw,15px)]
            leading-6 sm:leading-7
            text-[#FFFFFF]
          "
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {data?.list?.map((product: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="
    group relative
    border border-white/10
    bg-[#F5F7F2]
    p-6
    backdrop-blur-md
    rounded-2xl
    transition-all duration-300
    hover:border-[#2E9B4F]
  "
                                >
                                    <div
                                        className="
      mx-auto flex h-[clamp(40px,3.5vw,44px)]
      w-[clamp(40px,3.5vw,44px)]
      items-center justify-center
      rounded-full
      bg-[#E6F5EC]
      p-3
      transition-transform duration-300
      group-hover:-translate-y-1
      lg:mx-0
    "
                                    >
                                        <div
                                            className="h-full w-full bg-[#2E9B4F]"
                                            style={{
                                                maskImage: `url(${product?.image})`,
                                                WebkitMaskImage: `url(${product?.image})`,
                                                maskRepeat: "no-repeat",
                                                WebkitMaskRepeat: "no-repeat",
                                                maskPosition: "center",
                                                WebkitMaskPosition: "center",
                                                maskSize: "contain",
                                                WebkitMaskSize: "contain",
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="mt-8">
                                        <h3
                                            className="
        text-center
        text-[clamp(18px,1.7vw,20px)]
        font-bold
        tracking-[-0.01em]
        text-[#101820]
        lg:text-left
      "
                                        >
                                            {product?.title}
                                        </h3>

                                        <p
                                            className="
        mt-3
        text-center
        text-[clamp(13px,1.2vw,15px)]
        leading-6
        text-[#647077]
        lg:text-left
      "
                                        >
                                            {product?.description}
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

export default SelectionApproch;
