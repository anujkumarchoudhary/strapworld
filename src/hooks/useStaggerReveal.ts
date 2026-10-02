"use client";

import { useEffect, useRef, useState } from "react";

export const useStaggerReveal = (
  itemCount: number,
  options: {
    delay?: number;
    threshold?: number;
  } = {}
) => {
  const {
    delay = 220,
    threshold = 0.15,
  } = options;

  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!isVisible) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => {
          if (prev.includes(i)) return prev;
          return [...prev, i];
        });
      }, i * delay);

      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isVisible, itemCount, delay]);

  return {
    ref,
    visibleItems,
    isVisible,
  };
};