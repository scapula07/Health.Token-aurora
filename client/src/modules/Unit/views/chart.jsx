import React from 'react'
import { IoReturnUpBack } from 'react-icons/io5'
import {IoNotifications} from "react-icons/io5"
import Chart from "react-apexcharts";

const TopSection=()=>{
   return(
    <div className='w-full flex items-center justify-between space-x-6'>
        <div className='flex space-x-3'>
            <select className='text-sm font-semibold text-slate-600 border py-1 px-4'>
                <option>Candles</option>
                <option>Lines</option>
                <option>Bar</option>
            </select>
            <div className='flex items-center space-x-6 border py-1 px-6 text-sm'>
                <h5>Timeframes</h5>
                <h5>1M</h5>
                <h5>1W</h5>
                <h5>1D</h5>

            </div>


        </div>
        <div className='flex items-center space-x-2'>
            <select className='text-sm font-semibold text-slate-600 border py-1 px-4'>
                 <option>Indicators</option>
                  <option>Lines</option>
                  <option>Bar</option>
             </select>
             <select className='text-sm font-semibold text-slate-600 border py-1 px-4'>
                 <option>Overlays</option>
                  <option>Lines</option>
                  <option>Bar</option>
             </select>
             <IoNotifications 
                className="text-2xl font-semibold text-slate-700"
              />
        </div>

    </div>
   )
}

export default function Charts() {


    const options= {
          chart: {
            id: ""
          }
        }
    //    const  series= [
    //       {
    //         name: "series-1",
    //         data: [30, 40, 45, 50, 49, 60, 70, 91]
    //       }
    //     ]
      
   const series=[{
    data: [
      [1538856000000, 6593.34, 6600, 6582.63, 6600], 
      [1538856900000, 6595.16, 6604.76, 6590.73, 6593.86],
      [1538857000000, 6595.16, 6604.76, 6590.73, 6593.86]
    ]
    }]
      
  return (
    <div className='flex flex-col w-full items-center '>
        <TopSection />
        <div className='w-full h-96'>
           <Chart
              options={options}
              series={series}
              type="candlestick"
              width="100%"
              height="100%"
            />

        </div>

    </div>
  )
}
