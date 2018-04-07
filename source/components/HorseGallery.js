import React, {Component} from 'react';


export default class Horse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //title: props.route.title
    }
  }

  render() {
    return (
      <div>
        <h1>Horses</h1>
        {/* <h1>{this.state.title}</h1> */}
      </div>
    )
  }
}