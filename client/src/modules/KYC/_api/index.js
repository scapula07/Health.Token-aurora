import axios from "axios";
import { collection, setDoc,doc,getDoc,addDoc} from  'firebase/firestore'
import { db } from '../../../firebase'
import toast, { Toaster } from 'react-hot-toast';

export const zKyc = {
    upload: async function (file) {
        console.log(file,"zzz")
      const url=`http://localhost:3002/api/v1/kyc/kyc-upload`
    // const url=`http://localhost:3002/upload`
      const config = {
        headers:{
            "Content-Type": "multipart/form-data",
           },
           };
      
      try{
        const data = new FormData();
        data.append('file', file);
      
        

        const response= await axios.post(
            url,
            data,
            config,
          
          )
        return response;
       }catch(e){
         console.log(e)
         }
 
     },
     verify: async function (data) {
        
      const url=`http://localhost:3002/api/v1/kyc/kyc-verify`
      const config = {
        headers:{
            'Content-Type': 'application/json',
           },
           };
      
      try{
        const response= await axios.post(
            url,
            data,
            config,
          
          )
        return response;
       }catch(e){
         console.log(e)
         }
 
     },
     addProposal: async function (data) {
      try{
          const docRef = await addDoc(collection(db, "proposals"), {data});
          toast.success("Proposal added to cohort")
           
      }catch(e){
          console.log(e)
      }
  }
   
  }