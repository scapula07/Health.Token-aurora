import React,{useState,useRef} from 'react'
import {AiOutlineUpload} from "react-icons/ai"
import { upload } from '../../_api/uploadToIpfs';
import medicalImg from "../../../../assets/medical_record.png"
import toast, { Toaster } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners'



export default function Upload({setUrl,ipfsUrl}) {
    const [dir, setDir] = useState();
    const [loading,setLoading]=useState(false)
   
    const hiddenFileInput = useRef()

    const handleClick = event => {
        // event.preventDefault()
        hiddenFileInput.current.click()
    }

      const handleChange = e => {
          const dir = e.target.files
          console.log(dir,"dir")
        //   if (fileUploaded) {
        //      setFile({
        //         src: URL.createObjectURL(fileUploaded)
        //       })
        //   }
        setDir(dir)
    }
    const uploadToIpfs=async()=>{
        setLoading(true)
        try{
        const res =await upload.toIpfs(dir)
        console.log(res.data.IpfsHash)
        setUrl(`https://gateway.pinata.cloud/ipfs/${res?.data?.IpfsHash}`)
        toast.success("Folder uploaded to IPFS")
        setLoading(false)
        }catch(e){
            console.log(e)
            setLoading(false)
        }
    }
    console.log(ipfsUrl)
  return (
    <div className='flex flex-col py-6'>
        <h5 className='text-black font-semibold text-sm py-2'>Upload file</h5>
        <div className='border flex flex-col items-center space-y-4 py-8'>
        {dir?.length >0?
             <img
                 src={medicalImg}
                  className="h-44"
             />
             :
             <>
             <AiOutlineUpload
               className='text-5xl font-extralight'
              />
                 <input 
                    className='hidden'
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    directory=""
                    webkitdirectory=""
                     //multiple
                />
                </>
        }
            {dir?.length >0?

                <button className='bg-green-500 px-6 py-3 rounded-lg text-white text-sm'
                  onClick={uploadToIpfs}
                >
                 {loading?
                    <ScaleLoader color='white'/>
                    :
                    <>
                    {ipfsUrl?.length===0?
                        "Submit"
                        :
                        "Done"
                    }
                    </>
                  }
                </button>
                     :
             
                <button className='bg-green-500 px-6 py-3 rounded-lg text-white text-sm'
                   onClick={handleClick}
                >Upload folder</button>

            }
          


        </div>

    </div>
  )
}
