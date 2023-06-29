import React from 'react'
import {BiSearch} from "react-icons/bi"

export default function SearchBar() {
  return (
    <div className='flex items-center space-x-4 px-4 py-4   bg-white rounded-full  w-1/2'>
         <BiSearch
           className='text-slate-800 text-4xl font-semibold'
         />
         <input 
            placeholder='Where to?'
            className=' outline-none w-full border-0 text-lg text-black'
          />
     </div>
  )
}
