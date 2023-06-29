import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../../firebase';


export const nftCollection = {
  
    getAllCollections: async function () {
         
        const q = query(collection(db, "collections"));
        const collectionList = []
          try{
            const querySnapshot = await getDocs(q);
            querySnapshot.docs.map((doc) => {
                collectionList.push({ ...doc.data(), id: doc.id })
              
            })
            return collectionList

            }catch(e){
            console.log(e)
            }
    
         },

     
  }

