import React from 'react'

export default function Top({cohort}) {
  return (
    <div className='flex flex-col w-full items-center space-y-4'>
        <h5 className='text-3xl font-semibold'>{cohort?.name}</h5>
        <p className='w-3/4 font-light text-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis 
        </p>
        <div className=' w-full h-56 rounded-lg'>
            <img src={cohort?.img} className="w-full h-full rounded-lg"/>

        </div>

    </div>
  )
}
