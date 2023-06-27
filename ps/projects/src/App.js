// import React from "react";

// function App() {
//   return (
//     <div>
//       <p>Welcome34455</p>
//       hvbjvhbjnk
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link,useParams, Navigate } from "react-router-dom";
// import Web3 from "web3";
import About from "./about";
import Admin from "./admin";
import Contact from "./contact";
import Home from "./home";
import Enduser from "./enduser";
import Verifier from "./verifier";
import Verifying from "./verifying";
import Verified from "./verified";
import Labeller from "./labeller";
import Connect from "./connect";
import Report from './report';
import Getrpt from "./getrpt";
import Developer from "./developer";
import History from "./history";
import MyComponent from "./preqs";
import SetPatchComponent from "./register";
import Patchrequest from "./patchrequest";
import Deployment from "./Deployment";
import Labeller2 from "./lab2";
import User from "./user";
import Upatch from "./upatch";
// import MyComponent from './getrpt';

function App() {
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-md bg-secondary">
                    <div className="container-fluid">
                        <button className="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link text-light" to="/about">about</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link text-light" to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container my-5">
                    <nav class="navbar navbar-expand-sm bg-secondary">
                        <div class="container-fluid">
                            <ul class="navbar-nav w-100">
                                <li class="nav-item col-sm text-center">
                                    <Link className="nav-link text-light" to="/enduser">end user</Link>
                                </li>
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/labeller">labeller</Link>
                                </li>
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/admin">admin</Link>
                                </li>
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/developer">developer</Link>
                                </li>
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/verifier">verifier</Link>
                                </li>
                                <li class="nav-item col-sm text-center active">
                                    <Link className="nav-link text-light" to="/user">user</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                    {/* <input
                    type="text"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)} placeholder="Enter User ID"/>
                    <button type="submit">
                    <Link to={`/about/${userId}`}>View User Profile</Link>
                    </button> */}
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                </nav> */}

                {/* <Routes>
                <Route path="/Connect" element={<Connect />} />
            </Routes>
            <Routes>
                <Route path="/" element={<Report />} />
            </Routes>
            <Routes>
                <Route path="/grpt" element={<Getrpt />} />
            </Routes> */}
                {/* <Routes>
                <Route path="/" element={<Home />} />
            </Routes> */}
                {/* <p>this is a static component</p> */}
                <Routes>
                    <Route path="/" element={<Home />} >
                        <Route path="/enduser" element={<Enduser/>}>
                            <Route path="Connect" element={<Connect />} />
                            <Route path="report" element={<Report />} />
                        </Route>
                        <Route path="/labeller" element={<Labeller/>}>
                            <Route path="grpt" element={<Getrpt />} />
                            <Route path="lab2" element={<Labeller2 />} />
                        </Route>
                        <Route path="/admin" element={<Admin/>}>
                            <Route path="prequest" element={<Patchrequest />} />
                            <Route path="deploy" element={<Deployment />} />
                            <Route path="history" element={<History />} />
                        </Route>
                        <Route path="/developer" element={<Developer/>}>
                            <Route path="preqs" element={<MyComponent />} />
                            <Route path="register/:id" element={<SetPatchComponent />} />
                        </Route>
                        <Route path="/verifier" element={<Verifier/>}>
                            <Route path="verifying" element={<Verifying />} />
                            <Route path="verified" element={<Verified />} />
                        </Route>
                        <Route path="/user" element={<User/>}>
                            <Route path="upatch" element={<Upatch />} />
                            {/* <Route path="verified" element={<Verified />} /> */}
                        </Route>
                        {/* <Route path="/admin" element={<Labeller/>}>
                            <Route path="setprior" element={<Getrpt />} />
                            <Route path="patches" element={<Getrpt />} />
                            <Route path="deploy" element={<Getrpt />} />
                        </Route> */}
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                {/* </Router> */}
            </Router>
        </>
    );
}

export default App;