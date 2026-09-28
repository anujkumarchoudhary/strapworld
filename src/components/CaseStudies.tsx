"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

import easyClipImage from "@/public/images/case_studies/case_studies_1.png";
import fintechImage from "@/public/images/case_studies/case_studies_2.png";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import { useResponsive } from "../hooks/useResponsive";

type CaseStudy = {
  number: string;
  title: string;
  category: string;
  type: string;
  description: string;
  image: StaticImageData;
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "EasyClip CRM",
    category: "CRM",
    type: "SaaS • Web Application",
    description:
      "A centralized CRM solution designed to simplify lead management, automate sales workflows, and give teams a clearer view of customer relationships.",
    image: easyClipImage,
    href: "/case-studies/easyclip-crm",
  },

  {
    number: "02",
    title: "FinTech Platform",
    category: "FinTech",
    type: "SaaS • Multi-tenant",
    description:
      "A secure financial management platform built for multiple organizations, combining transaction processing, analytics, reporting, and role-based access.",
    image: fintechImage,
    href: "/case-studies/fintech-platform",
  },

  {
    number: "03",
    title: "Travel Operations Hub",
    category: "Travel",
    type: "Management • SaaS",
    description:
      "An all-in-one operations platform helping travel businesses manage bookings, customers, itineraries, vendors, and day-to-day workflows from one place.",
    image: easyClipImage,
    href: "/case-studies/travel-operations",
  },

  {
    number: "04",
    title: "HR Management Suite",
    category: "HR Tech",
    type: "SaaS • Enterprise",
    description:
      "A modern HR platform that brings employee records, attendance, leave management, payroll workflows, and organizational insights into a single workspace.",
    image: fintechImage,
    href: "/case-studies/hr-management",
  },

  {
    number: "05",
    title: "Analytics Command",
    category: "Analytics",
    type: "Dashboard • Data",
    description:
      "A data-driven dashboard that transforms complex business metrics into actionable insights through real-time KPIs, visual reports, and performance tracking.",
    image: easyClipImage,
    href: "/case-studies/analytics-command-center",
  },

  {
    number: "06",
    title: "E-Commerce Platform",
    category: "E-Commerce",
    type: "Web Application • API",
    description:
      "A scalable commerce platform connecting product management, orders, customers, payments, and inventory through a streamlined digital experience.",
    image: fintechImage,
    href: "/case-studies/ecommerce-platform",
  },
];
export default function CaseStudies({ data }: any) {
  const { isDesktop } = useResponsive();

  const [currentSlide, setCurrentSlide] = useState(0);

  // 2 cards per slide
  const cardsPerSlide = isDesktop ? 2 : 1;

  const totalSlides = Math.ceil(data.length / cardsPerSlide);

  const startIndex = currentSlide * cardsPerSlide;

  const visibleProjects = caseStudies.slice(
    startIndex,
    startIndex + cardsPerSlide,
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section id="case-studies" className="relative overflow-hidden bg-[#050507] py-12 lg:py-16">
      {/* ================= BACKGROUND ================= */}

      {/* Localized glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[140px]" />

      {/* Localized grid around glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
        `,
          backgroundSize: "45px 45px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
        }}
      />

      <MaxWidth className="relative">
        {/* Header */}
        <div className="mb-10  flex flex-col gap-8 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <Heading
            isCenter={isDesktop ? false : true}
            isAccentCircle={true}
            labelColor="#088F8F"
            accentColor="#088F8F"
            label={data?.label}
            headingParts={data?.headingParts}
            className=" mx-auto lg:mx-0 w-full md:w-[60%] lg:w-[60%]"
          />

          {/* Header controls */}
          <div className="flex lg:items-center justify-between gap-3">
            <div className="flex gap-3">
              {/* Previous */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous case studies"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10"
              >
                <ArrowLeft size={17} />
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next case studies"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/60 text-white transition-all duration-300 hover:bg-purple-500/10"
              >
                <ArrowRight size={17} />
              </button>
            </div>

            <Link
              href="/case-studies"
              className="group ml-2 inline-flex items-center gap-3 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.04]"
            >
              View All Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            key={currentSlide}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2 animate-[fadeIn_500ms_ease]"
          >
            {visibleProjects.map((project) => (
              <article
                key={project.number}
                className="group relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#08080b] transition-all duration-500 hover:border-purple-500/30"
              >
                <div className="grid min-h-[330px] grid-cols-1 md:grid-cols-[42%_58%]">
                  {/* Content */}
                  <div className="relative flex flex-col justify-between p-6 sm:p-7 lg:p-6 xl:p-7">
                    <div>
                      {/* Number */}
                      <div className="mb-8 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[11px] text-white/60">
                        {project.number}
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
                        {project.title}
                      </h3>

                      {/* Meta */}
                      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.08em] text-white/45">
                        {project.category}

                        <span className="mx-2 text-white/20">•</span>

                        {project.type}
                      </p>

                      {/* Description */}
                      <p className="max-w-[260px] text-sm leading-6 text-white/45">
                        {project.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      href={project.href}
                      className="group/link mt-8 flex w-fit items-center gap-2 text-xs font-medium text-white transition-colors hover:text-purple-400"
                    >
                      View Case Study
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="relative min-h-[230px] overflow-hidden border-t border-white/[0.08] md:min-h-full md:border-l md:border-t-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

                    <div className="absolute inset-5 overflow-hidden rounded-lg border border-white/[0.08] bg-[#0d0d11] shadow-2xl transition-transform duration-700 group-hover:scale-[1.025]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={currentSlide === 0}
                        className="object-cover object-left-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Hover icon */}
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                      <MoveUpRight size={14} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-5 bg-purple-500"
                  : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}
