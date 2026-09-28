"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";
import Heading from "./common/Heading";
import { useResponsive } from "../hooks/useResponsive";

interface TeamMember {
  img: string;
  name: string;
  designation: string;
  linkedin?: string;
}

interface TeamData {
  label: string;
  heading: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  members: TeamMember[];
}

interface TeamSectionProps {
  data: TeamData;
}

const AboutTeamSection = ({ data }: any) => {
  const { isDesktop } = useResponsive();

  return (
    <section className="relative overflow-hidden bg-[#050507] py-14 lg:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/[0.055] blur-[150px]" />

      {/* Subtle localized grid */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[1000px] -translate-x-1/2 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }}
      />

      <MaxWidth className="relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-7 flex items-end justify-between gap-8">
          {/* LEFT */}
          <div className=" w-full lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-2 flex items-center gap-2"
            ></motion.div>
            <Heading
              isCenter={isDesktop ? false : true}
              labelColor="#ffffff"
              label={data?.label}
              headingParts={[
                {
                  text: "Small team.",
                  color: "#ffffff",
                  size: "clamp(36px, 5vw, 52px)",
                  weight: "700",
                },
                {
                  text: " Big ideas.",
                  color: "#111118",
                  size: "clamp(36px, 5vw, 52px)",
                  weight: "700",
                  gradient:
                    "linear-gradient(90deg, #A855F7 0%, #7C3AED 50%, #2563EB 100%)",
                },
              ]}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-2 text-[12px] leading-[1.5] text-gray-500 md:text-[20px]"
            >
              {data.description}
            </motion.p>
          </div>

          {/* RIGHT BUTTON */}
          {data.buttonText && (
            <motion.a
              href={data.buttonHref || "#"}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group hidden shrink-0 items-center gap-3 rounded-lg border border-purple-500/40 px-6 py-3 text-[11px] font-medium text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 md:flex"
            >
              {data.buttonText}

              <span className="text-purple-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          )}
        </div>

        {/* =====================================================
            TEAM CARDS — SINGLE ROW
        ===================================================== */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.members.map((member:any, index:number) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[11px] border border-white/[0.12] bg-[#0a0a0d] transition-all duration-400 hover:border-purple-500/40"
            >
              {/* Card */}
              <div className="flex  items-center gap-3 p-2">
                {/* IMAGE */}

                <div className="relative h-[202px] w-[45%] shrink-0 overflow-hidden rounded-[8px] bg-white/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="94px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* DETAILS */}

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-[20px] font-semibold text-white">
                    {member.name}
                  </h3>
                  <p>{member?.role}</p>

                  <p className="mt-1 text-[10px] leading-4 text-gray-500">
                    {member.designation}
                  </p>

                  <div className="flex gap-1.5">
                    {/* LinkedIn */}
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="mt-3 flex h-[23px] w-[23px] items-center justify-center rounded-[5px] bg-white/[0.07] text-[11px] text-gray-400 transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-300"
                    >
                      <Icon name="FaLinkedinIn" size={18} />
                    </a>
                    {/* LinkedIn */}
                    <a
                      href={member.instagram || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="mt-3 flex h-[23px] w-[23px] items-center justify-center rounded-[5px] bg-white/[0.07] text-[11px] text-gray-400 transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-300"
                    >
                     <Icon name="FaTwitter" size={18} />
                    </a>{" "}
                    {/* LinkedIn */}
                    <a
                      href={member.FaTwitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="mt-3 flex h-[23px] w-[23px] items-center justify-center rounded-[5px] bg-white/[0.07] text-[11px] text-gray-400 transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-300"
                    >
                      <Icon name="FaTwitter" size={18} />
                    </a>{" "}
                  </div>
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Mobile button */}
        {data.buttonText && (
          <a
            href={data.buttonHref || "#"}
            className="mt-5 flex w-fit items-center gap-3 rounded-lg border border-purple-500/40 px-5 py-3 text-[11px] font-medium text-white md:hidden"
          >
            {data.buttonText}
            <span className="text-purple-400">→</span>
          </a>
        )}
      </MaxWidth>
    </section>
  );
};

export default AboutTeamSection;
