import Banner from '@/src/components/common/Banner'
import data from './data.json'
import TechnicalPerformance from '@/src/components/TechnicalPerformance'
import FinalCTA from '@/src/components/FinalCTA'
import ManufactureProcess from '@/src/components/ManufactureProcess'
import IndustriesWeServe from '@/src/components/IndustriesWeServe'
import SelectionApproch from '@/src/components/SelectionApproch'

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
  const { banner, industriesWeServe, whoWeAre, technicalPerformance, manufactureProcess, finalCTA } = data || {};
  return (
    <div>
      <Banner data={banner} />
      <IndustriesWeServe data={industriesWeServe} />
      <SelectionApproch data={whoWeAre} />
      <TechnicalPerformance data={technicalPerformance} />
      <ManufactureProcess data={manufactureProcess} />
      <FinalCTA data={finalCTA} />
    </div>
  )
}

export default page