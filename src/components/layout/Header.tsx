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
import { FaMapMarkerAlt } from "react-icons/fa";
import { VscDebugStop } from "react-icons/vsc";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="bg-white w-full sticky top-0 z-50 shadow-md">
      <div className="hidden lg:block bg-[#063F3D] border-b border-[#29414E] py-2">
        <MaxWidth className="flex flex-col gap-2 lg:py-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="hidden lg:flex flex-wrap justify-between gap-3 sm:gap-4 lg:items-center">
            <a
              className="flex items-center gap-2"
            >
              <FaMapMarkerAlt
                className="shrink-0 text-white"
              />

              <p className="my-auto text-[clamp(11px,0.7vw,14px)] text-[#DCE5E8]">
                INDIA-BASED MANUFACTURER
              </p>
            </a>

            <a
              className="flex items-center gap-2"
            >
              <VscDebugStop
                className="shrink-0 text-white"
                style={{ animationDelay: "10s" }}
              />

              <p className="my-auto text-[clamp(12px,0.7vw,14px)] text-[#DCE5E8]">
                GSTIN - 24ADUFS1418B1Z8
              </p>
            </a>
          </div>
          <div className="flex flex-wrap justify-between gap-3 sm:gap-4 lg:items-center">
            <a
              href="tel:+919978735708"
              className="flex items-center gap-2"
            >
              <MdPhone
                className="shrink-0 text-white animate-contact-attention"
              />

              <p className="my-auto text-[clamp(14px,1.2vw,16px)] text-[#DCE5E8]">
                +91 997 873 5708
              </p>
            </a>

            <a
              href="mailto:sales@strapworld.com"
              className="flex items-center gap-2"
            >
              <MdMarkEmailUnread
                className="shrink-0 text-white animate-contact-attention"
                style={{ animationDelay: "10s" }}
              />

              <p className="my-auto text-[clamp(14px,1.2vw,16px)] text-[#DCE5E8]">
                sales@strapworld.com
              </p>
            </a>
          </div>
        </MaxWidth>
      </div>
      <MaxWidth className="flex justify-between items-center lg:py-3  py-6">
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
          <SaveAndCancel saveText="Get a Quote" handleClick={() => setOpenForm(!openForm)} />

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
        <div className="fixed top-1 left-0 w-full h-full z-40 flex flex-col bg-[#FFFFFF] lg:hidden">
          <div className="flex justify-between px-5  py-5.5 shadow-md">
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
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col divide-y divide-gray-100">
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
      <GetEnquiryForm isOpen={openForm} handleClose={() => setOpenForm(false)} />
    </div>
  );
};

export default Header;
