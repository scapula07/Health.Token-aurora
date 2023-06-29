import React from 'react'
import medicalImg from "../../../../assets/medical_record.png"

import { ScaleLoader } from 'react-spinners'

export default function Inputs({setName, itemName, itemDescription,setDescription,list,setCohort,cohorts,setLoading,loading,cohort}) {
    console.log(cohort,"ii")
  return (
    <div className='py-8 flex flex-col'>
        <div className='flex w-full space-x-10 items-center'>
            <div className='flex flex-col w-1/2'>
                <label className='font-semibold'>Name*</label>
               <input 
                 className='py-2 px-4 border rounded-sm'
                 placeholder='Enter name of data set'
                 value={itemName}
                 onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className='flex flex-col w-1/4'>
            <label className='font-semibold'>Cohort*</label>
                <select className='border py-2 px-4 rounded-sm'
                    onChange={(e)=>setCohort(JSON.parse(e.target.value))}
                >
                    {cohorts.map((cohort)=>{
                        console.log(cohort,"ccc")
                        return(
                            <option value={JSON.stringify(cohort)}>{cohort?.name}</option>
                        )
                    })

                    }
                 
                </select>
            </div>
           

        </div>
        <div className='flex py-6 w-full justify-between space-x-14'>
        <div className='w-1/2'>
            <label className='font-semibold'>Item Description*</label>
            <textarea 
              className='h-28 w-full border px-2 py-4 rounded-sm'
              placeholder='Detailed description of your data set'
              value={itemDescription}
              onChange={(e)=>setDescription(e.target.value)}
             />

        </div>
        <div className='flex flex-col w-1/2'>
             
           
            
            </div>
        </div>
        <div className='flex space-x-2 py-2'>
            <input 
                type="checkbox"
            />
             <h5 className='text-sm font-semibold'>Transfer copyright when purchased?</h5>
              
            </div>
        <div className='py-6 w-full justify-center flex '>
          <button className='bg-green-500 py-3 text-white font-semibold  w-1/2 rounded-lg'
           onClick={list}
          >
               {loading?
                <ScaleLoader color='white'/>
                :
                "List"
                 }
          
          </button>
        </div>
    

    </div>
  )
}


