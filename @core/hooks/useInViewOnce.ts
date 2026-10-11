'use client';

import { useEffect, useRef, useState } from 'react';

export function useInViewOnce<T extends HTMLElement>(
  threshold: number = 0.3,
  delay: number = 0
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

          if (isDesktop && delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }

          obs.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return { ref, isVisible };
}