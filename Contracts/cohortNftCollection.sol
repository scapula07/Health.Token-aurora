// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts@4.6.0/utils/Counters.sol";

contract HealthDataNftCollection is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;


    Counters.Counter private _tokenIdCounter;

 

        constructor() ERC721("Health Infections Record NFT ", "HRN") { }

   function safeMint( string memory ipfsUrl)
        public
        onlyOwner
        { 
            _tokenIdCounter.increment();
            uint256 tokenId = _tokenIdCounter.current();
        
            _safeMint(msg.sender, tokenId);
            _setTokenURI(tokenId,ipfsUrl);
           
        }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
        }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }


    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

  
   function buyShares(uint256 _sharesToBuy) external {}
   function sellShares(uint256 _sharesToSell) external {}



}