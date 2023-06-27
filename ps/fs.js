const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: '127.0.0.1', port: '5001', protocol: 'http' }); // replace with your IPFS node's settings
const fs = require('fs');
    let account;
let account2;
async function connectMetamask() {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = `Account is: ${account}`;
    }
}
const connectContract = async () => {
    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "ipfsHash",
                    "type": "string"
                }
            ],
            "name": "myFunction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "s",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const Address = "0x4A1D6fFa68908dA6E98CbC6F5CDbb6041d4d34c9";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    document.getElementById("contractArea").innerHTML = "Connection Status: Success";
}
const get = async () => {
    // const ipfsClient = require('ipfs-http-client');
    // const ipfs = ipfsClient({ host: '127.0.0.1', port: '5001', protocol: 'http' }); // replace with your IPFS node's settings
    // const fs = require('fs');
    const dr=document.getElementById("fs");
    const file = fs.readFileSync(dr,'utf-8');
    const fileHash = await ipfs.add(file);
    console.log(fileHash.cid.toString());
    const result = await contract.methods.myFunction(fileHash.cid.toString()).send({ from: account });
    console.log(result);
};
