import React from 'react'
import SearchBar from '../SearchBar'
import Filter from '../Filter'

export default function TopSearch({ searchQuery,setQuery}) {
  return (
    <div className='w-full flex flex-col space-y-2'>
        <div className='w-full flex items-center justify-between py-6'>
        <SearchBar 
           searchQuery={searchQuery}
           setQuery={setQuery}
        />
        <div className='flex justify-end'>
           <Filter />
        </div>
       
        </div>
        <h5 className='border w-full'></h5>

    </div>
    )
}
