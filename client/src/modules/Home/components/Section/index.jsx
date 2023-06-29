import React from 'react'
import { tours } from '../../store/tours'
import { experiences } from '../../store/experiences'

export  function TourSection() {
  return (
    <div className='w-full flex flex-col py-20'>
        <div className='flex flex-col '>
            <h5 className='text-2xl font-semibold text-slate-700'>Explore health markets</h5>
            <h5 className=' font-semibold text-sm font-light'>Investment Opportunities</h5>
        </div>
        <div className='flex items-center space-x-6 py-7'>
        {tours.map((tour)=>{
             return(
                <div className='relative'>
                    <img
                       src={tour?.img}
                       className="w-full h-full"
                    
                    />
                    <div className='h-full w-full absolute flex items-end px-4 py-8 top-0'>
                        <h5 className='text-3xl font-semibold text-white'>{tour?.name}</h5>
                    </div>
                </div>
             )
        })

        }
        </div>
    </div>
  )
}


export  function ExperienceSection() {
    return (
      <div className='w-full flex flex-col py-6'>
          <div className='flex flex-col '>
              <h5 className='text-2xl font-semibold text-slate-700'>Top Experiences on Travelnext</h5>
          </div>
          <div className='flex  space-x-6 py-7 w-full'>
          {experiences.map((exp)=>{
               return(
                  <div className='flex flex-col h-full w-1/4'>
                      <img
                         src={exp?.img}
                         className="w-full h-60"
                      
                      />
                      <div className='h-full w-full flex items-end'>
                          <h5 className='text-lg font-semibold '>{exp?.name}</h5>
                      </div>
                  </div>
               )
          })
  
          }
          </div>
      </div>
    )
  }
