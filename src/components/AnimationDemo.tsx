"use client";

import { useInViewOnce } from "@/src/hooks/useInViewOnce";

export default function AnimationDemo() {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>();

  return (
    <section ref={ref} className="py-32 bg-slate-100">
      <div className="max-w-5xl mx-auto space-y-20 px-6">

        {/* 1️⃣ BLUR → CLEAR */}
        <div
          className={`text-4xl font-bold transition-all duration-700
          ${
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-10 blur-sm"
          }`}
        >
          🔹 Blur → Clear Animation
        </div>

        {/* 2️⃣ SLIDE FROM LEFT */}
        <div
          className={`p-8 bg-white shadow-xl transition-all duration-700
          ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          🔹 Slide From Left Animation
        </div>

        {/* 3️⃣ SCALE + ROTATE */}
        <div
          className={`p-8 bg-white shadow-xl transition-all duration-700
          ${
            isVisible
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-95 rotate-2"
          }`}
        >
          🔹 Scale + Rotate Animation
        </div>

        {/* 4️⃣ CLIP-PATH REVEAL */}
        <div
          style={{
            clipPath: isVisible
              ? "inset(0 0 0 0)"
              : "inset(0 0 100% 0)",
          }}
          className="p-8 bg-white shadow-xl transition-all duration-1000 ease-out"
        >
          🔹 Clip-Path Reveal Animation
        </div>

      </div>
    </section>
  );
}
