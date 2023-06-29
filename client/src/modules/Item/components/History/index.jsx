import React from 'react'
import boxImg from "../../../../assets/box.png"
export default function History() {
  return (
    <div className='flex flex-col'>
        <h5 className='font-semibold text-lg'>History</h5>
        <div className='flex items-center justify-center w-full h-56 flex-col'>
            <img src={boxImg}/>
            <h5 className='text-lg font-light'>No history</h5>

        </div>

    </div>
  )
}
