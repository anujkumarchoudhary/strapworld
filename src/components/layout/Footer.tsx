"use client";
import React from "react";
import MaxWidth from "./MaxWidth";
import { footerColumns } from "@/src/data/menu";
import Icon from "@/src/utills/iconMap ";
import Image from "next/image";
import logo from '../../../public/logo.svg'
import Link from "next/link";
import { MdApartment, MdArrowOutward, MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#020203]">
      <MaxWidth className="lg:gap-8 py-10 md:py-12 lg:py-20 divide divide-y space-y-10">
        <div className="block lg:flex  space-y-10 gap-15 justify-between">
          <div className="w-full lg:w-[25%] space-y-6">
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

            {/* Social Media */}
            <div className="space-y-3">
              <h3 className="font-montserrat text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Follow Us
              </h3>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#39B972] hover:bg-[#39B972] hover:text-[#063F3D]"
                >
                  <FaLinkedinIn size={16} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#39B972] hover:bg-[#39B972] hover:text-[#063F3D]"
                >
                  <FaFacebookF size={16} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#39B972] hover:bg-[#39B972] hover:text-[#063F3D]"
                >
                  <FaInstagram size={17} />
                </a>
              </div>
            </div>
          </div>
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
                      className="text-[clamp(14px,1.0625vw,17px)] text-white/70 font-medium"
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

            {/* Address */}
            <div className="my-4 flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#39B972]/10">
                <FaMapMarkerAlt
                  size={18}
                  className="text-[#39B972]"
                />
              </div>

              <p className="text-[clamp(14px,1.0625vw,17px)] font-medium text-white/70">
                Gokul Industries Estate - A,
                <br />
                Plot No 16 & 17, S no 261/P1,
                <br />
                Morbi Highway, Nr Khodiyar Temple,
                <br />
                Kagdadi town, Rajkot - 360003.
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-4 pb-1">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#39B972]/10">
                <MdOutlinePhone
                  size={19}
                  className="text-[#39B972]"
                />
              </div>

              <a
                href="tel:+919978735708"
                className="flex items-center text-[clamp(14px,1.0625vw,17px)] font-medium text-white/70 transition-colors hover:text-[#39B972]"
              >
                +91 997 873 5708
              </a>
            </div>

            {/* Email */}
            <div className="flex gap-4 py-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#39B972]/10">
                <MdOutlineMailOutline
                  size={19}
                  className="text-[#39B972]"
                />
              </div>

              <p className="flex items-center text-[clamp(14px,1.0625vw,17px)] font-medium text-white/70">
                sales@strapworld.com
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
