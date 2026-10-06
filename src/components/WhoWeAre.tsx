"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import Icon from "../utills/iconMap ";
import { useResponsive } from "../hooks/useResponsive";
import { MdArrowBack, MdArrowRight, MdCheck } from "react-icons/md";
import Image from "next/image";
import SaveAndCancel from "./common/SaveAndCancel";
import { FaMapMarkerAlt } from "react-icons/fa";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const WhoWeAre = ({ data }: any) => {
    const { isDesktop } = useResponsive()
    return (
        <div className="bg-[#F5F7F2] py-10 sm:py-12 lg:py-20">
            <MaxWidth className=" space-y-10">
                {/* ================= SERVICES ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_50%] justify-between gap-14">
                    <div className="space-y-8">
                        <Heading
                            as="h2"
                            isDart={true}
                            isAccentLine={true}
                            label={data?.label}
                            labelColor="#39B972"
                            accentColor="#39B972"
                            textColor="#647077"
                            isGradient={true}
                            headingParts={data?.headingParts}
                            description={data?.description}
                            className="w-[90%]"
                        />
                        <div className="space-y-4">
                            {data?.labels?.map((service: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="
                                        bg-white
        group relative
        flex gap-4
        rounded-[15px]
        py-5 sm:py-6
          px-6 sm:px-8
        transition-all duration-300
      "
                                    >
                                        {/* Index */}
                                        <div
                                            className="
          flex
          h-[clamp(38px,3.5vw,44px)]
          w-[clamp(38px,3.5vw,44px)]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#E6F5EC]
          p-2
          lg:my-auto
        "
                                        >
                                            <Image src={service?.icon} width={21} height={21} alt={service?.name} />
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1 space-y-1">
                                            <p
                                                className="
            text-left
            font-bold
            leading-7
            tracking-[-0.01em]
            text-[#101820]
          "
                                            >
                                                {service.name}
                                            </p>

                                            <p
                                                className="
            text-left
            text-[clamp(13px,1.1vw,15px)]
            leading-6 sm:leading-7
            text-[#647077]
          "
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div style={{aspectRatio:data?.aspectRatio}} className="relative w-full overflow-hidden rounded-[30px]">
                        <Image
                            src={data?.image ?? "/images/manufacture_quality/image_1.png"}
                            fill
                            alt="SolutionsByApplication"
                            className="object-cover"
                        />

                        <div
                            className="
      absolute
      top-[clamp(16px,2vw,24px)]
      right-[clamp(16px,2vw,24px)]
      w-fit
      rounded-[10px]
      bg-[#FFFFFF]
      pl-4 pr-5 py-2.5
      flex gap-2
    "
                        >
                            <FaMapMarkerAlt size={20} className="text-[#2E9B4F]" />

                            <p className="text-[clamp(12px,1.2vw,14px)] uppercase font-bold leading-6 text-[#000000]">
                                Manufactured in Gujrat
                            </p>
                        </div>

                        <div
                            className="
      absolute
      bottom-[clamp(16px,2vw,24px)]
      left-[clamp(16px,2vw,24px)]
      w-[clamp(260px,32vw,500px)]
      rounded-[15px]
      bg-[#071722]
      opacity-70
      p-[clamp(16px,1.5vw,20px)]
    "
                        >
                            <p className="text-[clamp(10px,1.2vw,22px)] font-bold text-[#FFFFFF]">
                                Focused PET strap production
                            </p>

                            <p className="mt-2 text-[clamp(12px,1.2vw,14px)] font-normal leading-6 text-[#DCE5E8]">
                                Profile, surface and winding quality are reviewed through production—not only at dispatch.
                            </p>
                        </div>
                    </div>

                </div>
                {/* ================= SERVICES ================= */}
                {data?.list?.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data?.list?.map((product: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className="
    group relative
    border border-white/10
    bg-[#FFFFFF]
    p-6
    backdrop-blur-md
    rounded-2xl
    transition-all duration-300
    hover:border-[#2E9B4F]
  "
                            >
                                <div
                                    className="
      mx-auto flex h-[clamp(40px,3.5vw,44px)]
      w-[clamp(40px,3.5vw,44px)]
      items-center justify-center
      rounded-full
      bg-[#E6F5EC]
      p-3
      transition-transform duration-300
      group-hover:-translate-y-1
      lg:mx-0
    "
                                >
                                    <div
                                        className="h-full w-full bg-[#2E9B4F]"
                                        style={{
                                            maskImage: `url(${product?.image})`,
                                            WebkitMaskImage: `url(${product?.image})`,
                                            maskRepeat: "no-repeat",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskPosition: "center",
                                            WebkitMaskPosition: "center",
                                            maskSize: "contain",
                                            WebkitMaskSize: "contain",
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="mt-8">
                                    <h3
                                        className="
        text-center
        text-[clamp(18px,1.7vw,20px)]
        font-bold
        tracking-[-0.01em]
        text-[#101820]
        lg:text-left
      "
                                    >
                                        {product?.title}
                                    </h3>

                                    <p
                                        className="
        mt-3
        text-center
        text-[clamp(13px,1.2vw,15px)]
        leading-6
        text-[#647077]
        lg:text-left
      "
                                    >
                                        {product?.description}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div
                                    className="
      absolute bottom-5 right-5
      flex h-7 w-7 items-center justify-center
      text-[#9999A3]
      transition-all duration-300
      group-hover:translate-x-1
      group-hover:text-[#7C3AED]
    "
                                />
                            </div>
                        );
                    })}
                </div>}
            </MaxWidth>
        </div>
    );
};

export default WhoWeAre;
