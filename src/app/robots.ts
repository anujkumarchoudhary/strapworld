import type { MetadataRoute } from "next";

const baseUrl = "https://www.softqivo.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}