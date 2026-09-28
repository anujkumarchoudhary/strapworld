"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BackgroundEffects from "@/src/components/BackgroundEffects";

type ServicesBannerProps = {
  label?: string;
  title?: string;
  highlight?: string;
  description?: string;
  breadcrumb?: string;
};

const ServicesBanner = ({
  label = "OUR SERVICES",
  title = "Digital solutions built",
  highlight = "for real growth.",
  description = "From websites and web applications to custom software, mobile apps, and scalable backend systems, we build digital products designed to perform and grow with your business.",
  breadcrumb = "Services",
}: ServicesBannerProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background */}
      <BackgroundEffects />

      {/* Extra glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-purple-500 to-blue-500" />

            <span className="text-[10px] font-semibold tracking-[0.28em] text-white/60 sm:text-xs">
              {label}
            </span>

            <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              {highlight}
            </span>
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base"
            >
              {description}
            </motion.p>
          )}

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-white/35"
          >
            <span>Home</span>

            <ArrowUpRight className="h-3.5 w-3.5 text-purple-400" />

            <span className="text-white/75">
              {breadcrumb}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;