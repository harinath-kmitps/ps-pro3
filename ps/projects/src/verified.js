// import React, { useEffect, useState } from 'react';
// import Web3 from 'web3';
// import Web3Connector from './Web3Connector';
// const VerifiedComponent = () => {
//   const [patches, setPatches] = useState([]);
//   const [account, setAccount] = useState("");
//   const [contract1, setContract1] = useState(null);
//   const [contractStatus, setContractStatus] = useState("");

//   useEffect(() => {
//     const fetchPatches = async () => {
//       if (contract1) {
//         const fetchedPatches = await contract1.methods.getpatches().call();
//         setPatches(fetchedPatches);
//         console.log(fetchedPatches);
//       }
//     };
//     fetchPatches();
//   }, [contract1]);

//   const renderPatches = () => {
//     const a = ["patchid", "patchfilename", "patchversion", "patchplatform", "timestamp", "features"];

//     return patches.map((patch, index) => {
//       if (patch["verstat"] === "Inprogress") {
//         return null;
//       }

//       return (
//         <>
//         <Web3Connector
//           setAccount={setAccount}
//           setContract={setContract1} // Update the contract1 state value
//           setContractStatus={setContractStatus}
//         />
//         <div className="card my-3" key={index}>
//           <div className="card-body">
//             <div>
//               <h6 className="card-title">Patch_No: {patch["patchversion"]}</h6>
//             </div>
//             <div className="col-6 col-sm-4 col-md-6">
//               <table className="table table-borderless">
//                 <tbody>
//                   {a.map((i, idx) => (
//                     <tr key={idx}>
//                       <td>{i}:</td>
//                       <td>
//                         {i === "timestamp" ? (
//                           new Date(patch[i] * 1000).toLocaleString()
//                         ) : (
//                           patch[i]
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <button className="btn btn-light" onClick={() => handleDownload(patch)}>
//             Download ({patch["patchfilename"]})
//           </button>
//         </div>
//         </>
//       );
//     });
//   };

//   const handleDownload = async (patch) => {
//     const data = await contract1.methods.gettxt(patch["patchlink"]).call();
//     const blob = new Blob([new Uint8Array(Web3.utils.hexToBytes(data))], { type: 'application/octet-stream' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = patch["patchfilename"];
//     document.body.appendChild(a);
//     a.click();
//   };

//   return (
//     <div id="cards2">
//       {renderPatches()}
//     </div>
//   );
// };

// export default VerifiedComponent;
import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import Web3 from "web3";
const Verified = () => {
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
            if (patch.verstat !== "verified" && patch.verstat !=="reupload") {
              return null;
            }

            return (
              <div className="card my-3" key={patch.patchid}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h6 className="card-title">{`Patch_No: ${patch.patchversion}`}</h6>
                    <div className="d-flex justify-content-between">
                    {
                          patch.verstat==="reupload" ? 
                          (<button
                            className="btn mx-3 btn-info"
                            onClick={() => handleReject(patch.patchid)}
                          >
                            Reupload
                          </button>) : ( <p> verified</p>)
                        }
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

export default Verified;
