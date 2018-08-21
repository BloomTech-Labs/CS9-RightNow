import glamorous from "glamorous";


export const Container = glamorous.div({
  width: "100vw"
});


export const Header = glamorous.div({
  width: "45%",
  fontSize: "2.5em",
  fontWeight: 600,
  padding: "1% 1%",
  margin: "1%",
  borderBottom: "1px solid black",

  "@media(min-width: 1800px)": {
    width: "45%"
  },

  "@media(max-width: 1800px)": {
    fontSize: "2em"
  },

  "@media(max-width: 1265px)": {
    fontSize: "1.8em"
  },

  "@media(max-width: 1000px)": {
    fontSize: "1.5em",
    width: "65%"
  },

  "@media(max-width: 600px)": {
    width: "95%"
  },

  "@media(max-width: 405px)": {
    fontSize: "1.3em"
  }
});


export const CardContainer = glamorous.div({
  display: "grid",
  gridTemplateColumns: "23% 23% 23%",
  gridColumnGap: "5%",
  justifyContent: "center"

  // "@media(max-width: 1550px)": {
  //   gridTemplateColumns: "23% 23% 23% 23%",
  // }
});