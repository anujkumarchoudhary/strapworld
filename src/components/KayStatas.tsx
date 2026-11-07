
"use client";

import React from "react";
import MaxWidth from "./layout/MaxWidth";
import CounterValue from "../hooks/CounterValue";

const KeyStats = ({ data }: any) => {
  return (
    <section
      className="bg-[#FFFFFF] py-10 sm:py-12 lg:py-20"
      aria-label="Company statistics"
    >
      <MaxWidth className="">
        <div className="grid grid-cols-2 gap-y-6 rounded-[20px] sm:px-7 lg:flex lg:gap-0 lg:px-10">

          {data?.specifications?.map(
            (item: any, idx: number) => (
              <div
                key={item?.label ?? idx}
                className={`
                  flex-1
                  px-4 sm:px-6
                  lg:px-0
                  space-y-8
                  ${idx % 2 !== 0 ? "border-l border-gray-300" : ""}
                  ${idx >= 2 ? "border-t border-gray-300 pt-6 lg:border-t-0 lg:pt-0" : ""}
                  ${idx !== 0 ? "lg:border-l lg:border-gray-300 lg:pl-15" : "lg:pr-10"}
                `}
              >
                <h3 className="text-[clamp(38px,5vw,75px)] flex font-normal leading-none text-[#000000]">
                  <CounterValue value={item?.value ?? 0} />
                  {item?.suffix}
                </h3>

                <p className="mt-2 text-[clamp(14px,1.5vw,18px)] font-semibold leading-tight text-[#000000]">
                  {item?.label}
                </p>
              </div>
            )
          )}

        </div>
      </MaxWidth>
    </section>
  );
};

export default KeyStats;
