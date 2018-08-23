import React, { Component } from "react";
import glamorous from "glamorous";

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
      displaySuccess: false
    };
  }
  submitForm = () => {
    this.setState({ displayForms: false, displaySuccess: true })
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
                <input type="text" required autocomplete="off" />
                <label>Email:</label>
                <input type="email" required autocomplete="off" />
              </LeftSide>

              <RightSide>
                <label>Last Name:</label>
                <input type="text" required autocomplete="off" />
                <label>Phone Number:</label>
                <input type="text" required autocomplete="off" />
              </RightSide>
            </Wrapper>
            <Bottom>
              <label>Google API</label>
              <input type="text" placeholder="API" />
            </Bottom>
            <div>
              <Button onClick={() => this.submitForm()} type="submit">Submit</Button>
            </div>{" "}
          </div>
        ) : null}
        {this.state.displaySuccess ? <h3>We got your application, thank you for the submission</h3> : null}
     
      </Container>
    );
  }
}
