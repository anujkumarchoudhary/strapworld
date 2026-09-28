"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import Icon from "../utills/iconMap ";

// =====================================================
// TYPES
// =====================================================

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tag: string;
}

interface HeadingPart {
  text: string;
  color?: string;
  style?: string;
  size?: string;
  weight?: string | number;
  gradient?: string;
}

interface ProcessData {
  label: string;
  headingParts: HeadingPart[];
  description: string;
  steps: ProcessStep[];
  result: {
    label: string;
    text: string;
    highlight: string;
  };
}

interface OurProcessProps {
  data: ProcessData;
}

// =====================================================
// MAIN
// =====================================================

export default function OurProcess({ data }: OurProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-16
        text-white
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Purple Glow */}

        <div
          className="
            absolute
            left-[8%]
            top-[12%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-purple-600/[0.10]
            blur-[150px]
          "
        />

        {/* Blue Glow */}

        <div
          className="
            absolute
            bottom-[8%]
            right-[5%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-blue-600/[0.09]
            blur-[160px]
          "
        />

        {/* Center Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/[0.045]
            blur-[150px]
          "
        />

        {/* Localized Grid */}

        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[900px]
            w-[1200px]
            -translate-x-1/2
            opacity-[0.045]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",

            maskImage:
              "radial-gradient(ellipse 65% 60% at center, black 0%, rgba(0,0,0,0.8) 45%, transparent 80%)",

            WebkitMaskImage:
              "radial-gradient(ellipse 65% 60% at center, black 0%, rgba(0,0,0,0.8) 45%, transparent 80%)",
          }}
        />

        {/* Radial Fade */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.65)_85%)]
          "
        />

        {/* Top Border Glow */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-purple-500/30
            to-transparent
          "
        />

        {/* Bottom Border Glow */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-blue-500/30
            to-transparent
          "
        />
      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <MaxWidth className="relative">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mx-auto w-full md:w-[80%] lg:w-[55%]">

          <Heading
            isCenter={true}
            isAccentLine={true}
            accentColor="#A855F7"
            labelColor="rgba(255,255,255,0.45)"
            textColor="#FFFFFF"
            label={data.label}
            headingParts={data.headingParts}
            description={data.description}
            descColor="rgba(255,255,255,0.45)"
          />

        </div>


        {/* ===================================================
            PROCESS
        =================================================== */}

        <div className="relative mt-20 md:mt-40">

          {/* =================================================
              BACKGROUND TIMELINE
          ================================================= */}

          <div
            className="
              absolute
              bottom-0
              left-[35px]
              top-0
              w-px
              bg-white/[0.08]
              md:left-1/2
              md:-translate-x-1/2
            "
          />


          {/* =================================================
              ANIMATED TIMELINE
          ================================================= */}

          <motion.div
            style={{ height: lineHeight }}
            className="
              absolute
              left-[35px]
              top-0
              w-px
              origin-top
              bg-gradient-to-b
              from-purple-500
              via-violet-500
              to-blue-500
              shadow-[0_0_12px_rgba(168,85,247,0.5)]
              md:left-1/2
              md:-translate-x-1/2
            "
          />


          {/* =================================================
              STEPS
          ================================================= */}

          <div className="space-y-28 md:space-y-40">

            {data.steps.map((step, index) => (
              <ProcessItem
                key={step.number}
                step={step}
                index={index}
              />
            ))}

          </div>

        </div>


        {/* ===================================================
            RESULT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-32
            border-t
            border-white/[0.08]
            pt-10
            md:mt-44
          "
        >

          <div
            className="
              flex
              flex-col
              justify-between
              gap-8
              md:flex-row
              md:items-end
            "
          >

            {/* TEXT */}

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/35
                "
              >
                {data.result.label}
              </p>


              <p
                className="
                  mt-4
                  max-w-2xl
                  text-2xl
                  font-medium
                  leading-relaxed
                  tracking-tight
                  text-white
                  md:text-3xl
                "
              >
                {data.result.text}

                <span className="text-white/35">
                  {data.result.highlight}
                </span>

              </p>

            </div>


            {/* ARROW */}

            <div
              className="
                group
                flex
                cursor-pointer
                items-center
                justify-end
                gap-4
              "
            >

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  transition-all
                  duration-300
                  group-hover:border-purple-500/50
                  group-hover:bg-purple-500/10
                "
              >

                <Icon
                  name="arrow"
                  className="
                    relative
                    z-10
                    h-5
                    w-5
                    text-white/40
                    transition-all
                    duration-300
                    group-hover:-rotate-45
                    group-hover:text-purple-400
                  "
                />

              </div>

            </div>

          </div>

        </motion.div>

      </MaxWidth>
    </section>
  );
}


// =====================================================
// PROCESS ITEM
// =====================================================

function ProcessItem({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        grid
        md:grid-cols-2
      "
    >

      {/* ===================================================
          LARGE NUMBER
      =================================================== */}

      <div
        className={`
          hidden
          md:block
          ${
            index % 2 === 0
              ? "pr-24 text-right"
              : "order-2 pl-24"
          }
        `}
      >

        <span
          className="
            text-[140px]
            font-semibold
            leading-none
            tracking-[-0.08em]
            text-white/[0.045]
          "
        >
          {step.number}
        </span>

      </div>


      {/* ===================================================
          CENTER NODE
      =================================================== */}

      <div
        className="
          absolute
          left-[35px]
          top-0
          z-10
          -translate-x-1/2
          md:left-1/2
        "
      >

        <motion.div
          whileInView={{
            scale: [0.7, 1.15, 1],
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            h-[18px]
            w-[18px]
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-[#050505]
            shadow-[0_0_20px_rgba(168,85,247,0.25)]
          "
        >

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-blue-500
              shadow-[0_0_12px_rgba(139,92,246,0.7)]
            "
          />

        </motion.div>

      </div>


      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className={`
          pl-16
          md:pl-0
          ${
            index % 2 === 0
              ? "md:order-2 md:pl-24"
              : "md:pr-24 md:text-right"
          }
        `}
      >

        {/* TAG */}

        <span
          className="
            text-xs
            font-semibold
            tracking-[0.25em]
            text-purple-400
          "
        >
          {step.tag}
        </span>


        {/* TITLE */}

        <h3
          className="
            mt-4
            text-4xl
            font-semibold
            tracking-tight
            text-white
            md:text-5xl
          "
        >
          {step.title}
        </h3>


        {/* DESCRIPTION */}

        <p
          className="
            mt-5
            max-w-lg
            text-base
            leading-7
            text-white/45
            md:text-lg
          "
        >
          {step.description}
        </p>


        {/* SMALL ACCENT */}

        <div
          className={`
            mt-7
            flex
            items-center
            gap-3
            ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }
          `}
        >

          <span
            className="
              h-px
              w-10
              bg-gradient-to-r
              from-purple-500
              to-blue-500
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white/25
            "
          >
            SoftQivo Process
          </span>

        </div>

      </div>

    </motion.div>
  );
}