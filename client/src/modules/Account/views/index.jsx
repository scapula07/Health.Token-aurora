import React from 'react'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'
import profileImg from "../../../assets/profile.png"
import { AccountState } from '../../../recoil/globalState'
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom'
export default function Account() {
   const account=useRecoilValue(AccountState)
  return (
    <div className='py-8 w-full flex space-x-20'>
        <div className='flex flex-col w-2/5'>
          <div className='flex items-center space-x-6'>
            <img 
              src={profileImg}
            />
            <div className='flex flex-col space-y-2'>
                <h5 className='font-semibold text-2xl'>Username</h5>
                <h5 className='font-light border px-4 py-1 text-sm rounded-full '>{account.slice(0,11) + "..." +account.slice(-4)}</h5>

            </div>
          </div>

          <div className='px-4 py-8'>
            <h5 className='text-xl font-semibold'>About</h5>
            <p className='text-xl font-light py-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum.
            </p>
          </div>

        </div>
        <div className='flex flex-col py-4 w-full'>
            <div className='flex  justify-between'>
                <div className='flex space-x-2'>
                  <h5 className=' font-semibold'>Records(0)</h5>
                  <h5 className=' font-semibold'>Assest(0)</h5>
                </div>
              <div className='flex items-center space-x-6'>
                  <button className='bg-green-500 py-2 px-4 text-white text-xs rounded-md'>Fractionalize Token</button>
                  <Link to="/create">
                     <h5 className='text-green-600 '>Create Token</h5>
                  </Link>
                
               </div>
            </div>
            
        </div>
        

    </div>
  )
}
