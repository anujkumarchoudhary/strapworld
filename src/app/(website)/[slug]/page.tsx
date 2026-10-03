import type { Metadata } from "next";

import Banner from "@/src/components/common/Banner";
import FinalCTA from "@/src/components/FinalCTA";
import FAQ from "@/src/components/FAQ";
import ProductOverview from "@/src/components/ProductOverview";
import TechnicalOverview from "@/src/components/TechnicalOverview";
import RelatedProducts from "@/src/components/RelatedProducts";
import { BaseUrl } from "../../baseurl";

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
// GET SERVICE
// --------------------------------------------------

async function getService(
  slug: string
): Promise<ServiceData | null> {
  try {
    const response = await fetch(
      `${BaseUrl}services/${slug}`,
      {
        cache: "no-store",
      }
    );
    console.log(response, "response121")
    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    return result?.data || null;
  } catch (error) {
    console.error("Get service error:", error);

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

  const data = await getService(slug);

  if (!data) {
    return {
      title: "Service Not Found | Strap World",
      description:
        "The requested product or service could not be found.",
    };
  }

  const title = data.title || "Industrial Strapping Solutions";

  const description =
    data.description ||
    data.banner?.description ||
    `Explore ${title} from Strap World Pvt. Ltd., a manufacturer and supplier of industrial strapping solutions.`;

  const image =
    data.image ||
    data.banner?.image ||
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
      canonical: `/${data.slug}`,
    },

    openGraph: {
      title: `${title} | Strap World`,
      description,
      url: `/${data.slug}`,
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

  const data = await getService(slug);

  if (!data) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#101820]">
            Service Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The requested product or service could not be found.
          </p>
        </div>
      </main>
    );
  }

  const {
    banner,
    productOverview,
    technicalOverview,
    relatedProducts,
    faqData,
    finalCTA,
  } = data;

  return (
    <main>
      {banner && <Banner data={banner} />}

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

      {finalCTA && <FinalCTA data={finalCTA} />}
    </main>
  );
};

export default Page;