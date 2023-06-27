import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import Web3Connector from "./Web3Connector";
import $ from "jquery";
import "datatables.net";

function Patchrequest() {
    const [account, setAccount] = useState("");
    const [data56, setData56] = useState([]);
    const [contract1, setContract] = useState(null); // Initialize contract1 state with null
    const [contractStatus, setContractStatus] = useState("");
    const [software, setSoftware] = useState("");
    const options = ["chrome", "vscode", "sudoko"];
    const [bugDescriptions, setBugDescriptions] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const getreport = async (sft) => {
        const re = [];
        setSoftware(sft);
        const result = await contract1.methods.gbug(sft).call();
        console.log(result);
        // for (var i = 0; i < result.length; i++) {
        //   if (result[i] && result[i][5] === "0") {
        //     re.push(result[i]);
        //   }
        // }
        setData56(result);
        $(function () {
            $('#myTable4').DataTable();
        });
    };

    const handleCheckboxChange = (event, index) => {
        let updatedSelectedFeatures = [];
        let updatedBugDescriptions = [];
        const { checked, name } = event.target;
        console.log(index);
        if (name === "bugDescription") {
            if (checked) {
                // updatedBugDescriptions.push(data56[index][2]);
                updatedBugDescriptions = [...bugDescriptions, data56[index][2]];

            } else {
                const indexToRemove = updatedBugDescriptions.indexOf(data56[index][2]);
                if (indexToRemove !== -1) {
                    updatedBugDescriptions.splice(indexToRemove, 1);
                }
            }
            setBugDescriptions(updatedBugDescriptions);
        }
        else if (name === "feature") {
            if (checked) {
                // updatedSelectedFeatures.push(data56[index][3]);
                updatedSelectedFeatures = [...selectedFeatures, data56[index][3]];
            } else {
                const indexToRemove = updatedSelectedFeatures.indexOf(data56[index][3]);
                if (indexToRemove !== -1) {
                    updatedSelectedFeatures.splice(indexToRemove, 1);
                }
            }
            setSelectedFeatures(updatedSelectedFeatures);
        }
    };

    const submitpr = async () => {
        if (!contract1) {
            console.error("Contract is not initialized");
            return;
        }

        if (!account) {
            console.error("Account is not set");
            return;
        }

        console.log("Selected Bug Descriptions:", bugDescriptions);
        console.log("Selected Features:", selectedFeatures);
        console.log(software);
        const result = await contract1.methods.gbf(software, bugDescriptions, selectedFeatures).send({ from: account });
        console.log(result);
        //   document.getElementById("cona2").innerHTML = "Patch request sent";
        //   document.getElementById("cona2").innerHTML = "Failed to send patch request";
    };

    return (
        <>
            <div>
                <p>Account is: {account}</p>
                <p id="contractArea">{contractStatus}</p>
            </div>
            <Web3Connector
                setAccount={setAccount}
                setContract={setContract}
                setContractStatus={setContractStatus}
            />
            <div className="border border-secondary">
                <div className="col-8 mx-auto my-5">
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label" htmlFor="patchNo">Softwares</label>
                        <div className="col-sm class-sm-5 col-lg-4">
                            <select className="form-select" id="software" onChange={(event) => { getreport(event.target.value) }}>
                                <option selected>Choose software...</option>
                                {options.map((option, index) => {
                                    return <option key={index}>{option}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <table id="myTable4" className="table table-striped table-hover">
                        <thead>
                            <tr>
                                {/* <th>bug id</th> */}
                                <th>bug description</th>
                                <th>priority</th>
                                <th>select bug</th>
                                {/* <th>Features</th>
                <th>select feature</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data56.map((row, i) => (
                                row[5] == 0 && row[4] != 0 ? (

                                    <tr key={i}>
                                        {/* <td>{i}</td> */}
                                        <td>{row[2]}</td>
                                        <td>{row[4]}</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                name="bugDescription"
                                                onChange={(event) => handleCheckboxChange(event, i)}
                                            />
                                        </td></tr>
                                ) : null
                            ))}
                        </tbody>

                        <thead>
                            <th>Features</th>
                            <th>select feature</th>
                        </thead>
                        <tbody>
                            {data56.map((row, i) => (
                                row[6] == 0 && row[4] != 0?(
                                <tr key={i}>
                                    <td>{row[3]}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="feature"
                                            onChange={(event) => handleCheckboxChange(event, i)}
                                        />
                                    </td>
                                </tr>

                                ):null
                            ))}
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={submitpr}>Submit</button>
                </div>
            </div>
        </>
    );
};

export default Patchrequest;
// const [count,setCount] = useState();
// setCount(count+1);
{/* <h1>Render Count: {count}</h1> */ }