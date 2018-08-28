import React, { Component } from "react";
import glamorous from "glamorous";
import Navigation from "./navigation";


const Container = glamorous.div({
  height: "60vh",
  background: "#B7CECE",
  display: "grid",
  grid: "10% / 100%"
});

const Main = glamorous.div({
  borderBottom: "1px solid black",
  display: "grid",
  justifyContent: "center",
  alignContent: "center"
});

const Title = glamorous.div({
  fontSize: "4em",
  fontWeight: 600,
  color: "#131112"
});

const Wrapper = glamorous.div({
  display: "flex",
  justifyContent: "center",
  marginTop: "3vh"
});

const Search = glamorous.input({
  width: "20%",
  padding: "1% 1%",
  fontSize: "1.5em",
  borderRadius: "5px",
  border: "none"
});

const Button = glamorous.div({
  backgroundColor: "#EF5B5B",
  color: "white",
  fontSize: "1.5em",
  fontWeight: 600,
  padding: "1%",
  borderRadius: "5px",
  marginLeft: "15px",

  ":hover": {
    cursor: "pointer"
  }
});

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Main>
          <Title>Book your last minute appointments now!</Title>
          <Wrapper>
            <Search placeholder="City or Zip" />
            <Button>Find Appointments</Button>
          </Wrapper>
        </Main>
      </Container>
    )
  }
}