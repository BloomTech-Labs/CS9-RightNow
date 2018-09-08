import React from "react";
import glamorous from "glamorous";

export const Container = glamorous.div({
  // backgroundColor: "#fff",
  // color: "black",
  //padding: "70px",
  padding: "40px",
  margin: "7%",
  border: "3px solid white",
  color: "black",
  backgroundColor: "#fff",
  //boxShadow: "0 10px 6px -6px #777",
  borderRadius: "5px",
  textAlign: "center",
});

export const Label = glamorous.label({
  display: "block",
  textAlign: "left",
  color: "lightgrey",
  padding: '1rem 0'
  //float: 'left'
});

export const InputField = glamorous.input({
  width: "100%",
  height: "25px",
  fontSize: "18px",
  borderRadius: '3px'
});

export const LeftSide = glamorous.div({
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

export const ContactTitle = glamorous.h3({
  display: "flex",
  justifyContent: "center",
  textAlign: "center"
});

// const ContactForm = (props) => {



