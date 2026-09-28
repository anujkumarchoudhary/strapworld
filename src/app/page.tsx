import React from "react";
import Banner from "../components/common/Banner";
import About from "../components/About";
import Feedback from "../components/Feedback";
import Blog from "../components/Blog";
import { staticData } from "@/src/utills/Data";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import FAQ from "../components/FAQ";
import ProcessSection from "../components/ProcessSection";
import TeamSection from "../components/TeamSection";
import FinalCTA from "../components/FinalCTA";
import TechnologySection from "../components/TechnologySection";
import OurServices from "../components/OurServices";
import TechnicalPerformance from "../components/TechnicalPerformance";
import SolutionsByApplication from "../components/SolutionsByApplication";
import ManufactureQuality from "../components/ManufactureQuality";
import ExportAndGlobalReach from "../components/ExportAndGlobalReach";
const page = () => {
  const { ourProducts, services, caseStudies, process, team, blogs, technologes,technicalPerformance,solutionsByApplication,manufactureQuality,exportAndGlobalReach, finalCta } =
    staticData?.home;

  return (
    <div>
      <Banner />
      <Services data={ourProducts} />
      <TechnicalPerformance data={technicalPerformance}/>
      <SolutionsByApplication data={solutionsByApplication}/>
      <OurServices data={services} />
      <ManufactureQuality data={manufactureQuality}/>
      <ExportAndGlobalReach data={exportAndGlobalReach}/>
      <Blog data={blogs}/>
    </div>
  );
};

export default page;
