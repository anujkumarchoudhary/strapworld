"use client";

import ProductOverview from "@/src/components/ProductOverview";
import TechnicalOverview from "@/src/components/TechnicalOverview";
import RelatedProducts from "@/src/components/RelatedProducts";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";

import sData from "./StaticData.json";
import { BaseUrl } from "../../baseurl";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface ProductData {
  title: string;
  slug: string;
  description?: string;
  image?: string;

  banner?: any;
  productOverview?: any;
  technicalOverview?: any;
  relatedProducts?: any;
  faqData?: any;

  status?: "active" | "inactive";
}

const Page = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [productDetails, setProductDetails] =
    useState<ProductData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const getProductDetails = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${BaseUrl}/products/${encodeURIComponent(slug)}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          console.error(
            `Failed to fetch product: ${response.status}`
          );
          setProductDetails(null);
          return;
        }

        const result = await response.json();

        const product = result?.data ?? null;

        if (product?.status === "inactive") {
          setProductDetails(null);
          return;
        }

        setProductDetails(product);
      } catch (error) {
        console.error("Get product details error:", error);
        setProductDetails(null);
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [slug]);

  const { finalCTA } = sData || {};

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white">
        <p className="text-gray-500">Loading product details...</p>
      </main>
    );
  }

  if (!productDetails) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#101820]">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The requested product could not be found.
          </p>
        </div>
      </main>
    );
  }

  const {
    productOverview,
    technicalOverview,
    relatedProducts,
    image,
    faqData,
  } = productDetails;

  return (
    <main>
      {productOverview && (
        <ProductOverview
          data={productOverview}
          image={image}
        />
      )}

      {technicalOverview && (
        <TechnicalOverview data={technicalOverview} />
      )}

      {relatedProducts && (
        <RelatedProducts data={relatedProducts} />
      )}

      {faqData && <FAQ data={faqData} />}

      <FinalCTA data={finalCTA} />
    </main>
  );
};

export default Page;