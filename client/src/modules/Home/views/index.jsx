import React from 'react'
import Tabs from '../components/Tabs'
import Hero from '../components/Hero'
// import { TourSection ,ExperienceSection} from '../components/Section'
// import Banner from '../components/Banner'



export default function HomeView() {
  return (
    <div className='w-full'>
         <Tabs />
         <Hero />
         {/* <TourSection />
         <ExperienceSection />
         <Banner /> */}
       
    </div>
  )
}
