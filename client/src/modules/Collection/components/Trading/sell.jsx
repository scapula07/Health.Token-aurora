import React from 'react'
import { ScaleLoader } from 'react-spinners'

export default function Sell({ placeSellOrder,amount,setAmount,loading,setLoading,setToken,tokenId,}) {
    return (
      <div className='w-full border px-4 py-4'>
          <div className='flex items-center '>
             <h5 className='text-sm font-semibold'>Sell</h5>
          </div>
          <div className='flex flex-col py-4 space-y-5'>
              {/* <select className='border w-1/2 text-sm font-semibold py-1 px-2'>
                  <option>Cohort</option>
              </select> */}
              <div className='flex items-center space-x-4'>
                  <h5 className='text-sm'>Token</h5>
                  <div className='flex border items-center py-1 space-x-6 w-full justify-between px-4 rounded-sm'>
                      <h5 className='bg-slate-100 flex items-center justify-center rounded-sm p-2'>
                         <span className='bg-red-500 w-2 h-2 rounded-full '>
  
                         </span>
                      </h5>
                     <input 
                       placeholder='NFT ID'
                       className=' w-full text-xs px-2'
                       value={tokenId}
                       onChange={(e)=>setToken(e.target.value)}
                      />
                  </div>
               </div>
               <div className='flex items-center space-x-4'>
                      <h5 className='text-sm'>Price</h5>
                      <div className='flex border items-center py-1 space-x-6 w-full justify-between px-4 rounded-sm'>
                          <h5 className='bg-slate-100 flex items-center justify-center rounded-sm p-2'>
                          <span className='bg-red-500 w-2 h-2 rounded-full '>
  
                          </span>
                          </h5>
                      <input 
                          placeholder='Amount'
                          className=' w-full text-xs px-2'
                          value={amount}
                          onChange={(e)=>setAmount(e.target.value)}
                          />
                      </div>
              </div>
              <div className='flex items-center space-x-4'>
                      <h5></h5>
                      <div className='flex flex-col w-full space-y-2'>
                              <h5 className='w-full flex justify-between'>
                                  <span>Fee</span>
                                  <span>0.004</span>
  
                              </h5>
                              <button className='bg-red-500 text-white rounded-md py-1'
                               onClick={placeSellOrder}
                              >
                              {loading?
                                    <ScaleLoader color='white'/>
                                    :
                                       "Sell"
                                    }
                              
  
                              </button>
                       </div>
              </div>
              
              
          </div>
  
      </div>
    )
  }
  