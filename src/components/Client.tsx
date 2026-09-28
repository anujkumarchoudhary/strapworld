"use client";
import React, { useEffect, useState } from "react";
import MaxWidth from "./layout/MaxWidth";
import Image from "next/image";
import { staticData } from "../utills/Data";

const Client = () => {
  const VISIBLE_COUNT = 4;
  const [startIndex, setStartIndex] = useState(0);
  const { heading, data } = staticData?.home?.ourClients || {};

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % data.length);
    }, 2500); // change speed here

    return () => clearInterval(interval);
  }, [data.length]);

  // Create infinite slice
  const visibleClients = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    return data[(startIndex + i) % data.length];
  });
  return (
    <div className="bg-[#001845] py-[2rem]">
      <MaxWidth>
        <div className="grid grid-cols-6 gap-[1rem]">
          <div className="col-span-2 flex gap-[1rem]">
            <span className="bg-[#0466C8] h-1.5 w-20 my-auto"></span>
            <h3 className="text-[#FFFFFF] my-auto">Our Clients</h3>
          </div>
          <div className="col-span-4 flex items-center justify-between">
            {visibleClients.map((img, index) => (
              <div
                key={index}
                className="transition-all duration-500 ease-in-out"
              >
                <Image
                  src={img}
                  alt="Client logo"
                  className="h-8 w-auto object-contain opacity-90 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Client;
