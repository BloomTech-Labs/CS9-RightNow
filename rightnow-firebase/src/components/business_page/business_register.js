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
  render() {
    return (
      <Container>
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
          <Button type="submit">Submit</Button>
        </div>
      </Container>
    );
  }
}
