
"use client";

import { useState } from "react";
import MaxWidth from "./layout/MaxWidth";

type Testimonial = {
  id: number | string;
  name: string;
  company: string;
  location: string;
  message: string;
  rating: number;
  image?: string;
};

type TestimonialsProps = {
  data: {
    heading?: string;
    subheading?: string;
    list: Testimonial[];
  };
};
const testimonialsData= {
  heading: "Trusted by Customers Worldwide",
  subheading:
    "We build lasting partnerships by delivering dependable PET strapping solutions and consistent product quality.",

  list: [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "Packaging Solutions",
      location: "India",
      rating: 5,
      message:
        "The PET straps have excellent strength and consistent quality. We are satisfied with the product performance and service.",
    },
    {
      id: 2,
      name: "Ahmed Khan",
      company: "Industrial Packaging Co.",
      location: "UAE",
      rating: 5,
      message:
        "Reliable product quality and professional communication. Their team understands our packaging requirements.",
    },
    {
      id: 3,
      name: "Michael Brown",
      company: "Global Packaging Ltd.",
      location: "USA",
      rating: 5,
      message:
        "We appreciate the consistency of the PET strapping rolls and the attention given to our orders.",
    },
    {
      id: 4,
      name: "Mehmet Yilmaz",
      company: "Export Packaging",
      location: "Turkey",
      rating: 5,
      message:
        "Good product quality, dependable supply and smooth coordination throughout the order process.",
    },
    {
      id: 5,
      name: "Mohammad Ali",
      company: "Bangladesh Packaging",
      location: "Bangladesh",
      rating: 5,
      message:
        "The strapping products meet our packaging needs. We value the quality and professional support.",
    },
  ],
}
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = testimonialsData.list || [];

  if (!testimonials.length) return null;

  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className=" pt-20 md:pt-24">
      <MaxWidth>
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[3px] text-orange-600">
            Client Testimonials
          </span>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {testimonialsData.heading || "What Our Clients Say"}
          </h2>

          <p className="mt-4 text-gray-600">
            {testimonialsData.subheading ||
              "Our customers trust Strap World for quality, reliability and long-term business relationships."}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${activeIndex}-${index}`}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-5xl font-bold leading-none text-orange-500">
                  “
                </span>

                <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < item.rating ? "text-amber-400" : "text-gray-200"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="mb-8 flex-1 text-sm leading-7 text-gray-600">
                {item.message}
              </p>

              {/* Customer Details */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-orange-600">
                  {item.name.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.company}</p>
                  <p className="text-xs text-gray-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {testimonials.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              →
            </button>
          </div>
        )}
      </MaxWidth>
    </section>
  );
}
