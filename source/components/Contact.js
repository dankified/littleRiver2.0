import React, { Component } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

var options = [
  { key: "Phone", value: "Phone", text: "Phone" },
  { key: "Email", value: "Email", text: "Email" },
  { key: "Other", value: "Other", text: "Other" }
];

function contactOptionChange(ev, data) {
  console.log("Event", ev);
  console.log("Data", data);
  if (data.value === "Other") {
    this.setState({
      otherDisabled: false
    });
  } else {
    this.setState({
      otherDisabled: true
    });
  }
}

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sending: false,
      otherDisabled: true
    };
    this.contactOptionChange = contactOptionChange.bind(this);
  }

  render() {
    return (
      <div id="mail-form-div">
        <h2>Contact</h2>
        <p>
          Little River Friesians, 150 Shady Rest Road, Havana, Florida 32333 |
          Phone: (305) 476-5151
        </p>
        <Form>
          <Form.Input
            label="Full Name"
            required={true}
            placeholder="Full Name"
            type="text"
          />
          <Form.Group widths="equal">
            <Form.Input fluid label="Email" type= "email" placeholder="Email" />
            <Form.Input fluid label="Phone" type="number" placeholder="Phone" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>How would you like to be contacted?</label>
              <Dropdown
                placeholder="Select Contact Method"
                search={false}
                selection
                options={options}
                onChange={this.contactOptionChange}
              />
            </Form.Field>
            <Form.Input
              fluid
              label="Other Contact Option"
              placeholder="Other"
              disabled={this.state.otherDisabled}
            />
          </Form.Group>
          <Form.TextArea label="Message" placeholder="Message" />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
