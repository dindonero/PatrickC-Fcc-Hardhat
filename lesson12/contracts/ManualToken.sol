//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract ManualToken {
    mapping(address => uint256) public balanceOf;


    function transfer(address from, address to, uint256 amount) public {
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
    }

    function transferFrom(address from, address to, uint256 amount) public {
        require(balanceOf[from] >= amount);
        _transfer(from, to, amount);
    }

}