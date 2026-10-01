"use client";

import Image from "next/image";
import MaxWidth from "../layout/MaxWidth";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "@/src/utills/Data";
import Heading from "./Heading";
import SaveAndCancel from "./SaveAndCancel";
import { useState } from "react";
import GetEnquiryForm from "../form/GetEnquiryForm";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();
  const { label, headingParts, description, specifications } =
    staticData?.home?.banner;

  return (
    <section
      ref={ref}
      className="relative h-[85vh] md:h-[60vh] lg:h-[88vh] w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/hero_banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MaxWidth className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-10">
        <div className="grid  grid-cols-1 lg:grid-cols-[55%_45%] justify-between gap-2 z-10">
          <div className="space-y-10 my-auto">
            <div className="hidden lg:block">
              <Heading
                as="h1"
                isDart={true}
                isAccentLine={true}
                label={label}
                labelColor="#39B972"
                accentColor="#39B972"
                textColor="#ffffff"
                // descriptionSize="clamp(13px, 1.4vw, 18px)"
                isGradient={true}
                headingParts={headingParts}
                description={description}
              />
            </div>
            <div className="block lg:hidden">
              <Heading
                isDart={true}
                as="h1"
                label={label}
                isCenter={true}
                isAccentLine={true}
                labelColor="#39B972"
                accentColor="#39B972"
                textColor="#ffffff"
                isGradient={true}
                headingParts={headingParts}
                description={description}
              />
            </div>

            {/* Buttons */}
            <div
              className={`flex pb-6 gap-4 transition-all duration-700 delay-500
             `}
            >
              <SaveAndCancel
                saveText="Get a Quote"
                cancelText="Explore Products"
                isButton2={true}
                handleClick={() => setOpen(!open)}
                handleClick2={() => {
                  document
                    .getElementById("case-studies")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>
          <div className="flex h-fit my-auto justify-end">
          </div>
        </div>

        <div className="lg:flex w-fit border-t hidden pt-6 border-[#29414E] gap-14 mt-8">
          {specifications.map((item: any, index: number) => (
            <div key={index} className="space-y-1">
              <h3 className="text-[clamp(17px,1.5vw,20px)] text-white">
                {item?.value}
              </h3>
              <p className="text-[clamp(10px,0.9vw,12px)] font-medium text-white">
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      </MaxWidth>
      <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
    </section>
  );
};

export default Banner;
