import Banner from '@/src/components/common/Banner'
import data from './data.json'
import WhoWeAre from '@/src/components/WhoWeAre'
import TechnicalPerformance from '@/src/components/TechnicalPerformance'
import WhyChoose from '@/src/components/WhyChoose'
import FinalCTA from '@/src/components/FinalCTA'

import type { Metadata } from "next";
import WhyChooseUs from '@/src/components/WhyChooseUs'
import OurQuality from '@/src/components/OurQuality'
import Blog from '@/src/components/Blog'

export const metadata: Metadata = {
  title: "About Strap World | PET Strap Manufacturer in India",

  description:
    "Learn about Strap World Pvt. Ltd., an India-based manufacturer and exporter of PET and polyester strapping for textile, automotive, packaging and industrial applications.",

  keywords: [
    "Strap World",
    "Strap World Pvt Ltd",
    "PET strap manufacturer",
    "PET strapping manufacturer",
    "polyester strap manufacturer",
    "PET strap manufacturer in India",
    "PET strapping exporter",
    "polyester strap exporter",
    "PET packing strap manufacturer",
    "industrial polyester strap manufacturer",
    "PET strapping supplier India",
    "PET strap exporter India",
  ],

  authors: [{ name: "Strap World Pvt. Ltd." }],
  creator: "Strap World Pvt. Ltd.",
  publisher: "Strap World Pvt. Ltd.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "About Strap World | PET Strap Manufacturer in India",
    description:
      "Discover Strap World Pvt. Ltd., a manufacturer and exporter of PET and polyester strapping serving industrial and packaging requirements across India and international markets.",
    siteName: "Strap World",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Strap World | PET Strap Manufacturer in India",
    description:
      "Learn about Strap World Pvt. Ltd., manufacturer and exporter of PET and polyester strapping for industrial and packaging applications.",
  },

  category: "manufacturing",
};

const page = () => {
  const { banner, whoWeAre, technicalPerformance, whyChoose,blogs, finalCTA } = data || {};
  return (
    <div>
      <Banner data={banner} />
      <WhoWeAre data={whoWeAre} />
            <WhyChooseUs />

            <OurQuality />
                  <Blog data={blogs} />

      <FinalCTA data={finalCTA} />

    </div>
  )
}

export default page