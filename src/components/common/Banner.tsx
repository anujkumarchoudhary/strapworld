"use client";

import Image from "next/image";
import MaxWidth from "../layout/MaxWidth";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "@/src/utills/Data";
import Heading from "./Heading";
import SaveAndCancel from "./SaveAndCancel";
import { useState } from "react";
import GetEnquiryForm from "../form/GetEnquiryForm";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Banner = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();
  const { label, headingParts, description, specifications } =
    staticData?.home?.banner;

  return (
    <section
      ref={ref}
      className={`relative 
        ${data?.id === "about" && "h-[74vh] md:h-[60vh] lg:h-[78vh]"} 
        ${data?.id === "product" && "h-[74vh] md:h-[60vh] lg:h-[78vh]"} 
        ${data?.id === "manufacturing" && "h-[74vh] md:h-[60vh] lg:h-[78vh]"} 
        ${data?.id === "home" && "h-[80vh] md:h-[60vh] lg:h-[88vh]"}  
        w-full overflow-hidden `}
    >
      {/* Optimized Background Image */}
      <Image
        src={data?.bgImage || "/images/home/hero_banner.png"}
        alt="Strap World PET and polyester strapping"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 z-[1] bg-black/10" />

      <MaxWidth className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-1 justify-between gap-2 lg:grid-cols-[50%_45%]">
          <div className="my-auto space-y-8 lg:space-y-14">

            <div className="hidden lg:block">
              <Heading
                as="h1"
                isDart={true}
                isAccentLine={true}
                label={data?.label}
                labelColor="#39B972"
                accentColor="#39B972"
                textColor="#ffffff"
                isGradient={true}
                headingParts={data?.headingParts}
                subHeading={data?.subHeading}
                description={data?.description}
              />
            </div>

            <div className="block lg:hidden">
              <Heading
                isDart={true}
                as="h1"
                label={data?.label}
                isCenter={true}
                isAccentLine={true}
                labelColor="#39B972"
                accentColor="#39B972"
                textColor="#ffffff"
                isGradient={true}
                headingParts={data?.headingParts}
                subHeading={data?.subHeading}
                description={data?.description}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 transition-all duration-700 delay-500 lg:pt-6">
              <SaveAndCancel
                saveText={data?.button}
                cancelText={data?.button2}
                isButton2={true}
                handleClick={() => setOpen(!open)}
                handleClick2={() => {
                  document
                    .getElementById("our-products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>

          <div className="my-auto flex h-fit justify-end" />
        </div>
      </MaxWidth>

      <GetEnquiryForm
        isOpen={open}
        handleClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Banner;
