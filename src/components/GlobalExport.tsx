"use client";

import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Image from "next/image";

const exportCountries = [
  { code: "in", name: "India" },
  { code: "us", name: "United States" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "jp", name: "Japan" },
  { code: "bd", name: "Bangladesh" },
  { code: "tr", name: "Turkey" },
  { code: "au", name: "Australia" },
  { code: "gb", name: "United Kingdom" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "de", name: "Germany" },
  { code: "za", name: "South Africa" },
  { code: "ca", name: "Canada" },
  { code: "fr", name: "France" },
  { code: "it", name: "Italy" },
  { code: "es", name: "Spain" },
  { code: "nl", name: "Netherlands" },
  { code: "sg", name: "Singapore" },
  { code: "my", name: "Malaysia" },
  { code: "th", name: "Thailand" },
  { code: "id", name: "Indonesia" },
];

const GlobalExport = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-12 lg:py-20">
      <MaxWidth className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="max-w-2xl">
          <Heading
            isAccentLine
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

          <div className="mt-10">
            <p className="mb-5 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#2E9B4F]">
              Our Export Markets
            </p>

            <div className="flex flex-wrap gap-3">
              {exportCountries.map((country) => (
                <div
                  key={country.code}
                  className="flex items-center gap-2.5 rounded-full border border-[#063F3D]/10 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#39B972]/40 hover:shadow-md"
                >
                  <span
                    className={`fi fi-${country.code} text-xl`}
                    role="img"
                    aria-label={`${country.name} flag`}
                  />

                  <span className="font-montserrat text-sm font-semibold text-[#063F3D]">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

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