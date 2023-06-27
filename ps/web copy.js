let account;
console.log(window.ethereum);
if (window.ethereum !== "undefined") {
	ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
		account = accounts[0];
	})
}
const web3 = new Web3(window.ethereum);
let abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "Accept",
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
			}
		],
		"name": "Reject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "no",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "metadata",
				"type": "bytes"
			},
			{
				"internalType": "string",
				"name": "filename",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sft",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "features",
				"type": "string"
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
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "deploy",
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
			}
		],
		"name": "download",
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
		"name": "getdetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "patchno",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "patchfile",
						"type": "bytes"
					},
					{
						"internalType": "string",
						"name": "filename",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchname",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "software",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchfeatures",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "verifystatus",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deploystatus",
						"type": "string"
					}
				],
				"internalType": "struct patch[]",
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
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "getpatch",
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
		"name": "patch_count",
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
		"name": "patches",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "patchno",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "patchfile",
				"type": "bytes"
			},
			{
				"internalType": "string",
				"name": "filename",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "patchname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "software",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "patchfeatures",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "verifystatus",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deploystatus",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
let address = "0x195b96920Ac0881aa993b7f78C4B08A0b7994fFc";
let contract = new web3.eth.Contract(abi, address);

async function register(event) {
	event.preventDefault();
	let num = document.getElementById("patchNo").value;
	let Software = document.getElementById("Software").value;
	let patch_name = document.getElementById("patchname").value;
	let patch_features = document.getElementById("features").value;
	let fileinput = document.getElementById("patchFile");
	const file = fileinput.files[0];
	console.log(file.name);
	const reader = new FileReader();
	reader.readAsArrayBuffer(file);

	reader.onload = async () => {
		const fileData = new Uint8Array(reader.result);
		let account = (await web3.eth.getAccounts())[0];
		console.log(fileData);
		console.log(account);
		contract.methods.addpatch(num, fileData, file.name, patch_name, Software, patch_features).send({ from: account }).then(() => {
			alert("Patch info successfully added to blockchain");
			window.location.reload();
		})
	}
}
let getdetails = async () => {
	let patches = await contract.methods.getdetails().call();
	console.log(patches);
	let head = "<thead><tr><th>S.No</th><th>Patch_Name</th><th>Software</th><th>Features</th><th>timestamp</th><th>Verification Status</th><th>Deploy Status</th></tr></thead>"
	let a = ["S.No", "patchname", "software", "patchfeatures", "timestamp", "verifystatus", "deploystatus"];
	let patchtable = document.createElement("table");
	patchtable.innerHTML = head;
	let tbody = document.createElement("tbody");
	let i = 0;
	for (let patch of patches) {
		let tr = document.createElement("tr");
		for (let p of a) {
			let td = document.createElement("td");
			if (p === "timestamp") {
				td.innerHTML = `${new Date(patch[p] * 1000).toLocaleString()}`;
			}
			else if (p === "S.No") {
				td.innerHTML = `${++i}`;

			}
			else {
				td.innerHTML = patch[p];
			}
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	patchtable.classList.add("table", "table-striped");
	patchtable.appendChild(tbody);
	patchtable.setAttribute("id", "tableId");
	$(function () {
		$('#tableId').DataTable();
	})
	document.getElementById("patchdtls").appendChild(patchtable);
}
let verifier = async () => {
	let a = ["patchname", "software", "timestamp", "patchfeatures"]
	let patches = await contract.methods.getdetails().call();
	let body = document.getElementById("cards");
	for (let patch of patches) {
		if (patch["verifystatus"] != "in Progress") {
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
		pn.innerHTML = `Patch_No : ${patch["patchno"]}`;
		let btns = document.createElement("div");
		btns.classList.add("d-flex", "justify-content-between");
		let accept = document.createElement("button");
		accept.classList.add("btn", "mx-3", "btn-primary");
		accept.innerHTML = "Approve";
		accept.onclick = async () => {
			contract.methods.Accept(patch["patchname"]).send({ from: account }).then(() => {
				alert("Successfully Updated");
				window.location.reload();
			})
		}
		let reject = document.createElement("button");
		reject.classList.add("btn", "mx-3", "btn-danger");
		reject.innerHTML = "Reject";
		reject.onclick = async () => {
			contract.methods.Reject(patch["patchname"]).send({ from: account }).then(() => {
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
		dnwld.innerHTML = `Download ( ${patch["filename"]} )`;
		dnwld.onclick = async () => {
			let data = await contract.methods.download(patch["patchfile"]).call();
			const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(data))], { type: 'application/octet-stream' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `${patch["filename"]}`;
			document.body.appendChild(a);
			a.click();
		}
		card.append(cardbody, dnwld);
		body.appendChild(card);
	}

}
let verified = async () => {
	let a = ["patchname", "software", "timestamp", "patchfeatures"]
	let patches = await contract.methods.getdetails().call();
	let body = document.getElementById("cards");
	for (let patch of patches) {
		if (patch["verifystatus"] == "in Progress") {
			continue;
		}
		let card = document.createElement("div");
		card.classList.add("card", "my-3");
		let cardbody = document.createElement("div");
		cardbody.classList.add("card-body");
		let header = document.createElement("div");
		let pn = document.createElement("h6");
		pn.classList.add("card-title");
		pn.innerHTML = `Patch_No : ${patch["patchno"]}`
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
		dnwld.innerHTML = `Download ( ${patch["filename"]} )`;
		dnwld.onclick = async () => {
			let data = await contract.methods.download(patch["patchfile"]).call();
			const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(data))], { type: 'application/octet-stream' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `${patch["filename"]}`;
			document.body.appendChild(a);
			a.click();
		}
		card.append(cardbody, dnwld);
		body.appendChild(card);
	}
}
let getdeploy = async () => {
	let patches = await contract.methods.getdetails().call();
	console.log(patches);
	let head = "<thead><tr><th>S.No</th><th>Patch_Name</th><th>Software</th><th>Features</th><th>timestamp</th><th>Deploy</th></tr></thead>"
	let a = ["S.No", "patchname", "software", "patchfeatures", "timestamp", "deploystatus"];
	let patchtable = document.createElement("table");
	patchtable.innerHTML = head;
	let tbody = document.createElement("tbody");
	let i = 0;
	for (let patch of patches) {
		if (patch["verifystatus"] != "Success") {
			continue;
		}
		let tr = document.createElement("tr");
		for (let p of a) {
			let td = document.createElement("td");
			if (p === "timestamp") {
				td.innerHTML = `${new Date(patch[p] * 1000).toLocaleString()}`;
			}
			else if (p === "S.No") {
				td.innerHTML = `${++i}`;

			}
			else if (p == "deploystatus" && patch[p] != "Deployed") {
				let btn = document.createElement("button");
				btn.classList.add("btn", "btn-primary");
				btn.innerHTML = "Deploy";
				btn.onclick = () => {
					contract.methods.deploy(patch["patchname"]).send({ from: account }).then(() => {
						alert("Successfully Deployed");
						window.location.reload();
					})
				}
				td.appendChild(btn);
			}
			else {
				td.innerHTML = patch[p];
			}
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	patchtable.classList.add("table", "table-striped");
	patchtable.appendChild(tbody);
	patchtable.setAttribute("id", "dtableId");
	$(function () {
		$('#dtableId').DataTable();
	})
	document.getElementById("patchdpl").appendChild(patchtable);

}