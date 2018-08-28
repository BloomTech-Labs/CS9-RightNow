import React, {Component} from 'react';
import glamorous from "glamorous";


const Container = glamorous.div({
  borderBottom: "1px solid black",
  width: "100vw"
});


export default class Navigation extends Component {
  render() {
    return (
      <Container></Container>
    )
  }
}