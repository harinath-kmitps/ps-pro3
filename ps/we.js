let account;
let account2;
async function connectMetamask() {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        console.log(accounts);
        console.log(accounts.length);
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = `Account is: ${account}`;
    }
}
// async function restartMetamask() {
//     const provider = await detectEthereumProvider();
//     if (provider) {
//         await provider.request({
//             method: 'wallet_requestPermissions',
//             params: [{ eth_accounts: {} }],
//         });
//         connectMetamask();
//     }
// }
// const connectMetamask2 = async () => {
//     if(window.ethereum !== "undefined"){
//         const accounts = await ethereum.request({method: "eth_requestAccounts"});
//         account2 = accounts[1];
// document.getElementById("accountArea").innerHTML = `Account is: ${account}`;
//     }
// }

const connectContract = async () => {
    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "vers",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "des",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "ft",
                    "type": "string"
                }
            ],
            "name": "addbug",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "ln",
                    "type": "bytes"
                },
                {
                    "internalType": "string",
                    "name": "ver",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "plat",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "ft",
                    "type": "string[]"
                }
            ],
            "name": "addpatch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "dadd",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "patid",
                    "type": "uint256"
                }
            ],
            "name": "download",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "ds",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "ftt",
                    "type": "string[]"
                }
            ],
            "name": "gbf",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "_f",
                    "type": "bytes"
                }
            ],
            "name": "gettxt",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "bugdes",
                    "type": "string[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "bprior",
                    "type": "uint256[]"
                }
            ],
            "name": "gprior",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "rvadd",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "vadd",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "bid",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "count",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "count1",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "devds",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "devft",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "dlist",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "downloaded",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "file",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "gbug",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "appname",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "version",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "description",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "fts",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "prior",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "breqstatus",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "freq",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct me.bugreport[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "get",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "num",
                    "type": "uint256"
                }
            ],
            "name": "getarr",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                },
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getArray",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getpatches",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "patchid",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "patchfilename",
                            "type": "string"
                        },
                        {
                            "internalType": "bytes",
                            "name": "patchlink",
                            "type": "bytes"
                        },
                        {
                            "internalType": "string",
                            "name": "patchversion",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "patchplatform",
                            "type": "string"
                        },
                        {
                            "internalType": "string[]",
                            "name": "features",
                            "type": "string[]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "verstat",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "depstat",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "userids",
                            "type": "uint256[]"
                        }
                    ],
                    "internalType": "struct me.patchinfo[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "pidd",
                    "type": "uint256"
                }
            ],
            "name": "getuids",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "patchidarr",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "pid",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "plist",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "rcount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "reqcount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "verified",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "vpatchidarr",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const Address = "0x0E34371727979ba57923924aC055B74B0Ecc215F";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    // const ABI2 = [
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "name",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "vers",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "des",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ft",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "addbug",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "name",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "ln",
    //                 "type": "bytes"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ver",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "plat",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ft",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "addpatchd",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "name",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ln",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ver",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "plat",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "bhashid",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "bid",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string[]",
    //                 "name": "ds",
    //                 "type": "string[]"
    //             },
    //             {
    //                 "internalType": "string[]",
    //                 "name": "lt",
    //                 "type": "string[]"
    //             }
    //         ],
    //         "name": "bprior",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "count",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "count1",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "dlist",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "getbugs",
    //         "outputs": [
    //             {
    //                 "components": [
    //                     {
    //                         "internalType": "uint256",
    //                         "name": "bugid",
    //                         "type": "uint256"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "appname",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "version",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "description",
    //                         "type": "string"
    //                     },
    //                     {
    //                         "internalType": "string",
    //                         "name": "fts",
    //                         "type": "string"
    //                     }
    //                 ],
    //                 "internalType": "struct data.bugreport[]",
    //                 "name": "",
    //                 "type": "tuple[]"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "id",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "getd",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "",
    //                 "type": "bytes"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "gprior",
    //         "outputs": [
    //             {
    //                 "internalType": "string[]",
    //                 "name": "",
    //                 "type": "string[]"
    //             },
    //             {
    //                 "internalType": "string[]",
    //                 "name": "",
    //                 "type": "string[]"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "name",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "bytes",
    //                 "name": "ln",
    //                 "type": "bytes"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ver",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "plat",
    //                 "type": "string"
    //             },
    //             {
    //                 "internalType": "string",
    //                 "name": "ft",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "hashid",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "patchidarrd",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256[]",
    //                 "name": "",
    //                 "type": "uint256[]"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "pid",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "plist",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "name": "verified",
    //         "outputs": [
    //             {
    //                 "internalType": "uint256",
    //                 "name": "",
    //                 "type": "uint256"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ];
    // const Address2 = "0x3C956353b78e49321695058eA24d6B0E769b7F39";
    // window.web3 = await new Web3(window.ethereum);
    // window.contract2 = await new window.web3.eth.Contract(ABI2, Address2);
    document.getElementById("contractArea").innerHTML = "Connection Status: Success";
    // document.getElementById("contractArea").innerHTML = "Connection Status: Success";
    console.log(window.location);
    // if(window.location.pathname=="/bugdetails.html"){
    //     getreport();
    // }
    // else if(window.location.pathname=="/priority.html"){
    //     getpr();
    // }
    if(window.location.pathname=="/verify56.html"){
        verifier();
    }
    else if(window.location.pathname=="/verified.html"){
        verified();
    }
    else if(window.location.pathname=="/patchrequest.html"){
        getpr();
    }
    else if(window.location.pathname=="/details.html"){
        getpatchdetails();
    }
    else if(window.location.pathname=="/deploy.html"){
        setdeploy();
    }
    else if(window.location.pathname=="/user.html"){
        getpatch();
    }
    else if(window.location.pathname=="/verified.html"){
        verified();
    }
    else if(window.location.pathname=="/register.html"){
        setpatchdetails();
    }
}
let data2, data28;
// const getpatchdetail = async () => {
//     const d2 = document.getElementById("cid").value;
//     const data = await window.contract.methods.get(d2).call();
//     data28 = await window.contract.methods.patchidarr().call();
//     data2 = await window.contract2.methods.patchidarrd().call();
//     console.log(data);
//     document.getElementById("dataArea").innerHTML = `Word is: ${data[0]},${data[1]},${data[2]},${data[3]},${data[4]}`;
//     // for(var i = 0; i < data2.length; i++) {
//         //     console.log(data2[i]);
//         // }
//         document.getElementById("demo").innerHTML = data28;
//     }
let data35;
const getpatchdetails = async () => {
    data35 = await window.contract.methods.getpatches().call();
    console.log(data35);
    const arr = [];
    const arr2 = [];
    let s = "";
    let head = "<thead><tr><th>Patch.id</th><th>Patch_Name</th><th>Software</th><th>Features</th><th>timestamp</th><th>Verification Status</th><th>Deploy Status</th></tr></thead>"
    var table = document.getElementById("myTable");
    table.innerHTML = head;
    // let tr = document.createElement("tr");
    for (var i = 0; i < data35.length; i++) {
        // s += `${data45[0][i]}  `+`${data45[1][i]+"<br>"}`;
        // var x = document.createElement("input");
        // x.setAttribute("type", "checkbox");
        // document.table.appendChild(x);
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        // var cell8 = row.insertCell(7);
        // td.innerHTML = `${new Date(patch[p] * 1000).toLocaleString()}`;
        // row.appendChild(x);
        cell1.innerHTML = data35[i][0];
        cell2.innerHTML = data35[i][1];
        cell3.innerHTML = data35[i][4];
        cell4.innerHTML = data35[i][5];
        console.log(data35[i][6]);
        cell5.innerHTML = new Date(data35[i][6] * 1000).toLocaleString();
        cell6.innerHTML = data35[i][7];
        cell7.innerHTML = data35[i][8];
        // if(x.value=="on"){
        //     arr.push(data35[0][i]);
        //     arr2.push(data45[1][i]);
        // }
        // console.log(arr,arr2);
    }
    // document.getElementById("demo53").innerHTML = s;
}
// const deploy = async (n) => {
//     await window.contract.methods.dadd(n).send({ from: account });
// }
let sr;
const setdeploy = async () => {
    data35 = await window.contract.methods.getpatches().call();
    console.log(data35);
    const arr = [];
    const arr2 = [];
    let s = "";
    let head = "<thead><tr><th>Patch.id</th><th>Patch_Name</th><th>Software</th><th>Features</th><th>timestamp</th><th>Deployment</th><th>Deploy Status</th></tr></thead>"
    var table = document.getElementById("myTable4");
    table.innerHTML = head;
    // let tr = document.createElement("tr");                                        B
    for (var i = 0; i < data35.length; i++) {
        if(data35[i][7]=="verified"){
            // if(data35[i][8]!="deployed"){
            // s += `${data45[0][i]}  `+`${data45[1][i]+"<br>"}`;
            // var x = document.createElement("input");
            // x.setAttribute("type", "checkbox");
            // document.table.appendChild(x);
            console.log(data35[i][0]);
            sr=data35[i][0];
            var bt=document.createElement("button");
            bt.innerHTML="Deploy";
            // btn.setAttribute("onclick", "deploy(data35[i][0])");
            bt.onclick=async ()=>{
                // console.log("hello");
                await window.contract.methods.dadd(sr).send({ from: account });
                window.location.reload();
                // console.log(sr);
            }
            console.log(data35[i][0]);
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            // var cell8 = row.insertCell(7);
            // td.innerHTML = `${new Date(patch[p] * 1000).toLocaleString()}`;
            // row.appendChild(x);
            cell1.innerHTML = data35[i][0];
            cell2.innerHTML = data35[i][1];
            cell3.innerHTML = data35[i][4];
            cell4.innerHTML = data35[i][5];
            console.log(data35[i][6]);
            cell5.innerHTML = new Date(data35[i][6] * 1000).toLocaleString();
            // cell6.innerHTML = data35[i][7];
            // cell6.appendChild(bt);
            if(data35[i][8]!="deployed"){
                cell6.appendChild(bt);
            }
            else{
                cell6.innerHTML="deployed";
            }
            cell7.innerHTML = data35[i][8];
            // if(x.value=="on"){
            //     arr.push(data35[0][i]);
            //     arr2.push(data45[1][i]);
            // }
            // console.log(arr,arr2);
        // }
        }
    }
    // document.getElementById("demo53").innerHTML = s;
}
let sr2;
let sr3;
let sr4;
let data44;
const getpatch = async () => {
    data35 = await window.contract.methods.getpatches().call();
    console.log(data35);
    const arr = [];
    const arr2 = [];
    let s = "";
    let head = "<thead><tr><th>Patch.id</th><th>Patch_Name</th><th>Software</th><th>Features</th><th>timestamp</th><th>Download</th></tr></thead>"
    var table = document.getElementById("myTable5");
    table.innerHTML = head;
    data44 = await window.contract.methods.getArray().call();
    for (var i = 0; i < data35.length; i++) {
        if(data35[i][8]=="deployed"){
            console.log(data35[i][0]);
            sr2=data35[i][2];
            sr3=data35[i][0];
            sr4=data35[i][1];
            var bt=document.createElement("button");
            bt.innerHTML="Download";
            bt.onclick = async () => {
                await window.contract.methods.download(sr3).send({ from: account });
                let data = await contract.methods.gettxt(sr2).call();
                const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(data))], { type: 'application/octet-stream' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${sr4}`;
                document.body.appendChild(a);
                a.click();
                window.location.reload();
            }
            console.log(data35[i][0]);
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            cell1.innerHTML = data35[i][0];
            cell2.innerHTML = data35[i][1];
            cell3.innerHTML = data35[i][4];
            cell4.innerHTML = data35[i][5];
            console.log(data35[i][6]);
            cell5.innerHTML = new Date(data35[i][6] * 1000).toLocaleString();
            let f=0;
            console.log(data44);
            if(data44.includes(data35[i][0])){
                // cell6.appendChild(bt);
                cell6.innerHTML="downloaded";
            }
            else{
                cell6.appendChild(bt);
            }
        }
    }
}
let verifier = async () => {
    let a = ["patchid", "patchfilename", "patchversion", "patchplatform", "timestamp", "features"]
    let patches = await contract.methods.getpatches().call();
    console.log(patches);
    let body = document.getElementById("cards");
    for (let patch of patches) {
        if (patch["verstat"] != "Inprogress") {
            continue;
        }
        let card = document.createElement("div");
        card.classList.add("card", "my-3");
        let cardbody = document.createElement("div");
        cardbody.classList.add("card-body");
        let header = document.createElement("div");
        header.classList.add("d-flex", "justify-content-between");
        let pn = document.createElement("h6");
        pn.classList.add("card-title");
        pn.innerHTML = `Patch_No : ${patch["patchversion"]}`;
        let btns = document.createElement("div");
        btns.classList.add("d-flex", "justify-content-between");
        let accept = document.createElement("button");
        accept.classList.add("btn", "mx-3", "btn-primary");
        accept.innerHTML = "Approve";
        accept.onclick = async () => {
            contract.methods.vadd(patch["patchid"]).send({ from: account }).then(() => {
                alert("Successfully Updated");
                window.location.reload();
            })
        }
        let reject = document.createElement("button");
        reject.classList.add("btn", "mx-3", "btn-danger");
        reject.innerHTML = "Reject";
        reject.onclick = async () => {
            contract.methods.rvadd(patch["patchid"]).send({ from: account }).then(() => {
                alert("Successfully Updated");
                window.location.reload();
            })
        }
        btns.appendChild(accept);
        btns.appendChild(reject);
        header.appendChild(pn);
        header.appendChild(btns);
        let ptdt = document.createElement("div");
        ptdt.classList.add("col-6", "col-sm-4", "col-md-6");
        let ptable = document.createElement("table");
        ptable.classList.add("table", "table-borderless");
        let ptbody = document.createElement("tbody");
        for (let i of a) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = `${i} :`;
            let td2 = document.createElement("td");
            if (i == "timestamp") {
                td2.innerHTML = `${new Date(patch[i] * 1000).toLocaleString()}`;
            }
            else {
                td2.innerHTML = `${patch[i]}`;
            }
            tr.append(td1, td2);
            ptbody.appendChild(tr);
        }
        ptable.appendChild(ptbody);
        ptdt.appendChild(ptable);
        cardbody.append(header, ptdt);
        let dnwld = document.createElement("button");
        dnwld.classList.add("btn", "btn-light");
        dnwld.innerHTML = `Download ( ${patch["patchfilename"]} )`;
        dnwld.onclick = async () => {
            let data = await contract.methods.gettxt(patch["patchlink"]).call();
            const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(data))], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${patch["patchfilename"]}`;
            document.body.appendChild(a);
            a.click();
        }
        card.append(cardbody, dnwld);
        body.appendChild(card);
    }
}
let verified = async () => {
    let a = ["patchid", "patchfilename", "patchversion", "patchplatform", "timestamp", "features"]
    let patches = await contract.methods.getpatches().call();
    let body = document.getElementById("cards2");
    for (let patch of patches) {
        if (patch["verstat"] == "Inprogress") {
            continue;
        }
        let card = document.createElement("div");
        card.classList.add("card", "my-3");
        let cardbody = document.createElement("div");
        cardbody.classList.add("card-body");
        let header = document.createElement("div");
        let pn = document.createElement("h6");
        pn.classList.add("card-title");
        pn.innerHTML = `Patch_No : ${patch["patchversion"]}`;
        header.appendChild(pn);
        let ptdt = document.createElement("div");
        ptdt.classList.add("col-6", "col-sm-4", "col-md-6");
        let ptable = document.createElement("table");
        ptable.classList.add("table", "table-borderless");
        let ptbody = document.createElement("tbody");
        for (let i of a) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = `${i} :`;
            let td2 = document.createElement("td");
            if (i == "timestamp") {
                td2.innerHTML = `${new Date(patch[i] * 1000).toLocaleString()}`;
            }
            else {
                td2.innerHTML = `${patch[i]}`;
            }
            tr.append(td1, td2);
            ptbody.appendChild(tr);
        }
        ptable.appendChild(ptbody);
        ptdt.appendChild(ptable);
        cardbody.append(header, ptdt);
        let dnwld = document.createElement("button");
        dnwld.classList.add("btn", "btn-light");
        dnwld.innerHTML = `Download ( ${patch["patchfilename"]} )`;
        dnwld.onclick = async () => {
            let data = await contract.methods.gettxt(patch["patchlink"]).call();
            const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(data))], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${patch["patchfilename"]}`;
            document.body.appendChild(a);
            a.click();
        }
        card.append(cardbody, dnwld);
        body.appendChild(card);
    }
}
//     // const arr=["scbch","ekmdjh","ekmd"];
const setreport = async () => {
    // event.preventDefault();
    const d3 = document.getElementById("software").value;
    const d4 = document.getElementById("version").value;
    const d5 = document.getElementById("description").value;
    const d6 = document.getElementById("fts").value;
    console.log(d3, d4, d5, d6);
    console.log(window.contract.methods);
    await window.contract.methods.addbug(d3, d4, d5, d6).send({ from: account });
    console.log("def");
    window.location.reload();
    // document.getElementById("contractArea2").innerHTML = "transaction: Successful";
}
// const getreport = async () => {
//     const data56= await window.contract.methods.getbugs().call();
//     document.getElementById("demo4").innerHTML = data56.join("<br>")+"<br>";
// }
const getreport2 = async () => {
    bname=document.getElementById("s4").value;
    data56 = await window.contract.methods.gbug(bname).call();
    console.log(data56);
    const arr = [];
    // const arr2=[];
    let s = "";
    let head = "<thead><tr><th>bug id</th><th>Software</th><th>Version</th><th>bug description</th><th>Features</th></tr></thead>"
    var table = document.getElementById("myTable3");
    table.innerHTML = head;
    // var select = document.createElement("select");
    // select.innerHTML = "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option>";
    // let tr = document.createElement("tr");
    for (var i = 0; i < data56.length; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        // var cell5 = row.insertCell(4);
        // var cell6 = row.insertCell();
        cell1.innerHTML = data56[i][0];
        cell2.innerHTML = data56[i][1];
        cell3.innerHTML = data56[i][2];
        cell4.innerHTML = data56[i][3];
        // cell5.innerHTML = data56[i][4];
    }
}
let data56;
let arr3 = [];
let arr4 = [];
let bname;
const getreport = async () => {
    bname=document.getElementById("s2").value;
    data56 = await window.contract.methods.gbug(bname).call();
    console.log(data56);
    const arr = [];
    // const arr2=[];
    let s = "";
    var table = document.getElementById("myTable2");
    let head = "<thead><tr><th>bug description</th><th>Features</th></tr></thead>"
    table.innerHTML = head;
    for (var i = 0; i < data56.length; i++) {
        if (data56[i][4] == 0) {
            const select = document.createElement("select");
            // select.innerHTML = "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option>";
            select.className = "dropdown";
            const option1 = document.createElement("option");
            option1.value = "1";
            option1.textContent = "1";
            const option2 = document.createElement("option");
            option2.value = "2";
            option2.textContent = "2";
            const option3 = document.createElement("option");
            option3.value = "3";
            option3.textContent = "3";
            const option4 = document.createElement("option");
            option4.value = "4";
            option4.textContent = "4";
            const option5 = document.createElement("option");
            option5.value = "5";
            option5.textContent = "5";
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell6 = row.insertCell(2);
            cell1.innerHTML = data56[i][2];
            cell2.innerHTML = data56[i][3];
            // cell3.innerHTML = data56[i][4];
            select.appendChild(option1);
            select.appendChild(option2);
            select.appendChild(option3);
            select.appendChild(option4);
            select.appendChild(option5);
            // cell6.appendChild(select);
            cell6.appendChild(select);
            arr4.push(data56[i][2]);
        }
        const drops = document.querySelectorAll('.dropdown');
        drops.forEach(function (select) {
            select.addEventListener("change", function () {
                    // arr3.push(select.value);
                    arr3 =
                        Array.from(drops) // Convert checkboxes to an array to use filter and map. // Use Array.filter to remove unchecked checkboxes.
                            .map(i => i.value);
                    console.log(arr3);
                    console.log(select.value);
                });                                                                                                                                                                                                                                                                                                                                                                             
        });
    }
}
const submitpr = async () => {
    bname=document.getElementById("s2").value;
    await window.contract.methods.gprior(bname,arr4,arr3).send({ from: account });
    document.getElementById("cona").innerHTML = "priority sent";
}
const addpr = async () => {
    const arr = document.getElementById("descrpt").value;
    const arr2 = document.getElementById("prr").value;
    const ar2 = arr.split(",");
    const ar3 = arr2.split(",");
    await window.contract.methods.bprior(ar2, ar3).send({ from: account });
}
let arr, arr2;
// let data56;
let enabledSettings = [];
let enabledSettings2 = [];
const getpr = async () => {
    bname=document.getElementById("s3").value;
    var table = document.getElementById("myTable");
    data56 = await window.contract.methods.gbug(bname).call();
    console.log(data56);
    arr = [];
    arr2 = [];
    let s = "";
    // tabl.destroy();
    for (var i = 0; i < data56.length; i++) {
        if(data56[i][5]==0){
        // s += `${data45[0][i]}  `+`${data45[1][i]+"<br>"}`;
        var x = document.createElement("input");
        // x.id = x+i;
        x.setAttribute("type", "checkbox");
        x.setAttribute("name", "des");
        x.setAttribute("value", data56[i][2]);
        // document.table.appendChild(x);
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        row.appendChild(x);
        cell1.innerHTML = data56[i][2];
        cell2.innerHTML = data56[i][4];
        console.log(data56[i][3]);
        }
    }
    var checkboxes = document.querySelectorAll("input[type=checkbox][name=des]");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            enabledSettings =
                Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
                    .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                    .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.
            console.log(enabledSettings);
        })
    });
    for (var i = 0; i < data56.length; i++) {
        if(data56[i][6]==0){
        // s += `${data45[0][i]}  `+`${data45[1][i]+"<br>"}`;
        var x = document.createElement("input");
        // x.id = x+i;
        x.setAttribute("type", "checkbox");
        x.setAttribute("name", "ft");
        x.setAttribute("value", data56[i][3]);
        // document.table.appendChild(x);
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        row.appendChild(x);
        cell1.innerHTML = data56[i][3];
        // cell2.innerHTML = data56[i][5];
        console.log(data56[i][4]);
        }
    }

    var checkboxes2 = document.querySelectorAll("input[type=checkbox][name=ft");
    checkboxes2.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            enabledSettings2 =
                Array.from(checkboxes2) // Convert checkboxes to an array to use filter and map.
                    .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                    .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.
            console.log(enabledSettings2);
        })
    });
    // console.log(arr);
    // var table2 = document.getElementById("myTable2");
    // console.log(arr,arr2);
    // document.getElementById("demo53").innerHTML = s;
}
let count = 0;
const check = async () => {
    count = count + 1;
    console.log(enabledSettings, enabledSettings2);
    await window.contract.methods.gbf(bname,enabledSettings, enabledSettings2).send({ from: account });
    document.getElementById("cona2").innerHTML = "patch request sent";
}
// let dt5;
var sn;
const prequest = async () => {
    // data56= await window.contract.methods.getbugs().call();
    var table = document.getElementById("myTable");
    table.innerHTML="";
    const c1 = await window.contract.methods.reqcount().call();
    // console.log(data56);
    arr = [];
    arr2 = [];
    console.log(c1);
    let s = "";
    let dt5;
    let head = "<thead><tr><th>Request No.</th><th>bug descriptions</th><th>Features</th></tr></thead>"
    table.innerHTML = head;
    for (let i = 0; i < c1; i++) {
        dt5= await window.contract.methods.getarr(i+1).call();
        console.log(dt5);
        let x = document.createElement("button");
        x.classList.add("btn", "mx-3", "btn-danger");
        x.innerHTML = "Upload";
        x.onclick = async () => {
            const myObject = { name: i+1 };
           localStorage.setItem('myObject', JSON.stringify(myObject));
           console.log(JSON.parse(localStorage.getItem('myObject')));
            window.open("register.html");
        }
        // console.log(dt5[0],dt5[1]);
        // for(var j=0;j<dt5[0].length;j++) {
        var row = table.insertRow();
        var cell4 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        // row.appendChild(x);
        cell4.innerHTML=i+1;
        cell1.innerHTML = dt5[1];
        cell2.innerHTML = dt5[2];
        cell3.appendChild(x);
        // }
    }
}
//     const upload2 = async () => {
//         window.open("register.html");
//     }
//     // let ar34=[];
//     const upload = async () => {
//         // window.open("register.html");
//         const myEntry4 = document.getElementById("inputArea4").value;
//         // const myEntry5 = document.getElementById("inputArea5");
//     // const myObjectString = localStorage.getItem('myObject');
//     // const myObject = JSON.parse(myObjectString);
//     dt5 = await window.contract.methods.getarr(myEntry4).call();
//     console.log(dt5);
//     console.log(myEntry4);
//     // myEntry5.value=dt5;
//     for (var i = 0; i < dt5[0].length; i++) {
//         // const dat = await window.contract.methods.gbug(parseInt(dt5[0][i])).call();
//         // const dat2= await window.contract.methods.gbug(dt5[1][i]).call();
//         // ar34.push(dat[2]);
//         ar34.push(dt5[0][i]);
//         console.log(dt5[0][i]);
//     }
//     for (var i = 0; i < dt5[1].length; i++) {
//         // const dat2 = await window.contract.methods.gbug(parseInt(dt5[1][i])).call();
//         // const dat2= await window.contract.methods.gbug(dt5[1][i]).call();
//         // ar34.push(dat2[3]);
//         ar34.push(dt5[1][i]);
//         // console.log(dat2[3]);
//         console.log(dt5[1][i]);
//     }
//     document.getElementById("inputArea5").value = ar34;
//     document.getElementById("inputArea5").innerHTML= ar34;
// }
let ar34 = [];
let dat;
let dat2;
const setpatchdetails = async () => {
    // if(data28.length>0){
    const myEntry = document.getElementById("inputArea").value;
    const myEntry2 = document.getElementById("inputArea2");
    const myEntry3 = document.getElementById("inputArea3").value;
    const myEntry4 = document.getElementById("inputArea4").value;
    const myEntry5 =document.getElementById("inputArea5").value;
    const ed=JSON.parse(localStorage.getItem('myObject'));
    console.log(parseInt(ed["name"]));
    dt5 = await window.contract.methods.getarr(parseInt(ed["name"])).call();
    console.log(dt5);
    document.getElementById("inputArea4").value=dt5[0];
    // myEntry4.innerHTML=dt5[0];
    if(myEntry5.value!==ar34){
        for (var i = 0; i < dt5[1].length; i++) {
            // const dat = await window.contract.methods.gbug(parseInt(dt5[0][i])).call();
            // const dat2= await window.contract.methods.gbug(dt5[1][i]).call();
            // ar34.push(dat[2]);
            ar34.push(dt5[1][i]);
            console.log(dt5[1][i]);
        }
        for (var i = 0; i < dt5[2].length; i++) {
            // const dat2 = await window.contract.methods.gbug(parseInt(dt5[1][i])).call();
            // const dat2= await window.contract.methods.gbug(dt5[1][i]).call();
            // ar34.push(dat2[3]);
            ar34.push(dt5[2][i]);
            // console.log(dat2[3]);
            console.log(dt5[2][i]);
        }
    }
    document.getElementById("inputArea5").value = ar34;
    // document.getElementById("inputArea5").innerHTML= ar34;
    const file = myEntry2.files[0];
    // console.log(file.name);
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = async () => {
        const fileData = new Uint8Array(reader.result);
        // let account = (await web3.eth.getAccounts())[0];
        console.log(fileData);
        console.log(account);
        // await window.contract.methods.addpatch(myEntry, fileData, myEntry3, myEntry4, myEntry5).send({ from: account });
        await window.contract.methods.addpatch(myEntry, fileData, myEntry3, myEntry4,ar34).send({ from: account }).then(() => {
            alert("Patch info successfully added to blockchain");
            // window.location.reload();
        })
    }
}
            // else{
            //     for(var i = 0; i <data2.length;i++){
            //         // const data6 = await window.contract2.methods.patchidarrd().call();
            //         const data5 = await window.contract2.methods.getd(data2[i]).call();
            //         await window.contract.methods.addpatch(data5[0],data5[1],data5[2],data5[3],data5[4]).send({ from: account });
            //     }
            // }
        // }
        // // Set up a file input element
        // const fileInput = document.getElementById('tfile');

        // // Listen for changes to the file input
        // fileInput.addEventListener('change', async () => {
        // // Get the selected file from the input
        // const file = fileInput.files[0];

        // // Read the file as a binary string
        // const reader = new FileReader();
        // reader.readAsArrayBuffer(file);

        // // Wait for the file to be read
        // reader.onload = async () => {
        //     // Convert the binary string to a byte array
        //     const fileData = new Uint8Array(reader.result);

        //     // Upload the file to the blockchain
        //     await window.contract.methods.settxt(fileData).send({ from: account });
        // };
        // });