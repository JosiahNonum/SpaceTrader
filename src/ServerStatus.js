import React, { useState } from "react";
import { replace } from "./DomManip";

function ServerStatus() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function getServerStatus() {
    fetch("https://api.spacetraders.io/v2/")
      .then((response) => {
        return response.json(); // return the JSON promise
      })
      .then((jsonData) => {
        setData(jsonData); // update state with JSON data
        replace("Server Status", data);
      })
      .catch((error) => {
        setError(error.message); // handle error
      });
  }

  return (
    <div>
      <h2>Server Status</h2>
      <button onClick={() => getServerStatus()}>Get Server Status</button>
    </div>
  );
}
export default ServerStatus;
