import React from 'react'
import Tabs from '../Tabs'
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiListPlus} from "react-icons/bi"

export default function TopBar() {
  return (
    <div className='flex items-center  border-t py-6 w-full justify-between'>
            <div className='flex space-x-3 w-1/4'>
                <div className='flex items-center justify-center px-1 rounded-lg bg-red-600'>
                    <h5 className='text-xs font-semibold text-white '>TESLA</h5>
                </div>
                <div className='flex flex-col'>
                <h5 className='text-sm font-semibold text-black'>
                    TSLA ,
                    <span className='text-sm font-semibold text-slate-500'>Tesla Motors,Inc</span>  
                </h5>
                <h5 className='text-sm font-semibold text-black'>
                    264.61,  
                        <span className='text-green-500 text-xs font-semibold'>5.15(1.98%)</span>
                    
                    
                </h5>

                </div>
                

            </div>
            <div className='w-1/2'>
               <Tabs />
            </div>

            <div className='flex w-1/4 items-center space-x-4 justify-end '>
                <h5 className='flex justify-center items-center p-1 border rounded-md '>
                    <BiListPlus className='text-green-500 text-xl' />
                </h5>

                <button className='bg-green-500 text-white py-2 px-6 rounded-sm'>Invest</button>
                <BsThreeDotsVertical 
                  className='text-lg'
                />

            </div>
           
    </div>
  )
}
