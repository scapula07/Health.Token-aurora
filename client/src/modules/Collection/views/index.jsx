import React ,{useEffect,useState} from 'react'
import Discover from '../components/Discover'
import Top from '../components/Top'
import { Outlet } from 'react-router-dom'
import {BsCollection} from "react-icons/bs"
import {AiOutlineLineChart} from "react-icons/ai"
import { useLocation,useParams,Link} from "react-router-dom";



export default function CollectionView() {
    const location =useLocation()
    const [cohort,setCohort]=useState(location?.state?.cohort)
    const [active,setActive]=useState("collections")
 
  return (
    <div className='py-8'>
        <Top 
          cohort={cohort}
        />
        {/* <Discover /> */}
        <div className='flex items-center justify-between py-8'>
                <div className='flex items-center space-x-2'>
                    <Link to="">
                    <h5 className={`${active=="collections"? "text-sm font-semibold bg-black text-white text-sm rounded-lg py-1 px-4 flex items-center space-x-1 ":"text-sm font-semibold hover:bg-black hover:text-white hover:text-sm rounded-lg py-1 px-4 flex items-center space-x-1 "}`}
                      onClick={()=>setActive("collections")}
                    >
                        <BsCollection />
                       <span>Collection</span> 
                    </h5>
                    </Link>
                    <Link to="trades">
                    <h5 className={`${active=="trades"? "text-sm font-semibold bg-black text-white text-sm rounded-lg py-1 px-4 flex items-center space-x-1 ":"text-sm font-semibold hover:bg-black hover:text-white hover:text-sm rounded-lg py-1 px-4 flex items-center space-x-1 "}`}
                         onClick={()=>setActive("trades")}
                    >
                       <AiOutlineLineChart />
                       <span>Trade</span> 
                    </h5>
                    </Link>
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
        <Outlet
            context={[cohort]}
          />

    </div>
  )
}
