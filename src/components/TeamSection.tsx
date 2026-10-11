"use client";

import MaxWidth from "./layout/MaxWidth";
import Heading from "./common/Heading";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";

export default function TeamSection({ data }: any) {
  const { isDesktop } = useResponsive();
  return (
    <section className="relative overflow-hidden bg-secondary-bg py-16 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <MaxWidth className="relative">
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="w-full lg:w-[60%] mx-auto">
          <Heading
            isCenter={true}
            label={data?.label}
            headingParts={data.headingParts}
            description={data.description}
          />
        </div>

        {/* =========================================
            TEAM / EXPERTISE GRID
        ========================================= */}

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {data.members.map((member: any, idx: number) => {
            return (
              <div key={idx} className="group relative">
                {/* ================= IMAGE ================= */}
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 z-10 rounded-2xl border border-black/5 transition-all duration-500 group-hover:border-purple-500/60" />

                  <img
                    src={member?.image}
                    alt={member.name}
                    className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />

                  {/* Dark hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Social media */}
                  <div className="absolute bottom-5 right-5 z-20 flex translate-y-4 items-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:scale-110 hover:bg-purple-500 hover:text-white"
                      >
                        <Icon name="FaLinkedinIn" className="h-4 w-4" />
                      </a>
                    )}

                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Instagram`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:scale-110 hover:bg-purple-500 hover:text-white"
                      >
                        <Icon name="FaInstagram" className="h-4 w-4" />
                      </a>
                    )}

                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Twitter`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:scale-110 hover:bg-purple-500 hover:text-white"
                      >
                        <Icon name="FaTwitter" className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* ================= DETAILS ================= */}
                <div className="mt-5 flex items-start justify-between gap-4 border-b border-black/10 pb-5">
                  <div>
                    <h3 className="text-xl text-center lg:text-left font-semibold tracking-tight text-black">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">{member.role}</p>
                  </div>

                  {/* Number */}
                  <span className="text-xs font-semibold tracking-[0.2em] text-gray-300 transition-colors duration-300 group-hover:text-purple-500">
                    {member.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </section>
  );
}
