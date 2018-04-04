import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default () => {
  return (
    <Router>
      <div id="main-div">
        <Header />
          <div id="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
          </div>
        <Footer />
      </div>
    </Router>
  );
};
