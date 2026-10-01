import Banner from '@/src/components/common/Banner'
import MaxWidth from '@/src/components/layout/MaxWidth'
import React from 'react'
import data from './data.json'
import WhoWeAre from '@/src/components/WhoWeAre'
import TechnicalPerformance from '@/src/components/TechnicalPerformance'
import SolutionsByApplication from '@/src/components/SolutionsByApplication'
import WhyChoose from '@/src/components/WhyChoose'
import FinalCTA from '@/src/components/FinalCTA'

const page = () => {
  const { banner, whoWeAre, technicalPerformance, whyChoose, finalCTA } = data || {};
  return (
    <div>
      <Banner data={banner} />
      <WhoWeAre data={whoWeAre} />
      <TechnicalPerformance data={technicalPerformance} />
      <WhyChoose data={whyChoose} />
      <FinalCTA data={finalCTA} />

    </div>
  )
}

export default page