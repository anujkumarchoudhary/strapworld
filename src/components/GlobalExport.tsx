"use client";

import React from "react";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Image from "next/image";
import csc from "countrycitystatejson";

const exportCountryNames = [
  "India",
  "United States",
  "United Arab Emirates",
  "Bangladesh",
  "Turkey",
];

const GlobalExport = () => {
  const allCountries = csc.getCountries();

  // Get only our export countries


  return (
    <section className="relative overflow-hidden py-10 md:py-12 lg:py-20">
      {/* Background Map */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-no-repeat"
        // style={{
        //   backgroundImage: "url('/images/home/map_img.jpg')",
        //   backgroundPosition: "left center",
        //   backgroundSize: "55% auto",
        //   opacity: 0.2,
        // }}
      />

      {/* Content */}
      <MaxWidth className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left Content */}
        <div className="max-w-2xl">
          <Heading
            isAccentLine={true}
            accentColor="#2E9B4F"
            labelColor="#2E9B4F"
            label="Export"
            headingParts={[
              {
                text: "Export Global",
                color: "#000000",
              },
            ]}
            description="We manufacture and supply high-quality PET strapping solutions from India to customers across global markets."
          />

          {/* Export Countries */}
          <div className="mt-10">
            <p className="mb-5 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#2E9B4F]">
              Our Export Markets
            </p>

            {/* <div className="flex flex-wrap gap-3">
              {exportCountries.map((country) => (
                <div
                  key={country!.shortName}
                  className="group flex items-center gap-2.5 rounded-full border border-[#063F3D]/10 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#39B972]/40 hover:shadow-md"
                >
                  <span
                    className="text-2xl leading-none"
                    role="img"
                    aria-label={`${country!.name} flag`}
                  >
                    {country!.emoji}
                  </span>

                  <span className="font-montserrat text-sm font-semibold text-[#063F3D]">
                    {country!.name}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-[16/12]">
          <Image
            src="/images/home/mao_03.jpg"
            fill
            alt="Strap World global export reach"
            className="rounded-[30px] object-cover"
          />
        </div>
      </MaxWidth>
    </section>
  );
};

export default GlobalExport;