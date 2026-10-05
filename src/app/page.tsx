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
import GlobalExport from "../components/GlobalExport";
import AboutSection from "../components/About";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import OurQuality from "../components/OurQuality";
import Gallery from "../components/Gallery";

export const dynamic = "force-dynamic";

async function getService(): Promise<any[]> {
  try {
    const response = await fetch(`${BaseUrl}products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch products: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const result = await response.json();

    return Array.isArray(result?.data) ? result.data : [];
  } catch (error) {
    console.error("Get service error:", error);
    return [];
  }
}

const page = async () => {
  const products = await getService();

  const {
    banner,
    keyStats,
    ourProducts,
    applications,
    industriesWeServe,
    manufactureProcess,
    blogs,
    exportAndGlobalReach,
    finalCTA,
  } = staticData?.home;

  const {
    headingParts,
    label,
    description,
  } = ourProducts;

  const productsData = {
    headingParts,
    label,
    list: products.slice(2, 7),
    description,
  };

  return (
    <div>
      <Banner data={banner} />
      <KayStatas data={keyStats} />
      <OurProducts data={ourProducts} />
      <OurQuality />
      <Applications />
      <WhyChooseUs />
      <ManufactureProcess data={manufactureProcess} />
      <GlobalExport />
      <Gallery />
      <IndustriesWeServe data={industriesWeServe} />
      <Blog data={blogs} />
      <FAQ />
      <FinalCTA data={finalCTA} />
    </div>
  );
};

export default page;