import glamorous from "glamorous";


export const Container = glamorous.div({
  width: "100vw",
  height: "100vh",
  position: "absolute",
  zIndex: 5555,
  background: "rgba(0, 0, 0, 0.5)",
  overflow: "hidden"
});


export const Modal = glamorous.div({
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999,
  background: "white",
  display: "flex",
  flexDirection: "column",
  width: "30%",
  height: "50%",
  padding: "2.5%",

  '@media(min-width: 1024px)': {
    width: "615px",
    height: "500px"
  },
});


export const Header = glamorous.div({
  fontSize: "3em",
  marginBottom: "3%",

  '@media(min-width: 1024px)': {
    fontSize: "2.5em"
  },
});


export const NormalSignIn = glamorous.div({
  borderTop: "0.5px solid lightgray",
  padding: "4% 0",
  display: "flex",
  flexDirection: "column",

  '@media(min-width: 1024px)': {
    marginBottom: 0
  }
});


export const Input = glamorous.input({
  padding: "1% 2%",
  marginBottom: "2%",
  fontSize: "2em",
  height: "3vh",
  border: "1px solid gray",
  borderRadius: "5px",
  ":focus": { outline: "none"  }, // *:focus { outline: none } ~~~ no focus for any elements

  '@media(min-width: 1024px)': {
    fontSize: "1.3em"
  }
});


export const Button = glamorous.button({
  fontSize: "2em",
  fontWeight: 600,
  padding: "1.5% 0",
  borderRadius: "5px",
  backgroundColor: "#00c6fd",
  color: "white",
  ":hover": { cursor: "pointer" },
  ":focus": { outline: "none"  },

  "@media(min-width: 1024px)": {
    fontSize: "1.3em"
  }
});


export const Or = glamorous.div({
  width: "100%",
  textAlign: "center",
  borderBottom: "0.5px solid lightgray",
  lineHeight: "0.1em",

  "@media(min-width: 1024px)": {
    fontSize: "1.1em",
    fontWeight: 600,
  }
});


export const OAuthContainer = glamorous.div({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  borderBottom: "0.5px solid lightgray",
  paddingBottom: "6%",
  
  "@media(min-width: 1024px)": {
    paddingBottom: "3%"
  }
});


export const AuthLogo = glamorous.img({
  height: "100%",
  width: "15%",
  
  "@media(min-width: 1024px)": {}
});


export const OAuthButton = glamorous.div({
  width: '48%',
  height: "100%",
  padding: "3% 0",
  display: 'flex',
  alignItems: "center", 
  alignContent: "center", 
  justifyContent: 'center',
  marginTop: '3%',
  fontSize: "2em",
  fontWeight: 600,
  border: "1px solid lightgray",
  borderRadius: "5px",
  ":hover": { backgroundColor: "rgba(225, 225, 225, 0.6)", cursor: "pointer" },
  
  "@media(min-width: 1024px)": {
    fontSize: "1.3em",
    height: "30%",
    marginTop: "5%"
  }
});


export const NewUser = glamorous.div({
  width: "100%",
  marginTop: "2.5%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  "@media(min-width: 1024px)": {
    fontSize: "0.8em"
  }
});
