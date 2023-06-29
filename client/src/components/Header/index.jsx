import React,{useState} from 'react'
import { navs } from './navs'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import ConnectAccount from '../ConnectWallet'


const Nav=({nav,activeNav,setActive})=>{

   
    return(
      <div 
          className={`${activeNav==nav.navName?'flex items-center space-x-2 rounded-lg':'flex items-center space-x-2 rounded-lg '}`}
          onClick={()=>setActive(nav.navName)}
        >
          <h5 className={`${activeNav==nav.navName?'text-2xl font-semibold text-white':'text-xl font-semibold text-slate-600'}`}>{nav.icon}</h5>

          <h5 className={`${activeNav==nav.navName?'text-slate-500 flex items-center space-x-0.5':' text-md font-semibold text-slate-700 hover:text-slate-500 flex items-center space-x-1'}`}>
            {nav.navName}
            {nav.navName==="Cart"&&<span className='font-light text-sm  rounded-full p-1'></span>

            }
             
          </h5>

      </div>
    )
}

export default function Header() {
    const [activeNav,setActive]=useState("Home")
  return (
    <div className='flex items-center w-full justify-between '>
        <div className='w-1/2'>
           <Link to="/">
            <h5 className='text-black font-bold text-2xl'>$.
           <pan className="text-slate-900 font-light font-serif">Health</pan>
            </h5>
            </Link>

        </div>
        <div className='h-full flex items-center w-1/2 justify-end space-x-6'>
            {navs.map((nav)=>{
                return(
                    <Link to={nav?.link}>
                    <Nav 
                        nav={nav} 
                        activeNav={activeNav} 
                        setActive={setActive}
                        />
                    </Link>
                )
              })}
              <div className=''>
                <ConnectAccount />

              </div>

          </div>


    </div>
  )
}
