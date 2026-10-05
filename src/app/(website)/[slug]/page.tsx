export const dynamic = "force-dynamic";

import type { Metadata } from "next";

import ProductOverview from "@/src/components/ProductOverview";
import TechnicalOverview from "@/src/components/TechnicalOverview";
import RelatedProducts from "@/src/components/RelatedProducts";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";

import sData from "./StaticData.json";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ServiceData {
  title: string;
  slug: string;
  description?: string;
  image?: string;

  banner?: any;
  productOverview?: any;
  technicalOverview?: any;
  relatedProducts?: any;
  faqData?: any;
  finalCTA?: any;

  status?: "active" | "inactive";
}

// --------------------------------------------------
// GET PRODUCT
// --------------------------------------------------

async function getService(
  slug: string
): Promise<ServiceData | null> {
  try {
    const response = await fetch(
      `https://mintcream-quail-120088.hostingersite.com/api/products/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch product: ${response.status} ${response.statusText}`
      );

      return null;
    }

    const result = await response.json();

    return result?.data || null;
  } catch (error) {
    console.error("Get product error:", error);

    return null;
  }
}

// --------------------------------------------------
// DYNAMIC SEO META
// --------------------------------------------------

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = await getService(slug);

  if (!product) {
    return {
      title: "Product Not Found | Strap World",
      description:
        "The requested product could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    product.title || "Industrial Strapping Solutions";

  const description =
    product.description ||
    product.banner?.description ||
    `Explore ${title} from Strap World Pvt. Ltd., a manufacturer and supplier of industrial strapping solutions.`;

  const image =
    product.image ||
    product.banner?.image ||
    "/images/og-image.jpg";

  return {
    title: `${title} | Strap World`,

    description,

    keywords: [
      title,
      `${title} manufacturer`,
      `${title} supplier`,
      `${title} manufacturer India`,
      `${title} supplier India`,
      "industrial strapping",
      "packaging straps",
      "Strap World",
    ],

    alternates: {
      canonical: `/${product.slug}`,
    },

    openGraph: {
      title: `${title} | Strap World`,
      description,
      url: `/${product.slug}`,
      siteName: "Strap World",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Strap World`,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

// --------------------------------------------------
// PAGE
// --------------------------------------------------

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const product = await getService(slug);

  const { finalCTA } = sData || {};

  if (!product) {
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
    faqData,
  } = product;

  return (
    <main>
      {productOverview && (
        <ProductOverview data={productOverview} />
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