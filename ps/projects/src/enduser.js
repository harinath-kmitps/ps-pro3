import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import { BrowserRouter as Router, Routes,useParams, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Enduser() {
    let { id } = useParams();
    return (
            <div class="container my-5">
                    <nav class="navbar navbar-expand-sm bg-secondary">
                        <div class="container-fluid">
                            <ul class="navbar-nav w-100">
                                <li class="nav-item col-sm text-center">
                                    <Link className="nav-link text-light" to="report">Report</Link>
                                </li>
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="Connect">Get Report</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <p>{id}</p>
                    <Outlet/>
                </div>
    );
}
export default Enduser;