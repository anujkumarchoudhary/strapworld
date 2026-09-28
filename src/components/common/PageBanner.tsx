"use client";

import Image from "next/image";
import img from "../../../public/images/skill2.jpg";
import MaxWidth from "../layout/MaxWidth";
import Button from "./Button";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export interface PageBannerProps {
  heading: string;
}
const PageBanner = ({ heading }: PageBannerProps) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();

  return (
    <section ref={ref} className="relative h-[26vh] lg:h-[45vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image src={img} alt="Banner" fill priority className="object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001845]/100 via-[#001845]/65 to-transparent" />

      {/* Content */}
      <MaxWidth className="relative z-10 h-full">
        <div className="flex h-full items-center">
          <div className="max-w-3xl space-y-[1.5rem] text-white">
            {/* Heading */}
            <h1
              className={`capitalize  text-[#FFFFFF]
              transition-all duration-700 delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {heading}
            </h1>
            <p
              className={`uppercase text-[14px] lg:text-[16px] flex gap-1 my-auto font-bold text-[#FFFFFF] transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Home <MdKeyboardDoubleArrowRight size={21} className="my-auto" />{" "}
              {heading}
            </p>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default PageBanner;
