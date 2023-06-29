import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import cancerImg from "../../../../assets/cancer.jpeg"
import peadImg from "../../../../assets/pead.jpeg"
import mentalImg from "../../../../assets/mental.webp"
import infectionsImg from "../../../../assets/infections.jpeg"
import { Link } from 'react-router-dom'

export default function Discover() {
    let count;
  return (
    <div className='flex flex-col w-full py-12'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
                <h5 className='text-lg font-semibold hover:bg-black hover:text-white hover:text-sm rounded-lg py-1 px-4'>Trending</h5>
                <h5 className='text-lg font-semibold hover:bg-black hover:text-white hover:text-sm rounded-lg py-1 px-4'>Top</h5>
            </div>
            <div className='flex items-center space-x-6'>
                 <select className='border rounded-lg py-2 px-2 text-sm'>
                     <option>All</option>
                 </select>
                 <select className='border rounded-lg py-2 px-2 text-sm'>
                     <option>Newest</option>
                 </select>
            </div>
        </div>

        <div className='grid grid-flow-row grid-cols-4  gap-4 gap-y-8 h-full w-full py-6'>
        {cohorts.map((cohort)=>{
            count ++
                 return(
                    <div className='flex flex-col'>
                        <div className='relative  h-56 rounded-sm'>
                        <Link  to={`/market/collection/${count}}`}
                             state={{
                                cohort
                                }}
                                >
           

                            <img src={cohort.img } className="w-full h-full rounded-sm"/>
                        </Link>
                            <div className='flex absolute top-0 w-full justify-end py-4 px-4'>
                                <h5 className='bg-white flex items-center justify-center p-2 rounded-full'>
                                    <AiOutlineHeart 
                                      className='text-xl fonnt-semibold text-slate-700'
                                     />
                                </h5>
                            </div>
                         </div>
                         <div className='flex items-center justify-between w-full py-2'>
                            <div className='flex flex-col'>
                                 <h5 className='text-slate-500 text-sm font-semibold'>{cohort.name}</h5>
                                 <h5 className='text-slate-800  font-semibold'>Lorem ipsum dolor sit</h5>
                            </div>
                            <div className='flex flex-col'>
                                 <h5 className='text-slate-500 text-sm font-semibold'>Price</h5>
                                 <h5 className='text-slate-800  font-semibold'>100</h5>
                            </div>

                         </div>

                     </div>
                 )
            })

            }
            {[1,2,3,4,4,5,5,5,6,6,,6,6].map(()=>{
                 return(
                    <div className='flex flex-col'>
                        <div className='relative bg-slate-400 h-56 rounded-sm'>
                            <div className='flex absolute top-0 w-full justify-end py-4 px-4'>
                                <h5 className='bg-white flex items-center justify-center p-2 rounded-full'>
                                    <AiOutlineHeart 
                                      className='text-xl fonnt-semibold text-slate-700'
                                     />
                                </h5>
                            </div>
                         </div>
                         <div className='flex items-center justify-between w-full py-2'>
                            <div className='flex flex-col'>
                                 <h5 className='text-slate-500 text-sm font-semibold'>Lorem ipsum</h5>
                                 <h5 className='text-slate-800  font-semibold'>Lorem ipsum dolor sit</h5>
                            </div>
                            <div className='flex flex-col'>
                                 <h5 className='text-slate-500 text-sm font-semibold'>Price</h5>
                                 <h5 className='text-slate-800  font-semibold'>100</h5>
                            </div>

                         </div>

                     </div>
                 )
            })

            }

        </div>

    </div>
  )
}



const cohorts=[
 {
    name:"Oncologic cohort",
    case:"Cancer",
    img:cancerImg,
    address:"0xcf65c3228df81f011Ccf71C6a51C32f27361E1fe"
    
  },
  {
    name:"Infections cohort",
    case:"Infections",
    img:infectionsImg,
    address:"0x5D4E781494173b8BbDaD9C534d088cAB531b0037"
    
  },
  {
    name:"Paediatrics health cohort",
    case:"Paediatrics health",
    img:peadImg,
    address:"0x95D5796e361927fF9732d43F18280645853fA90f"

    
  },
  {
    name:"Mental health cohort",
    case:"Mental health",
    img:mentalImg,
    address:"0x5A5d64b2Ae3cEd13b38A79f3a40a912Bbd2e8017"
    
  }
]


