import axios from "axios";

const apiKey =  "3813aad7e7c3468e4710";
const apiSecret = "ee8a5ade4f605b07264b37c1c7d959ec9c953d8589df610bd50f9145688b71f2";

export const upload = {
    toIpfs: async function (files) {
      const url=`https://api.pinata.cloud/pinning/pinFileToIPFS`
      const config = {
        headers:{
            "Content-Type": "multipart/form-data",
            pinata_api_key: apiKey,
            pinata_secret_api_key: apiSecret,
          },
           };
      
      try{
        let data = new FormData();
        for (const file of files) {
          data.append(`file`, file);
        }  

       const response= await axios.post(
          url,
          data,
          config,
          
          )
        // .on('uploadProgress', progress => {
        // console.log(progress);
        // });
        // console.log(JSON.parse(response.body));
        return response;
       }catch(e){
         console.log(e)
         }
 
     },

   
  }