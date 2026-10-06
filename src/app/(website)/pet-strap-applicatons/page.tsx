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
    title: "Applications | PET Strapping Solutions for Industries | Strap World",
    description:
        "Discover PET strapping applications across packaging, logistics, textile, paper, construction and industrial manufacturing. Strap World provides reliable strapping solutions for secure load handling and transportation.",

    keywords: [
        "PET strap applications",
        "PET strapping applications",
        "industrial strapping applications",
        "packaging strapping solutions",
        "PET strap for packaging",
        "PET strap for logistics",
        "PET strap for textile industry",
        "PET strap for paper industry",
        "PET strap for construction materials",
        "PET strap for industrial manufacturing",
        "Strap World applications",
    ],

    alternates: {
        canonical: "https://strapworld.com/applications",
    },

    openGraph: {
        title: "Applications | PET Strapping Solutions | Strap World",
        description:
            "Explore PET strapping solutions for packaging, logistics, textile, paper, construction and industrial manufacturing applications.",
        url: "https://strapworld.com/applications",
        siteName: "Strap World Pvt. Ltd.",
        type: "website",
        images: [
            {
                url: "https://strapworld.com/images/home/applications/packaging.jpg",
                width: 1200,
                height: 630,
                alt: "PET Strapping Applications - Strap World",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Applications | PET Strapping Solutions | Strap World",
        description:
            "Reliable PET strapping solutions for packaging, logistics, textile, paper, construction and industrial applications.",
        images: [
            "https://strapworld.com/images/home/applications/packaging.jpg",
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