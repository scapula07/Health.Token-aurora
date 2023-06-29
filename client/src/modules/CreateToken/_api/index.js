import { collection, setDoc,doc,getDoc,addDoc} from  'firebase/firestore'
import { db } from '../../../firebase'
import toast, { Toaster } from 'react-hot-toast';


export const nftCollection = {
    addToken: async function (data) {
        try{
            const docRef = await addDoc(collection(db, "collections"), {data});
            toast.success("NFT added to cohort")
             
        }catch(e){
            console.log(e)
        }
    }
}