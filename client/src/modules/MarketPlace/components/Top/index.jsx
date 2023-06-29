import React from 'react'
import { tabs } from './tabs'

export default function Top() {
  return (
    <div className='flex w-full flex-col'>
        <div className='py-8 flex items-center space-x-6'>
        
            {tabs.map((tab)=>{
                return(
                    <h5 className=' font-semibold text-slate-600 text-lg'>{tab.name}</h5>
                )
            })  }

      </div>
        <div className='flex w-full justify-between '>
                {[1,2,3,4,5].map((tab)=>{
                    return(
                      <div className='flex flex-col h-56 w-56 rounded-sm border relative bg-slate-400'>
                           <div className='absolute bottom-0 py-6 px-4 w-full'>
                             <h5 className='text-sm font-semibold text-white '>Lorem ipsum dolor sit amet</h5>
                           </div>
                      </div>
                    )
                })  }


            </div>
     </div>
  )
}
