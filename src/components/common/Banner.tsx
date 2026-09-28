"use client";

import Image from "next/image";
import MaxWidth from "../layout/MaxWidth";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { staticData } from "@/src/utills/Data";
import Heading from "./Heading";
import banner_img from "../../../public/images/home/banner_05.png";
import SaveAndCancel from "./SaveAndCancel";
import { useResponsive } from "@/src/hooks/useResponsive";
import img_1 from "../../../public/images/partner/aws.png";
import img_2 from "../../../public/images/partner/digitalocean.png";
import img_3 from "../../../public/images/partner/google.png";
import img_4 from "../../../public/images/partner/microsoft.png";
import img_5 from "../../../public/images/partner/vercel.png";
import { useState } from "react";
import GetEnquiryForm from "../form/GetEnquiryForm";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();
  const { label, headingParts, description, button, button2, specifications } =
    staticData?.home?.banner;

  return (
    <section
      ref={ref}
      className="py-12 lg:py-20 bg-primary-bg  w-full overflow-hidden"
    >

      {/* Content */}
      <MaxWidth className="my-auto">
        <div className="grid  grid-cols-1 lg:grid-cols-[45%_50%] justify-between gap-2 z-10">
          <div className="space-y-10 my-auto">
            <div className="hidden lg:block">
              <Heading
                as="h1"
                isDart={true}
                isAccentLine={true}
                label={label}
                breakIndex={5}
                labelColor="#39B972"
                accentColor="#39B972"
                textColor="#ffffff"
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
                isSparkles={true}
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
              className={`flex pb-10 gap-4 transition-all duration-700 delay-500
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

        <div className="flex w-fit border-t py-10 border-[#29414E] gap-14 mt-8">
          {specifications.map((item: any, index: number) => (
            <div key={index} className="space-y-1">
              <h3 className="text-white text-[20px]">{item?.value}</h3>
              <p className="text-white text-[12px]">{item?.name}</p>

            </div>
          ))}
        </div>
      </MaxWidth>
      <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
    </section>
  );
};

export default Banner;
