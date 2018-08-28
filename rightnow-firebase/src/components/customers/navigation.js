import React, {Component} from 'react';
import glamorous from "glamorous";


const Container = glamorous.div({
  borderBottom: "1px solid black",
  // width: "100vw",
  // display: "grid",
  // grid: "auto / 10% auto 40%"
});


export default class Navigation extends Component {
  render() {
    return (
      <Container>
        <h1>SESHO</h1>
        <div>Login</div>
      </Container>
    )
  }
}