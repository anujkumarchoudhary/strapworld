"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  MdArrowBack,
  MdArrowForward,
  MdArrowOutward,
} from "react-icons/md";

import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";

const IndustriesWeServe = ({ data }: any) => {
  const { headingParts, label, list = [], description } = data || {};
  const { isDesktop } = useResponsive();

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const visibleCards = isDesktop ? 3 : 1;

  // Number of cloned cards
  const cloneCount = Math.max(visibleCards, 3);

  /*
   * Start from clone position.
   *
   * Example:
   *
   * [4,5,1,2,3,4,5,1,2,3]
   *       ↑
   *     start
   */
  const [currentIndex, setCurrentIndex] = useState(cloneCount);

  const [enableTransition, setEnableTransition] =
    useState(true);

  /*
   * Create infinite list
   */
  const sliderList = [
    ...list.slice(-cloneCount),
    ...list,
    ...list.slice(0, cloneCount),
  ];

  /*
   * Detect section visibility
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /*
   * AUTO SLIDE
   */
  useEffect(() => {
    if (!isVisible || isHovered || list.length <= visibleCards) {
      return;
    }
const interval = setInterval(() => {
  setEnableTransition(true);
  setCurrentIndex((prev) => prev + 1);
}, 1800);

    return () => clearInterval(interval);
  }, [
    isVisible,
    isHovered,
    list.length,
    visibleCards,
  ]);

  /*
   * INFINITE LOOP RESET
   */
  const handleTransitionEnd = () => {
    /*
     * Reached the end clone
     */
    if (currentIndex >= list.length + cloneCount) {
      setEnableTransition(false);

      setCurrentIndex(cloneCount);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }

    /*
     * Reached the beginning clone
     */
    if (currentIndex < cloneCount) {
      setEnableTransition(false);

      setCurrentIndex(list.length + cloneCount - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  /*
   * NEXT
   */
  const handleNext = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  /*
   * PREVIOUS
   */
  const handlePrevious = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  if (!list.length) return null;

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#F5F7F2] py-10 md:py-12 lg:py-20"
    >
      <MaxWidth>

        {/* ================= HEADER ================= */}

        <div className="mb-10 flex items-end justify-between gap-6 lg:mb-12">

          <div className="grid w-full justify-between lg:grid-cols-[45%_25%]">
            <Heading
              as="h2"
              isDart={true}
              isCenter={!isDesktop}
              isAccentLine={true}
              label={label}
              labelColor="#39B972"
              accentColor="#39B972"
              textColor={data?.textColor || "#ffffff"}
              isGradient={true}
              headingParts={headingParts}
              description={description}
            />
          </div>

          {/* Controls */}

          <div className="hidden shrink-0 items-center gap-3 sm:flex">

            <button
              type="button"
              onClick={handlePrevious}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#063F3D]/20
                bg-white
                text-[#063F3D]
                transition-all
                duration-300
                hover:bg-[#063F3D]
                hover:text-white
              "
            >
              <MdArrowBack size={22} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#063F3D]
                text-white
                transition-all
                duration-300
                hover:bg-[#2E9B4F]
              "
            >
              <MdArrowForward size={22} />
            </button>

          </div>
        </div>

        {/* ================= SLIDER ================= */}

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${
              enableTransition
                ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                : ""
            }`}
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleCards)
              }%)`,
            }}
          >

            {sliderList.map(
              (product: any, index: number) => (

                <div
                  key={`${product.title}-${index}`}
                  className="
                    w-full
                    shrink-0
                    px-2
                    sm:w-1/2
                    lg:w-1/3
                  "
                >

                  <div
                    className="
                      group
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-[10px]
                      bg-white
                    "
                  >

                    {/* Image */}

                    <div className="relative aspect-[16/9] w-full overflow-hidden">

                      <Image
                        src={product?.image}
                        fill
                        alt={product?.title || ""}
                        className="
                          rounded-tl-[10px]
                          rounded-tr-[10px]
                          object-cover
                          transition-transform
                          duration-500
                          ease-out
                          group-hover:scale-105
                        "
                      />

                    </div>

                    {/* Content */}

                    <div className="flex flex-1 flex-col p-6 sm:p-8">

                      <div className="flex items-center justify-between gap-3">

                        <h3
                          className="
                            font-montserrat
                            text-[clamp(17px,1.5vw,21px)]
                            font-semibold
                            tracking-[-0.01em]
                            text-[#16161D]
                          "
                        >
                          {product?.title}
                        </h3>

                        <MdArrowOutward
                          size={21}
                          className="shrink-0 text-[#2E9B4F]"
                        />

                      </div>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

        {/* Mobile controls */}

        <div className="mt-6 flex justify-center gap-3 sm:hidden">

          <button
            type="button"
            onClick={handlePrevious}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#063F3D]/20
              bg-white
              text-[#063F3D]
            "
          >
            <MdArrowBack size={20} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#063F3D]
              text-white
            "
          >
            <MdArrowForward size={20} />
          </button>

        </div>

      </MaxWidth>
    </section>
  );
};

export default IndustriesWeServe;