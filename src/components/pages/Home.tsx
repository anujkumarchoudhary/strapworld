
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Banner from "../common/Banner";
import Blog from "../Blog";
import { staticData } from "@/src/utills/Data";
import OurProducts from "../OurProducts";
import FinalCTA from "../FinalCTA";
import FAQ from "../FAQ";
import KayStatas from "../KayStatas";
import Applications from "../Applications";
import IndustriesWeServe from "../IndustriesWeServe";
import ManufactureProcess from "../ManufactureProcess";
import GlobalExport from "../GlobalExport";
import WhyChooseUs from "../WhyChooseUs";
import OurQuality from "../OurQuality";
import Gallery from "../Gallery";
import { BaseUrl } from "@/src/app/baseurl";

interface Product {
    _id?: string;
    title?: string;
    description?: string;
    button?: string;
    slug?: string;
    image?: string;
    labels?: string[];
    [key: string]: unknown;
}

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(
                    `${BaseUrl}/products`
                );

                const result = response.data;

                console.log("Products API response:", result);

                if (Array.isArray(result?.data)) {
                    setProducts(result.data);
                } else if (Array.isArray(result)) {
                    setProducts(result);
                } else {
                    setProducts([]);
                    console.error("Unexpected products API response:", result);
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    const {
        banner,
        keyStats,
        ourProducts,
        industriesWeServe,
        manufactureProcess,
        blogs,
        finalCTA,
        faqData,
    } = staticData.home;

    // const {
    //     headingParts,
    //     label,
    //     description,
    // } = ourProducts;

    const productsData = {
        list: products,
        label: "OUR PRODUCTS",
        textColor: "#000000",
        bgColor: "#F5F7F2",
        "href": "products",
        headingParts: [
            {
                text: "PET Strapping Products",
                color: "#000000",
                style: "normal",
                weight: "500",
            },
        ],

        description:
            "Explore our range of PET strapping products designed for secure packaging,",
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

            <FAQ data={faqData} />

            <FinalCTA data={finalCTA} />
        </div>
    );
};

export default Home;