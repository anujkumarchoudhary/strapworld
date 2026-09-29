"use client";
import React, { useState } from "react";
import MaxWidth from "./MaxWidth";
import logo from "../../../public/softqivo_04.png";

import Image from "next/image";
import { menuData } from "@/src/data/menu";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { IoReorderThreeSharp } from "react-icons/io5";
import Icon from "@/src/utills/iconMap ";
import { MdClose, MdMarkEmailUnread, MdPhonelinkRing } from "react-icons/md";
import SaveAndCancel from "../common/SaveAndCancel";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary-bg w-full sticky top-0 z-50">
      <div className="bg-[#101820] border-b border-[#29414E] py-2">
        <MaxWidth className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="my-auto text-[clamp(9px,0.7vw,11px)] text-[#DCE5E8]">
            INDIA-BASED MANUFACTURER · EXPORT ENQUIRIES WELCOME
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <MdPhonelinkRing className="shrink-0 text-[#39B972]" />
              <p className="my-auto text-[clamp(9px,0.7vw,11px)] text-[#DCE5E8]">
                +91 123 456 7890
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MdMarkEmailUnread className="shrink-0 text-[#39B972]" />
              <p className="my-auto text-[clamp(9px,0.7vw,11px)] text-[#DCE5E8]">
                enquiry@strapworld.com
              </p>
            </div>
          </div>
        </MaxWidth>
      </div>
      <MaxWidth className="flex justify-between items-center py-2 lg:py-3 text-white">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          {/* <Image
            src={logo}
            width={225}
            height={50}
            alt="logo"
            style={{
              width: "clamp(180px, 18vw, 225px)",
              height: "auto",
            }}
          /> */}
          <h3 className="text-white">Strap World</h3>
        </div>
        <div className="hidden lg:flex gap-2 text-white font-semibold">
          {menuData?.map((menu, idx) => {
            return (
              <p
                key={idx}
                onClick={() => router.push(menu.link)}
                className="my-auto mx-4 capitalize text-[clamp(11px,0.85vw,14px)] font-semibold text-secondary-color cursor-pointer"
              >
                {menu.title}
              </p>
            );
          })}
        </div>
        <div className="hidden lg:flex gap-8">
          <SaveAndCancel saveText="Get a Quote" handleClick={undefined} />

        </div>

        {open ? (
          <MdClose
            onClick={() => setOpen(!open)}
            size={35}
            className="block lg:hidden cursor-pointer"
          />
        ) : (
          <IoReorderThreeSharp
            onClick={() => setOpen(!open)}
            size={35}
            className="block lg:hidden cursor-pointer"
          />
        )}
      </MaxWidth>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white pb-4 divide-y divide-[#000000]/20  space-y-4 py-1 lg:hidden">
          <div className="flex flex-col ">
            {menuData?.map((menu, idx) => {
              return (
                <p
                  key={idx}
                  onClick={() => {
                    router.push(menu.link);
                    setOpen(false);
                  }}
                  className="cursor-pointer px-6 py-4 hover:bg-black/10 text-primary-color font-semibold"
                >
                  {menu.title}
                </p>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex px-6 items-center gap-3">
            <a
              href="#"
              aria-label="FaLinkedinIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/50 transition hover:border-black hover:bg-black hover:text-white"
            >
              <Icon name="FaLinkedinIn" size={20} />
            </a>

            <a
              href="#"
              aria-label="FaInstagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/50 transition hover:border-black hover:bg-black hover:text-white"
            >
              <Icon name="FaInstagram" size={20} />
            </a>

            <a
              href="https://x.com/softqivo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoftQivo on X"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/50 transition hover:border-black hover:bg-black hover:text-white"
            >
              <Icon name="FaTwitter" size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
