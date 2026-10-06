"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import { useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";
import Heading from "./common/Heading";
import { MdCheck, MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { useResponsive } from "../hooks/useResponsive";
import SaveAndCancel from "./common/SaveAndCancel";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
  const { isDesktop, isMobile } = useResponsive()
  return (
    <section className=" bg-[#2E9B4F] py-10 md:py-12 lg:py-20" >
      {data?.isVariant === "01" && <MaxWidth>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* Content */}
          <div className="relative w-full mb-auto z-10 lg:grid grid-cols-1 lg:grid-cols-[35%_55%] justify-between gap-6 space-y-10 sm:px-10 md:px-16">
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
              <div className="bg-[#FFFFFF]/10 p-5 rounded-[10px] space-y-3">
                {data?.list?.map((item: any, idx: number) => {
                  return (
                    <div className="flex gap-2">
                      <MdCheck size={15} className="text-[#FFFFFF]" />
                      <p className="my-auto text-[15px] font-normal text-[#FFFFFF]">
                        {item?.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <div className="w-full  rounded-[14px] bg-white p-5 sm:p-10">
              {/* Heading */}
              <h2 className="mb-4 text-[clamp(18px,1.5vw,28px)] font-semibold leading-tight text-[#101820]">
                Tell us about your requirement.
              </h2>

              <form className="space-y-2.5">
                {/* Name + Company */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[13px] text-[#101820]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[13px] text-[#101820]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[13px] text-[#101820]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[13px] text-[#101820]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
                    />
                  </div>
                </div>

                {/* Product + Quantity */}
                {/* <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Product
                    </label>
                    <input
                      type="text"
                      placeholder="PET Strap"
                      className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[13px] text-[#101820]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                      Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="Required quantity"
                      className="
              py-3.5 w-full rounded-[5px]
              border border-[#DCE3DF]
              bg-[#F4F7F4]
              px-2.5
              text-[13px] text-[#101820]
              outline-none
              placeholder:text-[#8A9490]
              focus:border-[#218B55]
            "
                    />
                  </div>
                </div> */}

                {/* Requirements */}
                {/* <div>
                  <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                    Requirements
                  </label>

                  <input
                    type="text"
                    placeholder="Width, thickness, strength, color or other details"
                    className="
            py-3.5 w-full rounded-[5px]
            border border-[#DCE3DF]
            bg-[#F4F7F4]
            px-2.5
            text-[13px] text-[#101820]
            outline-none
            placeholder:text-[#8A9490]
            focus:border-[#218B55]
          "
                  />
                </div> */}

                {/* Message */}
                <div>
                  <label className="mb-1 block text-[13px] font-medium text-[#101820]">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Application, delivery location and any additional information"
                    className="
            min-h-[56px] w-full resize-none rounded-[5px]
            border border-[#DCE3DF]
            bg-[#F4F7F4]
            px-2.5 py-2
            text-[13px] text-[#101820]
            outline-none
            placeholder:text-[#8A9490]
            focus:border-[#218B55]
          "
                  />
                </div>

                {/* Button */}
               <div className="flex justify-center lg:justify-start">
                 <SaveAndCancel saveText={data?.button} saveBgColor="#063F3D" />
               </div>

              </form>
            </div>
          </div>
        </motion.div>
      </MaxWidth>}

      {data?.isVariant === "02" && <MaxWidth>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.96 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden "
        >
          {/* Content */}
          <div className="relative w-full mx-auto z-10 lg:grid grid-cols-1 lg:grid-cols-[50%_40%]  items-center justify-between gap-6 sm:px-10 md:px-16">
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
                  href="tel:+919978735708"
                  className="flex gap-2"
                >
                  <MdPhone
                    size={18}
                    className="my-auto text-[#FFFFFF]"
                  />
                  <p className="my-auto text-[14px] font-bold text-[#FFFFFF]">
                    +91 997 873 5708
                  </p>
                </a>
              </div>
            </div>

            {/* Button */}
            <div className="bg-white space-y-10 w-full p-5 md:p-10 h-full rounded-[10px]">
              <Heading
                isAccentLine={true}
                isCenter={isDesktop ? false : true}
                accentColor="#2E9B4F"
                labelColor="#2E9B4F"
                textColor="#647077"
                label={data?.formLabel}
                headingParts={data?.headingParts2}
                description={data?.description2}

              />
              <div className="flex justify-center lg:justify-start">
                <SaveAndCancel
                  saveText={"Start a Project"}
                  cancelText={"Explore Our Work"}
                  saveBgColor="#063F3D"
                  cancelBgColor="#FFFFFF"
                  cancelTextColor="#000000"
                  handleClick={() => setOpen(true)}
                  isButton2={isMobile ? false : true}

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
