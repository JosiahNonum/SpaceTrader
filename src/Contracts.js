import React, { useState } from "react";
import { token } from "./token";
import { Home, Clear } from "./View";
import { replace } from "./DomManip";

function GetContractByID() {
  const [contractID, setContractID] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  function getContract() {
    console.log("contractID", contractID);
    const contractId = contractID;

    fetch(`https://api.spacetraders.io/v2/my/contracts/${contractId}`, options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => replace("Contract Status", data))
      .catch((error) => setError(error.message));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getContract();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Get Contract by ID:
          <input
            type="text"
            value={contractID}
            onChange={(e) => setContractID(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

function Contract() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function getContract() {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    fetch("https://api.spacetraders.io/v2/my/contracts", options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => replace("Contract Status", data))
      .catch((error) => setError(error.message));
  }

  return (
    <div className="split-layout">
      {/* Left side for user interaction */}
      <div className="left-side">
        <h1>My Contracts</h1> <Clear />
        <Home />
        <button onClick={() => getContract()}>Get Contract Status</button>
        <GetContractByID />
      </div>
      {/* Right side for messages */}
      <div className="right-side">
        <h2>Messages</h2>
        <div id="messages"></div>

        {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default Contract;
