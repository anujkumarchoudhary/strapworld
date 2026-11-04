"use client";
import {
  MapPin,
  Factory,
  PackageCheck,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import MaxWidth from "./layout/MaxWidth";
import GetEnquiryForm from "./form/GetEnquiryForm";
import { useState } from "react";

const iconMap = {
  Factory,
  PackageCheck,
  ShieldCheck,
  Truck,
  Globe2,
};

type Feature = {
  icon?: keyof typeof iconMap;
  title: string;
  description: string;
};

type LocationButton = {
  text: string;
  link: string;
  style?: "primary" | "secondary";
};

interface ManufacturerLocationData {
  badge?: string;
  heading?: string;
  paragraphs?: string[];
  buttons?: LocationButton[];
  features?: Feature[];
  locationInfo?: {
    icon?: keyof typeof iconMap;
    heading?: string;
    description?: string;
    linkText?: string;
    link?: string;
  };
}

interface PetStrapManufacturerLocationProps {
  data?: ManufacturerLocationData;
}

export default function PetStrapManufacturerLocation({
  data,
}: PetStrapManufacturerLocationProps) {
  const [open, setOpen] = useState(false);


  if (!data) return null;

  const LocationIcon = data.locationInfo?.icon
    ? iconMap[data.locationInfo.icon] || Globe2
    : Globe2;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <MaxWidth className="mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            {data.badge && (
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E8F5EE] px-4 py-2 text-sm font-semibold text-[#167653]">
                <MapPin size={16} />
                {data.badge}
              </span>
            )}

            {data.heading && (
              <h2 className="text-3xl font-bold leading-tight text-[#063F3D] sm:text-4xl lg:text-5xl">
                {data.heading}
              </h2>
            )}

            <div className="mt-6 space-y-4">
              {data.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-8 text-gray-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Buttons */}
            {data.buttons && data.buttons.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {data.buttons.map((button, index) => (
                  <a
                    key={`${button.text}-${index}`}
                    onClick={() => setOpen(!open)}
                    className={
                      button.style === "secondary"
                        ? "inline-flex cursor-pointer items-center justify-center rounded-lg border border-[#167653] px-7 py-3.5 font-semibold text-[#167653] transition hover:bg-[#E8F5EE]"
                        : "inline-flex items-center justify-center rounded-lg bg-[#167653] px-7 py-3.5 font-semibold text-white transition hover:bg-[#063F3D]"
                    }
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Feature Cards */}
          {data.features && data.features.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {data.features.map((item, index) => {
                const Icon = item.icon
                  ? iconMap[item.icon] || Factory
                  : Factory;

                return (
                  <div
                    key={`${item.title}-${index}`}
                    className="group rounded-2xl border border-gray-200 bg-[#F8FAF9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E9B4F] hover:bg-white hover:shadow-lg"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F3EE] text-[#167653] transition-colors group-hover:bg-[#167653] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-lg font-bold text-[#063F3D]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Location Information */}
        {data.locationInfo && (
          <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-[#DCEBE3] bg-[#F3F8F5] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#167653] shadow-sm">
                <LocationIcon size={25} />
              </div>

              <div>
                {data.locationInfo.heading && (
                  <h3 className="text-lg font-bold text-[#063F3D]">
                    {data.locationInfo.heading}
                  </h3>
                )}

                {data.locationInfo.description && (
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {data.locationInfo.description}
                  </p>
                )}
              </div>
            </div>

            {data.locationInfo.linkText && (
              <a
                onClick={()=>setOpen(!open)}
                className="shrink-0 font-semibold cursor-pointer text-[#167653] transition hover:text-[#063F3D]"
              >
                {data.locationInfo.linkText} →
              </a>
            )}
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