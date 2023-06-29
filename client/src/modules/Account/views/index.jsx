import React from 'react'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'

export default function Account() {
  return (
    <div className='py-8 flex w-full space-x-6'>
        <div className='w-2/5'>
            <Profile />
        </div>
        <div className='w-3/5'>
            <Portfolio />
        </div>
        

    </div>
  )
}
