"use client";

import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";

const galleryImages = [
    {
        src: "/images/products/image_14.jpg",
        alt: "PET strapping manufacturing",
        title: "Manufacturing",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        src: "/images/products/Custom_PET_Strap.jpg",
        alt: "PET strap rolls",
        title: "PET Strap Rolls",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/images/products/Export_Grade_PET_Strap.jpg",
        alt: "Industrial packaging",
        title: "Packaging Solutions",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/images/products/Green_PET_Strap.webp",
        alt: "Strapping production line",
        title: "Production Line",
        className: "md:col-span-1 md:row-span-2",
    },
    {
        src: "/images/products/image_13.webp",
        alt: "Finished PET straps",
        title: "Finished Products",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/images/products/image_3.jpg",
        alt: "Secured industrial pallet",
        title: "Load Securing",
        className: "md:col-span-2 md:row-span-1",
    },
        {
        src: "/images/products/image_15.jpg",
        alt: "PET strapping manufacturing",
        title: "Manufacturing",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        src: "/images/products/image_9.webp",
        alt: "PET strap rolls",
        title: "PET Strap Rolls",
        className: "md:col-span-1 md:row-span-1",
    },
];

const Gallery = () => {
    return (
        <section className="bg-white py-10 md:py-12 lg:py-20">
            <MaxWidth>
                {/* Header */}
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <Heading
                            isAccentLine
                            accentColor="#2E9B4F"
                            labelColor="#2E9B4F"
                            label="Gallery"
                            headingParts={[
                                {
                                    text: "A closer look at Strap World.",
                                    color: "#063F3D",
                                },
                            ]}
                            description="Explore our manufacturing environment, products and strapping solutions built for industries across India and global markets."
                        />
                    </div>

                    <a
                        href="/gallery"
                        className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#063F3D]/15 px-5 py-3 font-montserrat text-sm font-semibold text-[#063F3D] transition-all duration-300 hover:border-[#2E9B4F] hover:bg-[#063F3D] hover:text-white"
                    >
                        View Full Gallery
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {galleryImages.map((image) => (
                        <div
                            key={image.src}
                            className="group relative aspect-[4/4] overflow-hidden rounded-[24px]"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#063F3D]/80 via-transparent to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.15em] text-[#39B972]">
                                    Strap World
                                </span>

                                <h3 className="mt-1 font-montserrat text-base font-bold text-white">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidth>
        </section>
    );
};

export default Gallery;