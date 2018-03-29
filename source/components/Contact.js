import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mail-form-div">
        <form method="POST" action="send" id="mail-form">
          <input type="submit" value="Send email" />
        </form>
      </div>
    );
  }
}
