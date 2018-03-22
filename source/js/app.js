import React from "react";
import Main from "../components/Main";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("root")
);
