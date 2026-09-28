"use client";

import React from "react";
import MaxWidth from "@/src/components/layout/MaxWidth";
import Heading from "@/src/components/common/Heading"; 
import { staticData } from "@/src/utills/Data";

const TermsOfService = () => {
  const data = staticData?.termsOfService;

  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10">
        <MaxWidth className="py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
              {data?.label}
            </p>

            <Heading
              headingParts={[
                {
                  text: data?.title || "",
                  color: "#000000",
                  weight: "700",
                },
              ]}
            />

            <p className="mt-6 max-w-3xl text-base leading-8 text-black/60 lg:text-lg">
              {data?.introduction}
            </p>

            <p className="mt-6 text-sm font-medium text-black/50">
              Last Updated: {data?.lastUpdated}
            </p>
          </div>
        </MaxWidth>
      </section>

      {/* Content */}
      <MaxWidth className="py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                On this page
              </p>

              <nav className="space-y-3">
                {data?.sections?.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-black/55 transition-colors hover:text-purple-600"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-4xl">
            {data?.sections?.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-black/10 py-10 first:pt-0 last:border-b-0"
              >
                <Heading
                  headingParts={[
                    {
                      text: section.title,
                      color: "#000000",
                      weight: "700",
                    },
                  ]}
                />

                <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/65 lg:text-base">
                  {section?.paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {/* {section?.list && section.list.length > 0 && (
                    <ul className="my-6 space-y-3 pl-6">
                      {section.list.map((item, index) => (
                        <li
                          key={index}
                          className="list-disc pl-2 marker:text-purple-500"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section?.closingParagraphs?.map(
                    (paragraph, index) => (
                      <p key={`closing-${index}`}>{paragraph}</p>
                    )
                  )} */}

                  {section?.contact && (
                    <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.02] p-6">
                      <p className="font-semibold text-black">
                        {section.contact.company}
                      </p>

                      <p className="mt-2">
                        <span className="font-medium text-black">
                          Email:
                        </span>{" "}
                        {section.contact.email}
                      </p>

                      <p className="mt-2">
                        <span className="font-medium text-black">
                          Website:
                        </span>{" "}
                        {section.contact.website}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </MaxWidth>
    </main>
  );
};

export default TermsOfService;
