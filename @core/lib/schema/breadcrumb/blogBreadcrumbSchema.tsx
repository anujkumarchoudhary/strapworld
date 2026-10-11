export const BlogBreadcrumbSchema = {
  "@type": "BreadcrumbList",

  "@id": "https://strap.com/blog#breadcrumb",

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
      name: "Blog",
      item: "https://strap.com/blog",
    },
  ],
};
