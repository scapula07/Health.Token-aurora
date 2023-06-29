import React,{useState,useEffect} from 'react'
import Chart from './chart'
import OrderBook from './orderBook'
import Buy from './buy'
import Sell from './sell'
import Web3 from "web3";
import { AccountState } from '../../../../recoil/globalState'
import { useRecoilValue } from 'recoil';
import contractAbi from "../../../../ABI/orderbookMarket.json"
import Modal from '../../../../components/Modal'
import toast, { Toaster } from 'react-hot-toast';
import { useOutletContext } from "react-router-dom";
import { ScaleLoader } from 'react-spinners'

const contractAddress="0xc836f2B5921E31bF73D61850d33d56bB9045E67F"


export default function Trading() {

    const web3 = new Web3(window.ethereum)
    const account=useRecoilValue(AccountState)
    const [cohort]= useOutletContext();
    const [amount,setAmount] =useState()
    const [tokenId,setToken] =useState()
    const [orderId,setOrderId] =useState()
    const [trigger,setTrigger]=useState(false)
    const [loading,setLoading]=useState(false)
     
    const [orders,setOrder] =useState()
    const [sellOrders,setSales]=useState([])
    const [buyOrders,setPurchase]=useState([])

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    const orderBookContract = new web3.eth.Contract(
        contractAbi,
        contractAddress
      )
    useEffect(()=>{
        const getOrders=async()=>{
            try{
                const txs = await orderBookContract.methods.getTotalOrder().call({})
                const result = txs.filter(tx=> tx.cohort===cohort?.address);
                const buys = result?.filter(order=> order.orderType=="buy");
                const sales = result?.filter(order=> order.orderType=="sell");
                // console.log(result,"ccco")
                setPurchase(buys)
                setSales(sales)
                setOrder(result)
                }catch(e){
                    console.log(e)
                }

            }
          getOrders()
      })

      const placeBuyOrder=async()=>{
        setLoading(true)
        try{
            const _amount=web3.utils.toWei(amount.toString(),'ether')
            console.log(_amount)
            const txs = await orderBookContract.methods.createBuyOrder(cohort?.address,_amount).send({from:account,value:_amount})
             console.log(txs)
             txs?.blockHash?.length >0 && toast.success("Buy order placed")
             setLoading(false)
            }catch(e){
                setLoading(false)
                console.log(e)
            }
         
      }
      const placeSellOrder=async()=>{
        setLoading(true)
          try{
            const _amount=web3.utils.toWei(amount.toString(),'ether')
            const txs = await orderBookContract.methods.createSellOrder(cohort?.address,tokenId,_amount).send({from:account})
             console.log(txs)
             toast.success("Sell order placed")
             setLoading(false)
            }catch(e){
                setLoading(false)
                console.log(e)
            }

      }
      const acceptBuyOrder=async(orderId)=>{
        setLoading(true)
        try{
           const txs1 = await orderBookContract.methods.acceptBuyOrder(Number(orderId.toString()),cohort?.address,tokenId).send({from:account})
           console.log(txs1)
           sleep(30000)
           const txs2 = await orderBookContract.methods.completeOrder(Number(orderId.toString())).send({from:account})
           console.log(txs1)
           setLoading(false)
           toast.success("Order accepted")
          }catch(e){
              console.log(e)
          }

     }
   const acceptSellOrder=async(orderId)=>{
    console.log(Number(orderId.toString()),"idd")
    setLoading(true)
        try{
           const txs1 = await orderBookContract.methods.acceptSellOrder(Number(orderId.toString())).send({from:account})
           console.log(txs1)
           sleep(30000)
           const txs2 = await orderBookContract.methods.completeOrder(Number(orderId.toString())).send({from:account})
           console.log(txs1)
           setLoading(false)
           toast.success("Order accepted")
          }catch(e){
            setLoading(false)
              console.log(e)
          }

     }
     const releasePaymentSellOrder=async()=>{
        try{
           const txs = await orderBookContract.methods.releasePaymentSellOrder(orderId).send({from:account})
           console.log(txs)
          
          }catch(e){
              console.log(e)
          }

     }
     const releasePaymentBuyOrder=async()=>{
        try{
           const txs = await orderBookContract.methods.releasePaymentBuyOrder(orderId,tokenId).send({from:account})
           console.log(txs)
          
          }catch(e){
              console.log(e)
          }

     }
  return (
    <>
    <div className='flex w-full py-4 space-x-8'>
         <div className='w-1/2'>
            <Chart />

        </div>
         <div className='w-1/2 flex space-x-4 '>
            <div className='w-1/2'>
               <OrderBook 
                 orders={orders}
                 acceptBuyOrder={acceptBuyOrder}
                 acceptSellOrder={acceptSellOrder}
                 trigger={trigger}
                 setTrigger={setTrigger}
                 cohort={cohort}
                 sellOrders={sellOrders}
                 buyOrders={buyOrders}
                 loading={loading}
                />
            </div>
           
            <div className='flex flex-col w-1/2 space-y-7'>
                <Buy 
                    placeBuyOrder={placeBuyOrder}
                    releasePaymentBuyOrder={releasePaymentBuyOrder}
                    amount={amount}
                    setAmount={setAmount}
                    loading={loading}
                    setLoading={setLoading}
                   
                 /> 
                <Sell 
                    placeSellOrder={placeSellOrder}
                    releasePaymentSellOrder={releasePaymentSellOrder}
                    amount={amount}
                    setAmount={setAmount}
                    loading={loading}
                    setLoading={setLoading}
                    tokenId={tokenId}
                    setToken={setToken}
                    cohort={cohort}
                    
                />


            </div>

        </div>

    </div>
   
    </>
  )
}
