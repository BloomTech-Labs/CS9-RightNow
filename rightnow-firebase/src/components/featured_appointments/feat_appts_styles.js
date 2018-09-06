import glamorous from "glamorous";


export const Container = glamorous.div({
  width: "85vw",
  margin: "auto"
});


export const Header = glamorous.div({
  width: "98%",
  fontFamily: "Raleway, sans-serif",
  fontSize: "2.2em",
  fontWeight: 600,
  padding: "1% 0.5%",
  margin: "1%",
  borderBottom: "1px solid #b4b4b4",

  "@media(min-width: 1800px)": {
    width: "90%"
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
  gridTemplateColumns: "18% 18% 18%",
  gridColumnGap: "5%",
  justifyContent: "center"

  // "@media(max-width: 1550px)": {
  //   gridTemplateColumns: "23% 23% 23% 23%",
  // }
});