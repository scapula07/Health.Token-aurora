import React,{useState} from 'react'
import Modal from '../../../../components/Modal'
import {AiOutlineClose} from "react-icons/ai"
import { ScaleLoader } from 'react-spinners'
import { useEffect } from 'react'
import Web3 from "web3";

export default function OrderBook({orders,acceptBuyOrder,acceptSellOrder,trigger,setTrigger, cohort}) {
    const web3 = new Web3(window.ethereum)
    const [orderType,setType]=useState("buy")
    const [order,setOrder]=useState()
    const [sellOrders,setSales]=useState([])
    const [buyOrders,setPurchase]=useState([])
    const takeOrder=(type,order)=>{
        
        setType()
        setTrigger(true) 
        setOrder(order)
     }
     useEffect(()=>{
        const buys = orders?.filter(order=> order.orderType=="buy");
        const sales = orders?.filter(order=> order.orderType=="sell");
        console.log(sales)
        setPurchase(buys)
        setSales(sales)

     },[])
     console.log(sellOrders)
  return (
    <>
    <div className=''>
        <div className='flex border py-1 px-4'>
            <h5 className='text-sm font-semibold text-slate-600'>Order book</h5>
         </div>
         <div className='flex flex-col py-2 px-4 space-y-1'>
            <div className='flex items-center justify-between text-sm'>
                <h5>Cohort Id</h5>
                <h5>Units</h5>
                <h5>Price</h5>
             </div>

             {sellOrders?.map((sellOrder)=>{
                console.log(sellOrder)
                const amount =web3.utils.fromWei(sellOrder?.amount?.toString(), "ether")
               
                
                return(
                <div className='flex items-center justify-between  text-xs font-semibold text-red-500 hover:bg-slate-100 px-2 py-1'
                   onClick={()=>takeOrder("buy",sellOrder)}
                 >
                    <h5> { cohort?.case + "" + sellOrder?.item?.tokenId?.toString()} </h5>
                    <h5>1</h5>
                    <h5>{amount} $ETH</h5>
                </div>
                    )
             })

             }
              {sellOrders?.length ==0&& <h5 className='text-center w-full text-xs font-semibold text-slate-500'>No buy orders</h5>

                 } 
             <h5 className='border-4 border-slate-100 w-full px-4'></h5>
                  {buyOrders?.map((buyOrder)=>{
                     const amount =web3.utils.fromWei(buyOrder?.amount?.toString(), "ether")
               
                            return(
                             <div className='flex items-center justify-between text-xs font-semibold text-green-500'
                             onClick={()=>takeOrder("sell",buyOrder)}
                             >
                                <h5> { cohort?.case + "" + buyOrder?.item?.tokenId?.toString()} </h5>
                                <h5>1</h5>
                                <h5>{amount} $ETH</h5>
                              </div>
                                )
                            })

                      }
                    {buyOrders?.length ==0&& <h5 className='text-center w-full text-xs font-semibold text-slate-500'>No buy orders</h5>

                    }

         </div>

    </div>
    <Modal trigger={trigger}  cname="w-1/2 rounded-sm py-4  px-4" >
         <div className=''>
               <div className='flex w-full justify-center'>
                 <button onClick={()=>setTrigger(false)}><AiOutlineClose className="text-2xl font-thin text-slate-500" /></button>
              </div>
              {orderType ==="buy"?
                <div className='flex flex-col py-8'>
                     <div className='flex items-center'>
                        <h5> { cohort?.case + "" + order?.item?.tokenId?.toString()} </h5>
                        <h5> { order?.amount?.toString()} </h5>
                     </div>
                     <div className='flex justify-center'>
                        <button 
                         className='bg-green-500 text-white px-6 py-1 rounded-lg'
                          onClick={acceptBuyOrder}>
                            Accept Order
                            </button>
                           
                     </div>


                </div>
                :
                <div className='flex flex-col'>
                    <div className='text-black'>
                        {order}
                     </div>
                    <div className='flex justify-center'>
                    <button 
                        className='bg-green-500 text-white px-6 py-1 rounded-lg'
                        onClick={acceptSellOrder}>
                            Accept Order
                        </button>
                        
                    </div>


           </div>

              }

        </div>

    </Modal>
    </>
  )
}
