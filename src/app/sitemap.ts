
import type { MetadataRoute } from "next";

const baseUrl = "https://www.softqivo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about-us",
    "/products",
    "/blog",
    "/gallery",
    "/pet-strap-applicatons",
    "/contact",
    "/pet-strap-manufacturing",
    "/pet-strap",
    "/pp-strap",
    "/plastic-box-strapping-roll",
    "/industrial-packaging-strap",
    "/cotton-bale-strap",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
