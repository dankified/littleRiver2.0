import React, { Component } from "react";
import { Button, Form, Dropdown, Message } from "semantic-ui-react";
import axios from "axios";

var options = [
  { key: "Phone", value: "Phone", text: "Phone" },
  { key: "Email", value: "Email", text: "Email" },
  { key: "Other", value: "Other", text: "Other" }
];

function contactOptionChange(ev, data) {
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

function buildMailDataObject() {
  var inputs = document.getElementById("contact-form");
  var mailDataObject = {};
  for (var i = 0; i < inputs.length; i++) {
    mailDataObject[inputs[i].name] = inputs[i].value;
  }
  mailDataObject.contactOption = document.getElementById('contact-method-dropdown').children[2].getElementsByClassName('selected')[0].textContent;
  return mailDataObject;
}

function sendMail(ev) {
  this.setState({ loading: true, errorSending: false, successSending: false });
  ev.preventDefault();
  axios.post("/send", buildMailDataObject()).then(
    res => {
      this.setState({ loading: false, successSending: true });
    },
    res => {
      this.setState({loading: false, errorSending: true})
    }
  );
}

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sending: false,
      otherDisabled: true,
      loading: false,
      errorSending: false,
      successSending: false
    };
    this.contactOptionChange = contactOptionChange.bind(this);
    this.sendMail = sendMail.bind(this);
    this.buildMailDataObject = buildMailDataObject.bind(this);
  }

  render() {
    return (
      <div id="mail-form-div">
        <Message positive hidden={!this.state.successSending}>
          <Message.Header>Thanks for contacting us!</Message.Header>
          <p>We will get back to you shortly</p>
        </Message>
        <Message negative hidden={!this.state.errorSending}>
          <Message.Header>
            There was an error sending your message
          </Message.Header>
          <p>Please try again later</p>
        </Message>
        <Form
          onSubmit={this.sendMail}
          loading={this.state.loading}
          id="contact-form"
        >
          <h2>Contact</h2>
          <p>
            Little River Friesians, 150 Shady Rest Road, Havana, Florida 32333 |
            Phone: (305) 476-5151
          </p>
          <Form.Input
            label="Full Name"
            required={true}
            name="fullName"
            placeholder="Full Name"
            type="text"
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <Form.Input
              fluid
              label="Phone"
              name="phone"
              type="number"
              placeholder="Phone"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>How would you like to be contacted?</label>
              <Dropdown
                id="contact-method-dropdown"
                placeholder="Select Contact Method"
                name="contactOption"
                search={false}
                selection
                options={options}
                onChange={this.contactOptionChange}
              />
            </Form.Field>
            <Form.Input
              fluid
              name="otherContactOption"
              label="Other Contact Option"
              placeholder="Other"
              disabled={this.state.otherDisabled}
            />
          </Form.Group>
          <Form.TextArea label="Message" name="message" placeholder="Message" />
          <Button size="huge" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
