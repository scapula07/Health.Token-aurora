import React from 'react'
import {AiOutlineClockCircle} from "react-icons/ai"
import Proposals from '../components/proposals'
import Voting from '../components/voting'
export default function DaoView() {
  return (
    <div className='w-full py-8'>
         <h5 className='text-xl font-semibold'>DAO Governance</h5>
         <div className='flex w-full py-8 space-x-10'>
                <div className='flex flex-col w-1/2 space-y-10'>
                    <div className='w-full shadow-lg flex flex-col py-6 px-4 space-y-6'>
                            <div className='flex items-center justify-between'>
                                <h5>Voting period</h5>
                                <h5 className='flex items-center space-x-2'>
                                 <AiOutlineClockCircle 
                                    className='text-2xl text-green-600'
                                    />
                                  <span className='text-slate-500 text-sm'>14 days left</span>

                                </h5>
                             </div>
                             <div className='flex flex-col space-y-0.5'>
                                <h5 className=''>Voting stats</h5>
                                <h5 className='flex items-center w-full justify-between text-sm font-light'>
                                    <span>Total voting power</span>
                                    <span>50,000 st Near</span>

                                </h5>
                                <h5 className='flex items-center w-full justify-between text-sm font-light'>
                                    <span>Total votes</span>
                                    <span>10</span>

                                </h5>
                             </div>
                       

                     </div>
                        <div className='w-full shadow-lg  '>
                            <Proposals />

                        </div>

                 </div>
                  <div className=''>
                    <Voting />
                   

                   </div>

         </div>

    </div>
  )
}
