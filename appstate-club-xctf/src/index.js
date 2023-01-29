import React from "react";
import App from "./App";
import "./styles/index.scss";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
