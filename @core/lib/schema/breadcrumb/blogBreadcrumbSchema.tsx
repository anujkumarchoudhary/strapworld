export const BlogBreadcrumbSchema = {
  "@type": "BreadcrumbList",

  "@id": "https://strapworld.in/blog#breadcrumb",

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
      name: "Blog",
      item: "https://strapworld.in/blog",
    },
  ],
};
