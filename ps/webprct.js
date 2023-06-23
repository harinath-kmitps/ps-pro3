let account;
console.log(window.ethereum);
if (window.ethereum !== "undefined") {
	ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
		account = accounts[1];
	})
}
const web3 = new Web3(window.ethereum);
let abi = [
	{
		"inputs": [],
		"name": "fdata",
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
		"inputs": [],
		"name": "get",
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
				"internalType": "bytes",
				"name": "metadata",
				"type": "bytes"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
let address = "0x13313d1Ec427066238D8c77Af2799A31bFC903d8";
let contract = new web3.eth.Contract(abi, address);
async function get() {
	let fileinput = document.getElementById("file");
	const file = fileinput.files[0];

	const reader = new FileReader();
	reader.readAsArrayBuffer(file);

	reader.onload = async () => {
		const fileData = new Uint8Array(reader.result);
		let account = (await web3.eth.getAccounts())[1];
		console.log(fileData);
		console.log(account);
		contract.methods.set(fileData).send({ from: account }).then(() => {
			console.log("Succefully added");
		}).then(() => {
			return contract.methods.get().call();
		}).then((data) => {
			document.getElementById("data").innerHTML = data;
			// const uintarray = new Uint8Array(web3.utils.hexToBytes(data));
			// var string = new TextDecoder().decode(uintarray);
			// console.log("Hello"+string);
			// const hexString = web3.utils.hexToAscii(data);
			console.log(web3.utils.hexToBytes(data));
			const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(data))], { type: 'application/octet-stream' });
			console.log(blob);
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			console.log(url);
			a.download = 'file.exe';
			document.body.appendChild(a);
			a.click();
		})
	}
}