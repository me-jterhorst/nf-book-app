import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { browserRouter as Router } from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
