"use client";

import Image from "next/image";
import MaxWidth from "../layout/MaxWidth";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import Heading from "./Heading";
import SaveAndCancel from "./SaveAndCancel";
import { useState } from "react";
import GetEnquiryForm from "../form/GetEnquiryForm";
import { useRouter } from "next/navigation";

const Banner = ({ data }: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();

  return (
    <section
      ref={ref}
      style={{ background: data?.bgColor }}
      className={`relative 
        ${data?.id === "about" && "h-[74vh] md:h-[60vh] lg:h-[78vh]"} 
        ${data?.id === "product" && "h-[74vh] md:h-[60vh] lg:h-[78vh]"} 
        ${data?.id === "manufacturing" && "h-[74vh] md:h-[60vh] lg:h-[78vh]"} 
        ${data?.id === "home" && "h-[80vh] md:h-[60vh] lg:h-[88vh]"}  
        
        w-full overflow-hidden `}
    >
      {/* Optimized Background Image */}
      {data?.bgImage && <Image
        src={data?.bgImage || "/images/home/hero_banner.png"}
        alt="Strap World PET and polyester strapping"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />}

      {/* Optional overlay */}
      {data?.bgImage && <div className="absolute inset-0 z-[1] bg-black/10" />}

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
                  if (data?.id === "home") {
                    document
                      .getElementById("our-products")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  } else {
                    router.push("/contact");
                  }
                }}
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>

          {data?.image && <div className="my-auto flex aspect-16/10 w-full justify-end">
            <div className="relative h-full w-full">
              <Image
                src={data?.image}
                fill
                alt="img"
                className="object-cover rounded-[20px]"
              />
              <div className="absolute top-10 right-10 bg-[#FFFFFF] px-6 py-3 rounded-[10px]">
                <p className="uppercase font-bold text-[14px]">{data?.floatingLabel}</p>
              </div>
              <div className="absolute bottom-10 space-y-4 left-10 bg-white rounded-[10px] px-6 py-5">
                <h3 className="text-[#2E9B4F] text-[16px] uppercase font-bold">{data?.floatingCard?.title}</h3>
                <div >
                  {data?.floatingCard?.list?.map((item: any, idx: number) => {
                    return (
                      <div key={idx} className="grid grid-cols-2 space-y-1">
                        <p className="text-[16px] text-[#647077]">{item?.name}</p>
                        <p className="text-[#101820] text-[16px]">{item?.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>}
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
