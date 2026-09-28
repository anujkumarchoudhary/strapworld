"use client";

import { motion } from "framer-motion";
import MaxWidth from "./layout/MaxWidth";
import Icon from "@/src/utills/iconMap ";

interface WorkStep {
  number: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
}

interface HowWeWorkData {
  label: string;
  heading: string;
  description: string;
  steps: WorkStep[];
}

interface HowWeWorkProps {
  data: HowWeWorkData;
}

export default function HowWeWork({ data }: HowWeWorkProps) {
  return (
    <section className="relative overflow-hidden bg-[#050507] py-20 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Main localized glow */}
      <div className="pointer-events-none absolute left-[20%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.07] blur-[170px]" />

      <div className="pointer-events-none absolute right-[5%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[160px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[850px] w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
        }}
      />

      <MaxWidth className="relative z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
              {data.label}
            </span>

            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-white md:text-5xl lg:text-6xl"
          >
            {data.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 md:text-lg"
          >
            {data.description}
          </motion.p>
        </div>

        {/* =====================================================
            WORKFLOW
        ===================================================== */}

        <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
          {/* Central timeline */}
          <div className="absolute bottom-0 left-[30px] top-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/40 to-blue-500/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 lg:space-y-10">
            {data.steps.map((step, index) => (
              <WorkStepCard
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 flex max-w-3xl items-center justify-center gap-4 lg:mt-20"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

          <span className="text-center text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            Built around your goals
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </MaxWidth>
    </section>
  );
}

/* =====================================================
   WORK STEP CARD
===================================================== */

function WorkStepCard({
  step,
  index,
}: {
  step: WorkStep;
  index: number;
}) {
  const isRight = index % 2 !== 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative flex ${
        isRight ? "md:justify-end" : "md:justify-start"
      }`}
    >
      {/* =================================================
          TIMELINE DOT
      ================================================= */}

      <div className="absolute left-[30px] top-8 z-20 -translate-x-1/2 md:left-1/2">
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span className="absolute h-7 w-7 rounded-full bg-purple-500/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

          <span className="relative h-2.5 w-2.5 rounded-full border border-purple-400 bg-[#050507] shadow-[0_0_12px_rgba(168,85,247,0.8)] transition-all duration-500 group-hover:scale-125 group-hover:bg-purple-400" />
        </div>
      </div>

      {/* =================================================
          CARD
      ================================================= */}

      <div
        className={`relative ml-14 w-full md:ml-0 md:w-[43%] ${
          isRight ? "md:mr-0" : "md:ml-0"
        }`}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-purple-500/25 group-hover:bg-white/[0.045] lg:p-7">
          {/* Large background number */}
          <span className="pointer-events-none absolute -right-2 -top-7 select-none text-[110px] font-bold leading-none tracking-[-0.08em] text-white/[0.025] transition-all duration-500 group-hover:text-purple-500/[0.06]">
            {step.number}
          </span>

          <div className="relative z-10">
            {/* Top */}
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.07] text-purple-400 transition-all duration-500 group-hover:border-purple-500/40 group-hover:bg-purple-500/15">
                {/* <Icon
                  name={step.icon}
                  size={20}
                /> */}
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                {step.tag}
              </span>
            </div>

            {/* Content */}
            <div className="mt-7">
              <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-purple-400">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                {step.description}
              </p>
            </div>

            {/* Bottom accent */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-14" />

              <span className="text-[10px] uppercase tracking-[0.18em] text-white/20 transition-colors group-hover:text-white/40">
                SoftQivo
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}