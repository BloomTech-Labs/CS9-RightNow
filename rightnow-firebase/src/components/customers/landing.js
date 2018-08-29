import React, { Component } from "react";
import glamorous from "glamorous";
import Particles from "react-particles-js";
import Navigation from "./navigation";
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
  state = {
    query: ""
  }

  componentDidMount() {
    this.props.uid ? this.props.value.updateState({ uid: this.props.uid }) : null;
  }

  handleSearch = () => {
    console.log(this.state.query);

    axios
      .get(`https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/appointment?term=${this.state.query}`)
      .then(res => {
        // console.log(res);
        this.props.value.updateState({ queryResults: res.data });
        console.log("\nthis.props.value.data", this.props.value.data);
      })
      .catch(err => console.log(err));

    this.setState({ query: "" });
  }

  render() {
    return (
      <Container>
        <Navigation value={this.props.value} />
        <Main>
          <Title>Book your last minute appointments today!</Title>
          <Wrapper id="primary_input">
            <Search 
              placeholder="City or Zip" 
              name="query"
              value={this.state.query}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
              />
            <Button onClick={() => this.handleSearch()}>Find Appointments</Button>
          </Wrapper>
        </Main>
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Particles width="100%" height="100%" params={particleOptions} />
        </div>
      </Container>
    )
  }
}