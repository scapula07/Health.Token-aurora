import React from 'react'
import Tabs from '../components/Tabs'
import Hero from '../components/Hero'
import Stocks from '../components/Section'



export default function HomeView() {
  return (
    <div className='w-full'>
         <Tabs />
         <Hero />
         <Stocks />
       
    </div>
  )
}
