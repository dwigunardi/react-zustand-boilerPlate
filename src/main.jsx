import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "../src/routes/mainRoute";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  </React.StrictMode>
);
