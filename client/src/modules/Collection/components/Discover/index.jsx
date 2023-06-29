import React,{useEffect,useState} from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import { Link } from 'react-router-dom'
import medicalImg from "../../../../assets/medical_record.png"
import { nftCollection } from '../../_api'
import { useOutletContext } from "react-router-dom";


export default function Discover() {
    const [cohort]= useOutletContext();
    console.log(cohort)
    const [medicalRecords,setRecords]=useState([])
    let count
    useEffect(()=>{
      const getCollection=async()=>{
        const res=await nftCollection.getAllCollections()
        console.log(res,"cool")
        const result = res?.filter(r=> r?.data?.cohort==cohort?.case);
        setRecords(result)
        console.log(result,"result")

      }
      getCollection()

      })
  return (
    <div className='flex flex-col w-full '>

        <div className='grid grid-flow-row grid-cols-4  gap-4 gap-y-8 h-full w-full '>
             
            {medicalRecords.map((record)=>{
                count++
                 return(
                    <div className='flex flex-col'>
                            <Link  to={`/market/collection/item/${count}}`}
                             state={{
                              
                                }}
                                >
                        <div className='relative  h-56 rounded-sm'>
                            <img 
                              src={medicalImg}
                              className="w-full h-full"
                            />
                            <div className='flex absolute top-0 w-full justify-end py-4 px-4'>
                                <h5 className='bg-white flex items-center justify-center p-2 rounded-full'>
                                    <AiOutlineHeart 
                                      className='text-xl fonnt-semibold text-slate-700'
                                     />
                                </h5>
                            </div>
                         </div>
                         </Link>
                         <div className='flex items-center justify-between w-full py-2'>
                            <div className='flex flex-col'>
                                 <h5 className='text-slate-500 text-sm font-semibold'>{record?.data?.itemName}</h5>
                                 <h5 className='text-slate-800  font-semibold'>{record?.data?.itemDescription}</h5>
                            </div>
                            <div className='flex flex-col'>
                                 {/* <h5 className='text-slate-500 text-sm font-semibold'>Price</h5>
                                 <h5 className='text-slate-800  font-semibold'>100</h5> */}
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
