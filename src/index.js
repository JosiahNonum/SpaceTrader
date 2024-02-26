import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import Contracts from "./Contracts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAgent from "./DisplayAgent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/Agent" element={<DisplayAgent />} />
      </Routes>
    </BrowserRouter>
  </>
);
