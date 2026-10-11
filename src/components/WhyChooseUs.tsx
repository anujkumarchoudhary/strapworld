"use client";

import React from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";

const reasons = [
  {
    number: "01",
    title: "Consistent Product Quality",
    description:
      "We focus on consistent strength, dimensions and performance to ensure reliable strapping across different applications.",
  },
  {
    number: "02",
    title: "Manufacturer Direct",
    description:
      "Work directly with the manufacturer for better product control, competitive pricing and dependable supply.",
  },
  {
    number: "03",
    title: "Built for Global Supply",
    description:
      "Our products are supplied to domestic and international markets with packaging and handling suited for export requirements.",
  },
  {
    number: "04",
    title: "Flexible Solutions",
    description:
      "We offer strapping solutions for different industries, load requirements and application needs.",
  },
  {
    number: "05",
    title: "Reliable Supply",
    description:
      "Our manufacturing-focused approach helps maintain dependable production and timely order fulfillment.",
  },
  {
    number: "06",
    title: "Customer Focused",
    description:
      "We work closely with customers to understand their requirements and provide practical, application-specific solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#063F3D] py-10 md:py-12 lg:py-20">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/5" />

      <MaxWidth className="relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Heading
            isAccentLine
            accentColor="#39B972"
            labelColor="#39B972"
            label="Why Choose Us"
            headingParts={[
              {
                text: "A reliable partner for your strapping needs.",
                color: "#FFFFFF",
              },
            ]}
          />

          <p className="max-w-xl font-montserrat text-sm leading-7 text-white/65 lg:ml-auto">
            From product quality and manufacturing consistency to reliable
            supply and global delivery, we focus on providing strapping
            solutions that businesses can depend on.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid grid-cols-1 border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className={`group relative border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.04] ${
                index % 3 !== 2 ? "lg:border-r" : ""
              } ${
                index % 2 !== 1 ? "md:border-r lg:border-r-0" : ""
              } ${
                index < 3 ? "lg:border-b" : ""
              } ${
                index < 4 ? "md:border-b lg:border-b" : ""
              }`}
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-montserrat text-xs font-semibold tracking-[0.15em] text-[#39B972]">
                  {reason.number}
                </span>

                <FiArrowUpRight className="text-lg text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#39B972]" />
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="font-montserrat text-lg font-bold text-white">
                  {reason.title}
                </h3>

                <p className="mt-3 font-montserrat text-sm leading-6 text-white/55">
                  {reason.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="mt-7 flex items-center gap-2">
                <FiCheck className="text-sm text-[#39B972]" />

                <span className="font-montserrat text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                  Strap World Advantage
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl font-montserrat text-center lg:text-left text-sm leading-6 text-white/50">
            Quality products. Reliable supply. Long-term partnerships.
          </p>

         <div className="flex justify-center lg:justify-start">
           <a
            href="/contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#39B972] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#063F3D]"
          >
            Talk to Our Team
            <FiArrowUpRight />
          </a>
         </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default WhyChooseUs;