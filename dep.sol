// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.8.2 <0.9.0;
 
contract HelloWorld{
 
    string str;
    constructor(){
        str="hello world hari nath";
    }
    function getworld() public view returns(string memory){
        return str;
    }
}