import React, { Component } from "react";
import glamorous, { Head } from "glamorous";


const DropdownContainer = glamorous.div({
  position: "absolute",
  right: "1%",
  top: "5%",
  background: "black",
  height: "500px",
  width: "500px",
  display: "flex",
  flexDirection: "column"
});

const Header = glamorous.div({
  width: "100%",
  height: "20%",
  border: "1px solid white",
  color: "yellow",
  fontSize: "3em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const BulkContent = glamorous.div({
  width: "100%",
  height: "60%",
  border: "1px solid teal"
});

const Footer = glamorous.div({
  width: "100%",
  height: "20%",
  border: "1px solid limegreen",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const NoTextButton = glamorous.button({
  width: "65%",
  height: "45%"
});

const InputField = glamorous.input({
  width: "65%",
  height: "20%"
});



// YOU ARE NOW ENTERING THE STATELESS COMPONENTS ZONE

const Button = props => <NoTextButton>{props.text}</NoTextButton>

const Logged_OUT_Display = props => (
  <div style={{width: "100%", height: "100%"}}>
    <Header>You are NOT signed in.</Header>
    <BulkContent></BulkContent>
    <Footer>
      <Button text="REGISTER HERE" />
    </Footer>
  </div>
);

const Logged_IN_Display = props => (
  <div style={{width: "100%", height: "100%"}}>
    <Header>You ARE signed in.</Header>
    <BulkContent></BulkContent>
    <Footer>
      <Button text="SIGN OUT" />
    </Footer>
  </div>
);



// FULL DROPDOWN COMPONENT RENDERING

export default class UserDropdown extends Component {
  constructor() {
    super();
    this.state = {
      userSignedIn: true // for development purposes. set to false for deployment.
    }
  }

  render() {
    return (
      <DropdownContainer>
        {this.state.userSignedIn ? <Logged_IN_Display /> : <Logged_OUT_Display />}
      </DropdownContainer>
    )
  }
}


/* 

MAY IMPLEMENT THIS LATER. SETTING ASIDE TO PRIORITIZE.

// document.querySelector("#dropdown_container").addEventListener("resize", event => this.onWindowResize(event), false);
// window.addEventListener("resize", this.onWindowResize, false);

// onWindowResize = event => {
  // console.log(event.target)
  // const adjustedRatio = { width: `${window.innerWidth*0.25}`, height: `${window.innerHeight*0.35}` }
  // document.querySelector("#dropdown_container").style({adjustedRatio});
// }

 */