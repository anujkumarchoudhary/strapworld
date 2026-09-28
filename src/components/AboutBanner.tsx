"use client";

import { ArrowDownRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import MaxWidth from "@/src/components/layout/MaxWidth";
import Heading from "./common/Heading";
import BackgroundEffects from "./BackgroundEffects";
import { useResponsive } from "../hooks/useResponsive";

const AboutBanner = ({ data }: { data: any }) => {
  const { isDesktop } = useResponsive()
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-black text-white">

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <BackgroundEffects variant={2} />


      {/* ======================================================
          CONTENT
      ====================================================== */}

      <MaxWidth
        className="
          relative
          z-10
          flex
          min-h-[78vh]
          items-center
        "
      >

        <div className="w-full lg:w-[50%] py-12 lg:py-20">

          <Heading
            label="ABOUT SOFTQIVO"
            labelColor="rgba(255,255,255,0.45)"
            accentColor="#A855F7"
            isSparkles={true}
            textColor="#ffffff"
            isCenter={isDesktop ? false : true}
            isVisible={true}
            as="h1"
            breakIndex={5}
            headingParts={[
              {
                text: "We turn ",
                color: "#ffffff",
                weight: 600,
                lineHeight: 1.1,
              },
              {
                text: "ideas",
                gradient:
                  "linear-gradient(90deg, #A855F7, #8B5CF6, #3B82F6)",
                weight: 600,
                lineHeight: 1.1,
              },
              {
                text: " into digital products.",
                color: "#ffffff",
                weight: 600,
                lineHeight: 1.1,
              },
            ]}
            description="SoftQivo helps startups, businesses, and entrepreneurs transform ideas into powerful digital solutions — from modern websites and applications to custom software systems built around real business needs."
            descColor="rgba(255,255,255,0.45)"
            className="tracking-[-0.045em]"
          />


          {/* ==================================================
              BOTTOM META
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.45,
            }}
            className="
            mt-10
              lg:mt-20
              flex
              flex-wrap
              items-center
              gap-x-10
              gap-y-4
              border-t
              border-white/[0.08]
              pt-6
            "
          >

            <div>
              <span
                className="
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                Focus
              </span>

              <span
                className="
                  mt-1
                  block
                  text-sm
                  font-medium
                  text-white/60
                "
              >
                Digital Products
              </span>
            </div>


            <div>
              <span
                className="
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                Approach
              </span>

              <span
                className="
                  mt-1
                  block
                  text-sm
                  font-medium
                  text-white/60
                "
              >
                Strategy · Design · Technology
              </span>
            </div>


            <div>
              <span
                className="
                  block
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/25
                "
              >
                Built For
              </span>

              <span
                className="
                  mt-1
                  block
                  text-sm
                  font-medium
                  text-white/60
                "
              >
                Startups · Businesses · Entrepreneurs
              </span>
            </div>

          </motion.div>

        </div>

      </MaxWidth>


      {/* ======================================================
          DECORATIVE EDGE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-purple-500/40
          to-transparent
        "
      />

    </section>
  );
};

export default AboutBanner;