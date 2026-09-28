"use client";

import React from "react";
import Link from "next/link";
import MaxWidth from "@/src/components/layout/MaxWidth";
import Heading from "@/src/components/common/Heading";
import { staticData } from "@/src/utills/Data";

const Sitemap = () => {
  const data = staticData?.sitemap;

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
              {data?.description}
            </p>
          </div>
        </MaxWidth>
      </section>

      {/* Sitemap Links */}
      <MaxWidth className="py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {data?.groups?.map((group) => (
            <section
              key={group.title}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 lg:p-8"
            >
              <Heading
                headingParts={[
                  {
                    text: group.title,
                    color: "#000000",
                    weight: "700",
                  },
                ]}
              />

              <div className="mt-6 divide-y divide-black/10">
                {group?.links?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group block py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-base font-semibold text-black transition-colors duration-300 group-hover:text-purple-600 lg:text-lg">
                          {link.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-black/55">
                          {link.description}
                        </p>
                      </div>

                      <span className="mt-1 shrink-0 text-lg text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-600">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </MaxWidth>
    </main>
  );
};

export default Sitemap;
