"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SliderItem {
  image: string;
  floatingLabel?: string;
  floatingCard?: {
    title?: string;
    list?: {
      name?: string;
      desc?: string;
    }[];
  };
}

interface ImageSliderProps {
  slides: SliderItem[];
  interval?: number;
}

export default function ImageSlider({
  slides,
  interval = 5000,
}: ImageSliderProps) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  /*
   * AUTO SLIDE
   */
  // useEffect(() => {
  //   if (slides.length <= 1 || isHovered) return;

  //   const timer = setInterval(() => {
  //     setActive((prev) => {
  //       if (prev >= slides.length - 1) {
  //         return prev;
  //       }

  //       return prev + 1;
  //     });
  //   }, interval);

  //   return () => clearInterval(timer);
  // }, [slides.length, interval, isHovered]);

  if (!slides?.length) return null;

  const isFirst = active === 0;
  const isLast = active === slides.length - 1;

  /*
   * NEXT
   */
  const nextSlide = () => {
    if (isLast) return;

    setActive((prev) => prev + 1);
  };

  /*
   * PREVIOUS
   */
  const previousSlide = () => {
    if (isFirst) return;

    setActive((prev) => prev - 1);
  };

  return (
    <div
      className="relative aspect-16/14 w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPrevHovered(false);
        setIsNextHovered(false);
      }}
    >
      {/* SLIDER TRACK */}
      <motion.div
        className="flex h-full w-full"
        animate={{
          x: `-${active * 100}%`,
        }}
        transition={{
          duration: 1.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-full min-w-full shrink-0"
          >
            <Image
              src={slide.image}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt={
                slide.floatingLabel ||
                `Strap World slide ${index + 1}`
              }
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* PREVIOUS BUTTON */}
      {slides.length > 1 && (
        <button
          type="button"
          onClick={previousSlide}
          disabled={isFirst}
          aria-label="Previous slide"
          onMouseEnter={() => setIsPrevHovered(true)}
          onMouseLeave={() => setIsPrevHovered(false)}
          className={`
            group
            absolute
            left-4
            top-1/2
            z-20
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            shadow-md
            transition-all
            duration-300
            ${
              isFirst
                ? "cursor-not-allowed bg-white/40 text-black/25"
                : "cursor-pointer bg-white/90 text-black hover:bg-[#2E9B4F] hover:text-white"
            }
          `}
        >
          {isPrevHovered && !isFirst ? (
            /* HOVER ICON */
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M19 12H5" />
              <path d="M11 18l-6-6 6-6" />
            </svg>
          ) : (
            /* NORMAL ICON */
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          )}
        </button>
      )}

      {/* NEXT BUTTON */}
      {slides.length > 1 && (
        <button
          type="button"
          onClick={nextSlide}
          disabled={isLast}
          aria-label="Next slide"
          onMouseEnter={() => setIsNextHovered(true)}
          onMouseLeave={() => setIsNextHovered(false)}
          className={`
            group
            absolute
            right-4
            top-1/2
            z-20
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            shadow-md
            transition-all
            duration-300
            ${
              isLast
                ? "cursor-not-allowed bg-white/40 text-black/25"
                : "cursor-pointer bg-white/90 text-black hover:bg-[#2E9B4F] hover:text-white"
            }
          `}
        >
          {isNextHovered && !isLast ? (
            /* HOVER ICON */
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          ) : (
            /* NORMAL ICON */
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          )}
        </button>
      )}

      {/* INDICATORS */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 right-6 z-20 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-[3px]
                rounded-full
                transition-all
                duration-500
                ${
                  active === index
                    ? "w-8 bg-[#2E9B4F]"
                    : "w-4 bg-black/50"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}