import "./App.css";
import React, { useState } from "react";
import ServerStatus from "./ServerStatus";
import TokenForm from "./TokenForm";
import { token } from "./token";
import DisplayAgent from "./DisplayAgent";

function App() {
  return (
    <>
      <h1>SpaceTrader</h1>
      <TokenForm />
      <div className="initialButtons">
        <ServerStatus />
        <DisplayAgent />
      </div>
    </>
  );
}

export default App;
