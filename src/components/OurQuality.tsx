"use client";

import React from "react";
import Image from "next/image";
import {
    FiCheckCircle,
    FiShield,
    FiActivity,
    FiLayers,
} from "react-icons/fi";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";

const qualityPoints = [
    {
        icon: FiShield,
        title: "High Strength",
        description:
            "Designed to provide dependable tensile strength and secure loads during handling, storage and transportation.",
    },
    {
        icon: FiCheckCircle,
        title: "Consistent Quality",
        description:
            "We maintain consistency across dimensions, strength and product performance for reliable results.",
    },
    {
        icon: FiActivity,
        title: "Performance Focused",
        description:
            "Our strapping solutions are developed to perform reliably across demanding packaging and industrial applications.",
    },
    {
        icon: FiLayers,
        title: "Quality Inspection",
        description:
            "Products are carefully inspected to help maintain the quality and specifications expected by our customers.",
    },
];

const OurQuality = () => {
    return (
        <section className="relative overflow-hidden bg-[#F7F9F5] py-10 md:py-12 lg:py-20">
            <MaxWidth>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    {/* Left Content */}
                    <div>
                        <Heading
                            isAccentLine
                            accentColor="#2E9B4F"
                            labelColor="#2E9B4F"
                            label="Our Quality"
                            headingParts={[
                                {
                                    text: "Quality that keeps every load secure.",
                                    color: "#063F3D",
                                },
                            ]}
                            description="We believe reliable strapping starts with consistent quality. Every solution is focused on strength, stability and dependable performance throughout the supply chain."
                        />

                        {/* Quality Points */}
                        <div className="mt-10 space-y-6">
                            {qualityPoints.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group flex gap-4 border-b border-[#063F3D]/10 pb-6"
                                    >
                                        {/* Icon */}
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063F3D] text-[#39B972] transition-all duration-300 group-hover:bg-[#39B972] group-hover:text-white">
                                            <Icon className="text-lg" />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="font-montserrat text-sm font-bold text-[#063F3D]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1.5 max-w-lg font-montserrat text-sm leading-6 text-[#16161D]/60">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative aspect-[4/4.5] overflow-hidden rounded-[30px]">
                            <Image
                                src="/images/products/pp_strap/pet_strap_01.png"
                                alt="Strap World product quality inspection"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Quality Badge */}
                        <div className="absolute bottom-6 left-5 rounded-2xl bg-white p-5 shadow-xl sm:left-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#39B972]/10">
                                    <FiCheckCircle className="text-xl text-[#2E9B4F]" />
                                </div>

                                <div>
                                    <p className="font-montserrat text-sm font-bold text-[#063F3D]">
                                        Quality First
                                    </p>

                                    <p className="mt-0.5 font-montserrat text-[10px] uppercase tracking-[0.1em] text-[#16161D]/45">
                                        Every Production Batch
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-2xl border border-[#39B972]/30" />
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default OurQuality;