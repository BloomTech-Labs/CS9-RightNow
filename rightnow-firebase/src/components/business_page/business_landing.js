import React, { Component } from "react";
import * as routes from "../../constants/routes";
import glamorous from "glamorous";

import {
  Container,
  LeftSide,
  TopLeft,
  MiddleLeft,
  BottomLeft,
  Button,
  RightSide,
  TopRight,
  Text,
  MiddleRight,
  Text2,
  BottomRight
} from "./styles-business";

export default class BusinessLanding extends Component {
  render() {
    return (
      <Container>
        <LeftSide>
          <TopLeft>TAKE ADVANTAGE</TopLeft>
          <MiddleLeft>OF YOUR BUSINESS</MiddleLeft>
          <BottomLeft>FULL POTENTIAL</BottomLeft>
          <Button type="submit">REGISTER HERE</Button>
        </LeftSide>

        <RightSide>
          <TopRight>
                    <Text>POST YOUR AVAILABILITIES</Text>
                    <img />
          </TopRight>
                <MiddleRight />
                <Text2>MANAGE YOUR NEW BUSINESS</Text2>
                <img />
                <BottomRight>
                    <h3>IT'S THAT EASY!!!</h3>
                </BottomRight>
        </RightSide>
      </Container>
    );
  }
}
