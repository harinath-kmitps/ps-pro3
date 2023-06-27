// import React, { useEffect, useState } from "react";
// import Web3Connector from "./Web3Connector";
// import Web3 from "web3";
// const Verifying = () => {
//   const [patches, setPatches] = useState([]);
//   const [account, setAccount] = useState("");
//   const [contract1, setContract1] = useState(null);
//   const [contractStatus, setContractStatus] = useState("");

//   useEffect(() => {
//     const fetchPatches = async () => {
//       if (contract1) {
//         console.log(contract1.methods);
//       const fetchedPatches = await contract1.methods.getpatches().call();
//       setPatches(fetchedPatches);
//       console.log(fetchedPatches);
//       }
//     };
//     fetchPatches();
//   }, [contract1]);

//   const handleApprove = async (patchId) => {
//     await contract1.methods.vadd(patchId).send({ from: account });
//     alert("Successfully Updated");
//     // window.location.reload();
//   };

//   const handleReject = async (patchId) => {
//     await contract1.methods.rvadd(patchId).send({ from: account });
//     alert("Successfully Updated");
//     // window.location.reload();
//   };

//   const handleDownload = async (patchLink, patchFilename) => {
//     const data = await contract1.methods.gettxt(patchLink).call();
//     const blob = new Blob([new Uint8Array(Web3.utils.hexToBytes(data))], {
//       type: "application/octet-stream",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = patchFilename;
//     document.body.appendChild(a);
//     a.click();
//   };

//   return (
//     <>
//     <Web3Connector
//           setAccount={setAccount}
//           setContract={setContract1} // Update the contract1 state value
//           setContractStatus={setContractStatus}
//         />
//     <div className="container border border-secondary p-3">
//       <div id="cards">
//         {patches.map((patch) => {
//           if (patch.verstat !== "Inprogress") {
//             return null;
//           }

//           return (
//             <div className="card my-3" key={patch.patchid}>
//               <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                   <h6 className="card-title">{`Patch_No: ${patch.patchversion}`}</h6>
//                   <div className="d-flex justify-content-between">
//                     <button
//                       className="btn mx-3 btn-primary"
//                       onClick={() => handleApprove(patch.patchid)}
//                     >
//                       Approve
//                     </button>
//                     <button
//                       className="btn mx-3 btn-danger"
//                       onClick={() => handleReject(patch.patchid)}
//                     >
//                       Reject
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-6 col-sm-4 col-md-6">
//                   <table className="table table-borderless">
//                     <tbody>
//                       {[
//                         "patchid",
//                         "patchfilename",
//                         "patchversion",
//                         "patchplatform",
//                         "timestamp",
//                         "features",
//                       ].map((i) => (
//                         <tr key={i}>
//                           <td>{`${i} :`}</td>
//                           <td>
//                             {i === "timestamp"
//                               ? new Date(patch[i] * 1000).toLocaleString()
//                               : patch[i]}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <button
//                   className="btn btn-light"
//                   onClick={() =>
//                     handleDownload(patch.patchlink, patch.patchfilename)
//                   }
//                 >
//                   Download ({patch.patchfilename})
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Verifying;
import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import Web3 from "web3";
const Verifying = () => {
  const [patches, setPatches] = useState([]);
  const [account, setAccount] = useState("");
  const [contract1, setContract1] = useState(null);
  const [contractStatus, setContractStatus] = useState("");


  useEffect(() => {
    const fetchPatches = async () => {
      if (contract1) {
        const fetchedPatches = await contract1.methods.getpatches().call();
        setPatches(fetchedPatches);
        console.log(fetchedPatches);
      }
    };
    fetchPatches();
  }, [contract1]);

  const handleApprove = async (patchId) => {
    await contract1.methods.vadd(patchId).send({ from: account });
    alert("Successfully Updated");
    // window.location.reload();
  };

  const handleReject = async (patchId) => {
    await contract1.methods.rvadd(patchId).send({ from: account });
    alert("Successfully Updated");
    // window.location.reload();
  };

  const handleDownload = async (patchLink, patchFilename) => {
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

  return (
    <>
    <Web3Connector
          setAccount={setAccount}
          setContract={setContract1} // Update the contract1 state value
          setContractStatus={setContractStatus}
        />
      <div className="container border border-secondary p-3">
        <div id="cards">
          {patches.map((patch) => {
            if (patch.verstat !== "Inprogress") {
              return null;
            }

            return (
              <div className="card my-3" key={patch.patchid}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h6 className="card-title">{`Patch_No: ${patch.patchversion}`}</h6>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn mx-3 btn-primary"
                        onClick={() => handleApprove(patch.patchid)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn mx-3 btn-danger"
                        onClick={() => handleReject(patch.patchid)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-6">
                    <table className="table table-borderless">
                      <tbody>
                        {[
                          "patchid",
                          "patchfilename",
                          "patchversion",
                          "patchplatform",
                          "timestamp",
                          "features",
                        ].map((i) => (
                          <tr key={i}>
                            <td>{`${i} :`}</td>
                            <td>
                              {i === "timestamp"
                                ? new Date(patch[i] * 1000).toLocaleString()
                                : patch[i]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button
                    className="btn btn-light"
                    onClick={() =>
                      handleDownload(patch.patchlink, patch.patchfilename)
                    }
                  >
                    Download ({patch.patchfilename})
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Verifying;
