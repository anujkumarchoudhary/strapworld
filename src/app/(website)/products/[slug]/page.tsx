import Banner from '@/src/components/common/Banner'
import data from './data.json'
import FinalCTA from '@/src/components/FinalCTA'
import FAQ from '@/src/components/FAQ'
import ProductOverview from '@/src/components/ProductOverview'
import TechnicalOverview from '@/src/components/TechnicalOverview'
import RelatedProducts from '@/src/components/RelatedProducts'

export const metadata = {
  title: "PET Strap Manufacturing Process | Strap World",
  description:
    "Explore Strap World's PET strap manufacturing process, from raw material processing and extrusion to stretching, embossing, quality testing, winding and export-ready packaging.",
  keywords: [
    "PET strap manufacturing",
    "PET strap manufacturing process",
    "PET strapping manufacturing",
    "PET strap manufacturer",
    "PET strap manufacturers in India",
    "PET strapping manufacturer India",
    "PET packing strap manufacturing",
    "industrial PET strap manufacturing",
  ],
};

const page = () => {
  const { banner, productOverview, technicalOverview, relatedProducts, finalCTA } = data || {};
  return (
    <div>
      <Banner data={banner} />
      <ProductOverview data={productOverview} />
      <TechnicalOverview data={technicalOverview} />
      <RelatedProducts data={relatedProducts} />
      <FAQ />
      <FinalCTA data={finalCTA} />
    </div>
  )
}

export default page