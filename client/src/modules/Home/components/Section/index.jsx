import React from 'react'

export default function Stocks() {
  return (
    <div className='flex flex-col py-20'>
         <h5 className='text-4xl font-semibold'>Explore health market</h5>
         <div className='flex w-full space-x-10 py-4 '>
                <div className='grid grid-flow-row grid-cols-2  gap-4 gap-y-8 h-full w-3/5 '>
                    {[1,2,3,4,5,6,7].map(()=>{
                        return(
                            <div className='flex py-4 bg-rose-100 px-8 space-x-4 rounded-md'>
                                <div className='bg-slate-300 flex items-center justify-center w-24 h-20 rounded-lg'>
                                    <h5 className='text-slate-600 text-lg font-semibold'>TSL</h5>
                                </div>
                                <div className='flex items-center w-full justify-between'>
                                    <h5>Lorem ipsum </h5>
                                    <h5 className='text-green-600 font-semibold text-lg'>43.05%</h5>

                                </div>

                            </div>
                        )
                        })

                    }

                </div>

                <div className='flex flex-col bg-slate-200 h-72 py-8 px-6 w-2/5'>
                    <div className='w-3/5'>
                        <h5 className='text-3xl font-light inline'>Show me the most popular</h5>
                        <select className='inline  bg-slate-200 text-3xl font-light'>
                            <option>Stocks</option>
                            <option>Stocks</option>
                            <option>Stocks</option>
                            <option>Stocks</option>

                        </select>
                         
                    </div>
                    <div className='py-8'>
                        <button className='text-xl border border-black px-4 py-1'>View all</button>
                    </div>

                  </div>
         </div>
        

    </div>
  )
}
