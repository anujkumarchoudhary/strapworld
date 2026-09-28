"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundEffects from "./BackgroundEffects";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";

interface CommonBannerProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  breakIndex?: number;
  breadcrumb?: string;
}

export default function CommonBanner({
  label = "GET IN TOUCH",
  title = " Let's Build ",
  highlight = "",
  description = "",
  breakIndex,
  breadcrumb = "Contact",
}: CommonBannerProps) {
  const {isDesktop}=useResponsive()
  return (
<section className="relative isolate overflow-hidden bg-black text-white">
  <BackgroundEffects />

  <MaxWidth className=" py-12 max-w-310 sm:px-8 lg:px-12 lg:py-24">
      <Heading
        label={label}
        isAccentLine={true}
        breakIndex={isDesktop ? breakIndex : undefined}
        labelColor="rgba(255,255,255,0.7)"
        accentColor="#ffffff"
        textColor="rgba(255,255,255,0.6)"
        isCenter={true}
        isVisible={true}
        as="h1"
        headingParts={[
          {
            text: title,
            color: "#FFFFFF",
          },
          {
            text: highlight,
            gradient:
              "linear-gradient(90deg, #c084fc 0%, #a78bfa 50%, #3b82f6 100%)",
          },
        ]}
        description={description}
      />
  </MaxWidth>
</section>
  );
}