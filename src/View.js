import { Link } from "react-router-dom";
import { replace } from "./DomManip";

export function Home() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}

export function Clear() {
  return (
    <>
      <button onClick={() => replace()} style={{ display: "inline" }}>
        Clear
      </button>
    </>
  );
}

export function Contract() {
  return (
    <>
      <Link to="/contracts">
        <button>Contracts</button>
      </Link>
    </>
  );
}

export function Agent() {
  return (
    <>
      <Link to="/agent">
        <button>Agent</button>
      </Link>
    </>
  );
}
