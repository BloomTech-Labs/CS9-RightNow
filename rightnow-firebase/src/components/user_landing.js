import React, { Component } from "react";
import glamorous from "glamorous";

const Container = glamorous.div({
  width: "100%",
  height: "800px",
  backgroundImage: "linear-gradient(to bottom right, #00c6fd, #ccff00)"
});

export default class UserLanding extends Component {
  render() {
    return (
      <Container>
        <div></div>
      </Container>
    )
  }
}