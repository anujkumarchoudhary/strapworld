"use client";

import React from "react";

type GlowProps = {
  className?: string;
  color?: "purple" | "blue";
};

function Glow({ className = "", color = "purple" }: GlowProps) {
  const colors = {
    purple: "bg-purple-500/15",
    blue: "bg-blue-500/10",
  };

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        rounded-full
        blur-[150px]
        ${colors[color]}
        ${className}
      `}
    />
  );
}

type DotsProps = {
  className?: string;
  position?: "top-left" | "bottom-right";
};

function Dots({
  className = "",
  position = "top-left",
}: DotsProps) {
  const positionClass =
    position === "top-left"
      ? "left-0 top-0"
      : "bottom-0 right-[25%]";

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        h-[180px]
        w-[300px]
        opacity-40
        ${positionClass}
        ${className}
      `}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(168,85,247,0.65) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        maskImage:
          "linear-gradient(to right, black, transparent 85%)",
        WebkitMaskImage:
          "linear-gradient(to right, black, transparent 85%)",
      }}
    />
  );
}

function Grid() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.035]
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 20%, transparent 75%)",
      }}
    />
  );
}

export default function SectionBackground() {
  return (
    <>
      {/* White background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white"
      />

      {/* Grid */}
      <Grid />

      {/* Main purple glow */}
      <Glow
        color="purple"
        className="
          left-[35%]
          top-[10%]
          h-[650px]
          w-[650px]
          -translate-x-1/2
        "
      />

      {/* Blue glow */}
      <Glow
        color="blue"
        className="
          right-[-15%]
          top-[30%]
          h-[600px]
          w-[600px]
        "
      />

      {/* Top-left dots */}
      <Dots position="top-left" />

      {/* Bottom-right dots */}
      <Dots
        position="bottom-right"
        className="
          h-[140px]
          w-[260px]
          opacity-25
        "
      />
    </>
  );
}