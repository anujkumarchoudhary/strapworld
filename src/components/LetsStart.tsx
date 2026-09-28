import React from "react";
// import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Image from "next/image";
import img from "../../public/images/pricing.jpg";
import Button from "./common/Button";

const LetsStart = () => {
  return (
    <MaxWidth className="relative py-[3rem] mb-[3rem] lg:py-[6rem] lg:mb-[6rem]">
      <Image src={img} alt="Banner" fill priority className="object-cover" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001845]/100 via-[#001845]/65 to-transparent" />

      <div className="relative w-[90%] lg:w-[50%] mx-auto z-10 h-full flex flex-col items-center justify-center text-center">
        <p className="text-[#ffffff]">Lets Get Started</p>

        <h2 className="text-[#ffffff] my-[1rem]">Got a Projects For Software Custimization With Us</h2>

        <Button name={"Contact Us"} />
      </div>
    </MaxWidth>
  );
};

export default LetsStart;
