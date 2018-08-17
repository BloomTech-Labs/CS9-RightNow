import React, { Component } from "react";
import glamorous, { Head } from "glamorous";
import { GoogleAPI, GoogleLogin } from 'react-google-oauth';


/* -----------------------
  | GLAMOROUS COMPONENTS |
  ----------------------- */

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
  border: "1px solid teal",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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
  height: "17%",
});

const Google = glamorous.div({
  width: '80%',
  height: "20%",
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  marginTop: '3%'
});



/* -----------------------
  | STATELESS COMPONENTS |
  ----------------------- */

const Button = props => <NoTextButton style={props.styleOptions ? props.styleOptions : null}>{props.text}</NoTextButton>

const Header_LoggedIn = props => <Header>You ARE signed in.</Header>
const Header_LoggedOut = props => <Header>You are NOT signed in.</Header>

const Footer_LoggedIn = () => <Footer><Button text="SIGN OUT" /></Footer>
const Footer_LoggedOut = () => (
  <Footer>
    <h2 style={{color: "white", textAlign: "center"}}>New user?</h2>
    <Button text="REGESTER HERE" />
  </Footer>
);



/* ------------------------------------
  | FULL DROPDOWN COMPONENT RENDERING |
  ------------------------------------ */

export default class UserDropdown extends Component {
  constructor() {
    super();
    this.state = {
      userSignedIn: true, // for development purposes. set to false for deployment.
      email: "",
      password: ""
    }
  }

  handleGoogleAuth = user => {
    console.log("this is the google auth login handler");
  }

  render() {
    return (
      <DropdownContainer>
        {this.state.userSignedIn ? <Header_LoggedIn /> : <Header_LoggedOut />}

        <BulkContent>
          <InputField 
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email Address"
            onChange={event => this.setState({ [event.target.name]: event.target.value })}
          />
          <InputField 
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={event => this.setState({ [event.target.name]: event.target.value })}
          />
          <Button text="SIGN IN" styleOptions={{height: "20%"}} />

          <div style={{width: "80%", height: "8%", borderBottom: "1px solid white"}}></div>

          <Google>
            <GoogleAPI clientId="962293448005-vas5rftptuuqf6tcueb9ismhmojn32oq.apps.googleusercontent.com">
              <GoogleLogin 
                onLoginSuccess={user => this.handleGoogleAuth(user)} 
                backgroundColor="rgba(255, 255, 255, 0.3)" 
                width="100%" 
                className="rounded"
                /> 
            </GoogleAPI>
          </Google>
        </BulkContent>

        {this.state.userSignedIn ? <Footer_LoggedIn /> : <Footer_LoggedOut />}
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