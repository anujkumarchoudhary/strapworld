import React from "react";
import Banner from "../components/common/Banner";
import Blog from "../components/Blog";
import { staticData } from "@/src/utills/Data";
import ExportAndGlobalReach from "../components/ExportAndGlobalReach";
import OurProducts from "../components/OurProducts";
import FinalCTA from "../components/FinalCTA";
import FAQ from "../components/FAQ";
import KayStatas from "../components/KayStatas";
import Applications from "../components/Applications";
import IndustriesWeServe from "../components/IndustriesWeServe";
import ManufactureProcess from "../components/ManufactureProcess";

const page = () => {
  const { banner, keyStats, ourProducts, applications, industriesWeServe, manufactureProcess, blogs, exportAndGlobalReach, finalCTA } =
    staticData?.home;

  return (
    <div>
      <Banner data={banner} />
      <KayStatas data={keyStats} />
      <OurProducts data={ourProducts} />
      <Applications data={applications} />
      <IndustriesWeServe data={industriesWeServe} />
      <ManufactureProcess data={manufactureProcess} />
      <ExportAndGlobalReach data={exportAndGlobalReach} />
      <Blog data={blogs} />
      <FAQ />
      <FinalCTA data={finalCTA} />
    </div>
  );
};

export default page;
