"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight } from "react-icons/md";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useStaggerReveal } from "../hooks/useStaggerReveal";

const RelatedProducts = ({ data }: any) => {
  const { isDesktop } = useResponsive();

  const source = data?.relatedProducts ?? data;

  const relatedList = Array.isArray(source)
    ? source
    : Array.isArray(source?.list)
      ? source.list
      : source?.productId
        ? [source]
        : [];

  const products = relatedList
    .map((item: any) => item?.productId ?? item)
    .filter((product: any) => product?.title);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const {
    ref: productsRef,
    visibleItems,
  } = useStaggerReveal(products.length, {
    delay: 150,
    threshold: 0.15,
  });

  const scrollCarousel = (direction: "next" | "prev") => {
    const container = carouselRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const gap = 16;
    const scrollAmount = firstCard.offsetWidth + gap;
    const maxScroll =
      container.scrollWidth - container.clientWidth;

    if (direction === "next") {
      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      if (container.scrollLeft <= 5) {
        container.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  // Automatic sliding; pauses while hovered.
  useEffect(() => {
    if (isHovered || products.length < 2) return;

    const interval = setInterval(() => {
      scrollCarousel("next");
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, products.length]);

  return (
    <section
      id="our-products"
      ref={productsRef}
      style={{
        background: source?.bgColor || "#063F3D",
      }}
      className="py-10 sm:py-12 lg:py-16"
    >
      <MaxWidth>
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <Heading
              as="h2"
              isDart={true}
              isCenter={!isDesktop}
              isAccentLine={true}
              label="Products"
              labelColor="#39B972"
              accentColor="#39B972"
              textColor={source?.textColor || "#ffffff"}
              isGradient={true}
              headingParts={[{ text: "Related Products" }]}
              description={"Explore quality strapping solutions for every packaging need."}
            />
          </div>

          {/* Manual carousel controls */}
          {products.length > 1 && (
            <div className="mb-2 flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("prev")}
                aria-label="Previous products"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#063F3D]"
              >
                <MdArrowBack size={22} />
              </button>

              <button
                type="button"
                onClick={() => scrollCarousel("next")}
                aria-label="Next products"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#063F3D]"
              >
                <MdArrowRight size={22} />
              </button>
            </div>
          )}
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {products.map((product: any, index: number) => {
            const productHref = product.slug?.startsWith("/")
              ? product.slug
              : `/${product.slug}`;

            return (
              <div
                key={product._id ?? product.slug ?? product.title}
                className="group flex h-120 min-w-0 flex-[0_0_85%] snap-start flex-col overflow-hidden rounded-[10px] bg-white transition-all duration-300 sm:flex-[0_0_48%] lg:flex-[0_0_calc(20%-13px)]"
              >
                {/* Image */}
                <Link
                  href={productHref}
                  className="relative block aspect-square w-full overflow-hidden"
                >
                  <Image
                    src={product.image}
                    fill
                    alt={product.title}
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 20vw"
                    className="rounded-tl-[10px] rounded-tr-[10px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </Link>

                {/* Content */}
                <div className="relative flex min-h-[160px] flex-col p-6">
                  {/* Title */}
                  <Link
                    href={productHref}
                    className="pr-12 text-[20px] font-semibold tracking-[-0.01em] text-[#16161D]"
                  >
                    {product.title}
                  </Link>

                  {/* Arrow */}
                  <Link
                    href={productHref}
                    aria-label={`View ${product.title}`}
                    className="group absolute right-4 top-4"
                  >
                    <MdArrowBack
                      size={40}
                      className="rotate-180 rounded-full bg-[#063F3D] p-2 text-[#39B972] transition-all duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  {/* Description */}
                  <p className="mt-auto pt-6 text-left text-[16px] text-black/80">
                    {product.description?.slice(0, 50)}
                    {product.description?.length > 50 ? "..." : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {products.length === 0 && (
          <p className="mt-8 text-center text-white">
            No related products found.
          </p>
        )}
      </MaxWidth>
    </section>
  );
};

export default RelatedProducts;