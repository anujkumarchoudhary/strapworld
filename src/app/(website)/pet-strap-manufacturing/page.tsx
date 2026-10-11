import Banner from '@/src/components/common/Banner'
import data from './data.json'
import WhoWeAre from '@/src/components/WhoWeAre'
import TechnicalPerformance from '@/src/components/TechnicalPerformance'
import WhyChoose from '@/src/components/WhyChoose'
import FinalCTA from '@/src/components/FinalCTA'

import ManufactureProcess from '@/src/components/ManufactureProcess'

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
  const { banner, whoWeAre, technicalPerformance, manufactureProcess, whyChoose, finalCTA } = data || {};
  return (
    <div>
      <Banner data={banner} />
      <WhoWeAre data={whoWeAre} />
      <TechnicalPerformance data={technicalPerformance} />
      <WhyChoose data={whyChoose} />
      <ManufactureProcess data={manufactureProcess} />
      <FinalCTA data={finalCTA} />
    </div>
  )
}

export default page