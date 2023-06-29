import React from 'react'
import { useState } from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import Modal from '../../../../components/Modal'

export default function Proposals() {
    const [trigger,setTrigger] =useState(true)
  return (
    <>
    <div className='flex flex-col px-4 space-y-2 py-6'>
        {[1,2,3,4].map(()=>{
            return(
                <div className='flex  justify-between w-full border-b border-slate-200 py-4'>
                    <h5 className='text-sm font-light text-slate-600 w-3/4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae 
                   </h5>
                    <h5 className='flex items-center space-x-2'>
                        <span className='text-slate-600 text-xs'> KYC</span>
                        <AiOutlineCheck 
                          className='text-green-600'
                        />
                       
                    </h5>

                </div>
            )
              })

           }

    </div>
      
    </>
  )
}
