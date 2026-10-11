"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight } from "react-icons/md";
import Image from "next/image";
import React from "react";
import SaveAndCancel from "./common/SaveAndCancel";
import { useCounter } from "../hooks/useCounter";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const KeyStats = ({ data }: any) => {
    const { headingParts, label, list, description } = data || {};
    const { isDesktop } = useResponsive();
    const CounterValue = ({ value }: { value: string | number }) => {
  const { ref, displayValue } = useCounter(value);

  return (
    <div ref={ref}>
      {displayValue}
    </div>
  );
};
    
    return (
        <div className="bg-[#FFFFFF] py-10 sm:py-12 lg:py-20">

            <MaxWidth className=" ">
                {/* ================= HEADER ================= */}
                {/* <div className="mb-12 grid lg:grid-cols-[50%_25%] justify-between gap-10">
                    <Heading
                        as="h2"
                        isDart={true}
                        isCenter={isDesktop ? false : true}
                        isAccentLine={true}
                        label={label}
                        labelColor="#39B972"
                        accentColor="#39B972"
                        textColor="#000000"
                        isGradient={true}
                        headingParts={headingParts}
                        description={description}
                    />
                    <div className="hidden md:flex gap-2 justify-center lg:justify-end h-fit mt-auto">
                        <ButtonLink saveText="About Our Company" href="/about" />
                    </div>
                </div> */}

                <div className="grid grid-cols-2 gap-y-6 rounded-[20px]  sm:px-7 lg:flex lg:gap-0 lg:px-10">
                    {data?.specifications?.map((item: any, idx: number) => (
                        <div
                            key={idx}
                            className={`
        flex-1
        px-4 sm:px-6
        lg:px-0
        space-y-8
        ${idx % 2 !== 0 ? "border-l  border-gray-300" : ""}
        ${idx >= 2 ? "border-t  border-gray-300 pt-6 lg:border-t-0 lg:pt-0" : ""}
        ${idx !== 0 ? "lg:border-l lg:border-gray-300 lg:pl-15" : "lg:pr-10"}
      `}
                        >
                            <h3 className="text-[clamp(38px,5vw,75px)] flex font-normal leading-none text-[#000000]">
                               <CounterValue value={item?.value} />
                                {item?.suffix}
                            </h3>

                            <p className="mt-2 text-[clamp(14px,1.5vw,18px)] font-semibold leading-tight text-[#000000]">
                                {item?.label}
                            </p>
                        </div>
                    ))}
                </div>
            </MaxWidth>
        </div>
    );
};

export default KeyStats;
