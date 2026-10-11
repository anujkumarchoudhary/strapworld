"use client";

import { useEffect, useRef, useState } from "react";

interface UseCounterOptions {
  duration?: number;
  start?: boolean;
}

export const useCounter = (
  value: string | number,
  options: UseCounterOptions = {}
) => {
  const { duration = 2200, start = true } = options;

  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  // Extract numeric part
  const stringValue = String(value);

  const numericMatch = stringValue.match(/[\d.]+/);

  const numericValue = numericMatch
    ? Number(numericMatch[0])
    : null;

  const prefix = numericMatch
    ? stringValue.slice(0, numericMatch.index)
    : "";

  const suffix = numericMatch
    ? stringValue.slice(
        (numericMatch.index ?? 0) + numericMatch[0].length
      )
    : "";

  // Observe visibility
  useEffect(() => {
    if (!start || numericValue === null || isStarted) return;

    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [start, numericValue, isStarted]);

  // Smooth counter animation
  useEffect(() => {
    if (!isStarted || numericValue === null) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      /*
       * Smooth ease-out cubic
       *
       * Starts fast and gradually slows
       * near the final value.
       */
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const rawValue =
        easedProgress * numericValue;

      const currentValue =
        numericValue % 1 === 0
          ? Math.round(rawValue)
          : Number(rawValue.toFixed(1));

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(animationFrame);
  }, [isStarted, numericValue, duration]);

  // Non-numeric values
  if (numericValue === null) {
    return {
      ref,
      displayValue: value,
    };
  }

  return {
    ref,
    displayValue: `${prefix}${count}${suffix}`,
  };
};