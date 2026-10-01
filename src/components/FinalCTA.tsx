"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import { useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";
import Heading from "./common/Heading";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { useResponsive } from "../hooks/useResponsive";
import SaveAndCancel from "./common/SaveAndCancel";

interface FinalCTAData {
  label: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface FinalCTAProps {
  data: FinalCTAData;
}

export default function FinalCTA({ data }: any) {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useResponsive()
  return (
    <section className="py-12 lg:py-16" >
      {data?.isVariant === "01" && <MaxWidth className="bg-[#2E9B4F] py-12 lg:py-16 rounded-[10px]">
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* Content */}
          <div className="relative w-full mx-auto z-10 lg:grid grid-cols-1 lg:grid-cols-[50%_40%]  items-center justify-between gap-6 px-7 py-4 sm:px-10 md:px-16">
            {/* Left */}
            <div className="space-y-5 ">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#ffffff"
                labelColor="#ffffff"
                textColor="#ffffff"
                label="START AN INQUIRY"
                headingParts={[{ text: "Tell us what you need to secure.", color: "#ffffff" }]}
                description="Share your product, load profile, monthly requirement and destination. Our team will help narrow the right strap, tool or machine configuration."
              />
              <div className="hidden lg:flex gap-3">
                <div className="flex gap-2">
                  <MdOutlineMailOutline size={18} className="my-auto text-[#FFFFFF]" />
                  <p className="my-auto text-[#FFFFFF] text-[14px] font-bold">sales@ompackstrap.com</p>
                </div>
                <div className="flex gap-2">
                  <MdPhone size={18} className="my-auto text-[#FFFFFF]" />
                  <p className="my-auto text-[#FFFFFF] text-[14px] font-bold">+91 123 46 7890</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="group cursor-pointer flex text-center shrink-0 mt-10 lg:mt-0 items-center gap-2 rounded-[4px] mx-auto lg:mx-0 w-fit bg-black px-5 py-3 text-[18px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black sm:px-7 sm:py-3.5"
              >
                Let's Talk
                <Icon
                  name="arrow"
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Button */}
            <div className="bg-white w-full h-full rounded-[10px]">

            </div>
          </div>
        </motion.div>
      </MaxWidth>}

      {data?.isVariant === "02" && <MaxWidth className="bg-[#2E9B4F] py-12 lg:py-16 rounded-[10px]">
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* Content */}
          <div className="relative w-full mx-auto z-10 lg:grid grid-cols-1 lg:grid-cols-[50%_40%]  items-center justify-between gap-6 px-7 py-4 sm:px-10 md:px-16">
            {/* Left */}
            <div className="space-y-5 ">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#ffffff"
                labelColor="#ffffff"
                textColor="#ffffff"
                label={data?.label}
                headingParts={data?.headingParts}
                description={data?.description}
              />
              <div className="hidden lg:flex gap-3">
                <a
                  href="mailto:sales@starpworld.com"
                  className="flex gap-2"
                >
                  <MdOutlineMailOutline
                    size={18}
                    className="my-auto text-[#FFFFFF]"
                  />
                  <p className="my-auto text-[14px] font-bold text-[#FFFFFF]">
                    sales@starpworld.com
                  </p>
                </a>

                <a
                  href="tel:+91123467890"
                  className="flex gap-2"
                >
                  <MdPhone
                    size={18}
                    className="my-auto text-[#FFFFFF]"
                  />
                  <p className="my-auto text-[14px] font-bold text-[#FFFFFF]">
                    +91 123 46 7890
                  </p>
                </a>
              </div>
            </div>

            {/* Button */}
            <div className="bg-white space-y-10 w-full p-10 h-full rounded-[10px]">
              <Heading
                isAccentLine={true}
                accentColor="#2E9B4F"
                labelColor="#2E9B4F"
                textColor="#647077"
                label={data?.formLabel}
                headingParts={data?.headingParts2}
                description={data?.description2}

              />
<div className="flex justify-start lf:justify-center">
                <SaveAndCancel
                saveText={data?.buttonText}
                cancelText={data?.buttonText2}
                saveBgColor="#063F3D"
                cancelBgColor="#FFFFFF"
                cancelTextColor="#000000"
                handleClick={() => setOpen(true)}
                isButton2={true}

              />
</div>
            </div>
          </div>
        </motion.div>
      </MaxWidth>}
      <GetEnquiryForm isOpen={open} handleClose={() => setOpen(false)} />
    </section>
  );
}
