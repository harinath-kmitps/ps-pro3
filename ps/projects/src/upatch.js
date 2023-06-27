import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Connector from './Web3Connector';
import axios from 'axios';
const Upatch = () => {
  const [data35, setData35] = useState([]);
  const [data44, setData44] = useState([]);
  const [data45, setData45] = useState([]);
  const [data56, setData56] = useState([]);
  const [items, setItems] = useState([]);
  const [account, setAccount] = useState("");
  const [contract1, setContract1] = useState(null);
  const [contractStatus, setContractStatus] = useState("");
  const [sr2, setSr2] = useState('');
  const [sr3, setSr3] = useState('');
  const [sr4, setSr4] = useState('');

  useEffect(() => {
    if(contract1){
        getPatchData();
    }
  }, [contract1,data44]);

  const getPatchData = async () => {
    setData35(await contract1.methods.getpatches().call());
    setData44(await contract1.methods.getArray().call());
  };
  const handleDownload2 = async (patchLink, patchFilename) => {
    console.log(patchLink, patchFilename);
    const data = await contract1.methods.gettxt(patchLink).call();
    const blob = new Blob([new Uint8Array(Web3.utils.hexToBytes(data))], {
      type: "application/octet-stream",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = patchFilename;
    document.body.appendChild(a);
    a.click();
  };


  const handleDownload = async (patchId,patchLink,patchFilename,software) => {
    setData45(patchId);
    console.log(patchId,patchLink,patchFilename,software);
  try {
    await axios.post('http://localhost:5000/api/downloads', { software:software,fname: patchFilename,uname:"harinath" });
  } catch (error) {
    console.error(error);
  }
    // await contract1.methods.download(patchId).send({ from: account });
    // const data = await contract1.methods.gettxt(patchLink).call();
    // const blob = new Blob([new Uint8Array(Web3.utils.hexToBytes(data))], {
    //   type: "application/octet-stream",
    // });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = patchFilename;
    // document.body.appendChild(a);
    // a.click();
    // window.location.reload();
  };

  return (
    <>
    <Web3Connector
          setAccount={setAccount}
          setContract={setContract1} // Update the contract1 state value
          setContractStatus={setContractStatus}
        />
    <div className="border border-secondary table-responsive">
        <div className="col-8 mx-auto my-5">
      <table id="myTable5">
        <thead>
          <tr>
            <th>Patch.id</th>
            <th>Patch_Name</th>
            <th>Software</th>
            <th>Features</th>
            <th>timestamp</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {data35.map((patch) => {
            if (patch[8] === 'deployed') {
              return (
                <tr key={patch[0]}>
                  <td>{patch[0]}</td>
                  <td>{patch[1]}</td>
                  <td>{patch[4]}</td>
                  <td>{patch[5]}</td>
                  <td>{new Date(patch[6] * 1000).toLocaleString()}</td>
                  <td>
                    {data44.includes(patch[0]) ? (
                      <span>Downloaded</span>
                    ) : (
                      <button onClick={() => {handleDownload2(patch[2],patch.patchfilename);handleDownload(patch[0],patch[2],patch.patchfilename,patch[4])}}>Download</button>
                    )}
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export default Upatch;
