import React from 'react'
import Header from '../components/Header'
import { Toaster } from 'react-hot-toast';

export default function Layout({children}) {
    return (
        <div className="relative w-screen overflow-x-hidden text-black h-full overflow-y-hidden flex flex-col items-center" >
              <div className='fixed w-11/12 py-6  z-20  bg-white' >
                  <Header />
              </div>

            <div className='w-11/12 py-20'>
                {children}
            </div>
            <Toaster />
        </div>
      )
  }
  