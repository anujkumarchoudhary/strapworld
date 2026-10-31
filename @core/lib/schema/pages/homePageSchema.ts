import { websiteSchema } from "../website";
import { organizationSchema } from "../organization";
import { homeFaqSchema } from "../faq/homeFaq";
import { homeBreadcrumbSchema } from "../breadcrumb/homeBreadcrumb";
import { indiaOfficeSchema } from "../indiaAddress";
// import { usaOfficeSchema } from "../usaAddress";
// import { indiaOfficeSchema } from "../indiaAddress";

export const homePageSchema = {
  "@context": "https://schema.org",

  "@graph": [
    homeBreadcrumbSchema,
    organizationSchema,
    websiteSchema,
    indiaOfficeSchema,
    homeFaqSchema,
  ],
};
