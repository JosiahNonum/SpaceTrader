import React, { useState } from "react";

function TokenForm() {
  const [token, setToken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The token you entered was: ${token}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Set Token:
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default TokenForm;
