import React from 'react'
import Header from '../components/Header'
export default function OtherLayout({children}) {
  return (
    <div className="relative w-screen overflow-x-hidden text-black h-full overflow-y-hidden flex flex-col items-center" >
              <div className='fixed w-4/5 py-6  z-20  bg-white' >
                  <Header />
              </div>

            <div className='w-4/5 py-20'>
                {children}
            </div>
                
        </div>
  )
}
