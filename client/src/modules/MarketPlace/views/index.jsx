import React from 'react'
import Top from '../components/Top'
import TopSearch from "../components/TopSearch"
import Discover from '../components/Discover'
import TopProviders from '../components/TopProviders'


export default function MarketPlaceView() {
  return (
    <div className=''>
        <TopSearch />
        <Top />
        <Discover />
        <TopProviders />

      

    </div>
  )
}
