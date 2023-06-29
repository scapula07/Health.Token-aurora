import React,{useState,useEffect} from 'react'
import Upload from '../components/upload'
import Inputs from '../components/paramInputs'
import Web3 from "web3";
import contractAbi from "../../../ABI/dataCohortNft.json"
import { AccountState } from '../../../recoil/globalState';
import { useRecoilValue } from 'recoil';
import Modal from '../../../components/Modal';
import {AiOutlineClose } from "react-icons/ai"
import { contractEvents } from '../utils';
import success from "../../../assets/success.png"
import { nftCollection } from '../_api';
import { ScaleLoader } from 'react-spinners'



const contractAddress="0xeb8a5b71Fa5cA86fB472D111D1aBD2d779933D70"
const marketPlaceAddress="0xc836f2B5921E31bF73D61850d33d56bB9045E67F"

export default function CreateView() {

    const web3 = new Web3(window.ethereum)
    const account=useRecoilValue(AccountState)
    const [ipfsUrl,setUrl]=useState("")
    const [tokenId,setTokenId]=useState(1)
    const [cohort,setCohort]=useState(cohorts[0])
    const [itemName,setName]=useState()
    const [approved,setApproved]=useState(false)
    const [itemDescription,setDescription]=useState()
    const [loading,setLoading]=useState(false)


    const [trigger,setTrigger] =useState(false)

    // useEffect(()=>{
    //     contractEvents()

    // },[])
    
    console.log(cohort,"vvv")
    const nftCollectionContract = new web3.eth.Contract(
        contractAbi,
        cohort?.address
        // contractAddress
      )
  
  
      const list=async()=>{
        setLoading(true)
          try{
             const tx = await nftCollectionContract.methods.safeMint(ipfsUrl).send({from:account})
              console.log(tx,"tx")
              tx?.blockHash?.length>0 && setTrigger(true)
             const data={
                itemName,
                itemDescription,
                owner:account,
                date:new Date(),
                cohort:cohort?.name,
                tokenId
              }
              console.log(data,"dd")
              nftCollection.addToken(data)
             setLoading(false)
              
            }catch(e){
                setLoading(false)
                console.log(e)
            }

       }
       const approveToken=async()=>{
        setLoading(true)
        try{
          const tx = await nftCollectionContract.methods.approve(marketPlaceAddress,tokenId).send({from:account})
           console.log(tx,"tx")
           tx?.blockHash?.length >0 && setApproved(true)
          
           setLoading(false)
            
          }catch(e){
             setLoading(false)
              console.log(e)
          }

     }
      
  return (
    <>
    <div className='py-8'>
        <h5 className='text-xl font-semibold '>List Data</h5>
        <Upload setUrl={setUrl}
          ipfsUrl={ipfsUrl}
        />
        <Inputs 
          setName={setName}
          itemName={itemName}
          itemDescription={itemDescription}
          setDescription={setDescription}
          list={list}
          setCohort={setCohort}
          cohort={cohort}
          cohorts={cohorts}
          loading={loading}
          setLoading={setLoading}
          />


    </div>

       <Modal trigger={trigger}  cname="w-1/2 rounded-sm py-4  px-4" >
         <div className=''>
              <div className='flex w-full justify-center'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-2xl font-thin text-slate-500" /></button>
              </div>
              {

              }
              {approved?
             <div className='flex flex-col items-center space-y-6 py-8'>
                <img 
                  src={success}
                />
                <h5 className='text-xl font-semibold'>Tokenization process completed</h5>

            </div>
                :
              <div className='flex flex-col items-center'>
                      <div className='py-4'>
                          <h5 className='font-semibold text-xl '>Approve NFT Token for Market place</h5>
                          <div className='flex justify-center py-4'>
                              <button className='bg-green-500 text-white rounded-lg py-2 px-6'
                                onClick={approveToken}
                               >
                                 {loading?
                                    <ScaleLoader color='white'/>
                                    :
                                    "Proceed"
                                    }
                              
                               </button>

                          </div>

                      </div>

             </div>
           }
             
         </div>

      </Modal>
    </>
  )
}


export const cohorts =[
    { 
      name:"Cancer",
      address:"0xcf65c3228df81f011Ccf71C6a51C32f27361E1fe"

    },
    { 
        name:"Infections",
        address:"0x5D4E781494173b8BbDaD9C534d088cAB531b0037"
  
      },
      { 
        name:"Paediatrics health",
        address:"0x95D5796e361927fF9732d43F18280645853fA90f"
  
      },
      { 
        name:"Mental health",
        address:"0x5A5d64b2Ae3cEd13b38A79f3a40a912Bbd2e8017"
  
      }
]