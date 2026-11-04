"use client";
import {
  ShieldCheck,
  Layers,
  Factory,
  Package,
  Settings,
  Truck,
} from "lucide-react";

import MaxWidth from "./layout/MaxWidth";
import GetEnquiryForm from "./form/GetEnquiryForm";
import { useState } from "react";

const iconMap = {
  ShieldCheck,
  Layers,
  Factory,
  Package,
  Settings,
  Truck,
};

interface PetStrapTypeCard {
  title: string;
  description: string;
  icon?: keyof typeof iconMap;
}

interface PetStrapTypesData {
  badge?: string;
  heading?: string;
  description?: string;
  cards?: PetStrapTypeCard[];
  bottomCTA?: {
    heading?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

interface PetStrapTypesProps {
  data?: PetStrapTypesData;
}

export default function PetStrapTypes({
  data,
}: PetStrapTypesProps) {
  const [open, setOpen] = useState(false);
  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[#F7FAF9] py-16 md:py-20 lg:py-24">
      <MaxWidth>
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full bg-[#E5F3EE] px-4 py-2 text-sm font-semibold text-[#167653]">
            {data.badge}
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#063F3D] sm:text-4xl lg:text-5xl">
            {data.heading}
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            {data.description}
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards?.map((item, index) => {
            const Icon = item.icon
              ? iconMap[item.icon]
              : Package;

            return (
              <article
                key={`${item.title}-${index}`}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E9B4F] hover:shadow-xl"
              >
                <div className="flex justify-between">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8F5EE] text-[#167653] transition-colors duration-300 group-hover:bg-[#167653] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="mb-2 block text-[20px] font-semibold uppercase tracking-wider text-[#2E9B4F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#063F3D]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {data.bottomCTA && (
          <div className="mt-10 rounded-2xl bg-[#063F3D] px-6 py-8 text-center sm:px-10">
            <h3 className="text-xl font-bold text-white md:text-2xl">
              {data.bottomCTA.heading}
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              {data.bottomCTA.description}
            </p>

            <a
              onClick={() => setOpen(!open)}
              className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#39B972] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#2E9B4F]"
            >
              {data.bottomCTA.buttonText || "Request a Quote"}
            </a>
          </div>
        )}
      </MaxWidth>
      <GetEnquiryForm
        isOpen={open}
        handleClose={() => setOpen(false)}
      />
    </section>
  );
}