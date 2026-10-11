export const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id": "https://strap.com/about-us#breadcrumb",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://strap.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://strap.com/about-us",
    },
  ],
};