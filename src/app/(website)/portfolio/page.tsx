import CommonBanner from "@/src/components/CommonBanner";
import LetsStart from "@/src/components/LetsStart";
import OurPortfolio from "@/src/components/OurPortfolio";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Digital Projects by SoftQivo",

  description:
    "Explore SoftQivo's portfolio and case studies featuring websites, web applications, custom software, UI/UX design, mobile apps, and digital solutions.",

  alternates: {
    canonical: "https://www.softqivo.com/portfolio",
  },

  openGraph: {
    title: "Portfolio & Case Studies | Digital Projects by SoftQivo",

    description:
      "Explore digital projects by SoftQivo, including websites, web applications, custom software, mobile apps, UI/UX design, and scalable digital solutions.",

    url: "https://www.softqivo.com/portfolio",

    siteName: "SoftQivo",

    type: "website",

    images: [
      {
        url: "https://www.softqivo.com/images/og/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "SoftQivo Portfolio and Case Studies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Portfolio & Case Studies | Digital Projects by SoftQivo",

    description:
      "Explore SoftQivo's digital projects, including websites, software, mobile applications, UI/UX design, and custom digital solutions.",

    images: ["https://www.softqivo.com/images/og/portfolio.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <CommonBanner
        breakIndex={5}
        label="OUR PORTFOLIO"
        title="Ideas turned "
        highlight="into real products."
        description="Explore a selection of digital products, websites, applications, and software solutions we’ve designed and built to solve real business challenges."
        breadcrumb="Portfolio"
      />
      <OurPortfolio />
      <LetsStart />
    </div>
  );
}

export default page;
