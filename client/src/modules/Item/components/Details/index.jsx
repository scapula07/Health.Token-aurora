import React from 'react'

export default function Details() {
  return (
    <div className='py-8 flex w-full '>
        <div className='w-3/4 flex flex-col'>
            <div className='flex flex-col'>
                <h5 className='text-lg font-semibold'>Description</h5>
                <p className='font-light text-slkate-600 text-sm py-4 w-3/4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum!

                </p>
                 <div className='flex flex-col '>
                    <h5 className='text-slate-500 font-light text-sm'>Contract Address:</h5>
                    <h5 className='text-slate-500 font-light '>Token standard:</h5>
                    <h5 className='text-slate-500 font-lighttext-sm text-sm'>Blockchain:</h5>

                 </div>

            </div>

        </div>
        <div className='w-1/4 flex flex-col'>
            <h5 className='text-lg font-semibold'>Tags</h5>
            <div className='flex items-center space-x-4 w-full py-4'>
                {[1,2,3,4].map(()=>{
                     return(
                        <h5 className='text-xs font-semibold border rounded-lg py-2 px-2'>Lorem</h5>
                     )
                 })

                 }

            </div>

        </div>

    </div>
  )
}
