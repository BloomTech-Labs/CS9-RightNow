import React, { Component } from "react";
import glamorous from "glamorous";
import PlacesAPI from "../placesAPI/search_autocomplete";

import {
  Container,
  LeftSide,
  RightSide,
  Bottom,
  Wrapper,
  Button
} from "./business-styles-account";

export default class BusinessAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForms: true,
      displaySuccess: false,
      email: "",
      firstName: "",
      lastName: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  submitForm = () => {
    this.setState({
      displayForms: false,
      displaySuccess: true,
      email: "",
      firstName: "",
      lastName: "",
      phone: ""
    });
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Container>
        {this.state.displayForms ? (
          <div>
            <h3>Business SignUp</h3>
            <hr />
            <Wrapper>
              <LeftSide>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.firstName}
                  required
                  autocomplete="off"
                />
                <label>Email:</label>
                <input
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  required
                  autocomplete="off"
                />
              </LeftSide>

              <RightSide>
                <label>Last Name:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="lastName"
                  value={this.state.lastName}
                  required
                  autocomplete="off"
                />
                <label>Phone Number:</label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="phone"
                  value={this.state.phone}
                  required
                  autocomplete="off"
                />
              </RightSide>
            </Wrapper>
            <Bottom>
              <label>Google API</label>
              <PlacesAPI />
            </Bottom>
            <div>
              <Button onClick={() => this.submitForm()} type="submit">
                Submit
              </Button>
            </div>{" "}
          </div>
        ) : null}
        {this.state.displaySuccess ? (
          <h3>We got your application, thank you for the submission</h3>
        ) : null}
      </Container>
    );
  }
}
