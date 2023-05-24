import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WalletConnet } from "./utils/WalletContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WalletConnet>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WalletConnet>
  </React.StrictMode>
);
