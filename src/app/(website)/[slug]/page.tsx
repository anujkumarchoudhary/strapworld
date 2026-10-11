import MaxWidth from "@/src/components/layout/MaxWidth";
import ProductOverview from "@/src/components/ProductOverview";
import TechnicalOverview from "@/src/components/TechnicalOverview";
import RelatedProducts from "@/src/components/RelatedProducts";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";

import sData from "./StaticData.json";
import { BaseUrl } from "../../baseurl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductData {
  _id?: string;
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

async function getProductDetails(
  slug: string
): Promise<ProductData | null> {
  try {
    if (!BaseUrl) {
      console.error("API URL is not configured.");
      return null;
    }

    const response = await fetch(
      `${BaseUrl.replace(/\/+$/, "")}/products/${encodeURIComponent(slug)}`,
      {
        // Fetch fresh product data on each request.
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch product: ${response.status}`
      );
      return null;
    }

    const result = await response.json();

    // Supports { success: true, data: {...} }
    const product = result?.data ?? null;

    if (
      !product ||
      typeof product !== "object" ||
      !product.title ||
      product.status === "inactive"
    ) {
      return null;
    }

    return product as ProductData;
  } catch (error) {
    console.error("Get product details error:", error);
    return null;
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [productDetails] = await Promise.all([
    getProductDetails(slug),
  ]);

  const { finalCTA } = sData || {};

  if (!productDetails) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#101820]">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The requested product could not be found.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#218B55] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#176D41]"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>
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
}