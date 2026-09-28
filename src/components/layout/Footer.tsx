"use client";
import React from "react";
import MaxWidth from "./MaxWidth";
import { footerMenuData } from "@/src/data/menu";
import Icon from "@/src/utills/iconMap ";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary-bg text-white">
      {/* Purple localized glow + grid */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[520px] opacity-70">
        <div className="absolute inset-0 rounded-full bg-purple-600/[0.12] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
          linear-gradient(rgba(168,85,247,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,85,247,0.8) 1px, transparent 1px)
        `,
            backgroundSize: "45px 45px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          }}
        />
      </div>

      {/* Blue localized glow + grid */}
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-[420px] w-[520px] opacity-70">
        <div className="absolute inset-0 rounded-full bg-blue-600/[0.12] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
          linear-gradient(rgba(37,99,235,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)
        `,
            backgroundSize: "45px 45px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          }}
        />
      </div>
      <MaxWidth className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-4 lg:gap-8 lg:py-20">
        {/* Brand */}
        <div>
          <Image
            src="/softqivo_04.png"
            width={225}
            height={50}
            alt="logo"
            style={{
              width: "clamp(180px, 18vw, 225px)",
              height: "auto",
            }}
          />

          <p className="mt-5 leading-7 text-white/70">
            We build scalable digital solutions, modern web applications, and
            custom software that help businesses grow and perform better.
          </p>

          {/* Social Icons */}
          <div className="mt-7 flex items-center gap-3">
            <a
              href="#"
              aria-label="FaLinkedinIn"
              className="flex h-15 w-15 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white hover:text-black"
            >
              <Icon name="FaLinkedinIn" size={30} />
            </a>

            <a
              href="#"
              aria-label="FaInstagram"
              className="flex h-15 w-15 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white hover:text-black"
            >
              <Icon name="FaInstagram" size={30} />
            </a>

            <a
              href="https://x.com/softqivo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoftQivo on X"
              className="flex h-15 w-15 items-center justify-center rounded-full border border-white/15 transition hover:border-white hover:bg-white hover:text-black"
            >
              <Icon name="FaTwitter" size={30} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-8 text-[25px] text-white font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {footerMenuData.slice(0, 5).map((menu, idx) => (
              <li key={idx}>
                <a
                  href={`${menu.link}`}
                  className="group flex items-center gap-2 text-[18px] text-white/70 transition hover:text-white"
                >
                  <Icon
                    name="chevronRight"
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>{menu.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-8 text-[25px] text-white font-semibold">
            Custom Software
          </h3>

          <ul className="space-y-3">
            {footerMenuData.slice(5).map((menu, idx) => (
              <li key={idx}>
                <a
                  href={`${menu.link}`}
                  className="group flex items-center gap-2 text-[18px] text-white/70 transition hover:text-white"
                >
                  <Icon
                    name="chevronRight"
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>{menu.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-8 text-[25px] text-white font-semibold">
            Contact Us
          </h3>

          <div className="space-y-5">
            {/* Address */}
            <div className="flex gap-3">
              <Icon name="location" size={22} className="mt-1 shrink-0" />

              <a
                href="https://share.google/E7oFNNvoY9Nm77Ais"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <p className="mb-1 text-[18px] font-medium text-white">
                  Head Office
                </p>

                <p className="text-[16px] lg:text-[18px] leading-7 text-white/65 transition-colors group-hover:text-white">
                  A-21, 2nd Floor, BSI Business Park, Sector-63, Noida, Uttar Pradesh, India
                </p>
              </a>
            </div>
            {/* Phone */}
            <div className="flex gap-3">
              <div className="mt-1 shrink-0">
                <Icon name="phone" size={19} className="text-white" />
              </div>

              <div>
                <p className="mb-1 text-[18px] font-medium text-white">Phone</p>

                <a
                  href="tel:+919953176985"
                  className="text-[18px] text-white/65 transition hover:text-white"
                >
                  +91 99531 76985
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <div className="mt-1 shrink-0">
                <Icon name="mail" size={19} className="text-white" />
              </div>

              <div>
                <p className="mb-1 text-[18px] font-medium text-white">Email</p>

                <a
                  href="mailto:softqivo@gmail.com"
                  className="text-[18px] text-white/65 transition hover:text-white"
                >
                  softqivo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <MaxWidth className="flex flex-col items-center justify-between gap-3 py-5 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} SoftQivo Technology. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </MaxWidth>
      </div>
    </footer>
  );
};

export default Footer;
