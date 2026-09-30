import React from "react";
import Banner from "../components/common/Banner";
import Blog from "../components/Blog";
import { staticData } from "@/src/utills/Data";
import OurServices from "../components/OurServices";
import TechnicalPerformance from "../components/TechnicalPerformance";
import SolutionsByApplication from "../components/SolutionsByApplication";
import ManufactureQuality from "../components/ManufactureQuality";
import ExportAndGlobalReach from "../components/ExportAndGlobalReach";
import OurProducts from "../components/OurProducts";
import FinalCTA from "../components/FinalCTA";
import FAQ from "../components/FAQ";

const page = () => {
  const { ourProducts, services, blogs, technicalPerformance, solutionsByApplication, manufactureQuality, exportAndGlobalReach } =
    staticData?.home;

  return (
    <div>
      <Banner />
      <OurProducts data={ourProducts} />
      <TechnicalPerformance data={technicalPerformance} />
      <SolutionsByApplication data={solutionsByApplication} />
      <OurServices data={services} />
      <ManufactureQuality data={manufactureQuality} />
      <ExportAndGlobalReach data={exportAndGlobalReach} />
      <Blog data={blogs} />
      <FinalCTA />
      <FAQ/>
    </div>
  );
};

export default page;
