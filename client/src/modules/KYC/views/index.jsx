import React ,{useState,useRef} from 'react'
import {AiOutlineUpload} from "react-icons/ai"
import {ImUpload} from "react-icons/im"
import { zKyc } from '../_api';
import toast, { Toaster } from 'react-hot-toast';
import {RiArrowDropDownLine} from "react-icons/ri"
import { AccountState } from '../../../recoil/globalState';
import { useRecoilValue } from 'recoil';
import Web3 from "web3";
import contractAbi from "../../../ABI/kycDao.json"


const contractAddress="0x5Ff00052c0553bE462298761b20E113B157bd6b0"


export default function KYCView() {
    const web3 = new Web3(window.ethereum)
    const [file, setFile] = useState();
    const [fileUrl, setUrl] = useState();
    const [date, setDate] = useState();
    const [verification, setVerification] = useState("");
    const [proposal,setProposal] =useState()
    const hiddenFileInput = useRef()
    const account=useRecoilValue(AccountState)
    

    const kycDaoContract = new web3.eth.Contract(
      contractAbi,
      contractAddress
    )

    const handleClick = event => {
        // event.preventDefault()
        hiddenFileInput.current.click()
    }

      const handleChange = async(e)=> {
          const dir = e.target.files[0]
          console.log(dir,"dir")
          if (dir) {
            setUrl({
                src: URL.createObjectURL(dir)
              })
          }
        setFile(dir)
        const res =await zKyc.upload(dir)
        setDate(res?.data?.age)
    }
    const verify=async()=>{
        const res =await zKyc.verify({dateString:date})
        setVerification(res?.data?.proof)
        toast.success(res?.data?.proof)
        
    }

    const submitProposal=async()=>{
      
      try{
         const txs = await kycDaoContract.methods.submitProposal(proposal,true).send({from:account})
          console.log(txs)
         toast.success("Proposal submitted")
        
         
        }catch(e){
          console.log(e)
        }

      }
  return (
    <div className='py-8 h-full'>
        <div className='flex justify-center w-full flex-col items-center h-full space-y-10'>
            <div className='flex items-center space-x-8 '>
                <h5 className='text-xl font-semibold text-slate-600'>Who are you</h5>
                <select className='border px-4 rounded-md font-semibold py-2'>
                    <option>Data provider</option>
                    <option>Investor</option>
                    <option>Buyer</option>

                </select>

            </div>
            <div className='flex flex-col py-8  items-center space-y-6'>
            {verification?.length == 0&&
               <>
                <h5 className='text-xl font-semibold text-slate-600 '>Upload ID for verification </h5>
                <div className='h-44 w-96 border rounded-lg  border-dashed flex items-center justify-center'>
                    {  fileUrl?.src ? 
                          <img src={fileUrl?.src} alt="" className='w-1/2 ' />

                          :
                        <>
                            <ImUpload
                              className='text-2xl '
                            />
                           <input
                                type="file"
                                ref={hiddenFileInput}
                                onChange={handleChange}
                                className="hidden"
                        />
                        </>
                        
                    }
                   

                     </div>
                </>
                 }
                {verification?.length > 0 && verification ==="Verification OK"?
                     <div className='flex flex-col w-1/2'>
                     <h5 className='text-xl font-semibold'>{verification}</h5>
                     <div className='flex flex-col shadow-lg'>
                          <div className='flex  justify-between space-x-20  py-8 px-4 '>
                              <h5 className='text-xl font-semibold'>Submit proposal for KYC Verification</h5>
                                <RiArrowDropDownLine 
                                  className='text-4xl font-light'
                                 />
                            </div>

                            <div className='flex flex-col px-4 py-4'>
                                 <p className=''>Proposals will be reveiwed and voted on every voting period(14 days interval) by members of the DAO,after each a user will be granted access to trade on the platform  </p>

                                 <div className='flex flex-col py-4 space-y-8'>
                                   <textarea 
                                     className='border py-2 px-2 text-sm'
                                      placeholder='Write your proposal '
                                   />

                                   <button className='bg-green-500 text-white rounded-lg py-2'
                                    onClick={submitProposal}
                                    >Submit </button>
                                 </div>
                            </div>
                     </div>


                 </div>
                  :

                    <>
                      { fileUrl?.src ? 
                            <button className='bg-green-600 py-2 px-6 text-white rounded-md text-sm'
                            onClick={verify}
                            >
                                Verify
                        </button>
                            :
                        <button className='bg-green-600 py-2 px-6 text-white rounded-md text-sm'
                            onClick={handleClick}
                        >
                            Upload
                        </button>

                       }
                    </>
                      
                  
              
                   }
                

            </div>

        </div>

    </div>
  )
}
