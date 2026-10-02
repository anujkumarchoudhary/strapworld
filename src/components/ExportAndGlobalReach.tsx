"use client";

import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import Image from "next/image";
import SaveAndCancel from "./common/SaveAndCancel";
import { useResponsive } from "../hooks/useResponsive";
import { useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const ExportAndGlobalReach = ({ data }: any) => {
    const [open, setOpen] = useState(false);
    const { headingParts, label, description } = data || {};
    const { isDesktop } = useResponsive();

    const {
        ref: productsRef,
        visibleItems,
    } = useStaggerReveal(data?.list?.length || 0, {
        delay: 180,
        threshold: 0.25,
    });

    return (
        <div ref={productsRef} className="relative bg-[#063F3D]">
            <MaxWidth className=" overflow-hidden space-y-12 py-10 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_25%] justify-between">
                    <Heading
                        as="h2"
                        isDart={true}
                        isAccentLine={true}
                        label={label}
                        isCenter={isDesktop ? false : true}
                        labelColor="#39B972"
                        accentColor="#39B972"
                        textColor="#ffffff"
                        isGradient={isDesktop ? false : true}
                        headingParts={headingParts}
                        description={description}
                    />

                    <div className="my-auto  hidden lg:flex justify-end pr-2">
                        <SaveAndCancel saveText={data?.button} saveBgColor="#063F3D" handleClick={() => setOpen(!open)} />
                    </div>
                </div>

                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data?.list?.map((product: any, index: number) => {
                        const isCardVisible = visibleItems.includes(index);

                        return (
                            <div
                                key={index}
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                }}
                                className=
                                {`    group relative
    border border-white/10
    bg-[#101C1B]/20
    p-6
    backdrop-blur-md
    rounded-2xl
    transition-all duration-300
    hover:border-[#39B972]/30
    hover:bg-[#0B1E2D]/20 ${isCardVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                    }`}

                            >
                                <div
                                    className="
      mx-auto flex h-[clamp(40px,3.5vw,44px)]
      w-[clamp(40px,3.5vw,44px)]
      items-center justify-center
      rounded-full
      bg-[#063F3D]
      p-3
      transition-transform duration-300
      group-hover:-translate-y-1
      lg:mx-0
    "
                                >
                                    <div
                                        className="h-full w-full bg-white"
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
        leading-6
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
                            </div>
                        );
                    })}
                </div>
                <div className="my-auto  lg:hidden flex justify-center">
                    <SaveAndCancel saveText={data?.button} saveBgColor="#063F3D" handleClick={() => setOpen(!open)} />
                </div>
            </MaxWidth>
            <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
        </div>
    );
};

export default ExportAndGlobalReach;
