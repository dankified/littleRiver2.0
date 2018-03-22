import React, { Component } from "react";
import Header from "./Header";

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
      </div>
    );
  }
}
