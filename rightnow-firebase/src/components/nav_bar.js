import React, { Component } from "react";
import glamorous, { P } from "glamorous";
import UserDropdown from "./user_dropdown";

const NavContainer = glamorous.div({
  width: "100%",
  background: "#EBEBEB",
  display: "flex",
  justifyContent: "space-between"
});

const Logo = glamorous.div({
  color: "#F45B69",
  fontWeight: 600,
  fontSize: "3em",
  alignSelf: "center",
  margin: "0.5% 1%",
  textShadow: "1px 1px gray"
});

const ButtonContainer = glamorous.div({
  width: "50%",
  display: "flex",
  justifyContent: "flex-end",
  marginRight: "1%"
});

const Button = glamorous.button({
  borderRadius: "7px",
  background: "#00c6fd",
  height: "65%",
  alignSelf: "center",
  margin: "0 1%",
  padding: "0 3%",
  fontWeight: 600,
  fontSize: "1.3em",
  color: "#EBEBEB",
  ":hover": {
    cursor: "pointer",
    boxShadow: "2px 2px gray"
  }
});

const Menu = glamorous.div({
  display: "inline-block",
  cursor: "pointer",
  alignSelf: "center",
  marginLeft: "20px"
});

const MenuLine = glamorous.div({
  width: "35px",
  height: "5px",
  background: "black",
  margin: "6px 0"
});



export default class NavBar extends Component {
  state = {
    displayProfile: true // for development. set to false for deployment.
  }

  toggleProfileDisplay = () => {
    this.setState({ displayProfile: !this.state.displayProfile });
  }

  render() {
    return (
      <NavContainer>
        <Logo>Right Now</Logo>
        <ButtonContainer>
          <Button>Sign Up</Button>
          <Button>Login</Button>
          <Menu onClick={() => this.toggleProfileDisplay()}>
            <MenuLine></MenuLine>
            <MenuLine></MenuLine>
            <MenuLine></MenuLine>
          </Menu>
        </ButtonContainer>
        {this.state.displayProfile ? <UserDropdown/> : null}
      </NavContainer>
    )
  }
}