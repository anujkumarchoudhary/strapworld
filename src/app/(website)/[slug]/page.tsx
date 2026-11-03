import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";

import ProductOverview from "@/src/components/ProductOverview";
import TechnicalOverview from "@/src/components/TechnicalOverview";
import RelatedProducts from "@/src/components/RelatedProducts";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";

import sData from "./StaticData.json";
import { BaseUrl } from "../../baseurl";

// --------------------------------------------------
// CONSTANTS
// --------------------------------------------------

const SITE_URL = "https://strapworld.in";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// --------------------------------------------------
// TYPES
// --------------------------------------------------

interface MetaDetails {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
}

interface ProductData {
  _id?: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
  metaDetails?: MetaDetails;
  banner?: any;
  productOverview?: any;
  technicalOverview?: any;
  relatedProducts?: any;
  faqData?: any;
  status?: "active" | "inactive";
}

// --------------------------------------------------
// CLEAN DESCRIPTION
// --------------------------------------------------

function cleanDescription(description?: string): string {
  if (!description) return "";

  return description
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// --------------------------------------------------
// IMAGE URL
// --------------------------------------------------

function getProductImage(image?: string): string | undefined {
  if (!image || typeof image !== "string") return undefined;

  try {
    return new URL(image, SITE_URL).toString();
  } catch {
    return undefined;
  }
}

// --------------------------------------------------
// PRODUCT URL
// --------------------------------------------------

function getProductUrl(product: ProductData, slug: string): string {
  const canonical = product.metaDetails?.canonical;

  if (canonical) {
    try {
      const url = new URL(canonical, SITE_URL);

      // Only allow canonical URLs belonging to this website.
      if (url.origin === SITE_URL) {
        return url.toString();
      }
    } catch {
      // Use the fallback URL below.
    }
  }

  return `${SITE_URL}/products/${encodeURIComponent(
    product.slug || slug
  )}`;
}

// --------------------------------------------------
// PRODUCT DESCRIPTION
// --------------------------------------------------

function getProductDescription(product: ProductData): string {
  const description =
    product.metaDetails?.description || product.description;

  return (
    cleanDescription(description) ||
    `${product.title} by Strap World Pvt. Ltd. Explore product details, technical specifications and industrial packaging applications.`
  );
}

// --------------------------------------------------
// FETCH PRODUCT DETAILS
// --------------------------------------------------

const getProductDetails = cache(
  async (slug: string): Promise<ProductData | null> => {
    try {
      if (!BaseUrl) {
        console.error("API URL is not configured.");
        return null;
      }

      const response = await fetch(
        `${BaseUrl.replace(/\/+$/, "")}/products/${encodeURIComponent(slug)}`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        console.error(`Failed to fetch product: ${response.status}`);
        return null;
      }

      const result = await response.json();

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
);

// --------------------------------------------------
// DYNAMIC SEO METADATA
// --------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProductDetails(slug);

  if (!product) {
    return {
      title: "Product Not Found | Strap World",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const meta = product.metaDetails;

  const title = meta?.title || `${product.title} | Strap World`;

  const description = getProductDescription(product);

  const canonicalUrl = getProductUrl(product, slug);

  const productImage = getProductImage(
    meta?.image || product.image
  );

  return {
    title,
    description,

    keywords: meta?.keywords || [],

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Strap World",
      type: "website",
      locale: "en_IN",

      ...(productImage && {
        images: [
          {
            url: productImage,
            alt: title,
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,

      ...(productImage && {
        images: [productImage],
      }),
    },
  };
}

// --------------------------------------------------
// PRODUCT JSON-LD SCHEMA
// --------------------------------------------------

function generateProductSchema(
  product: ProductData,
  slug: string
) {
  const productUrl = getProductUrl(product, slug);

  const productImage = getProductImage(
    product.metaDetails?.image || product.image
  );

  return {
    "@type": "Product",
    "@id": `${productUrl}#product`,

    name: product.title,

    description: getProductDescription(product),

    url: productUrl,

    ...(productImage && {
      image: [productImage],
    }),

    brand: {
      "@type": "Brand",
      name: "Strap World",
    },

    manufacturer: {
      "@id": ORGANIZATION_ID,
    },

    category: "Industrial Packaging Strapping",

    mainEntityOfPage: {
      "@id": `${productUrl}#webpage`,
    },
  };
}

// --------------------------------------------------
// WEBPAGE JSON-LD SCHEMA
// --------------------------------------------------

function generateProductPageSchema(
  product: ProductData,
  slug: string
) {
  const productUrl = getProductUrl(product, slug);

  const productId = `${productUrl}#product`;

  return {
    "@type": "WebPage",
    "@id": `${productUrl}#webpage`,

    url: productUrl,

    name:
      product.metaDetails?.title ||
      `${product.title} | Strap World`,

    description: getProductDescription(product),

    isPartOf: {
      "@id": WEBSITE_ID,
    },

    about: {
      "@id": productId,
    },

    mainEntity: {
      "@id": productId,
    },

    publisher: {
      "@id": ORGANIZATION_ID,
    },

    inLanguage: "en-IN",
  };
}

// --------------------------------------------------
// DYNAMIC PRODUCT PAGE
// --------------------------------------------------

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const productDetails = await getProductDetails(slug);

  if (!productDetails) {
    notFound();
  }

  const {
    productOverview,
    technicalOverview,
    relatedProducts,
    image,
    faqData,
  } = productDetails;

  const { finalCTA } = sData || {};

  // --------------------------------------------------
  // STRUCTURED DATA
  // --------------------------------------------------

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      generateProductSchema(productDetails, slug),
      generateProductPageSchema(productDetails, slug),
    ],
  };

  return (
    <>
      {/* PRODUCT AND WEBPAGE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main>
        {/* PRODUCT OVERVIEW */}
        {productOverview && (
          <ProductOverview
            data={productOverview}
            image={image}
          />
        )}

        {/* TECHNICAL DETAILS */}
        {technicalOverview && (
          <TechnicalOverview
            data={technicalOverview}
          />
        )}

        {/* RELATED PRODUCTS */}
        {relatedProducts && (
          <RelatedProducts
            data={relatedProducts}
          />
        )}

        {/* PRODUCT FAQ */}
        {faqData && (
          <FAQ
            data={faqData}
          />
        )}

        {/* FINAL CTA */}
        <FinalCTA
          data={finalCTA}
        />
      </main>
    </>
  );
}