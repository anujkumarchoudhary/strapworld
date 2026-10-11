"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface WordColorAnimationOptions {
  text: string;
  baseColor?: string;
  activeColor?: string;
}

export const useWordColorAnimation = ({
  text,
  baseColor = "#000000",
  activeColor = "#0B52E6",
}: WordColorAnimationOptions) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const [progress, setProgress] = useState(0);

  const words = useMemo(() => {
    return text.trim().split(/\s+/);
  }, [text]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const updateProgress = () => {
      const heading = headingRef.current;

      if (!heading) {
        ticking = false;
        return;
      }

      const rect = heading.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Animation starts when heading reaches 80%
       * of viewport height.
       */
      const start = viewportHeight * 0.8;

      /*
       * Animation completes when heading reaches
       * 20% of viewport height.
       */
      const end = viewportHeight * 0.2;

      const value =
        (start - rect.top) / (start - end);

      const clamped = Math.max(
        0,
        Math.min(1, value)
      );

      setProgress(clamped);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;

        requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  /*
   * Continuous word progress.
   *
   * Example:
   * progress = 0.25
   * 25% of the words have been reached.
   */
  const wordProgress = progress * words.length;

  return {
    headingRef,
    words,
    wordProgress,
    baseColor,
    activeColor,
  };
};