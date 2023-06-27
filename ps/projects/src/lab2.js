import React, { useState, useEffect } from "react";
import axios from 'axios';
import Web3Connector from "./Web3Connector";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function Labeller2() {
    const [account, setAccount] = useState("");
    const [usid, setusid] = useState({});
    const [data56, setData56] = useState([]);
    const [contract1, setContract] = useState("");
    const [contractStatus, setContractStatus] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [modifiedValues, setModifiedValues] = useState({});

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/items');
            const items = response.data;

            // Extracting names from the items array
            const names = items.map(item => ({
                _id: item._id,
                name: item.name,
                name1: item.name1,
                name2: item.name2,
                name3: item.name3
            }));
            setData56(names);
            console.log(names);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAccept = async (card) => {
        console.log(card);

        const modifiedCard = modifiedValues[card._id];
        const version = modifiedCard && modifiedCard.version ? modifiedCard.version : card.name1;
        const description = modifiedCard && modifiedCard.description ? modifiedCard.description : card.name2;
        const feature = modifiedCard && modifiedCard.feature ? modifiedCard.feature : card.name3;
        console.log(card.name, version, description, feature);
        await contract1.methods.addbug(card.name, version, description, feature).send({ from: account });
        setData56(prevData => prevData.filter(item => item !== card));

        // Perform accept action here
    };

    const handleReject = async (card) => {
        console.log(card);
        // Perform reject action here

        // Remove the rejected card from the data56 state
        setData56(prevData => prevData.filter(item => item !== card));
        try {
            const response = await axios.delete(`http://localhost:5000/api/items/${card._id}`);
            console.log(response.data); // Optional: log the response from the server
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (cardId, field, value) => {
        setModifiedValues(prevValues => ({
            ...prevValues,
            [cardId]: {
                ...prevValues[cardId],
                [field]: value
            }
        }));
    };

    return (
        <div>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="edit-toggle"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
                <label className="form-check-label" htmlFor="edit-toggle">
                    Toggle Edit
                </label>
            </div>
            <Web3Connector
                setAccount={setAccount}
                setContract={setContract}
                setContractStatus={setContractStatus}
            />
            {data56.map((card, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">software: {card.name}</h5>
                            <div className="d-flex justify-content-between">
                                <button onClick={() => handleAccept(card)} className="btn btn-primary">Accept</button>
                                <button onClick={() => handleReject(card)} className="btn btn-danger">Reject</button>
                            </div>
                        </div>

                        <label >Version:</label>
                        <input
                            type="text"
                            className={`form-control edit-input${editMode ? '' : ' readonly'}`}
                            defaultValue={modifiedValues[card._id]?.version || card.name1}
                            readOnly={!editMode}
                            onChange={(e) => handleInputChange(card._id, 'version', e.target.value)}
                        />

                        <label >Description:</label>
                        <input
                            type="text"
                            className={`form-control edit-input${editMode ? '' : ' readonly'}`}
                            defaultValue={modifiedValues[card._id]?.description || card.name2}
                            readOnly={!editMode}
                            onChange={(e) => handleInputChange(card._id, 'description', e.target.value)}
                        />

                        <label >Feature:</label>
                        <input
                            type="text"
                            className={`form-control edit-input${editMode ? '' : ' readonly'}`}
                            defaultValue={modifiedValues[card._id]?.feature || card.name3}
                            readOnly={!editMode}
                            onChange={(e) => handleInputChange(card._id, 'feature', e.target.value)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Labeller2;
