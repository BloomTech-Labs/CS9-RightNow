import React from "react";
import glamorous from "glamorous";

const Container = glamorous.div({
  backgroundColor: "#fff",
    color: "black",
  //padding: "70px",

  border: "3px solid white",
  borderRadius: "5px",
  textAlign: "center",
  margin: "20px"
});

const Label = glamorous.label({
  display: "block",
  textAlign: "left",
  color: "lightgrey"
  //float: 'left'
});

const InputField = glamorous.input({
  width: "100%",
  height: "25px",
  fontSize: "18px"
});

const LeftSide = glamorous.div({
    width: "50%",
    padding: '20px 25%',

  display: "flex",
  justifyContent: "center",
  flexDirection: "column"
});

// const RightSide = glamorous.div({
//   width: "50%",
//   padding: "70px",
//   display: "flex",
//   flexDirection: "column"
// });

const ContactTitle = glamorous.h3({
  display: "flex",
  justifyContent: "center",
  textAlign: "center"
});

const ContactForm = () => {
  return (
    <Container>
      <ContactTitle>Profile Information</ContactTitle>

      <LeftSide>
        <Label for="test">First Name</Label>
        <InputField type="text" placeholder="enter first name" />
        <Label>Last Name</Label>
        <InputField type="text" placeholder="enter last name" />
        <Label>Phone Number</Label>
        <InputField type="text" placeholder="enter your #" />
        <Label>Email</Label>
        <InputField type="text" placeholder="enter your email" />
        <Label>Location</Label>
        <InputField type="text" placeholder="enter a zip code" />
      </LeftSide>
     
      
    </Container>
  );
};

export default ContactForm;