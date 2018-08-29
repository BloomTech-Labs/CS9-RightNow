import React, { Component } from "react";
import glamorous from "glamorous";
import Particles from "react-particles-js";
import Navigation from "./navigation";


const Container = glamorous.div({
  height: "65vh",
  width: "100vw",
  backgroundColor: "#353A50",
  display: "grid",
  gridTemplateRows: "16% 84%",
});

const Main = glamorous.div({
  display: "grid",
  justifyContent: "center",
  alignContent: "center",
});

const Title = glamorous.div({
  fontSize: "4em",
  color: "#EBEBEB",
  fontWeight: 600,
});

const Wrapper = glamorous.div({
  display: "flex",
  justifyContent: "center",
  marginTop: "3vh",
  zIndex: 1
});

const Search = glamorous.input({
  width: "20%",
  padding: "1% 1%",
  fontSize: "1.5em",
  borderRadius: "5px",
  border: "none",
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

const particleOptions = {
  particles: {
    number: {
      value: 60
    }
  },
  opacity: {
    value: 0.3,
    random: true
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      modes: {
        grab: {
          distance: 500
        }
      }
    }
  }
}

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Main>
          <Title>Book your last minute appointments today!</Title>
          <Wrapper id="primary_input">
            <Search placeholder="City or Zip" />
            <Button>Find Appointments</Button>
          </Wrapper>
        </Main>
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Particles width="100%" height="100%" params={particleOptions} />
        </div>
      </Container>
    )
  }
}