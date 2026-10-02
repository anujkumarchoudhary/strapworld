"use client";
import React, { useState } from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/starp_world.svg";

import Image from "next/image";
import { menuData } from "@/src/data/menu";
import { useRouter } from "next/navigation";
import { IoReorderThreeSharp } from "react-icons/io5";
import Icon from "@/src/utills/iconMap ";
import { MdClose, MdMarkEmailUnread, MdPhone, MdPhonelinkRing } from "react-icons/md";
import SaveAndCancel from "../common/SaveAndCancel";
import GetEnquiryForm from "../form/GetEnquiryForm";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white w-full sticky top-0 z-50">
      <div className="bg-[#063F3D] border-b border-[#29414E] py-2">
        <MaxWidth className="flex flex-col gap-2 lg:py-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="hidden lg:block my-auto text-[clamp(9px,0.7vw,12px)] text-[#DCE5E8]">
            INDIA-BASED MANUFACTURER · EXPORT ENQUIRIES WELCOME
          </p>
<div className="flex flex-wrap justify-between gap-3 sm:gap-4 lg:items-center">
  <a
    href="tel:+911234567890"
    className="flex items-center gap-2"
  >
    <MdPhone
      className="shrink-0 text-white animate-contact-attention"
    />

    <p className="my-auto text-[clamp(9px,0.7vw,14px)] text-[#DCE5E8]">
      +91 123 456 7890
    </p>
  </a>

  <a
    href="mailto:enquiry@strapworld.com"
    className="flex items-center gap-2"
  >
    <MdMarkEmailUnread
      className="shrink-0 text-white animate-contact-attention"
      style={{ animationDelay: "10s" }}
    />

    <p className="my-auto text-[clamp(9px,0.7vw,14px)] text-[#DCE5E8]">
      enquiry@strapworld.com
    </p>
  </a>
</div>
        </MaxWidth>
      </div>
      <MaxWidth className="flex justify-between items-center py-4 lg:py-3 text-white">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image
            src={logo}
            width={275}
            height={40}
            alt="logo"
            style={{
              width: "clamp(180px, 18vw, 225px)",
              height: "auto",
            }}
          />
        </div>
        <div className="hidden lg:flex gap-2 text-white font-semibold">
          {menuData?.map((menu, idx) => {
            return (
              <p
                key={idx}
                onClick={() => router.push(menu.link)}
                className="my-auto mx-4 capitalize text-[clamp(11px,0.85vw,16px)] font-normal text-[#000000] cursor-pointer"
              >
                {menu.title}
              </p>
            );
          })}
        </div>
        <div className="hidden lg:flex gap-8">
          <SaveAndCancel saveText="Get a Quote" handleClick={() => setOpen(!open)} />

        </div>

        {open ? (
          <MdClose
            onClick={() => setOpen(!open)}
            size={30}
            className="block lg:hidden cursor-pointer text-[#000000]"
          />
        ) : (
          <IoReorderThreeSharp
            onClick={() => setOpen(!open)}
            size={30}
            className="block lg:hidden text-[#000000] cursor-pointer"
          />
        )}

      </MaxWidth>
      {open && (
        <div className="fixed inset-x-0 top-[12vh] border-t border-t-[#39B972]/20 bottom-0 z-40 flex flex-col bg-[#FFFFFF] lg:hidden">
          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col divide-y divide-black/10">
              {menuData?.map((menu, idx) => {
                return (
                  <p
                    key={idx}
                    onClick={() => {
                      router.push(menu.link);
                      setOpen(false);
                    }}
                    className="cursor-pointer px-6 py-5 text-primary-color font-semibold hover:bg-black/5"
                  >
                    {menu.title}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Social Icons - Bottom */}
          <div className="mt-auto border-t border-black/10 px-6 py-6">
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black/50 transition hover:border-black hover:bg-black hover:text-white"
              >
                <Icon name="FaLinkedinIn" size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black/50 transition hover:border-black hover:bg-black hover:text-white"
              >
                <Icon name="FaInstagram" size={20} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-black/50 transition hover:border-black hover:bg-black hover:text-white"
              >
                <Icon name="FaTwitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
