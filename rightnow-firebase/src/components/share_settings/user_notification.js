import glamorous from "glamorous";

export const CheckBoxContainer = glamorous.div({
  padding: "40px",
  margin: "7%",
  border: "3px solid white",
  color: "#353A50",
  backgroundColor: "#f7f9fc",
  //boxShadow: "0 10px 6px -6px #777",
  borderRadius: "5px",
  textAlign: "center"
});

export const CheckTitle = glamorous.h3({
  color: '#353A50',
  fontSize: '30px'
});

export const CheckBox = glamorous.div({
  fontSize: "18px"
});

export const CheckBoxes = glamorous.div({
  display: "flex",
  justifyContent: "center"
});
