import React, { Component } from "react";
import glamorous from "glamorous";
import Particles from "react-particles-js";
import Navigation from "./navigation";
import { UserContext } from '../../context/userContext';
import axios from "axios";


/* MOSTLY RESPONSIVE DOWN TO 850vw */


const Container = glamorous.div({
  height: "65vh",
  width: "100vw",
  backgroundColor: "#353A50",
  display: "grid",
  gridTemplateRows: "16% 84%",
});

const Main = glamorous.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  paddingBottom: "5%"
  // height: "85%"
  // padding: "5%"
});

const Title = glamorous.div({
  // fontFamily: "coquette, sans-serif",
  // fontStyle: "normal",
  // height: "50%",
  fontFamily: "Raleway, sans-serif",
  fontSize: "3.5em",
  color: "#EBEBEB",
  fontWeight: 800,
  textAlign: "center",
  marginBottom: "3%",

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
  // height: "50%",
  alignSelf: "flex-start",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  // marginTop: "3%",
  zIndex: 1,
  // height: "10vh",
  width: "100vw"
});

const Search = glamorous.input({
  // height: "auto",
  width: "15%",
  padding: "0.8%",
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
  padding: "0.8%",
  borderRadius: "5px",
  marginLeft: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  ":hover": {
    cursor: "pointer"
  },

  "@media(max-width: 1224px)": {
    fontSize: "1.3em"
  }
});

const ParticleContainment = glamorous.div({
  position: "absolute",
  width: "100%",
  height: "65vh",
  // "&first-child": {
  //   position: "absolute !important",
  //   height: "100%"
  // }
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
  componentDidMount() {
    document.querySelector("#principal_pc").firstChild.style.height = "100%";
    document.querySelector("#primary_input").addEventListener("keyup", e => {
      console.log(e)
      e.keyCode === 13 ? document.querySelector("#primary_button").click() : null;
    });
  }
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
                    id="primary_search"
                    placeholder="City or Zip" 
                    name="query"
                    value={value.query}
                    onChange={e => value.updateState({ [e.target.name]: e.target.value })}
                    />
                  <Button id="primary_button" onClick={() => value.handleSearch()}>Find Appointments</Button>
                </Wrapper>
              )}
            </UserContext.Consumer>

          
        </Main>

        <ParticleContainment id="principal_pc">
          <Particles width="100%" height="100%" params={particleOptions} />
        </ParticleContainment>

      </Container>
    )
  }
}