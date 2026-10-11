"use client";

import Link from "next/link";
import Heading from "./common/Heading";
import MaxWidth from "./layout/MaxWidth";
import { useResponsive } from "../hooks/useResponsive";
import SaveAndCancel from "./common/SaveAndCancel";
import TechnicalOverviewTable from "./TechnicalOverviewTable";
import { useState } from "react";
import GetEnquiryForm from "./form/GetEnquiryForm";

type Service = {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
};

const TechnicalOverview = ({ data }: any) => {
    const [open, setOpen] = useState(false)
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
                        <SaveAndCancel saveText={"Request a Quote"} saveBgColor="#000000" handleClick={() => setOpen(!open)} />
                    </div>

                    <div>
                        <TechnicalOverviewTable data={data?.list} />
                    </div>

                </div>

            </MaxWidth>
            <GetEnquiryForm isOpen={open} handleClose={() => setOpen(!open)} />
        </div>
    );
};

export default TechnicalOverview;
