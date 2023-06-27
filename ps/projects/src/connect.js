import React, { useState } from "react";
import Web3Connector from "./Web3Connector";
import $ from "jquery";
import "datatables.net";
function Connect() {
  const [account, setAccount] = useState("");
  const [data56, setData56] = useState([]);
  const [contract1, setContract] = useState("");
  const [contractStatus, setContractStatus] = useState("");
  const options = ['chrome', 'vscode', 'sudoko'];
  const getreport2 = async (sft) => {
    // bname=document.getElementById("s4").value;
    const result = await contract1.methods.gbug(sft).call();
    setData56(result);
    // let data56 = await window.contract1.methods.gbug(sft).call();
    console.log(data56);
    $(function () {
        $('#myTable3').DataTable();
    });
};
  // ... Rest of the code

  return (
    <>
      <div>
        <p>Account is: {account}</p>
      </div>
      {/* ... Rest of the code */}
      <Web3Connector
        setAccount={setAccount}
        setContract={setContract}
        setContractStatus={setContractStatus}
      />
      {/* ... Rest of the code */}
      <div class="border border-secondary">
        <div class="col-8 mx-auto my-5">
                <div class="row mb-3">
                    <label class="col-sm-4 col-form-label" htmlFor="patchNo">Softwares</label>
                    <div class="col-sm class-sm-5 col-lg-4">
                    <select className="form-select" id="software" onChange={(event) =>getreport2(event.target.value)}>
                            <option selected>Choose software...</option>
                            {options.map((option, index) => {
                                return <option key={index} >
                                    {option}
                                </option>
                            })}
                          </select>
                    </div>
                </div>
                <table id="myTable3" class="table table-striped table-hover table-responsive">
                <thead>
                <tr>
                    {/* <th>bug id</th> */}
                    <th>Software</th>
                    <th>Version</th>
                    <th>bug description</th>
                    <th>Features</th>
                </tr>
                </thead>
                <tbody>
                {data56.map((row, i) => (
                    <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    {/* <td>{row[4]}</td> */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
  );
}

export default Connect;
