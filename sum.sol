// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.8.2 <0.9.0;
contract sum{
    uint public s1;
    uint public s2;
    uint public s3;
    constructor(){
        s1=10;
        s2=20;
    }
    function set(uint a,uint b) public{
        s1=a;
        s2=b;
    }
    // function add() public{
    //     s3=s1+s2;
    // }
    function getsum() public returns(uint){
        s3=s1+s2;
        return s3;
    }
}