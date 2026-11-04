"use client";
import {
  Recycle,
  Flame,
  Waves,
  MoveHorizontal,
  Layers,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

import MaxWidth from "./layout/MaxWidth";
import { useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";

const iconMap = {
  Recycle,
  Flame,
  Waves,
  MoveHorizontal,
  Layers,
  PackageCheck,
};

interface ManufacturingStep {
  number?: string;
  icon?: keyof typeof iconMap;
  title: string;
  description: string;
}

interface ManufacturingProcessData {
  badge?: string;
  heading?: string;
  description?: string;
  steps?: ManufacturingStep[];
  bottomCTA?: {
    heading?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

interface PetStrapManufacturingProcessProps {
  data?: ManufacturingProcessData;
}

export default function PetStrapManufacturingProcess({
  data,
}: PetStrapManufacturingProcessProps) {
  const [open, setOpen] = useState(false);

  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-[#063F3D] py-20 md:py-24">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />

      <MaxWidth className="relative">

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">

            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8DDBB0]">
              <span className="h-2 w-2 rounded-full bg-[#39B972]" />
              {data.badge}
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {data.heading}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              {data.description}
            </p>
          </div>

          <div className="hidden lg:block">
            <span className="text-7xl font-bold tracking-tighter text-white/10">
              01—{String(data.steps?.length || 0).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[31px] hidden h-px bg-white/20 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">

            {data.steps?.map((step, index) => {
              const Icon = step.icon
                ? iconMap[step.icon] || PackageCheck
                : PackageCheck;

              return (
                <div key={`${step.number || index}-${step.title}`} className="relative">

                  {/* Step indicator */}
                  <div className="mb-7 flex items-center gap-4 lg:block">

                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#39B972]/50 bg-[#0B514B] text-[#8DDBB0] shadow-[0_0_25px_rgba(57,185,114,0.12)] transition-all duration-300 hover:border-[#39B972] hover:bg-[#167653]">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>

                    <span className="text-4xl font-bold text-white/20 lg:absolute lg:-top-1 lg:left-20 lg:text-2xl">
                      {step.number || String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Step content */}
                  <div className="border-l border-white/15 pl-5 lg:border-l-0 lg:pl-0">

                    <h3 className="text-lg font-bold leading-snug text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {step.description}
                    </p>

                  </div>

                  {/* Mobile connector */}
                  {index !== (data.steps?.length || 0) - 1 && (
                    <div className="absolute -bottom-7 left-8 h-7 w-px bg-white/20 lg:hidden" />
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        {data.bottomCTA && (
          <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">

            <div>
              <h3 className="text-xl font-bold text-white">
                {data.bottomCTA.heading}
              </h3>

              <p className="mt-2 text-sm text-white/60">
                {data.bottomCTA.description}
              </p>
            </div>

            <a
              onClick={() => setOpen(!open)}
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#39B972] px-7 py-4 font-semibold text-white transition-all hover:bg-[#2E9B4F]"
            >
              {data.bottomCTA.buttonText || "Request a Quote"}
              <ArrowRight size={18} />
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