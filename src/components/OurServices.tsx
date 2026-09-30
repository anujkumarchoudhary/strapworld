"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

const OurServices = ({ data }: any) => {
  const { headingParts, label, list, description } = data || {};
  const { isDesktop } = useResponsive();
  return (
    <div className="relative bg-[#F3F1EA]">

      <MaxWidth className=" overflow-hidden space-y-12 py-10 sm:py-12 lg:py-16">
        <div className="grid space-y-6 grid-cols-1 lg:grid-cols-[50%_18%] justify-between">
          <Heading
            as="h2"
            isDart={true}
            isAccentLine={true}
            label={label}
            isCenter={isDesktop ? false:true}
            labelColor="#39B972"
            accentColor="#39B972"
            textColor="#647077"
            isGradient={true}
            headingParts={headingParts}
            description={description}
          />

          <div className="mt-auto border-l-2 border-[#39B972] pl-4">
            <h3 className="text-[clamp(17px,1.5vw,20px)] font-bold text-[#101820]">
              Application-led selection
            </h3>

            <p className="pt-2 text-[clamp(12px,1vw,14px)] text-[#647077]">
              Share load weight, geometry, edge conditions and transit mode.
            </p>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {list?.map((service: any, index: number) => {
            return (
              <div
                key={index}
                className={`
                  group relative
                  border-b border-[#D7D9D3]
                  p-6
                  transition-all duration-300
                  bg-white
                  hover:bg-[#FAF9FF]
                   rounded-[10px]
                `}
              >
                {/* Icon */}
                <div
                  className="
                    flex mx-auto lg:mx-0 justify-center lg:justify-normal
                    rounded-lg
                    text-white
                    transition-transform duration-300
                  "
                >
                  <Image src={service?.image} width={22} height={22} alt="img" />
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-[20px] text-center lg:text-left font-bold tracking-[-0.01em] text-[#101820]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] text-center lg:text-left leading-7 text-[#647077]">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="
                    hidden absolute top-5 right-5
                    transition-all duration-300
                    group-hover:translate-x-1
                  "
                >
                  <MdArrowBack size={22} className="rotate-140 text-[#647077] group-hover:text-[#218B55]" />
                </div>

                {/* Hover Line */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-0.5 w-0
                    bg-[#218B55]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </div>
  );
};

export default OurServices;
