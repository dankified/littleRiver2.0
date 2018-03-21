import React, {Component} from 'react';

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
        <h1>Hello World!</h1>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}