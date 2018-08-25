import glamorous from "glamorous";

export const NavContainer = glamorous.div({
  width: "100%",
  background: "#EBEBEB",
  display: "flex",
  justifyContent: "space-between"
});

export const Logo = glamorous.div({
  color: "#F45B69",
  fontWeight: 600,
  fontSize: "3em",
  alignSelf: "center",
  margin: "0.5% 1%",
  textShadow: "1px 1px gray",
  textDecoration: "none"
});

export const ButtonContainer = glamorous.div({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  marginRight: "1%"
});

export const Button = glamorous.button({
  borderRadius: "7px",
  background: "#00c6fd",
  //height: "60%",
  alignSelf: "center",
  margin: "0 1%",
  padding: "0 3%",
  fontWeight: 600,
  fontSize: "1.3em",
  color: "#EBEBEB",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "##4CAF50;",
    color: "white"
  }
});

export const Menu = glamorous.div({
  display: "inline-block",
  cursor: "pointer",
  alignSelf: "center",
  marginLeft: "20px"
});

export const MenuLine = glamorous.div({
  width: "35px",
  height: "5px",
  background: "black",
  margin: "6px 0"
});

export const ButtonSignOut = glamorous.button({});

export const ButtonUserSettings = glamorous.button({});

export const ButtonCompanySettings = glamorous.button({});
