"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";
import SaveAndCancel from "./common/SaveAndCancel";


const ChooseRight = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const { headingParts, label, list, description, card } = data || {};
  const { isDesktop } = useResponsive();
  return (
    <div className="bg-[#FFFFFF] py-12 lg:py-16">

      <MaxWidth className=" ">

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_50%] justify-between gap-10">
          <div className="space-y-14">
            <Heading
              as="h2"
              isDart={true}
              isAccentLine={true}
              label={label}
              isCenter={isDesktop ? false : true}
              labelColor="#39B972"
              accentColor="#39B972"
              textColor="#39464A"
              isGradient={true}
              headingParts={headingParts}
              description={description}
            />
            <div className="bg-[#063F3D] p-10  space-y-3 rounded-[15px]">
              <h3 onClick={()=>setOpen(!open)} className=" text-[clamp(12px,1.2vw,28px)] font-semibold text-[#FFFFFF]">
                {card?.title}
              </h3>
              <p className="text-[#DCE5E8] pb-4">{card?.description}</p>
              <SaveAndCancel saveText={card?.button} handleClick={()=>setOpen(!open)}/>
                
            </div>
          </div>

          <div>
            <div className="space-y-4 divide divide-dotted divide-y">
              {list?.map((service: any, index: number) => {
                return (
                  <div
                    key={service.title}
                    className="
    group relative
    block lg:flex gap-4
    bg-transparent
    py-6
    transition-all duration-300
  "
                  >
                    {/* Icon */}
                    <div
                      className="
    flex
    h-[clamp(40px,3.5vw,44px)]
    w-[clamp(40px,3.5vw,44px)]
    shrink-0
    items-center
    justify-center
    mx-auto
    lg:mx-0
    rounded-full
    bg-[#E6F5EC]
    p-2
    transition-colors
    duration-300
    group-hover:bg-[#218B55]
    lg:mb-auto
  "
                    >
                      <span
                        className="
      block
      h-5
      w-5
      bg-[#218B55]
      transition-colors
      duration-300
      group-hover:bg-white
      [mask-image:var(--icon)]
      [mask-position:center]
      [mask-repeat:no-repeat]
      [mask-size:contain]
      [-webkit-mask-image:var(--icon)]
      [-webkit-mask-position:center]
      [-webkit-mask-repeat:no-repeat]
      [-webkit-mask-size:contain]
    "
                        style={{
                          "--icon": `url(${service?.image})`,
                        } as React.CSSProperties}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <h3
                        className="
        text-center
        text-[clamp(17px,1.5vw,20px)]
        font-bold
        tracking-[-0.01em]
        text-[#101820]
        lg:text-left
      "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
        text-center
        text-[clamp(13px,1.1vw,15px)]
        leading-7
        text-[#647077]
        lg:text-left
      "
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className="
      absolute
      top-5
      right-5
      hidden
      lg:flex
      items-center
      justify-center
    "
                    >
                      <p className="text-[#2E9B4F]">0{index + 1}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="group mt-auto flex lg:hidden h-fit cursor-pointer items-center justify-center gap-2">
          <p onClick={()=>setOpen(!open)} className="my-auto text-[clamp(12px,1vw,14px)] font-bold text-[#101820]">
            Discuss your application
          </p>

          <MdArrowBack
            className="
      my-auto
      rotate-180
      text-[#39B972]
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
          />
        </div>
      </MaxWidth>
      <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default ChooseRight;
