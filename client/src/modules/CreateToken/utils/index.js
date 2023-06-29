import  { ethers } from 'ethers'
import contractABI from "../../../ABI/dataCohortNft.json"

const provider = new ethers.providers.Web3Provider(window.ethereum)


const contractAddress = "0xeb8a5b71Fa5cA86fB472D111D1aBD2d779933D70";

const contract = new ethers.Contract(contractAddress, contractABI, provider);

const eventName = 'Transfer';


const eventFilter = contract.filters[eventName]();

export const contractEvents=()=>{
       contract.on("Transfer", (from, to, tokenId, event) => {

        console.log('NFT Transfer Event:', event);
      })
      .catch((error) => {
        // Handle any error that occurs during the event listening
        console.error('Error listening to NFT Transfer Event:', error);
      });
      
}

