import React, { Component } from "react";
import {mainVideoUrl} from "../../config/keys";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="home">
        <video id="main-video" autoplay="true" loop muted="true" src={mainVideoUrl}></video>
      </div>
    )
  }
}
