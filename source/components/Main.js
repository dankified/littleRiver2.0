import React from "react";
import Header from "./Header";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import About from "./About";

export default () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};
