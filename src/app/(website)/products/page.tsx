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


            {/* <IndustriesWeServe data={industriesWeServe} />
            <ManufactureProcess data={manufactureProcess} />
            <ExportAndGlobalReach data={exportAndGlobalReach} /> */}
            {/* <Blog data={blogs} /> */}
            <FAQ />
            <FinalCTA data={finalCTA} />
        </div>
    );
};

export default page;
