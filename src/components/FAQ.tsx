"use client";

import React, { useState } from "react";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import Heading from "./common/Heading";

const faqData = [
  {
    question: "What services does SoftQivo provide?",
    answer:
      "SoftQivo provides custom software development, web application development, SaaS development, CRM solutions, UI/UX development, API development, and other digital solutions tailored to business requirements.",
  },
  {
    question: "Can you build a custom software solution for my business?",
    answer:
      "Yes. We develop custom software solutions based on your business processes, requirements, and goals. Our solutions are designed to be scalable, secure, and easy to maintain.",
  },
  {
    question: "Do you develop SaaS applications?",
    answer:
      "Yes. We build scalable SaaS platforms with features such as multi-tenancy, authentication, subscription management, dashboards, role-based access control, APIs, and cloud-ready architecture.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with modern technologies including React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, PostgreSQL, and other technologies depending on the project requirements.",
  },
  {
    question: "How long does it take to develop a website or application?",
    answer:
      "The timeline depends on the scope and complexity of the project. A simple website may take a few weeks, while a larger custom application or SaaS platform can take several months.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes. We can provide ongoing maintenance, performance optimization, bug fixes, security updates, feature enhancements, and technical support after the initial development.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We can integrate payment gateways, authentication providers, CRMs, communication platforms, analytics tools, maps, cloud services, and other third-party APIs.",
  },
  {
    question: "How can I start a project with SoftQivo?",
    answer:
      "You can contact us with your project requirements, goals, and estimated timeline. We will discuss your requirements, suggest an appropriate solution, and plan the next steps.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 lg:py-16">
      <MaxWidth>
        {/* Section Heading */}
        <div className="mx-auto mb-14 w-[90%] lg:w-[50%] text-center">
          <Heading
            label="FAQ"
            // accentColor="#0000FF"
            isCenter={true}
            headingParts={[{ text: "Frequently Asked Questions" }]}
            description="Everything you need to know about our services, development process,
            and working with SoftQivo."
          />
        </div>

        {/* FAQ List */}
        <div className="mx-auto w-full md:w-[80%]">
          <div>
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`
            group
            transition-all duration-300
            hover:bg-primary-bg/[0.03]
            ${index !== 0 ? "border-t border-black/10" : ""}
            ${index === faqData.length - 1 ? "border-b-0" : ""}
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
                ${
                  isOpen
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
                ${
                  isOpen
                    ? "rotate-45 border-primary-bg bg-primary-bg text-white"
                    : "border-black/10 bg-transparent text-primary-bg group-hover:border-primary-bg group-hover:bg-primary-bg group-hover:text-white"
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
              ${
                isOpen
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
