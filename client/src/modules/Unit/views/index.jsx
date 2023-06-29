import React from 'react'
import TopBar from '../components/TopBar'
import { Link,Outlet } from 'react-router-dom'

export default function MarketUintView() {
  return (
    <div className='py-2'>
       <TopBar />
       <Outlet />
    </div>
  )
}
