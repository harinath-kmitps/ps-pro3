import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import axios from 'axios';
import Web3Connector from "./Web3Connector";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
function Report() {
    let Navigate = useNavigate();
    const [account, setAccount] = useState("");
    const [usid, setusid] = useState({});
    const [data56, setData56] = useState([]);
    const [contract1, setContract] = useState("");
    const [contractStatus, setContractStatus] = useState("");
    const [software, setSoftware] = React.useState("");
    const [version, setVersion] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [fts, setFts] = React.useState("");
    const [items1, setItems1] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
      }, []);
    
    //   const fetchItems = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:5000/api/items');
    //       setItems1(response.data);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
      const fetchItems = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/items');
          const items = response.data;
      
          // Extracting names from the items array
          const names = items.map(item => ({
            name: item.name,
            name1: item.name1,
            name2: item.name2,
            name3: item.name3
          }));
      
          console.log(names);
        } catch (error) {
          console.error(error);
        }
      };
      
      
    //   const handleUpdate = async () => {
    //     try {
    //       const updateData = {
    //         software: software,
    //         version: version,
    //         description: description,
    //         fts: fts,
    //       };
      
    //       const itemName = 'chrome'; // Replace with the actual name of the item to update
      
    //       const response = await axios.put(`http://localhost:5000/api/items/${itemName}`, updateData);
    //       console.log(response.data); // Handle the updated item data
      
    //       // Clear the form
    //       setSoftware('');
    //       setVersion('');
    //       setDescription('');
    //       setFts('');
      
    //       // Redirect or perform any other necessary actions
    //     } catch (error) {
    //       console.error(error);
    //       // Handle error
    //     }
    //   };
      
      
    const options = ['chrome', 'vscode', 'sudoko'];
    // const onOptionChangeHandler = (event) => {
    //     console.log("User Selected Value - ", event.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/items', { software,version,description,fts });
            console.log(response.data);
            console.log("hello world");
            console.log(items);
            setItems([...items, response.data]);
            setSoftware('');
            setVersion('');
            setDescription('');
            setFts('');
    } catch (error) {
        console.error(error);
    }
    // // event.preventDefault();
    // // <Link to={`/about/${usid}`}>View User Profile</Link>
    // await contract1.methods.addbug(software, version, description, fts).send({ from: account });
        // console.log("def");
        // console.log(software, version, description, fts);
        // // let id={
        // //     software, version, description, fts
        // // }
        // // console.log(id);
        // // setusid(id);
        // // console.log(usid);
        // // Navigate(`/about/${software}`);

    };



    return (
        <>
            <div>
                <p>Account is: {account}</p>
                <p id="contractArea">{contractStatus}</p>
            </div>
            <ul>
                {items1.map((item) => (
                <li key={item._id}>{item.name}</li>
                ))}
            </ul>
            {/* <Web3Connector
        setAccount={setAccount}
        setContract={setContract}
        setContractStatus={setContractStatus}
      /> */}
            {/* <div class="container my-5">
                    <nav class="navbar navbar-expand-sm bg-secondary">
                        <div class="container-fluid">
                            <ul class="navbar-nav w-100">
                                <li class="nav-item col-sm text-center">
                                    <Link className="nav-link text-light" to="/report">Report</Link>
                                </li>
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/Connect">Get Report</Link>
                                </li>
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/grpt">Set Priority</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> */}
            <div class="border border-secondary">
                <div class="col-8 mx-auto my-5">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div class="row mb-3">
                            <label class="col-sm-4 col-form-label" for="patchNo">Softwares</label>
                            <div class="col-sm class-sm-5 col-lg-4">
                                <select class="form-select" id="software" name="software" onChange={(event) => setSoftware(event.target.value)} value={software}>
                                    <option selected>Choose software...</option>
                                    {options.map((option, index) => {
                                        return <option key={index} >
                                            {option}
                                        </option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-4 col-form-label" for="patchNo">Version</label>
                            <div class="col-sm class-sm-5 col-lg-4">
                                <input type="text" class="form-control" name="version" id="version" onChange={(event) => setVersion(event.target.value)} value={version} />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-4 col-form-label" for="Software">Description</label>
                            <div class="col-sm col-sm-6">
                                <textarea id="description" name="description" class="w-100" rows="3" onChange={(event) => setDescription(event.target.value)} value={description}></textarea>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-4 col-form-label" for="features"> Optional Features</label>
                            <div class="col-sm col-sm-6">
                                <textarea id="fts" name="fts" class="w-100" rows="3" onChange={(event) => setFts(event.target.value)} value={fts}></textarea>
                            </div>
                        </div>
                        <button class="btn btn-primary" type="submit" >
                            submit report
                        </button>
                        </form>
                        {/* <button onClick={handleUpdate}>Update Item</button> */}
                </div>
            </div>
        </>
    );
}

export default Report;