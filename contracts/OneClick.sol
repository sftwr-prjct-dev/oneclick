pragma solidity 0.6.6;
import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";

// SPDX-License-Identifier: MIT

contract OneClick is BaseRelayRecipient {
    string public override versionRecipient = "2.0.0";
    address public owner;
    uint256 public numberOfClicks; 
    mapping (address => bool) hasClicked;
    
    event Click(address indexed _clicker, uint256 _numberOfClicks);
    
    constructor(address _forwarder) public {
        owner = msg.sender;
        trustedForwarder = _forwarder;
    }

    function setForwarder(address _forwarder) external {
        require(_msgSender() == owner, "Sender is not the owner");
        trustedForwarder = _forwarder;
    }
    
    function click() external {
        address _sender = _msgSender();
        require(!hasClicked[_sender], "User has already clicked");
        hasClicked[_sender] = true;
        numberOfClicks++;
        emit Click(_sender, numberOfClicks);
    }
}
