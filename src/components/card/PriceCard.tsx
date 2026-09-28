import React from "react";
import { FaCheck } from "react-icons/fa";
import Button from "../common/Button";

export interface PriceCardProps {
  idx: number;
  title: string;
  decription: string;
  price: string;
  features: string[];
}

const PriceCard = ({
  idx,
  title,
  decription,
  price,
  features,
}: PriceCardProps) => {
  return (
    <div
      className={` pt-[2rem] pb-[2.5rem] ${idx === 1 ? "bg-[#023E7D]" : "bg-[#FFFFFF]"}`}
    >
      <h3
        className={`text-[2.25rem] font-bold px-[2rem] lg:px-[2rem] text-[#051D48] ${idx === 1 ? "text-white" : "text-[#051D48]"}`}
      >
        {title}
      </h3>
      <p
        className={`mb-4 lg:mb-6 px-[2rem] lg:px-[2rem] ${idx === 1 ? "text-white" : "text-[#051D48]"}`}
      >
        {decription}
      </p>

      {/* Price */}
      <div
        className={`flex items-start gap-1 bg-[#023E7D] text-white px-[2rem] lg:px-[2rem] py-[1.5rem] w-full ${idx === 1 ? "bg-[#4672A0]" : "bg-[#023E7D]"}`}
      >
        <span className="text-[1.5rem] font-bold mt-1">$</span>

        <span className="text-[3rem] font-extrabold leading-none">{price}</span>

        <span className="text-[1.5rem] font-bold mt-2">/ Hours</span>
      </div>

      <div
        className={`px-[2rem] lg:px-[2rem] space-y-8 mt-6 ${idx === 1 ? "text-white" : "text-[#051D48]"}`}
      >
        <ul>
          {features?.map((feature, index) => (
            <li key={index} className="py-2">
              <FaCheck
                size={20}
                className={`inline-block mr-4 ${idx === 1 ? "text-white" : "text-[#023E7D]"}`}
              />
              {feature}
            </li>
          ))}
        </ul>
        <Button name="Get Started" />
      </div>
    </div>
  );
};

export default PriceCard;
