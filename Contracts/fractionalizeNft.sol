// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import  "./aurora.sol";

contract FractionalNFT {
    using SafeMath for uint256;
      AuroraStNear public auroraMetaPool =AuroraStNear(0x0dF588AabDd4E031f1903326cC0d8E79DFBD3566);

    struct FractionalizedNFT {
        IERC721 nftContract;
        uint256 tokenId;
        uint256 totalShares;
        uint256 sharePrice;
        uint256 totalSharesSold;
        mapping(address => uint256) sharesOwned;
        address[] shareholders;
    }

    FractionalizedNFT public fractionalizedNFT;
    IERC20 public paymentToken;

    event NFTFractionalized(address indexed nftContract, uint256 indexed tokenId, uint256 totalShares);
    event SharesBought(address indexed buyer, uint256 sharesBought);
    event SharesSold(address indexed seller, uint256 sharesSold);

    constructor() {}

    function fractionalizeNFT() external {
        require(fractionalizedNFT.totalSharesSold == 0, "NFT already fractionalized");

        fractionalizedNFT.nftContract.transferFrom(
            msg.sender,
            address(this),
            fractionalizedNFT.tokenId
        );

        fractionalizedNFT.shareholders.push(msg.sender);
        fractionalizedNFT.sharesOwned[msg.sender] = fractionalizedNFT.totalShares;

        emit NFTFractionalized(
            address(fractionalizedNFT.nftContract),
            fractionalizedNFT.tokenId,
            fractionalizedNFT.totalShares
        );
    }

    function buyShares(uint256 _sharesToBuy) payable external {
        require(_sharesToBuy > 0, "Invalid number of shares");

        uint256 sharesAvailable = fractionalizedNFT.totalShares.sub(fractionalizedNFT.totalSharesSold);
        require(_sharesToBuy <= sharesAvailable, "Not enough shares available");

        uint256 totalPrice = fractionalizedNFT.sharePrice.mul(_sharesToBuy);
        require(msg.value >= totalPrice, "Not enough shares available");
       
        payable(address(this)).transfer(msg.value);
        fractionalizedNFT.totalSharesSold = fractionalizedNFT.totalSharesSold.add(_sharesToBuy);
        fractionalizedNFT.sharesOwned[msg.sender] = fractionalizedNFT.sharesOwned[msg.sender].add(_sharesToBuy);

        emit SharesBought(msg.sender, _sharesToBuy);
    }

    function sellShares(uint256 _sharesToSell) external {
        require(_sharesToSell > 0, "Invalid number of shares");
        require(_sharesToSell <= fractionalizedNFT.sharesOwned[msg.sender], "Not enough shares owned");

        uint256 totalPrice = fractionalizedNFT.sharePrice.mul(_sharesToSell);
        fractionalizedNFT.totalSharesSold = fractionalizedNFT.totalSharesSold.sub(_sharesToSell);
        fractionalizedNFT.sharesOwned[msg.sender] = fractionalizedNFT.sharesOwned[msg.sender].sub(_sharesToSell);
        payable(msg.sender).transfer(totalPrice);

        emit SharesSold(msg.sender, _sharesToSell);
    }
}