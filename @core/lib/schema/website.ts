export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": "https://strap.com/#website",

  url: "https://strap.com",

  name: "strap Digital Media",

  publisher: {
    "@id": "https://strap.com/#organization",
  },

  inLanguage: ["en-US", "en-IN"],

  potentialAction: {
    "@type": "SearchAction",
    target: "https://strap.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
