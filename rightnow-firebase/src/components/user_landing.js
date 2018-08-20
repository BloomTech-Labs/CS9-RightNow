import React, { Component } from "react";
import glamorous from "glamorous";

const Container = glamorous.div({
  padding: "10px",
  width: "100%",
  height: "80vh",
  backgroundImage:
  'url( "https://zimmer7.com/fileadmin/_processed_/5/b/csm_photo-1462885928573-b5d04c6855de_9f46a27ab0.jpg")',
  backgroundRepeat: "no-repeat",
  // background: "linear-gradient(rgba(255, 0, 0, 0.05), rgba(255, 0, 0, 0.05))",
  backgroundSize: "cover"
});

const Title = glamorous.h3({
  //backgroundColor: "#444",
  margin: "0",
  marginTop: "1%",
  color: "white",
  width: "100%",
  fontSize: "40px",
  display: "flex",
  height: "80%",
  justifyContent: "center",
  alignItems: "center"
});

const Search = glamorous.input({
  height: "10px",
  //padding: "10px",
  width: "50vw",
  display: "flex",
  marginTop: "-100px",
  display: "flex",
  flexGrow: 1,
  margin: "auto",
  alignItems: "center",
});

const SearchBarContainer = glamorous.div({
  width: "50%",
  display: "flex",
  flexGrow: 1,
  margin: "auto",
  alignItems: "center",
});

const Button = glamorous.button({
 //fontSize: "10px",
  width: "50%",
  //padding: "10px"
  height: "10px" 
});

export default class UserLanding extends Component {
  render() {
    return (
      <Container>

          <Title>BOOK YOUR LAST MINUTE APPOINTMENT!</Title>
          <SearchBarContainer>
            <Search type="text" name="search" placeholder="Search..." /><Button type="submit">Find Appointments</Button>
          </SearchBarContainer>

      </Container>
    )
  }
}