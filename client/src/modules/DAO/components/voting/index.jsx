import React,{useState} from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import Web3 from "web3";
import contractAbi from "../../../../ABI/kycDao.json"
import { AccountState } from '../../../../recoil/globalState';
import { useRecoilValue } from 'recoil';


const contractAddress="0x5Ff00052c0553bE462298761b20E113B157bd6b0"

export default function Voting({ select}) {
  const web3 = new Web3(window.ethereum)
  const account=useRecoilValue(AccountState)
  const [choice,setChoice]=useState()
  let count=0

  const kycDaoContract = new web3.eth.Contract(
    contractAbi,
    contractAddress
  )
  const vote=async()=>{
 
    try{
       const txs = await kycDaoContract.methods.voteOnProposal(true).send({from:account})
        console.log(txs)
       toast.success("Voted")
      
       
      }catch(e){
        console.log(e)
      }

    }


  return (
    <div className='flex flex-col w-full'>
        <div className='w-full'>
            <h5>Description</h5>
            <p className='w-3/5 font-light py-4'>
                {select}
            </p>

        </div>
        <div className='flex flex-col space-y-4'>
          <h5>KYC compliance</h5>
          {[1,2,3,4].map(()=>{
            count ++
             return(
              <div className='w-full flex items-center space-x-8'>
                <h5 className='text-slate-600 font-light'>Compliance {count}</h5>
                <AiOutlineCheck 
                  className='text-green-500'
                />

              </div>
             )
          })

          }
            

        </div>
        <div className='flex space-x-3 py-9'>
            <h5 className='text-green-600 hover:text-green-300' 
              onClick={()=>setChoice(true)}>
              Accept
              </h5>
            <h5 className='text-red-600 hover:text-red-300'
               onClick={()=>setChoice(false)}
             >
              Reject
              </h5>

         </div>

     </div>
  )
}
