import React from "react";
import Banner from "@/src/components/common/Banner";
import Blog from "@/src/components/Blog";
import { staticData } from "@/src/utills/Data";
import OurProducts from "@/src/components/OurProducts";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";
import KayStatas from "@/src/components/KayStatas";
import Applications from "@/src/components/Applications";
import IndustriesWeServe from "@/src/components/IndustriesWeServe";
import ManufactureProcess from "@/src/components/ManufactureProcess";
import GlobalExport from "@/src/components/GlobalExport";
import AboutSection from "@/src/components/About";
import About from "@/src/components/About";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import OurQuality from "@/src/components/OurQuality";
import Gallery from "@/src/components/Gallery";
import { BaseUrl } from "../../baseurl";

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

const PetStrapApplications = async () => {
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
      <Applications />
      <WhyChooseUs />
      <Gallery />
      <IndustriesWeServe data={industriesWeServe} />
      <Blog data={blogs} />
      <FAQ />
      <FinalCTA data={finalCTA} />
    </div>
  );
};

export default PetStrapApplications;