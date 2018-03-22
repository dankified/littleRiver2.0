import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <ul id="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
    )
  }
}
