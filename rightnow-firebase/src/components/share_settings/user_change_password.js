import glamorous from "glamorous";

export const Wrapper = glamorous.div({
  padding: "40px",
  margin: "7%",
  border: "3px solid white",
  color: "#353A50",
  backgroundColor: "#f7f9fc",
  //boxShadow: "0 10px 6px -6px #777",
  borderRadius: "5px",
  textAlign: "center"
});

export const PwTitle = glamorous.h3({
         fontSize: "30px",
         color: "#353A50"
       });

export const PwLabel = glamorous.label({
  display: "block",
  textAlign: "left",
  color: "lightgrey",
  padding: "1rem 0"
});

export const ChangePasswordInput = glamorous.input({
  width: "100%",
  // padding: '12px 20px',
  padding: "8px 0",
  boxSizing: "border-box",
  //border: 'none',
  // borderBottom: '2px solid red',
  fontSize: "18px",
  border: "3px solid #353A50",
  borderRadius: "4px",
  margin: "2px",
  backgroundColor: "white",
  color: "black"
});
