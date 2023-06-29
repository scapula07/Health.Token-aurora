import React,{useState,useRef} from 'react'
import {TfiLayoutMediaOverlayAlt} from "react-icons/tfi"
import {AiOutlineClose} from "react-icons/ai"
import {BsEmojiSmile} from "react-icons/bs"




export default function CreatePost({user}) {
    const [file, setFile] = useState();
    const [displayEmoji,setEmojiDisplay]=useState(false)
    const [postText,setText]=useState()
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
      setEmojiDisplay(false)
    };

   
    const hiddenFileInput = useRef()

    const handleClick = event => {
        // event.preventDefault()
        hiddenFileInput.current.click()
    }

      const handleChange = e => {
          const fileUploaded = e.target.files[0]
          if (fileUploaded) {
             setFile({
                src: URL.createObjectURL(fileUploaded)
              })
          }
         
      }
      console.log(chosenEmoji,"emmo")

  return (
    <div className='w-full flex flex-col space-y-6 py-6 px-6 rounded-lg shadow-lg bg-white'>
        
        <div className='flex space-x-3'>
             <img 
                src={user?.data?.profile_picture}
                className='h-7 w-7 rounded-full'
                />  
                <textarea 
                     placeholder="What's happening?"
                     className='border-0 outline-none w-1/2 text-sm text-slate-500'
                     value={postText }
                     onChange={(e)=>setText(e.target.value)}
                />
         </div>
            {file&&(
                <div className='flex flex-col px-4 py-2 space-y-2'>
                        <div className='flex justify-end px-8 '>
                            <button onClick={()=>setFile()}><AiOutlineClose className="text-xl text-slate-800 hover:text-2xl" /></button>
                        </div>
                        <img 
                            src={file?.src}
                            className="w-full h-44"
                            />

                </div>
                    )
                }
                
          <div className='flex items-center justify-between'> 
               <div className='flex items-center space-x-8 relative'>
                   {displayEmoji&&(
                    <div className='absolute z-10 top-0'>
                        {/* <Picker onEmojiClick={onEmojiClick} /> */}
                    </div>
                    )}

                    {[
                        { icon:<TfiLayoutMediaOverlayAlt />,
                        name:"Media",
                        click:()=>{
                            handleClick()
                        }
                        },
                        { icon:<BsEmojiSmile />,
                          name:"Feeling",
                          click:()=>{
                            setEmojiDisplay(true)
                        }
                        }
                    ].map((action)=>{
                        return(
                            <div className='flex items-center space-x-3' >
                                <h5  className='text-lg hover:text-2xl  font-bold text-slate-600 hover:text-slate-800'>{action?.icon}</h5>
                                <input 
                                    className='hidden'
                                    type="file"
                                    ref={hiddenFileInput}
                                    onChange={handleChange}
                                />
                                <h5  className='text-sm   font-light text-slate-600 hover:text-slate-800' onClick={action.click}>{action?.name}</h5>
                               
                               

                            </div>
                            
                        )
                     })
                     }
                </div>

             <button className='bg-green-500 text-white rounded-full px-4 py-1 text-sm'>Post</button>

            
          </div>

    </div>
  )
}
