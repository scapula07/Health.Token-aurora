import { collection, onSnapshot, doc, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../../../firebase';


export const daoProposals = {
  
    getAllProposals: async function () {
         
        const q = query(collection(db, "proposals"));
        const list = []
          try{
            const querySnapshot = await getDocs(q);
            querySnapshot.docs.map((doc) => {
                list.push({ ...doc.data(), id: doc.id })
              
            })
            return list

            }catch(e){
            console.log(e)
            }
    
         },

     
  }

