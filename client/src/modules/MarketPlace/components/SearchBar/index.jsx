import React from 'react'
import {BiSearch} from "react-icons/bi"
import { useRecoilValue } from 'recoil'


export default function SearchBar({ searchQuery,setQuery}) {
  
  return (
    <div className='flex items-center space-x-4 px-4 py-1 bg-white rounded-full w-3/5 border-2'>
         <BiSearch
           className='text-slate-800 text-4xl font-semibold'
         />
         <input 
            placeholder='Where to?'
            className=' outline-none w-full border-0 text-lg text-black'
            value={searchQuery}
            onChange={(e)=>setQuery(e.target.value)}
          />
     </div>
  )
}
