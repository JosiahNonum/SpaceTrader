import React, { useState } from "react";

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
      })
      .catch((error) => {
        setError(error.message); // handle error
      });
  }

  return (
    <div>
      <button onClick={() => getServerStatus()}>Get Server Status</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
}
export default ServerStatus;
