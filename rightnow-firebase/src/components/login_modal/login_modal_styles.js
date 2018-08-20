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
  padding: "2.5%",

  '@media(min-width: 1024px)': {
    width: "615px",
  },

  "@media(max-width: 1024px)": {
    width: "50%",
  },

  "@media(max-width: 793px)": {
    width: "65%"
  },

  "@media(max-width: 350px)": {
    width: "90%"
  }
});


export const Header = glamorous.div({
  fontSize: "3em",
  marginBottom: "3%",

  '@media(min-width: 1024px)': {
    fontSize: "2.5em"
  },

  "@media(max-width: 1024px)": {
    fontSize: "2em"
  },

  "@media(max-width: 550px)": {
    fontSize: "1.8em"
  }
});


export const NormalSignIn = glamorous.div({
  borderTop: "0.5px solid lightgray",
  padding: "4% 0",
  display: "flex",
  flexDirection: "column",

  '@media(min-width: 1024px)': {
    marginBottom: 0
  },

  "@media(max-width: 550px)": {
    margin: "3% 0",
    padding: "7% 0"
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
  },

  "@media(max-width: 1024px)": {
    fontSize: "1.1em"
  },

  "@media(max-width: 793px)": {
    marginBottom: "3%"
  },

  "@media(max-width: 550px)": {
    marginBlockEnd: "6%",
    padding: "2% 3%"
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
  },

  "@media(max-width: 1024px)": {
    fontSize: "1.1em"
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
  },

  "@media(max-width: 1024px)": {
    fontSize: "1em",
    fontWeight: 600,
    marginBottom: "2.5%"
  },

  "@media(max-width: 550px)": {
    marginBottom: "7%"
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
  },

  "@media(max-width: 793px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2%"
  },

  "@media(max-width: 550px)": {
    paddingBottom: "6%"
  }
});


export const AuthLogo = glamorous.img({
  height: "100%",
  width: "15%",
  
  "@media(max-width: 1024px)": {
    height: "40%"
  },

  "@media(max-width: 793px)": {
    height: "35%"
  },

  "@media(max-width: 550px)": {
    height: "45%"
  }
});


export const OAuthButton = glamorous.div({
  width: '48%',
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
    marginTop: "5%"
  },

  "@media(max-width: 1024px)": {
    fontSize: "1em",
    padding: "0",
    margin: "2% 0"
  },

  "@media(max-width: 793px)": {
    width: "100%",
    padding: 0,
    fontSize: "1.1em",
  }
});


export const NewUser = glamorous.div({
  width: "100%",
  marginTop: "2.5%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media(min-width: 1024px)": {
    fontSize: "0.8em"
  },

  "@media(max-width: 1024px)": {
    fontSize: "0.5em"
  },

  "@media(max-width: 450px)": {
    flexDirection: "column"
  }
});
