import React ,{useState} from 'react'
import {BsThreeDots,BsDot,BsFillShareFill,BsChat,BsEmojiSmile} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {TfiLayoutMediaOverlayAlt} from "react-icons/tfi"
import {MdSend} from "react-icons/md"


export default function PostCard({user,post}) {
    console.log(post,"pp")
     const [likeCount,setLike]=useState(0)
     const likePost=async()=>{
        setLike(likeCount + 1)
     }
   

  return (
     <div className='w-full bg-white flex flex-col space-y-4 rounded-lg py-8 px-8 shadow-lg '>
         <div className='flex items-center justify-between w-full'>
            <div className='flex items-center space-x-4'>
                  {post?.user?.profile_picture?
                    <img 
                       src={post?.user?.profile_picture}
                       className="h-6 w-6 rounded-full"
                   />
                   :
                   <h5 className='rounded-full p-2 bg-green-600 text-sm text-white flex items-center justify-center w-8 h-8 '>
                      B

                   </h5>

                  }
                    
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-1'>
                        <h5 className='font-semibold text-lg text-slate-700 '>Scapula</h5>
                        <BsDot className='text-xl text-slate-500'/>
                        <h5 className='text-xs text-slate-500'>11 mins ago</h5>

                        </div>
                    
                        {/* <h5 className='text-xs  text-slate-400'>
                            {post?.user?.course_of_study}
                        </h5> */}

                    </div>


                </div>
                <BsThreeDots className='text-lg font-semibold'/>


            </div>
            <div className='flex flex-col px-8 py-4'>
              
                  
                    <div className='flex flex-col'> 
                 
                         {/* <img src= {""} 
                           className="h-56 rounded-lg"
                          /> */}
                      
                        <p className='text-slate-500 text-sm font-semibold px-4'> 
                          Tesla is great
                        </p>
                    </div>
               
                    
            </div>

            <div className='flex flex-col space-y-4 '>
                <div className='flex items-center justify-between'>
                    <h5></h5>
                    <div className='flex items-center space-x-8'>
                        {[
                            { count:likeCount,
                               name:"likes"
                            },
                            { count:0,
                            name:"Comments"
                            },
                            { count:0,
                                name:"Reposts"
                            }
                        ].map((prop)=>{
                            return(
                                <h5 className='text-slate-500 hover:text-slate-800 text-xs font-light'>{prop?.count } {prop?.name}</h5>
                                    )
                                })
                        }
                     </div>


                  </div>
                   <div className='flex items-center space-x-4'>
                            <AiOutlineHeart
                            className='text-lg hover:text-2xl  font-bold text-slate-600 hover:text-slate-800'
                            onClick={likePost}
                            />
                            <BsFillShareFill 
                               className='text-lg hover:text-2xl  font-bold text-slate-600 hover:text-slate-800'
                            />
                            <BsChat 
                               className='text-lg hover:text-2xl  font-bold text-slate-600 hover:text-slate-800'
                            />
 
                   </div>
                   <div className='flex items-center justify-between'>
                      <div className='flex items-center space-x-6 '>
                         <img 
                            src={""}
                           className='w-5 w-5 rounded-full'/>
                         <textarea 
                            placeholder='Write a comment...'
                            className='outline-none border-0 text-slate-600 w-full text-sm'
                         />
                        
                      </div>
                      <div className='flex items-center space-x-4'>
                          <TfiLayoutMediaOverlayAlt
                             className='text-lg hover:text-2xl  font-bold text-slate-600 hover:text-slate-800'
                             />
                           <BsEmojiSmile
                            className='text-lg hover:text-2xl  font-bold text-slate-600 hover:text-slate-800'
                             />
                           <h5 className='bg-slate-200 rounded-lg p-2 flex items-center justify-center'>
                             <MdSend 
                              className='text-green-500 text-lg '
                             />
                          </h5>


                      </div>

                   </div>
                
            </div>


      </div>
  )
}
