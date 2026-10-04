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
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import ImageSlider from "./ui/ImageSlider";

const ProductOverview = ({ data }: any) => {
    const { isDesktop } = useResponsive()
    return (
        <div className="bg-[#FFFFFF] py-12 lg:py-16">
            <MaxWidth className=" space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-[45%_50%] justify-between gap-14">
                    <div className="my-auto flex w-full justify-end">
                        <ImageSlider
                            slides={data?.slides}
                            //   autoPlay
                            interval={5000}
                        />
                    </div>

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
                                        className=" flex gap-2"

                                    >
<MdCheck size={25} className="text-[#39B972]" />

                                        {/* Content */}
                                        <div className="min-w-0 flex-1 space-y-1">

                                            <p
                                                className="
            text-left
            leading-6 sm:leading-7
            text-[#101820]
            my-auto
          "
                                            >
                                                {service.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>



                </div>

            </MaxWidth>
        </div>
    );
};

export default ProductOverview;
