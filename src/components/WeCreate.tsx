import React from "react";
import MaxWidth from "./layout/MaxWidth";
// import Heading from "./common/Heading";
import { staticData } from "../utills/Data";
import { MdCheck } from "react-icons/md";
import Image from "next/image";
import img2 from "../../public/images/pricing.jpg";

const WeCreate = () => {
  const { title, description, list, cardData, cardImges } =
    staticData?.serviceDetails?.weCreate;

  return (
    <div className="bg-[#f9f9f9]">
      <MaxWidth className="grid grid-cols-1 lg:grid-cols-2 py-[2.5rem] lg:py-[6rem] gap-[1rem] lg:gap-[4rem]">
        <div className="">
          {/* <Heading heading={title} /> */}
          {description?.map((desc: any) => {
            return <p className="my-4">{desc}</p>;
          })}
          <div className="pt-2">
            {list?.map((item: any) => {
              return (
                <span className="flex gap-2 my-2">
                  <MdCheck className="my-auto font-bold" />
                  <p>{item}</p>
                </span>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* TEXT CARDS */}
          {cardData?.map((item: any, index: number) => (
            <div
              key={index}
              className={`p-8 ${
                index === 0 ? "bg-[#0b2a59] text-white" : "bg-gray-100"
              }`}
            >
              <h5 className={`text-xl font-semibold mb-3 ${index === 0 ? "text-white" : "text-gray-800"}`}>
                {item?.title}
              </h5>
              <p className={` ${index === 0 ? "text-white" : "text-gray-600"}`}>
                {item?.description}
              </p>
            </div>
          ))}

          {/* IMAGES */}
          {cardImges?.map((item: any, index: number) => (
            <div key={index} className="relative h-[260px] w-full">
              <Image src={item} fill alt="service" className="object-cover" />
            </div>
          ))}
        </div>
      </MaxWidth>
    </div>
  );
};

export default WeCreate;
