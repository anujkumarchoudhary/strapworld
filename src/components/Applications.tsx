"use client";

import Image from "next/image";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { FiArrowUpRight } from "react-icons/fi";

const applications = [
    {
        number: "01",
        title: "Packaging",
        description:
            "Secure cartons, boxes and packaged goods for safe handling, storage and transportation.",
        image: "/images/applications/image_1.jpg",
    },
    {
        number: "02",
        title: "Logistics & Transportation",
        description:
            "Keep palletized loads stable and protected during handling and transportation.",
        image: "/images/applications/image_3.jpg",
    },
    {
        number: "03",
        title: "Paper & Printing",
        description:
            "Reliable strapping for paper rolls, printed materials and paper products.",
        image: "/images/applications/image_5.jpg",
    },
    {
        number: "04",
        title: "Textile Industry",
        description:
            "Strong strapping solutions for textile rolls, bundles and finished products.",
        image: "/images/applications/image_4.jpg",
    },
    {
        number: "05",
        title: "Construction Materials",
        description:
            "Secure heavy construction materials and bundled products for safer movement.",
        image: "/images/applications/image_2.jpg",
    },
    // {
    //     number: "06",
    //     title: "Industrial Manufacturing",
    //     description:
    //         "Industrial-grade strapping for demanding production and material-handling applications.",
    //     image: "/images/applications/image_2.jpg",
    // },
];

const Applications = () => {
    const featured = applications[0];
    const secondary = applications.slice(1, 5);

    return (
        <section className="relative overflow-hidden bg-white py-10 md:py-12 lg:py-20">
            <MaxWidth>
                {/* Header */}
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <Heading
                            isAccentLine
                            accentColor="#39B972"
                            labelColor="#2E9B4F"
                            label="Applications"
                            headingParts={[
                                {
                                    text: "Strapping solutions for ",
                                    color: "#063F3D",
                                },
                                {
                                    text: "every application",
                                    color: "#2E9B4F",
                                },
                            ]}
                            description="From packaging and logistics to demanding industrial environments, our PET strapping is designed to keep products secure throughout the supply chain."
                        />
                    </div>

                    <div className="hidden max-w-xs pb-1 lg:block">
                        <p className="font-montserrat text-sm leading-6 text-[#16161D]/55">
                            Designed for strength, reliability and consistent performance
                            across diverse industries.
                        </p>
                    </div>
                </div>

                {/* Main Layout */}
                <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_1fr]">
                    {/* Featured Application */}
                    <article className="group relative min-h-[460px] overflow-hidden rounded-[28px]">
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#063F3D] via-[#063F3D]/10 to-transparent" />

                        <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white font-montserrat text-xs font-bold text-[#063F3D]">
                            {featured.number}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                            <div className="mb-3 h-px w-10 bg-[#39B972]" />

                            <h3 className="font-montserrat text-2xl font-bold text-white sm:text-3xl">
                                {featured.title}
                            </h3>

                            <p className="mt-3 max-w-lg font-montserrat text-sm leading-6 text-white/75">
                                {featured.description}
                            </p>

                            <div className="mt-6 inline-flex items-center gap-2 font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-[#39B972]">
                                Packaging Solutions
                                <FiArrowUpRight size={16} />
                            </div>
                        </div>
                    </article>

                    {/* Smaller Applications */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {secondary.map((item) => (
                            <article
                                key={item.number}
                                className="group relative min-h-[220px] overflow-hidden rounded-[24px]"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#063F3D]/90 via-[#063F3D]/10 to-transparent" />

                                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 font-montserrat text-[10px] font-bold text-[#063F3D]">
                                    {item.number}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="font-montserrat text-base font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <div className="mt-2 flex items-center justify-between">
                                        <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.12em] text-[#39B972]">
                                            Industrial Application
                                        </span>

                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-[#39B972]">
                                            <FiArrowUpRight size={15} />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default Applications;