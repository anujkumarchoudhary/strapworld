"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers3,
  ShieldCheck,
  Gauge,
  Users,
} from "lucide-react";

import MaxWidth from "@/src/components/layout/MaxWidth";
import { useInViewOnce } from "@/src/hooks/useInViewOnce";
import Heading from "./common/Heading";
import { useResponsive } from "../hooks/useResponsive";

const reasons = [
  {
    icon: Layers3,
    number: "01",
    title: "Built Around Your Goals",
    description:
      "We start with your business objectives, users, and challenges before choosing the right technology or development approach.",
  },
  {
    icon: Gauge,
    number: "02",
    title: "Performance That Scales",
    description:
      "Our solutions are structured for speed, maintainability, and growth so your product can evolve as your business expands.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality & Reliability",
    description:
      "From clean architecture to testing and security, we focus on creating dependable products that are built to last.",
  },
  {
    icon: Users,
    number: "04",
    title: "A Long-Term Partner",
    description:
      "We work beyond delivery, helping you improve, maintain, and continuously evolve your digital product over time.",
  },
];

const WhySoftQivo = () => {
  const { isDesktop } = useResponsive();
  const { ref, isVisible } =
    useInViewOnce<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-600/[0.08] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[130px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <MaxWidth>
        <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">

{/* LEFT */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={
    isVisible
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: -30 }
  }
  transition={{ duration: 0.7 }}
>
  <Heading
    label="WHY SOFTQIVO"
    labelColor="rgba(255,255,255,0.5)"
    accentColor="#A855F7"
    textColor="rgba(255,255,255,0.5)"
    isCenter={isDesktop ? false : true}
    isAccentCircle={true}
    isVisible={isVisible}
    as="h2"
    headingParts={[
      {
        text: "More than ",
        color: "#FFFFFF",
      },
      {
        text: "just development.",
        gradient:
          "linear-gradient(90deg, #c084fc, #8b5cf6, #3b82f6)",
      },
    ]}
    description="We combine strategy, design, engineering, and technology to create digital products that solve real problems and support long-term business growth."
  />

  {/* CTA */}
  <div className="mt-9 flex lg:block justify-center">
    <a
      href="/contact"
      className="group inline-flex items-center gap-3 text-sm font-semibold text-white/70 transition-colors hover:text-white"
    >
      Let's build something meaningful

      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-purple-500/10">
        <ArrowUpRight
          className="
            h-4 w-4
            text-purple-400
            transition-transform duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </span>
    </a>
  </div>
</motion.div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={
                    isVisible
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {
                          opacity: 0,
                          y: 25,
                        }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.1,
                  }}
                  className="
                    group relative
                    bg-black p-7
                    transition-all duration-500
                    hover:bg-white/[0.035]
                    sm:p-8
                    lg:p-9
                  "
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                      {item.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition-all duration-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
                      <Icon className="h-4.5 w-4.5 text-white/50 transition-colors duration-300 group-hover:text-purple-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-7 h-px w-full bg-white/[0.06]">
                    <div className="h-px w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default WhySoftQivo;