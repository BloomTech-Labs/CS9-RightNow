import React, { Component } from "react";
import glamorous from "glamorous";
import Particles from "react-particles-js";
import Navigation from "./navigation";
import { UserContext } from '../../context/userContext';
import {AlgoliaCitySearch, AlgoliaServiceSearch} from "../algolia_search";
// import axios from "axios";


/* MOSTLY RESPONSIVE DOWN TO 850vw */


const Container = glamorous.div({
  height: "70vh",
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
  // alignItems: "space-between",
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
  marginBottom: "5%",
  // alignSelf: "top",

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
  margin: "3% auto 0",
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-even",
  alignContent: "space-even",
  // marginTop: "3%",
  zIndex: 1,
  // height: "10vh",
  width: "20vw",
  height: "15%"
});

const searchStyle = {
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
};

const Search = glamorous.input({
  // height: "auto",
  width: "90%",
  margin: "auto",
  padding: "2% 0",
  fontSize: "1.5em",
  borderRadius: "5px",
  border: "none",
  marginBottom: "3%",
  textAlign: "center",

  "@media(max-width: 1224px)": {
    fontSize: "1.3em",
  },

  "@media(max-width: 1050px)": {
    width: "25%"
  }
});

const Button = glamorous.div({
  width: "100%",
  backgroundColor: "#ef5b5b",
  color: "white",
  fontSize: "1.5em",
  fontWeight: 600,
  padding: "4% 0",
  borderRadius: "5px",
  marginTop: "5%",
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
  height: "70vh",
  // "&first-child": {
  //   position: "absolute !important",
  //   height: "100%"
  // }
});

const Or = glamorous.div({
  color: "#EBEBEB",
	width: '75%',
	textAlign: 'center',
	borderBottom: '0.5px solid #EBEBEB',
	lineHeight: '0.1em',
  zIndex: 2,
  margin: "4% auto 7%",
  // paddingLeft: "2%",

	'@media(min-width: 1024px)': {
		fontSize: '1.1em',
		fontWeight: 600
	},

	'@media(max-width: 1024px)': {
		fontSize: '1em',
		fontWeight: 600,
		marginBottom: '2.5%'
	},

	'@media(max-width: 550px)': {
		marginBottom: '7%'
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
  componentDidMount() {
    document.querySelector("#principal_pc").firstChild.style.height = "100%";
    document.querySelector("#primary_input").addEventListener("keyup", e => {
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
                  <AlgoliaCitySearch />
                  <Or>
                    <span style={{ backgroundColor: '#353A50', padding: '0 3%', margin: "auto" }}>or</span>
                  </Or>
                  <AlgoliaServiceSearch />
                  {/* <Search 
                    id="primary_search"
                    placeholder="Search for services" 
                    name="query"
                    value={value.query}
                    onChange={e => value.updateState({ [e.target.name]: e.target.value })}
                    /> */}
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