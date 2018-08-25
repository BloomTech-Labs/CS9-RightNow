import React, { Component } from "react";
import * as routes from "../../constants/routes";
import glamorous from "glamorous";
import { Link } from "react-router-dom";

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
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        
        <LeftSide>
          <TopLeft>TAKE ADVANTAGE</TopLeft>
          <MiddleLeft>OF YOUR BUSINESS</MiddleLeft>
          <BottomLeft>FULL POTENTIAL</BottomLeft>
          <Link to="/biz-account">
            <Button type="submit">REGISTER HERE</Button>
          </Link>
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
