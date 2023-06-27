let account;
        const connectMetamask = async () => {
            if(window.ethereum !== "undefined"){
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
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
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "adid",
                            "type": "uint256"
                        }
                    ],
                    "name": "add",
                    "outputs": [],
                    "stateMutability": "nonpayable",
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
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ];
            const Address = "0x300109e3d283D37a2787147b8fced4c7655cf1BE";
            window.web3 = await new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            document.getElementById("contractArea").innerHTML = "Connection Status: Success";
        }

        const readWord = async () => {
            const d2 = document.getElementById("cid").value;
            const data = await window.contract.methods.get(d2).call();
            document.getElementById("dataArea").innerHTML = `Word is: ${data[0]},${data[1]}`;
        }

        const changeWord = async () => {
            const myEntry = document.getElementById("inputArea").value;
            const myEntry2 = document.getElementById("inputArea2").value;
            await window.contract.methods.add(myEntry,myEntry2).send({ from: account });
        }
        