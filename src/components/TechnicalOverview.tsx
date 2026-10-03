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
import TechnicalOverviewTable from "./TechnicalOverviewTable";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const TechnicalOverview = ({ data }: any) => {
    const { isDesktop } = useResponsive()
    return (
        <div className="bg-[#FFFFFF] py-12 lg:py-16">
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
                        <SaveAndCancel saveText={data?.button} saveBgColor="#000000"/>
                    </div>

           <div>
                    <TechnicalOverviewTable data={data?.list} />

           </div>

                </div>

            </MaxWidth>
        </div>
    );
};

export default TechnicalOverview;
