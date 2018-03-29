import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        method="POST"
        action="send"
        id="mail-form"
      >
        <input type="text" name="name" />
        <input type="textarea" name="body" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
