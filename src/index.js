import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LoadingManager from "utils/LoadingManager";
import Loading from "Components/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingManager>
        <Loading />
        <App />
      </LoadingManager>
    </BrowserRouter>
  </React.StrictMode>
);
