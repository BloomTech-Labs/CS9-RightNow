import React, { Component } from "react";
import glamorous from "glamorous";
import Particles from "react-particles-js";
import Navigation from "./navigation";
import axios from "axios";
import { UserContext } from '../../context/userContext';


/* MOSTLY RESPONSIVE DOWN TO 850vw */


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

  "@media(min-width: 1500px)": {
    fontSize: "3.5em"
  },

  "@media(max-width: 1500px)": {
    fontSize: "3.5em"
  },

  "@media(max-width: 1224px)": {
    fontSize: "3em"
  },

  "@media(max-width: 1050px)": {
    fontSize: "2.5em"
  }
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

  "@media(max-width: 1224px)": {
    fontSize: "1.3em",
  },

  "@media(max-width: 1050px)": {
    width: "25%"
  }
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
  },

  "@media(max-width: 1224px)": {
    fontSize: "1.3em"
  }
});

const particleOptions = {
  particles: {
    number: {
      value: 45
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
          

            <UserContext.Consumer>
              {value => (
                <Wrapper id="primary_input">
                  <Search 
                    placeholder="City or Zip" 
                    name="query"
                    value={value.query}
                    onChange={e => value.onInputChange({ [e.target.name]: e.target.value })}
                    />
                  <Button onClick={() => value.handleSearch()}>Find Appointments</Button>
                </Wrapper>
              )}
            </UserContext.Consumer>

          
        </Main>
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Particles width="100%" height="100%" params={particleOptions} />
        </div>
      </Container>
    )
  }
}