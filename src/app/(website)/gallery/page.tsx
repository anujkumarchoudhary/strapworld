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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | PET Strap Manufacturing & Products | Strap World",
  description:
    "Explore the Strap World gallery featuring PET strap manufacturing, production facilities, strap rolls, packaging applications and industrial load securing solutions.",

  keywords: [
    "Strap World gallery",
    "PET strap manufacturing",
    "PET strap products",
    "PET strapping manufacturer",
    "industrial strapping",
    "packaging straps",
    "PET strap rolls",
    "strapping manufacturing",
    "load securing solutions",
  ],

  alternates: {
    canonical: "https://strapworld.com/gallery",
  },

  openGraph: {
    title: "Gallery | PET Strap Manufacturing & Products | Strap World",
    description:
      "Explore our manufacturing facility, PET strap products, production processes and industrial packaging applications.",
    url: "https://strapworld.com/gallery",
    siteName: "Strap World Pvt. Ltd.",
    type: "website",
    images: [
      {
        url: "https://strapworld.com/images/home/gallery/gallery-1.jpg",
        width: 1200,
        height: 630,
        alt: "Strap World PET Strap Manufacturing Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gallery | PET Strap Manufacturing & Products | Strap World",
    description:
      "Explore PET strap manufacturing, products, production processes and industrial packaging applications at Strap World.",
    images: [
      "https://strapworld.com/images/home/gallery/gallery-1.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

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

      <Gallery />

      <FinalCTA data={finalCTA} />
    </div>
  );
};

export default PetStrapApplications;