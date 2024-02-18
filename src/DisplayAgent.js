import React, { useState } from "react";
import { token } from "./token";

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
      .catch((error) => setError(error.message));
  }

  return (
    <div>
      <button onClick={() => getAgent()}>Get Agent Status</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
}

export default DisplayAgent;
