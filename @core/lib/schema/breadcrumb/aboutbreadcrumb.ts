export const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id": "https://strapworld.in/about-us#breadcrumb",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://strapworld.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://strapworld.in/about-us",
    },
  ],
};