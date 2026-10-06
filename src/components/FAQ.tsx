"use client";

import React, { useState } from "react";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import Heading from "./common/Heading";
import { useResponsive } from "../hooks/useResponsive";

const faqData = [
  {
    question: "What is PET strapping used for?",
    answer:
      "PET strapping is commonly used for bundling, palletizing and securing products during storage, handling and transportation. It is used for cartons, textile products, industrial goods, automotive parts and other packaged loads.",
  },
  {
    question: "What is the difference between PET and polyester strapping?",
    answer:
      "PET and polyester strapping are both used for load securing and packaging applications. Their properties and suitable applications depend on the material, dimensions, strength and required performance.",
  },
  {
    question: "What PET strap sizes do you manufacture?",
    answer:
      "We manufacture and supply multiple PET strapping specifications based on width, thickness, strength, coil weight and application requirements. Contact us for current specifications.",
  },
  {
    question: "Can you supply customized PET strapping?",
    answer:
      "Yes. Requirements can be discussed based on dimensions, strength, application, quantity and packaging requirements.",
  },
  {
    question: "Do you export PET strapping from India?",
    answer:
      "Yes. Strap World Pvt. Ltd. supplies customers across India and international markets including the UAE, Bangladesh, USA, Australia and other destinations.",
  },
  {
    question: "Which industries use PET strapping?",
    answer:
      "PET strapping is used across textile, automotive, packaging, steel and metal, construction, logistics, furniture and general manufacturing applications.",
  },
  {
    question: "Can I purchase PET strapping in bulk?",
    answer:
      "Yes. We support B2B bulk requirements and repeat supply. Contact us with your required specification and quantity.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Send us your required product, dimensions, strength, quantity, application and delivery destination. Our team will review your requirement and respond with the appropriate quotation details.",
  },
];

const FAQ = ({ data }: any) => {
  const {isDesktop} =useResponsive()
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [top, bottom]=data?.padding?? ["5rem", "5rem"]

  return (
    <section style={{paddingTop:isDesktop && top, paddingBottom: isDesktop && bottom}} className="bg-white py-10 md:py-12 lg:py-0">
      <MaxWidth>
        {/* Section Heading */}
        <div className="mx-auto mb-14 w-[90%] lg:w-[50%] text-center">
          <Heading
            label="FAQ"
            as="h2"
            isCenter={true}
            headingParts={[
              { text: "Frequently Asked Questions About PET Strapping" },
            ]}
            description="Find answers to common questions about PET strapping, specifications, applications, bulk supply, customization, exports, and quotations."
          />
        </div>

        {/* FAQ List */}
        <div className="mx-auto w-full md:w-[80%]">
          <div>
            {faqData?.map((faq: any, index: number) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`
            group
            transition-all duration-300
            hover:bg-primary-bg/[0.03]
            ${index !== 0 ? "border-t border-black/10" : ""}
            ${index === data?.list?.length - 1 ? "border-b-0" : ""}
          `}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-6 text-left transition-all duration-300 md:px-6"
                    aria-expanded={isOpen}
                  >
                    <h3
                      className={`
                text-lg font-semibold md:text-xl
                transition-colors duration-300
                ${isOpen
                          ? "text-primary-bg"
                          : "text-primary-bg group-hover:text-primary-bg"
                        }
              `}
                    >
                      {faq.question}
                    </h3>

                    <span
                      className={`
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-full border
                transition-all duration-300
                ${isOpen
                          ? "rotate-45 border-[#2E9B4F] bg-[#2E9B4F] text-white"
                          : "border-black/10 bg-transparent text-primary-bg group-hover:border-[#2E9B4F] group-hover:bg-[#2E9B4F] group-hover:text-white"
                        }
              `}
                    >
                      <Icon name="plus" size={18} />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
              grid transition-all duration-300 ease-in-out
              ${isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                      }
            `}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full md:max-w-3xl px-5 pb-6 pr-12 leading-7 text-black/60 md:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default FAQ;
