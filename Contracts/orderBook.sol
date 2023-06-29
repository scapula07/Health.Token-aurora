//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;


import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DataMarketplace is ReentrancyGuard,Ownable ,IERC721Receiver {

    // Variables
    address payable public immutable feeAccount; // the account that receives fees
    uint public immutable feePercent; // the fee percentage on sales 
    uint public itemCount; 

    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter private orderId;

    mapping(address => uint) public balancesONE;

    enum OrderState {INITIATED, ACCEPTED, COMPLETED, FUFILLED, CANCELLED, INDISPUTE}
   

    struct Item {
        uint itemId;
        IERC721 nft;
        uint tokenId;
        uint price;
        address payable seller;
        bool sold;
    }

     struct Order{
        address cohort;
        uint256 amount;
        Item item;
        address payable seller;
        address payable buyer;
        uint256 orderId;
        uint128 duration;
        uint256 timeInitiated;
        OrderState state;
        string orderType;
     }
    
       struct PriceData {
            uint256 price;
            uint256 timestamp;
       }
    
    Order[] public order;
    mapping (address => Order) public acceptedOrder;

    mapping(uint => Item) public items;
    mapping(address => PriceData[]) private _priceHistory;

    event Offered(
        uint indexed itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller
    );
    event Bought(
        uint itemId,
        address indexed nft,
        uint tokenId,
        uint price,
        address indexed seller,
        address indexed buyer
    );
    event OrderInitiated(address indexed sender, uint256 amount, uint256 when);
    event OrderAccepted(address indexed sender, address indexed reciever, uint256 amount, uint256 when);
    event OrderCompleted(address indexed sender, address indexed reciever, uint256 amount, uint256 when);
    event OrderFufilled(address indexed sender, address indexed reciever, uint256 amount, uint256 when);
    event OrderCancelled(address indexed sender, uint256 amount, uint256 when);
    event OrderDisputed(address indexed sender, address indexed reciever, uint256 amount, uint256 when);
    event UserCredited(address indexed sender, uint256 amount, uint256 when);


    constructor(uint _feePercent){
        feeAccount = payable(msg.sender);
        feePercent = _feePercent;
    } 

    // Make item to offer on the marketplace
     function _initOrder(uint256 _amount,Item memory item,address _cohort,string memory _orderType ) internal {
            // uint256 value = _amount - mintFee(_amount);
            order.push(
                Order({
                    cohort:_cohort,
                    amount: _amount,
                    item:item,
                    seller: payable(msg.sender),
                    buyer: payable(address(0)),
                    orderId: nextOrderId(),
                    duration: 0,
                    timeInitiated: block.timestamp,
                    state: OrderState.INITIATED,
                    orderType:_orderType
                })
            );
    }


    function createBuyOrder(IERC721 _nft, uint _price) external payable  nonReentrant {
        require(_price > 0, "Price must be greater than zero");
        // require(msg.value == 0, "royalty fee must not be zero");
      
       
       _initOrder(_price, items[0],address(_nft),"buy");
        emit OrderInitiated(msg.sender, _price, block.timestamp);
    }

    function createSellOrder(IERC721 _nft, uint _tokenId, uint _price) external payable  nonReentrant {
        require(_price > 0, "Price must be greater than zero");
        // require(msg.value == 0, "royalty fee must not be zero");
        // increment itemCount
        itemCount ++;
        // transfer nft
        _nft.transferFrom(msg.sender, address(this), _tokenId);
        // add new item to items mapping
        items[itemCount] = Item (
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            false
        );
       _initOrder(_price, items[itemCount],address(_nft),"sell");
        // emit Offered event
        emit Offered(
            itemCount,
            address(_nft),
            _tokenId,
            _price,
            msg.sender
        );
        emit OrderInitiated(msg.sender, _price, block.timestamp);
    }
    //  function acceptOrder(uint256 _orderId) external nonReentrant {
    //     require(acceptedOrder[msg.sender].receiver == address(0), "FORBIDEN: Pending order");
    //     Order memory _acceptedOrder = findAndProcessOrder(_orderId);
    //     acceptedOrder[msg.sender] = _acceptedOrder;
    //     emit OrderAccepted(_acceptedOrder.sender, msg.sender, _acceptedOrder.amount, block.timestamp);
    // }

    function acceptBuyOrder(uint256 _orderId,IERC721 _nft,uint _tokenId) external payable nonReentrant {
        require(acceptedOrder[msg.sender].buyer == address(0), "FORBIDEN: Pending order");
        Order memory _acceptedOrder = findAndProcessOrder(_orderId);
         itemCount ++;
        // transfer nft
        _nft.transferFrom(msg.sender, address(this), _tokenId);
        // add new item to items mapping
        items[itemCount] = Item (
            itemCount,
            _nft,
            _tokenId,
            _acceptedOrder.amount,
            payable(msg.sender),
            false
        );
       _acceptedOrder.item =items[itemCount];
        acceptedOrder[msg.sender] = _acceptedOrder;
    }
  
     function acceptSellOrder(uint256 _orderId) external payable nonReentrant {
        require(acceptedOrder[msg.sender].buyer == address(0), "FORBIDEN: Pending order");
        Order memory _acceptedOrder = findAndProcessOrder(_orderId);
        
        acceptedOrder[msg.sender] = _acceptedOrder;

    }

    function completeOrder(uint256 _orderId) external nonReentrant {
    
        Order[] memory _openOrder = order;
        for (uint256 i = 0; i < _openOrder.length; i++){
                if(_openOrder[i].orderId == _orderId) {
                    require(_openOrder[i].buyer == address(msg.sender), "RADENU:FORBIDDEN");
                    order[i].state = OrderState.COMPLETED;
                     emit OrderCompleted(
                         _openOrder[i].seller, 
                         msg.sender, 
                         _openOrder[i].amount, 
                         block.timestamp
                         );
                }
                 acceptedOrder[msg.sender].state = OrderState.COMPLETED;
        }
    }


function releasePaymentSellOrder(uint256 _orderId) external nonReentrant {
    Order[] memory _openOrder = order;
    for (uint256 i = 0; i < _openOrder.length; i++){
            if(_openOrder[i].orderId == _orderId) {
                // require(
                //     _openOrder[i].seller == msg.sender &&
                //     _openOrder[i].state == OrderState.COMPLETED,
                //     "RADENU: FORBIDDEN"
                //     );
                uint256 amount = order[i].amount;
                order[i].state = OrderState.FUFILLED;
                delete acceptedOrder[_openOrder[i].buyer];
                // _openOrder[i].seller.transfer(amount);
                 order[i].seller.transfer(order[i].amount);
                 order[i].item.nft.transferFrom(address(this), _openOrder[i].buyer, order[i].item.tokenId);

                recordPriceHistory(address(order[i].item.nft),amount);
                emit OrderFufilled(
                        _openOrder[i].seller, 
                        _openOrder[i].buyer, 
                        _openOrder[i].amount, 
                        block.timestamp
                        );
            }       
    }

}

function releasePaymentBuyOrder(uint256 _orderId,uint _tokenId) external nonReentrant {
    Order[] memory _openOrder = order;
    for (uint256 i = 0; i < _openOrder.length; i++){
            if(_openOrder[i].orderId == _orderId) {
                // require(
                //     _openOrder[i].seller == msg.sender &&
                //     _openOrder[i].state == OrderState.COMPLETED,
                //     "RADENU: FORBIDDEN"
                //     );
                uint256 amount = order[i].amount;
                order[i].state = OrderState.FUFILLED;
                delete acceptedOrder[_openOrder[i].buyer];
                // _openOrder[i].seller.transfer(amount);
                 order[i].buyer.transfer(order[i].amount);
                 IERC721 _nft =IERC721(order[i].cohort);

                _nft.transferFrom(msg.sender, address(order[i].seller), _tokenId);
                recordPriceHistory(address(order[i].cohort),amount);
                emit OrderFufilled(
                        _openOrder[i].seller, 
                        _openOrder[i].buyer, 
                        _openOrder[i].amount, 
                        block.timestamp
                        );
            }       
    }

}

     function recordPriceHistory(address cohort, uint256 price) internal {
        PriceData memory priceData = PriceData({
            price: price,
            timestamp: block.timestamp
        });
        _priceHistory[cohort].push(priceData);
        }

      function getPriceHistory(address cohort) public view returns (PriceData[] memory) {
        return _priceHistory[cohort];
        }

    function getTotalPrice(uint _itemId) view public returns(uint){
        return((items[_itemId].price*(100 + feePercent))/100);
        //  return((items[_itemId].price*(100))/100);
    }
   function setTotalPrice(uint _itemId) view public returns(uint){
    return((items[_itemId].price*(100 + feePercent))/100);
    //  return((items[_itemId].price*(100))/100);
   }

    function findAndProcessOrder(uint256 id) internal returns (Order memory){
    Order[] memory _openOrder = order;
    for (uint256 i=0; i < _openOrder.length; i++){
            if(_openOrder[i].orderId == id) {
                require(
                    order[i].buyer == address(0), 
                    "FORBIDDEN: Order Accepted by Someone Else"
                    );
                order[i].buyer = payable(msg.sender);
                order[i].state = OrderState.ACCEPTED;
                order[i].duration = uint128 (block.timestamp);
                return _openOrder[i];
            }
    }
    revert('Not found');
   }

    function getTotalOrder() external view returns (Order[] memory){
        return order; 
    }
    function nextOrderId() private returns (uint256) {
        orderId.increment();
        return orderId.current(); 
    }

    function withdraw() public payable onlyOwner() {
       require(payable(msg.sender).send(address(this).balance));
      }

     function onERC721Received(
        address,
        address from,
        uint256,
        bytes calldata
        ) external pure override returns (bytes4) {
        require(from == address(0x0), "Cannot send nfts to Vault directly");
        return IERC721Receiver.onERC721Received.selector;
        }
     
}