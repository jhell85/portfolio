import React, { Component } from "react";
import axios from "axios";
import { Form, Input, TextArea, Button, Message, Container } from "semantic-ui-react";
class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit",
      SentMessage: false,
    };
  }
  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ status: "Sending" });
    axios({
      method: "POST",
      url: "https://portfolio-josh.herokuapp.com/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        // alert("Message Sent");
        this.setState({ SentMessage: true });
        this.setState({ name: "", email: "", message: "", status: "Submit" });
      } else if (response.data.status === "failed") {
        alert("Message Failed");
      }
    });
  }

  render() {
    return (
      <Container className="padded-container">
        <Container textAlign="center" style={{ paddingBottom: "10px" }}>
          <h2>Want to Connect?</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/joshuahellman/"
          >
            <Button circular size="big" color="linkedin" icon="linkedin" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jhell85">
            <Button circular size="big" color="github" icon="github" />
          </a>
          <a href="mailto:JoshuaHellman@icloud.com">
            <Button circular size="big" color="yellow" icon="mail" />
          </a>
        </Container>
        <Container>
          <Message
            color="teal"
            hidden={this.state.SentMessage ? false : true}
            textAlign="center"
          >
            <h3>Thank You</h3>
            <p> If requested I'll respond to your message promptly </p>
          </Message>

          <Form
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
            loading={this.state.status === "Sending" ? true : false}
          >
            <Form.Group widths="equal">
              <Form.Field
                id="name"
                control={Input}
                // label="name"
                placeholder="who are you?"
                value={this.state.name}
                required
                onChange={(e) => this.setState({ name: e.target.value })}
              />

              <Form.Field
                id="email"
                control={Input}
                // label="email"
                placeholder="email"
                required
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </Form.Group>

            <TextArea
              placeholder="Want to tell me something?"
              label="message"
              id="message"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              required
            />
            <Form.Field
              control={Button}
              color="yellow"
              type="submit"
              content="Submit"
              disabled={!this.state.email || !this.state.name || !this.state.message}
            />
          </Form>
        </Container>
      </Container>
    );
  }
}

export default ContactForm;
