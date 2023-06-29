import React from 'react'
import { IoNotificationsOutline} from "react-icons/io5"
import CreatePost from '../components/CreatePost'
import PostCard from '../components/Post'

export default function Overview() {
  return (
    <div className='flex w-full justify-between space-x-10'>
        <div className='w-3/5 flex flex-col space-y-6'>
            <div className='shadow-lg rounded-lg h-96 px-4 py-4'>
                <h5 className='text-lg font-semibold text-slate-600'>Performance</h5>

            </div>
            <div className='shadow-lg rounded-lg h-96 px-4 py-4'>
                <div className='flex items-center w-full justify-between'>
                    <h5 className='text-lg font-semibold text-slate-600'>Latest News</h5>
                    <h5 className='text-sm font-semibold text-green-600'>View All</h5>
                </div>
                <div className='flex flex-col space-y-4 overflow-y-scroll h-72 py-4'>
                            {[1,2,3,4,5].map(()=>{
                                 return(
                                <div className='flex items-center border-b border-slate-100 w-full justify-between py-2 space-x-4'>
                                     <div className='flex items-center justify-center px-1 rounded-lg bg-slate-600 h-28 w-1/4'>
                                
                                      </div>
                                    <div className='flex flex-col w-3/4'>
                                        <p className='text-slate-600 font-light '>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                            numquam blanditiis

                                        </p>
                                        <h5 className='text-xs font-semibold text-slate-600'>4min ago</h5>
                                    </div>
                                      
                                    
                                </div>
                                  )
                            })

                            }

                 </div>

            </div>
            <div>
                <CreatePost />

            </div>
            <div className='flex flex-col space-y-6 overflow-y-scroll py-8 h-full ' >
                {[1,2,3,4].map((post)=>{
                     return(
                       <PostCard  />
                      )
                    })
                 }
            </div>

        </div>
        <div className='w-2/5'>
                 <div className='shadow-lg rounded-lg px-4 py-10 min-h-min'>
                        <h5 className='text-lg font-semibold text-slate-600'>About Tesla Motors,inc.  </h5>
                        <p className='text-sm font-light text-slate-600 py-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas   velsint commodi repudiandae consequuntur voluptatum ....
                                <span className='text-green-500 font-semibold'>Show more </span>

                        </p>
                        <h5 className='border w-full border-slate-100'></h5>

                    </div>
                    <div className='shadow-lg rounded-lg  px-4 py-8 w-1/2'>
                        <div className='flex items-center w-full justify-between'>
                            <h5 className='text-lg font-semibold text-slate-600'>Upcoming earnings</h5>
                        </div>
                        <div className='flex w-full items-center justify-center py-2'>
                            <div className='flex flex-col items-center border-r-2 px-8 '>
                                <h5 className='text-4xl font-semibold'>19</h5>
                                <h5 className='text-sm font-semibold'>Jul</h5>

                            </div>
                            <div className='flex px-8'>
                                <IoNotificationsOutline
                                  className='text-4xl font-extralight'
                                 />

                            </div>

                        </div>

                    </div>
                    <div className='shadow-lg rounded-lg  px-4 py-8 w-full '>
                        <div className='flex items-center w-full justify-between'>
                            <h5 className='text-lg font-semibold text-slate-600'>People also invest in</h5>
                        </div>
                         <div className='flex flex-col space-y-4 overflow-y-scroll h-72 py-4'>
                            {[1,2,3,4,5].map(()=>{
                                 return(
                                <div className='flex items-center border-b border-slate-100 w-full justify-between py-2'>
                                     <div className='flex items-center justify-center px-1 rounded-lg bg-slate-600 h-14 w-20'>
                                       <h5 className='text-xs font-semibold text-white '>TESLA</h5>
                                      </div>
                                      <button className='border border-green-500 py-1 px-4 text-green-500 rounded-full text-sm'>
                                        Invest
                                      </button>
                                      
                                    
                                </div>
                                  )
                            })

                            }

                         </div>

                    </div>

        </div>

    </div>
  )
}
