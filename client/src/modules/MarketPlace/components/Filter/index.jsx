import React ,{useState} from 'react'
import {BsFilterLeft} from "react-icons/bs"
import Modal from '../../../../components/Modal'

export default function Filter() {
    const [trigger,setTrigger]=useState(false)
  return (
    <>
    <div className='flex rounded-lg px-6 py-2 items-center space-x-2 border-2' onClick={()=>setTrigger(true)}>
        <BsFilterLeft
          className='text-lg font-semibold'
        />
        <h5 className='text-sm font-semibold text-slate-700'>Filters</h5>
     </div>
      <Modal trigger={trigger}  cname="w-3/4 h-56 rounded-sm py-4  px-4">
        <div className='flex flex-col'>
              <h5 className='text-lg font-semibold'>Filter</h5>
              <div className='flex flex-col'>
                 <h5 className='text-sm font-semibold'>Price range</h5>
                 <h5 className='text-sm font-light'> The average price per night is $284.61</h5>

              </div>

        </div>

     </Modal>
     </>
  )
}
