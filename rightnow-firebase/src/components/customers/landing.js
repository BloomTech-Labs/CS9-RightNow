import React, { Component } from "react";
import glamorous from "glamorous";
import Particles from "react-particles-js";
import Navigation from "./navigation";


const Container = glamorous.div({
  height: "65vh",
  background: "#353A5",
  display: "grid",
  gridTemplateRows: "16% 84%"
  // grid: "1fr 1fr / 100%",
});

const Main = glamorous.div({
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
  // zIndex: 
});

const Title = glamorous.div({
  fontSize: "4em",
  color: "#EBEBEB",
  fontWeight: 600,
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
        {/* <div style={{ position: "absolute", width: "100%" }}>
          <Particles width="100%" />
        </div> */}
      </Container>
    )
  }
}