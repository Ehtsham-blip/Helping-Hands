// SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;

contract CampaignFactory{
    address[] public deployedCampaigns;

    event campaignCreated(
        string title, 
        uint requiredAmount,
        address indexed owner, 
        address campaignAddress,
        string imgURI,
        uint indexed timestamp,
        string indexed  category
    );

    function createCampaign(
        string memory campaignTitle,
         uint requiredCampaignAmount,
        string memory imgURI,
        string memory category,
        string memory storyURI) public
    {
        Campaign newCampaign = new Campaign(campaignTitle, requiredCampaignAmount, imgURI, storyURI, msg.sender);

        deployedCampaigns.push(address(newCampaign));

        emit campaignCreated(campaignTitle, requiredCampaignAmount, msg.sender, address(newCampaign), imgURI, block.timestamp, category );


    }
}

contract Campaign {
    string public title;
    uint256 public requiredAmount;
    string public image;
    string public story;
    address payable public owner;
    uint256 public receivedAmount;

    event donated(address indexed donar,  uint indexed amount, uint indexed  timestamp);

    constructor(
        string memory campaignTitle,
        uint256 requiredCampaignAmount,
        string memory imageURI,
        string memory storyURI,
        address campaignOwner
    ) {
        title = campaignTitle;
        requiredAmount = requiredCampaignAmount;
        image = imageURI;
        story = storyURI;
        owner = payable(campaignOwner);
    }

    function donate () public payable {
        require(requiredAmount > receivedAmount, "required ammount fullfilled");
        owner.transfer(msg.value);
        receivedAmount += msg.value;
        emit donated(msg.sender, msg.value, block.timestamp);
    }
}
