import React, { useEffect, useState } from "react";
import Web3Connector from "./Web3Connector";
import Web3 from "web3";
import $ from "jquery";
import "datatables.net";
const Deployment = () => {
    const [data35, setData35] = useState([]);
    const [sr, setSr] = useState('');
    const [account, setAccount] = useState("");
    const [contract1, setContract1] = useState(null);
    const [contractStatus, setContractStatus] = useState("");

    useEffect(() => {
        if (contract1) {
            const fetchData = async () => {
                const response = await contract1.methods.getpatches().call();
                setData35(response);
                $(function () {
                    $('#myTable7').DataTable();
                });
                console.log(response);
            };

            fetchData();
        }
    }, [contract1]);


    const handleDeploy = async (patchId) => {
        await contract1.methods.dadd(patchId).send({ from: account });
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
                    <table id="myTable7" className="table table-striped table-hover" >
                        <thead>
                            <tr>
                                <th>Patch.id</th>
                                <th>Patch_Name</th>
                                <th>Software</th>
                                <th>Features</th>
                                <th>timestamp</th>
                                <th>Deployment</th>
                                <th>Deployment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data35.map((patch) => (
                                patch[7] === 'verified' && patch[8] !== 'deployed' && (
                                    <tr key={patch[0]}>
                                        <td>{patch[0]}</td>
                                        <td>{patch[1]}</td>
                                        <td>{patch[4]}</td>
                                        <td>{patch[5]}</td>
                                        <td>{new Date(patch[6] * 1000).toLocaleString()}</td>
                                        <td>
                                            <button onClick={() => handleDeploy(patch[0])}>Deploy</button>
                                        </td>
                                        <td>{patch[8]}</td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Deployment;
