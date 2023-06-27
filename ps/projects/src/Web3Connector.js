import { useEffect, useState } from "react";
import Web3 from "web3";

function Web3Connector({ setAccount, setContract, setContractStatus }) {

  useEffect(() => {
    const {ethereum}=window;
    const connectMetamask = async () => {
      if (ethereum !== "undefined") {
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]);
        } catch (error) {
          console.log(error);
        }
      }
    };

    const connectContract = async () => {
        const {ethereum}=window;
      try {
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
        const Address = "0x8C014DE77c0a8C78DB90325FeeA0CdB23D686DE9";
        const web3 = new Web3(ethereum);
        const contract1 = new web3.eth.Contract(ABI, Address);
        setContract(contract1);
        setContractStatus("Connection Status: Success");
      } catch (error) {
        console.log(error);
      }
    };

    connectMetamask();
    connectContract();
  }, [setAccount, setContract, setContractStatus]);

  return null; // Since this component doesn't render anything
}

export default Web3Connector;
// import { useEffect } from "react";
// import Web3 from "web3";

// function useWeb3Connector(setAccount, setContract, setContractStatus) {
//   useEffect(() => {
//     const connectMetamask = async () => {
//       if (window.ethereum !== "undefined") {
//         try {
//           const accounts = await window.ethereum.request({
//             method: "eth_requestAccounts",
//           });
//           setAccount(accounts[0]);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     };

//     const connectContract = async () => {
//       try {
//         const ABI = [
//             {
//                 "inputs": [
//                     {
//                         "internalType": "string",
//                         "name": "name",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "vers",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "des",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "ft",
//                         "type": "string"
//                     }
//                 ],
//                 "name": "addbug",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "string",
//                         "name": "name",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "bytes",
//                         "name": "ln",
//                         "type": "bytes"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "ver",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "plat",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string[]",
//                         "name": "ft",
//                         "type": "string[]"
//                     }
//                 ],
//                 "name": "addpatch",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "bid",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "count",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "count1",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "_id",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "dadd",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "devds",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "devft",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "dlist",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "patid",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "download",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "downloaded",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "file",
//                 "outputs": [
//                     {
//                         "internalType": "bytes",
//                         "name": "",
//                         "type": "bytes"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "string",
//                         "name": "name",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string[]",
//                         "name": "ds",
//                         "type": "string[]"
//                     },
//                     {
//                         "internalType": "string[]",
//                         "name": "ftt",
//                         "type": "string[]"
//                     }
//                 ],
//                 "name": "gbf",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "string",
//                         "name": "_id",
//                         "type": "string"
//                     }
//                 ],
//                 "name": "gbug",
//                 "outputs": [
//                     {
//                         "components": [
//                             {
//                                 "internalType": "string",
//                                 "name": "appname",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "version",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "description",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "fts",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "prior",
//                                 "type": "uint256"
//                             }
//                         ],
//                         "internalType": "struct me.bugreport[]",
//                         "name": "",
//                         "type": "tuple[]"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "id",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "get",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "bytes",
//                         "name": "",
//                         "type": "bytes"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string[]",
//                         "name": "",
//                         "type": "string[]"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "getArray",
//                 "outputs": [
//                     {
//                         "internalType": "uint256[]",
//                         "name": "",
//                         "type": "uint256[]"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "string",
//                         "name": "apname",
//                         "type": "string"
//                     }
//                 ],
//                 "name": "getarr",
//                 "outputs": [
//                     {
//                         "components": [
//                             {
//                                 "internalType": "string[]",
//                                 "name": "ar1",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "ar2",
//                                 "type": "string[]"
//                             }
//                         ],
//                         "internalType": "struct me.patchr",
//                         "name": "",
//                         "type": "tuple"
//                     }
//                 ],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "getpatches",
//                 "outputs": [
//                     {
//                         "components": [
//                             {
//                                 "internalType": "uint256",
//                                 "name": "patchid",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "patchfilename",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "bytes",
//                                 "name": "patchlink",
//                                 "type": "bytes"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "patchversion",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "patchplatform",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string[]",
//                                 "name": "features",
//                                 "type": "string[]"
//                             },
//                             {
//                                 "internalType": "uint256",
//                                 "name": "timestamp",
//                                 "type": "uint256"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "verstat",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "string",
//                                 "name": "depstat",
//                                 "type": "string"
//                             },
//                             {
//                                 "internalType": "uint256[]",
//                                 "name": "userids",
//                                 "type": "uint256[]"
//                             }
//                         ],
//                         "internalType": "struct me.patchinfo[]",
//                         "name": "",
//                         "type": "tuple[]"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "bytes",
//                         "name": "_f",
//                         "type": "bytes"
//                     }
//                 ],
//                 "name": "gettxt",
//                 "outputs": [
//                     {
//                         "internalType": "bytes",
//                         "name": "",
//                         "type": "bytes"
//                     }
//                 ],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "pidd",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "getuids",
//                 "outputs": [
//                     {
//                         "internalType": "uint256[]",
//                         "name": "",
//                         "type": "uint256[]"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "string",
//                         "name": "name",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string[]",
//                         "name": "bugdes",
//                         "type": "string[]"
//                     },
//                     {
//                         "internalType": "uint256[]",
//                         "name": "bprior",
//                         "type": "uint256[]"
//                     }
//                 ],
//                 "name": "gprior",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "string",
//                         "name": "name",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "bytes",
//                         "name": "ln",
//                         "type": "bytes"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "ver",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "plat",
//                         "type": "string"
//                     }
//                 ],
//                 "name": "hashid",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "patchidarr",
//                 "outputs": [
//                     {
//                         "internalType": "uint256[]",
//                         "name": "",
//                         "type": "uint256[]"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "pid",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "plist",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "_id",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "rvadd",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "_id",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "vadd",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "verified",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "vpatchidarr",
//                 "outputs": [
//                     {
//                         "internalType": "uint256[]",
//                         "name": "",
//                         "type": "uint256[]"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             }
//         ];
//         const Address = "0xDdC966f24103e1839C31c0eAE7CeD29A80BBC529";
//         const web3 = new Web3(window.ethereum);
//         const contract1 = new web3.eth.Contract(ABI, Address);
//         setContract(contract1);
//         setContractStatus("Connection Status: Success");
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     connectMetamask();
//     connectContract();
//   }, [setAccount, setContract, setContractStatus]);
// }

// export default useWeb3Connector;