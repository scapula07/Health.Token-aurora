import React from 'react'
import Top from '../components/Top'
import Details from '../components/Details'
import History from '../components/History'


export default function ItemView() {
  return (
    <div className='py-8'>
        <Top />
        <Details />
        <History />

    </div>
  )
}
