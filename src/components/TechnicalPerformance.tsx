"use client";

import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
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
                <div className="grid grid-cols-1 lg:grid-cols-[40%_20%] justify-between">
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
                        <p className="pt-2 text-[clamp(10px,0.9vw,14px)] text-[#39B972]">
                            PET STRAP REFERENCE RANGE
                        </p>

                        <h3 className="py-2 text-[clamp(26px,3vw,36px)] font-bold text-[#ffffff]">
                            9–32 mm
                        </h3>

                        <p className="text-[clamp(11px,0.9vw,14px)] text-[#DCE5E8]">
                            Width availability varies by grade and application requirement.
                        </p>
                    </div>
                </div>

                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_50%] gap-4 justify-between">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {listOne?.map((product: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="
    group relative
    bg-transparent
    py-6
    transition-all duration-300
    hover:bg-[#0B1E2D]/20
  "
                                >
                                    {/* Icon */}
                                    <div
                                        className="
      mx-auto flex h-[clamp(40px,3.5vw,44px)]
      w-[clamp(40px,3.5vw,44px)]
      items-center justify-center
      rounded-full
      bg-[#132B3A]
      p-2
      transition-transform duration-300
      group-hover:-translate-y-1
      lg:mx-0
    "
                                    >
                                        <Image
                                            src={product?.image}
                                            width={20}
                                            height={20}
                                            alt="img"
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
        text-[#ffffff]
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
        leading-7
        text-[#DCE5E8]
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
                    <div className="bg-[#132B3A] divide divide-y pl-10 pr-15 py-6 rounded-[20px]">
                        {listTwo?.map((service: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="group relative"
                                >
                                    {/* Content */}
                                    <div className="grid grid-cols-[20%_40%_40%] gap-4 py-6">
                                        <p
                                            className="
        my-auto
        text-center
        text-[clamp(11px,1vw,15px)]
        leading-7
        text-[#39B972]
        lg:text-left
      "
                                        >
                                            {service?.label}
                                        </p>

                                        <h3
                                            className="
        my-auto
        text-center
        text-[clamp(16px,1.5vw,20px)]
        font-bold
        tracking-[-0.01em]
        text-nowrap
        text-[#ffffff]
        lg:text-left
      "
                                        >
                                            {service?.title}
                                        </h3>

                                        <p
                                            className="
        my-auto
        text-center
        text-[clamp(12px,1.1vw,15px)]
        leading-7
        text-[#DCE5E8]
        lg:text-left
      "
                                        >
                                            {service?.description}
                                        </p>
                                    </div>
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
