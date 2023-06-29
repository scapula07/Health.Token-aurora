import React from 'react'

export default function TopProviders() {
  return (
    <div className='w-full py-6'>
        <h5 className='text-xl font-semibold'>Top data providers</h5>
        <div className='grid grid-flow-row grid-cols-4  gap-4 gap-y-8 h-full w-full py-8 '>
            {[1,2,3,4,4,5,5,5,6,6,,6,6].map(()=>{
                return(
                    <div className='h-56 rounded-lg flex flex-col border'>
                        <div className='bg-slate-500 h-28'> 
                        </div>
                        <div className='flex flex-col w-full items-center'>
                            <div className='rounded-full h-10 w-10 -mt-4 bg-slate-400 '>
                            </div>
                            <div className='w-full flex-col flex items-center'>
                                <h5 className='text-black font-semibold'>@Lorem ipsum</h5>
                                <h5 className='text-slate-400 text-lg'>20 collections</h5>
                            </div>
                        </div>

                     </div>
                )

            })}
            
        </div>
    </div>
  )
}
