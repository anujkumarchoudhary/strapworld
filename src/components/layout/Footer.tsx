"use client";
import React from "react";
import MaxWidth from "./MaxWidth";
import { footerColumns } from "@/src/data/menu";
import Icon from "@/src/utills/iconMap ";
import Image from "next/image";
import logo from '../../../public/logo.svg'
import Link from "next/link";
import { MdApartment, MdArrowOutward, MdOutlinePhone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#020203]">
      <MaxWidth className="lg:gap-8 py-12 lg:py-16 divide divide-y space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-[30%_30%] space-y-8 pb-10 justify-between">
          <div className="space-y-6">
            <Image
              src={logo}
              width={306}
              height={51}
              alt="logo"
              className="h-auto w-[clamp(200px,22vw,306px)] cursor-pointer"
            />

            <p className="text-[clamp(16px,1.25vw,20px)] leading-7 text-white/70">
              Industrial strapping and packaging systems for secure, efficient movement.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-[clamp(11px,0.8125vw,13px)] text-[#39B972] font-medium">
              EXPORT & SALES
            </p>

            <p className="leading-7 text-[clamp(18px,1.375vw,22px)] text-white/70">
              Send your load details, volume and destination for a product-led recommendation.
            </p>

            <a
              href="mailto:sales@strapworld.com"
              className="flex items-center gap-2 text-[clamp(17px,1.25vw,20px)] font-bold text-[#ffffff]"
            >
              sales@strapworld.com
              <MdArrowOutward className="text-[#39B972]" />
            </a>
          </div>
        </div>

        <div className="grid space-y-10 grid-cols-1 lg:grid-cols-4 justify-between">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-[clamp(12px,0.9375vw,15px)] text-[#39B972] font-bold font-roboto-mono">
                {column.title}
              </h3>

              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-[clamp(14px,1.0625vw,17px)] text-[#DCE5E8] font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-[clamp(12px,0.9375vw,15px)] font-bold font-roboto-mono text-[#39B972]">
              CONTACT
            </h3>

            <div className="my-4 flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-start justify-center">
                <FaMapMarkerAlt
                  size={22}
                  className="text-[#2E9B4F]"
                />
              </div>

              <p className="text-[clamp(14px,1.0625vw,17px)] font-medium text-[#DCE5E8]">
                Gokul Industries Estate - A,
                <br />
                Plot No 16 & 17, S no 261/P1,
                <br />
                Morbi Highway, Nr Khodiyar Temple,
                <br />
                Kagdadi town, Rajkot - 360003.
              </p>
            </div>

            <div className="flex gap-4 pb-1">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <MdOutlinePhone
                  size={22}
                  className="text-[#2E9B4F]"
                />
              </div>

              <a
                href="tel:+919978735708"
                className="text-[clamp(14px,1.0625vw,17px)] font-medium text-[#DCE5E8] transition-colors hover:text-[#39B972]"
              >
                +91 997 873 5708
              </a>
            </div>

            <div className="flex gap-4 py-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                <MdApartment
                  size={22}
                  className="text-[#2E9B4F]"
                />
              </div>

              <p className="text-[clamp(14px,1.0625vw,17px)] font-medium text-[#DCE5E8]">
                Mon–Sat 09:30–18:30 IST
              </p>
            </div>
          </div>
        </div>
      </MaxWidth>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <MaxWidth className="flex flex-col items-center justify-between gap-3 py-5 text-[clamp(12px,0.875vw,14px)] text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Strap World. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="/terms-and-conditions" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </MaxWidth>
      </div>
    </footer>
  );
};

export default Footer;
