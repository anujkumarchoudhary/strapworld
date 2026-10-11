"use client";

import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const threshold = isDesktop ? 0.3 : 0;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}