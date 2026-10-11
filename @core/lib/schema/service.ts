export const serviceSchema = (
  name: string,
  description: string,
  url: string
) => ({
  "@type": "Service",

  name,

  description,

  url,

  provider: {
    "@id": "https://strap.com/#organization",
  },
});