import React from "react";
import Banner from "@/src/components/common/Banner";
import Blog from "@/src/components/Blog";
import ExportAndGlobalReach from "@/src/components/ExportAndGlobalReach";
import OurProducts from "@/src/components/OurProducts";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";
import KayStatas from "@/src/components/KayStatas";
import Applications from "@/src/components/Applications";
import IndustriesWeServe from "@/src/components/IndustriesWeServe";
import ManufactureProcess from "@/src/components/ManufactureProcess";
import data from './data.json'
import ChooseRight from "@/src/components/ChooseRight";
import TechnicalPerformance from "@/src/components/TechnicalPerformance";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PET Straps & PET Strapping Products | Strap World",
  description:
    "Explore Strap World's range of PET straps and PET strapping products for industrial packaging, bundling and load securing. Manufactured in India for domestic and export requirements.",
  keywords: [
    "PET straps",
    "PET strapping",
    "PET strap products",
    "PET strapping products",
    "PET packing straps",
    "PET strap manufacturer",
    "PET strap manufacturers in India",
    "PET strapping manufacturer India",
    "industrial PET straps",
    "packaging straps",
    "PET packing strap",
    "PET strapping band",
  ],
};

const page = () => {
    const { banner, ourProducts, chooseRight, industriesWeServe, whyChoose, bulkAndCustomOrders, finalCTA } =
        data;

    return (
        <div>
            <Banner data={banner} />
            <OurProducts data={ourProducts} />
            <ChooseRight data={chooseRight} />
            <IndustriesWeServe data={industriesWeServe} />
            <TechnicalPerformance data={whyChoose} />
            <ManufactureProcess data={bulkAndCustomOrders} />
            <FAQ />
            <FinalCTA data={finalCTA} />
        </div>
    );
};

export default page;
