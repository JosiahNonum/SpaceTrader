import "./App.css";
// import React, { useState } from "react";
import ServerStatus from "./ServerStatus";
import TokenForm from "./TokenForm";
import { Contract, Clear, Agent } from "./View";

function App() {
  return (
    <div className="split-layout">
      {/* Left side for user interaction */}
      <div className="left-side">
        <h1 style={{ display: "inline" }}>SpaceTrader</h1> <Clear />
        <TokenForm />
        <div className="initialButtons">
          <ServerStatus />
          <Agent />
          <Contract />
        </div>
      </div>
      {/* Right side for messages */}
      <div className="right-side">
        <h2>Messages</h2>
        <div id="messages"></div>
      </div>
    </div>
  );
}

export default App;
