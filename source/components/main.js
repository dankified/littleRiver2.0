import React, { Component } from "react";
import Header from "./Header";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import About from "./About";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Whatup people!"
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}
