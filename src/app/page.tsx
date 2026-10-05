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
import { BaseUrl } from "./baseurl";


async function getService(

): Promise<any> {
  try {
    const response = await fetch(
      `${BaseUrl}products`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result?.data || null;
  } catch (error) {
    console.error("Get service error:", error);

    return null;
  }
}

const page = async () => {
  const products = await getService();

  const { banner, keyStats, ourProducts, applications, industriesWeServe, manufactureProcess, blogs, exportAndGlobalReach, finalCTA } =
    staticData?.home;

  const { headingParts, label, description, } = ourProducts

  const productsData = { headingParts, label, list: products.slice(2, 8), description }

  return (
    <div>
      <Banner data={banner} />
      <KayStatas data={keyStats} />
      <OurProducts data={productsData} />
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
