import React, { useState } from "react";
import { token } from "./token";
import { replace } from "./DomManip";
import { Home, Clear } from "./View";

async function ListAgents() {
  const url = "https://api.spacetraders.io/v2/agents";
  const options = { method: "GET", headers: { Accept: "application/json" } };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    replace("Agent Status", data);
  } catch (error) {
    console.error(error);
  }
}

function GetAgentBySymbol() {
  const [agentSymbol, setAgentSymbol] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  function getAgent() {
    console.log("agentSymbol", setAgentSymbol);
    //const agentSymbol = agentSymbol;

    fetch(`https://api.spacetraders.io/v2/agents/${agentSymbol}`, options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => replace("Public Agent", data))
      .catch((error) => setError(error.message));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getAgent();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Get Agent by ID:
          <input
            type="text"
            value={agentSymbol}
            onChange={(e) => setAgentSymbol(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

function DisplayAgent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  function getAgent() {
    fetch("https://api.spacetraders.io/v2/my/agent", options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => replace("Agent Status", data))
      .catch((error) => setError(error.message));
  }

  return (
    <div className="split-layout">
      {/* Left side for user interaction */}
      <div className="left-side">
        <h1>My Contracts</h1> <Clear />
        <Home />
        <button onClick={() => getAgent()}>Get Agent Status</button>
        <button onClick={() => ListAgents()}>List Agents:</button>
        <GetAgentBySymbol />
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

export default DisplayAgent;
