
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://strapworld.in/#organization",

  name: "Strap World",
  legalName: "Strap World Pvt. Ltd.",

  url: "https://strapworld.in",

  logo: "https://strapworld.in/_next/static/media/strap_Logo.cdbe72f0.svg",
  image: "https://strapworld.in/_next/static/media/strap_Logo.cdbe72f0.svg",

  description:
    "Strap World is an Indian manufacturer and exporter of high-quality PET strapping, polyester straps, PP straps, cotton bale straps, and industrial packaging straps. We provide durable strapping solutions for industrial packaging, palletizing, bundling, and load securing.",

  email: "nalandaindustri@gmail.com",
  telephone: "+91-9978735708",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Gokul Industries Estate - A, Plot No 16 & 17, S No 261/P1, Morbi Highway, Near Khodiyar Temple",
    addressLocality: "Kagdadi, Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360003",
    addressCountry: "IN",
  },

  location: {
    "@type": "Place",
    name: "Strap World Manufacturing Facility",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Gokul Industries Estate - A, Plot No 16 & 17, S No 261/P1, Morbi Highway, Near Khodiyar Temple",
      addressLocality: "Kagdadi, Rajkot",
      addressRegion: "Gujarat",
      postalCode: "360003",
      addressCountry: "IN",
    },
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9978735708",
      email: "nalandaindustri@gmail.com",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9978735708",
      email: "nalandaindustri@gmail.com",
      contactType: "export enquiries",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  ],

  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Place",
      name: "International Markets",
    },
  ],

  knowsAbout: [
    "PET Strapping",
    "Polyester Strapping",
    "PET Packing Straps",
    "PP Strapping",
    "Polypropylene Straps",
    "Cotton Bale Straps",
    "Industrial Packaging Straps",
    "Plastic Strapping Rolls",
    "Heat Sealing PP Straps",
    "Manual Box Strapping",
    "Industrial Packaging Solutions",
    "Palletizing and Load Securing",
    "Packaging and Bundling Solutions",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial Strapping Products",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "PET and Polyester Straps",
        url: "https://strapworld.in/polyester-pet-strap",
      },
      {
        "@type": "OfferCatalog",
        name: "Cotton Bale Strap",
        url: "https://strapworld.in/cotton-bale-strap",
      },
      {
        "@type": "OfferCatalog",
        name: "PP Straps",
        url: "https://strapworld.in/pp-strap",
      },
      {
        "@type": "OfferCatalog",
        name: "Industrial Packaging Strap",
        url: "https://strapworld.in/industrial-packaging-strap",
      },
      {
        "@type": "OfferCatalog",
        name: "Plastic Box Strapping Roll",
        url: "https://strapworld.in/plastic-box-strapping-roll",
      },
      {
        "@type": "OfferCatalog",
        name: "Semi Automatic PP Strap",
        url: "https://strapworld.in/semi-automatic-pp-strap",
      },
      {
        "@type": "OfferCatalog",
        name: "Heat Sealing PP Strapping Roll",
        url: "https://strapworld.in/heat-sealing-pp-strap",
      },
    ],
  },
};
