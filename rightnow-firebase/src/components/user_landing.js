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
        <div>
          <h3>BOOK YOUR LAST MINUTE APPOINTMENT!</h3>
          <h4>Right Now</h4>
        </div>
        <div>
          <input type= "text" placeholder="city or zip" /> <button type="subit">Search</button>
        </div>
      </Container>
    )
  }
}