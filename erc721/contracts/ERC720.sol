// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';


contract AToken is ERC721URIStorage {
    constructor() ERC721("A_simple", "AS") {}
    uint public _id;
    
    function nftMINT(address receiver, string memory tokenURI) public {
        _mint(receiver, _id);
        _setTokenURI(_id, tokenURI);
        _id++;
    }
    
    receive() external payable{}
}