import React from 'react'
import bg  from "../../../../assets/landing2.webp"
import SearchBar from '../SearchBar'

export default function Hero() {
  return (
    <div className='w-full relative h-80'>
         <img 
            src={"https://etimg.etb2bimg.com/photo/83564325.cms"}
            className="w-full h-full"
           />

           <div className='w-full absolute top-0 h-full flex justify-center items-center'>
              <SearchBar />
           </div>

    </div>
  )
}
