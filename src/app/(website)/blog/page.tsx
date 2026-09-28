import Blog from "@/src/components/Blog";
import CommonBanner from "@/src/components/CommonBanner";
import LetsStart from "@/src/components/LetsStart";
import { staticData } from "@/src/utills/Data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Web Development, UI/UX & Software Insights | SoftQivo",

  description:
    "Explore SoftQivo's insights on web development, UI/UX design, software development, digital products, scalability, and modern technology.",

  alternates: {
    canonical: "https://www.softqivo.com/blog",
  },

  openGraph: {
    title: "Blog | Web Development, UI/UX & Software Insights | SoftQivo",

    description:
      "Explore insights from SoftQivo on web development, UI/UX design, software development, digital products, and modern technology.",

    url: "https://www.softqivo.com/blog",

    siteName: "SoftQivo",

    type: "website",

    images: [
      {
        url: "https://www.softqivo.com/images/og/blog.jpg",
        width: 1200,
        height: 630,
        alt: "SoftQivo Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Blog | Web Development, UI/UX & Software Insights | SoftQivo",

    description:
      "Read SoftQivo's insights on web development, UI/UX, software development, digital products, and modern technology.",

    images: ["https://www.softqivo.com/images/og/blog.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  const { blogs2 } =
    staticData?.home;
  return (
    <div>
      <CommonBanner title={"Ideas, insights & digital thinking."} description="Browse our latest articles to learn practical tips, emerging trends, and innovative solutions that empower businesses to increase visibility,attract customers."/>
      <Blog data={blogs2} />
      <LetsStart />
    </div>
  );
}

export default page;
