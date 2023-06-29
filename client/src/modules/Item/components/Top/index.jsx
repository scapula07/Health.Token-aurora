import React from 'react'
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai"
import {BsThreeDots} from "react-icons/bs"
import medicalImg from "../../../../assets/medical_record.png"

export default function Top() {
  return (
    <div className='flex space-x-7'>
        <div className='rounded-md h-56 '>
            <img 
              src={medicalImg}
              className="w-full h-full"
            />

        </div>
        <div className='flex justify-between w-full'>
             
                <div className='flex flex-col space-y-3'>
                    <div className='flex flex-col'>
                        <h5 className='text-xs font-semibold text-light'>Lorem ipsum </h5>
                        <h5 className='text-black font-semibold text-2xl '>Lorem ipsum#1</h5>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <h5 className='text-xs font-semibold text-light flex flex-col'>
                            <span className='text-slate-400 text-xs'>Created by</span>
                            <span className='text-lg font-semibold'> Lorem ipsum </span>
                         </h5>
                        <h5 className='text-black font-semibold flex space-x-2 items-center'>
                            <AiOutlineEye className='text-xl'/>
                            <span className='font-light'>0</span>
                        </h5>
                        <h5 className='text-black font-semibold flex space-x-2 items-center'>
                            <AiOutlineHeart  className='text-xl'/>
                            <span className='font-light'>0</span>
                        </h5>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='text-xs font-semibold text-light'>Current price </h5>
                        <h5 className='text-black font-semibold text-lg '>$100</h5>
                    </div>
                    <div className='flex space-x-8'>
                      {/* <button className='bg-green-500 px-6 py-2 rounded-full text-white'>Buy now</button> */}
                      <button  className='border-green-500 border px-6 py-2 rounded-full text-green-500'>View data</button>
                       
                    </div>




                </div>
                 <div className='flex space-x-4'>
                    <AiOutlineHeart 
                    className='text-xl font-semibold'
                    />
                    <BsThreeDots 
                    className='text-xl font-semibold'
                    />
                    
                </div>
       
         
            

        </div>

    </div>
   )
}
