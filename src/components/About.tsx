"use client";

import React from "react";
import Image from "next/image";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";

const aboutStats = [
  {
    value: "2018",
    label: "Established",
  },
  {
    value: "9+",
    label: "Years Experience",
  },
  {
    value: "Global",
    label: "Export Markets",
  },
  {
    value: "100%",
    label: "Quality Focus",
  },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <MaxWidth>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-[30px]">
              <Image
                src="/images/home/about.jpg"
                alt="Strap World PET strapping manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 right-5 flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-[#063F3D] text-center shadow-xl sm:right-8">
              <span className="font-montserrat text-3xl font-bold text-white">
                9+
              </span>

              <span className="mt-1 font-montserrat text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
                Years
              </span>
            </div>

            {/* Decorative Element */}
            <div className="absolute -left-3 -top-3 -z-10 h-24 w-24 rounded-2xl border border-[#39B972]/30" />
          </div>

          {/* Right - Content */}
          <div>
            <Heading
              isAccentLine
              accentColor="#2E9B4F"
              labelColor="#2E9B4F"
              label="About Strap World"
              headingParts={[
                {
                  text: "Strength you can trust. Quality built to perform.",
                  color: "#063F3D",
                },
              ]}
              description="Strap World Pvt. Ltd. is a manufacturer and global supplier of high-quality PET and polyester strapping solutions. Since 2018, we have focused on delivering reliable products that help businesses secure, protect and transport their goods with confidence."
            />

            {/* Supporting Content */}
            <div className="mt-7 space-y-4 font-montserrat text-sm leading-7 text-[#16161D]/65">
              <p>
                From packaging and logistics to paper, textile, construction
                and industrial applications, our strapping solutions are
                designed to provide consistent strength, dependable
                performance and secure load handling.
              </p>

              <p>
                With a focus on manufacturing quality and customer
                requirements, we serve both domestic and international
                markets with solutions built for modern supply chains.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-[#063F3D]/10 pt-7 sm:grid-cols-4">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-montserrat text-xl font-bold text-[#063F3D] sm:text-2xl">
                    {stat.value}
                  </div>

                  <div className="mt-1 font-montserrat text-[10px] font-semibold uppercase tracking-[0.1em] text-[#16161D]/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-[#063F3D] px-6 py-3 font-montserrat text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2E9B4F]"
              >
                More About Us

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default About;