import React from 'react'
import bannerImg from "../../../../assets/landing2.jpeg"

export default function Banner() {
  return (
    <div className='w-full  flex justify-between py-36 h-56 items-center px-6' style={{background:"#f9f1ec"}}>
        <div className='flex flex-col space-y-4'>
             <h5 className='text-xl font-semibold text-black'>Your next trip starts here</h5>
             <h5 className='text-xl font-light '>Top-rated hotels that have earned the Best of the Best crown</h5>
             <button className='bg-black text-white font-semibold rounded-full py-4 px-2 w-44'> 
                 See the lists
             </button>

        </div>
        <div className='w-1/4'>
            <img 
              src={bannerImg}
              className="w-full "
             />
        </div>
 
    </div>
  )
}
 