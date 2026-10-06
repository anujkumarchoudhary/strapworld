export const dynamic = "force-dynamic";

import React from "react";
import Banner from "@/src/components/common/Banner";
import OurProducts from "@/src/components/OurProducts";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";
import IndustriesWeServe from "@/src/components/IndustriesWeServe";
import ManufactureProcess from "@/src/components/ManufactureProcess";
import ChooseRight from "@/src/components/ChooseRight";
import TechnicalPerformance from "@/src/components/TechnicalPerformance";

import data from "./data.json";
import type { Metadata } from "next";
import { BaseUrl } from "../../baseurl";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import Applications from "@/src/components/Applications";

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

async function getService(): Promise<any[]> {
  try {
    const response = await fetch(`${BaseUrl}products/`, {
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
    ourProducts,
    chooseRight,
    industriesWeServe,
    whyChoose,
    bulkAndCustomOrders,
    finalCTA,
  } = data;

  const {
    headingParts,
    label,
    description,
    bgColor,
  } = ourProducts;

  const productsData = {
    bgColor,
    headingParts,
    label,
    list: products.slice(2, 8),
    description,
  };

  return (
    <div>
      <Banner data={banner} />

      <OurProducts data={ourProducts} />

      <Applications />

      <WhyChooseUs />

      <ManufactureProcess data={bulkAndCustomOrders} />

      <FAQ />

      <FinalCTA data={finalCTA} />
    </div>
  );
};

export default page;