//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import  "./aurora.sol";


interface IERC20MintableBurnable is IERC20 {
    function mint(address, uint256) external;

    function burnFrom(address, uint256) external;
}


contract KYCDAO  {

      IERC20MintableBurnable public kycToken;
      AuroraStNear public auroraMetaPool =AuroraStNear(0x0dF588AabDd4E031f1903326cC0d8E79DFBD3566);
    struct Proposal {
        uint256 id;
        address submitter;
        bool verified;
        string details;
        uint256 approvalCount;
        uint256 rejectionCount;
       
    }

    mapping(address => bool) public members;
    mapping(address => uint) public balances;
    Proposal[] public proposals;
    uint256 public proposalCounter;

    event NewProposal(uint256 indexed id);
    event ProposalVoted(uint256 indexed id, address indexed voter, bool approval);
    event ProposalApproved(uint256 indexed id);
    event ProposalRejected(uint256 indexed id);

    modifier onlyMember() {
        require(members[msg.sender], "Only members can perform this action");
        _;
    }
     
       constructor (address _kycToken){
           kycToken = IERC20MintableBurnable(_kycToken);
        }
      function addMember(uint _amount) payable external  {
            auroraMetaPool.swapwNEARForstNEAR(_amount);
           members[msg.sender] = true;
          
           
        
        }

    function removeMember(address member,uint _amount) external  {
        require(members[member], "Address is not a member");
        auroraMetaPool.swapstNEARForwNEAR(_amount);
         delete members[member];
    }

    function submitProposal(string memory _details,bool _verified) external onlyMember {
        uint256 newProposalId = proposalCounter++;
        Proposal memory newProposal = Proposal({
            id: newProposalId,
            submitter: msg.sender,
            verified: _verified,
            details:_details,
            approvalCount: 0,
            rejectionCount: 0
        });
        proposals.push(newProposal);
        emit NewProposal(newProposalId);
    }



    function voteOnProposal(uint256 proposalId, bool approval) external onlyMember {
        Proposal storage proposal = proposals[proposalId];
        // require(!proposal.voted[msg.sender], "Already voted on this proposal");
        // proposal.voted[msg.sender] = true;

        if (approval) {
            proposal.approvalCount++;
            emit ProposalVoted(proposalId, msg.sender, true);
        } else {
            proposal.rejectionCount++;
            emit ProposalVoted(proposalId, msg.sender, false);
        }

        // Check if the proposal has reached the required approval threshold
        if (proposal.approvalCount > proposal.rejectionCount) {
            emit ProposalApproved(proposalId);
             kycToken.mint(proposal.submitter,1);
          } else if (proposal.rejectionCount >= proposal.approvalCount) {
            emit ProposalRejected(proposalId);
        }
    }
function getAllProposals() external view returns ( Proposal[] memory){
        return proposals; 
    }
}