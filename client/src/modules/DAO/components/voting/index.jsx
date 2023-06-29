import React from 'react'

export default function Voting() {
  return (
    <div className='flex flex-col w-full'>
        <div className='w-full'>
            <h5>Description</h5>
            <p className='w-3/5 font-light py-4'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae 
            </p>

        </div>
        <div className='flex'>
            

        </div>
        <div className='flex space-x-3'>
            <h5 className='text-green-600'>Accept</h5>
            <h5 className='text-red-600'>Reject</h5>

         </div>

     </div>
  )
}
