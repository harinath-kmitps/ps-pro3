import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import Web3Connector from "./Web3Connector";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
// import Connect from "./Connect";
function Getrpt() {
    const [account, setAccount] = useState("");
    const [data56, setData56] = useState([]);
    const [contract1, setContract] = useState("");
    const [contractStatus, setContractStatus] = useState("");
    const [software, setSoftware] = React.useState("");
    const options = ['chrome', 'vscode', 'sudoko'];
    // const options2 = [1,2,3,4,5];
    // const onOptionChangeHandler = (event) => {
    //     console.log("User Selected Value - ", event.target.value)
    // }
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     await contract1.methods.addbug(software, version, description, fts).send({ from: account });
    //     console.log("def");
    // };
    const [arr3, setArr3] = useState([]);
    const [arr4, setArr4] = useState([]);
    // const [a, setArr4] = useState([]);
    let a;
    const getreport = async (sft) => {
        // bname=document.getElementById("s4").value;
        const re = [];
        setSoftware(sft);
        await contract1.methods.gbug(sft).call().then(result => {
            for (var i = 0; i < result.length; i++) {
                if (result[i] && result[i][4] === "0") {
                    re.push(result[i]);
                    // arr4.push(data56[i][2]);
                    // arr4.push(result[i][2]);
                }
            }
            setData56(re);
            console.log(re);
        })
        // for (var i = 0; i < result.length; i++) {
        //     if (result[i] && result[i][4] === "0") {
        //         re.push(result[i]);
        //         // arr4.push(data56[i][2]);
        //         // arr4.push(result[i][2]);
        //     }
        // }
        // setData56(re);
        // let data56 = await window.contract1.methods.gbug(sft).call();
        $(function () {
            $('#myTable4').DataTable();
        });
    };
    const handleDropdownChange = (event, index) => {
        const newArr3 = [...arr3,event];
        const newArr4 = [...arr4,data56[index][2]];
        // newArr3[index] = event;
        // newArr4[index] = data56[index][2];
        setArr4(newArr4);
        console.log(arr4);
        // console.log(index);
        setArr3(newArr3);
        console.log(arr3);
    };
    const submitpr = async () => {
        console.log("hello");
        console.log(software,arr4, arr3);
        await contract1.methods.gprior(software,arr4,arr3).send({ from: account });
        document.getElementById("cona").innerHTML = "priority sent";
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
            {/* <div class="container my-5">
                    <nav class="navbar navbar-expand-sm bg-secondary">
                        <div class="container-fluid">
                            <ul class="navbar-nav w-100">
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/grpt">Set Priority</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> */}
            <div class="border border-secondary">
                <div class="col-8 mx-auto my-5">
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label" for="patchNo">Softwares</label>
                        <div class="col-sm class-sm-5 col-lg-4">
                            <select class="form-select" id="software" onChange={(event) => { getreport(event.target.value) }}>
                                <option selected>Choose software...</option>
                                {options.map((option, index) => {
                                    return <option key={index} >
                                        {option}
                                    </option>
                                })}
                            </select>
                        </div>
                    </div>
                    <table id="myTable4" class="table table-striped table-hover">
                        <thead>
                            <tr>
                                {/* <th>bug id</th> */}
                                <th>Software</th>
                                <th>Version</th>
                                <th>bug description</th>
                                <th>Features</th>
                                <th>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data56.map((row, i) => (
                                <tr key={i}>
                                    <td>{row[0]}</td>
                                    <td>{row[1]}</td>
                                    <td>{row[2]}</td>
                                    <td>{row[3]}</td>
                                    <td><select class="dropdown" onChange={(e) => handleDropdownChange(e.target.value, i)}>
                                        {/* <option selected>Choose priority...</option>
                            {options2.map((option, index) => {
                                return <option key={index} >
                                    {option}
                                </option> */}
                                        <option selected>choose priority</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        {/* })} */}
                                    </select></td>
                                    {/* <td>{row[4]}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button class="btn btn-primary" onClick={submitpr}>submit</button>
                    <p id="cona"></p>
                </div>
            </div>
        </>
    );
}
export default Getrpt;