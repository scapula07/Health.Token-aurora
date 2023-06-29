import React from 'react'
import { useState ,useEffect} from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import Modal from '../../../../components/Modal'
import { daoProposals } from '../../_api'
import Web3 from "web3";
import contractAbi from "../../../../ABI/kycDao.json"
import { AccountState } from '../../../../recoil/globalState';
import { useRecoilValue } from 'recoil';


const contractAddress="0x5Ff00052c0553bE462298761b20E113B157bd6b0"

export default function Proposals({setSelected}) {
    const [trigger,setTrigger] =useState(true)
    const [proposals,setProposals]=useState([])
    const web3 = new Web3(window.ethereum)
    const account=useRecoilValue(AccountState)

    const kycDaoContract = new web3.eth.Contract(
      contractAbi,
      contractAddress
    )
    
    useEffect(()=>{
       const getProposals=async()=>{
        const txs = await kycDaoContract.methods.getAllProposals().call({})
        setProposals(txs)

      }
      getProposals()

      })

  return (
    <>
    <div className='flex flex-col px-4 space-y-2 py-6'>
        {[1,2,3,4].map(()=>{
            return(
                <div className='flex  justify-between w-full border-b border-slate-200 py-4 ' 
                   onClick={()=>setSelected("Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae ")}
                >
                    <h5 className='text-sm font-light text-slate-600 w-3/4 hover:text-black hover:text-xl hover:font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae 
                   </h5>
                    <h5 className='flex items-center space-x-2'>
                        <span className='text-slate-600 text-xs'> KYC</span>
                        <AiOutlineCheck 
                          className='text-green-600'
                        />
                       
                    </h5>

                </div>
            )
              })

           }

    </div>
      
    </>
  )
}
