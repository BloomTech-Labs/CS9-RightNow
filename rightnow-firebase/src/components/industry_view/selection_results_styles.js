import glamorous from "glamorous";


export const Container = glamorous.div({
  display: "grid",
  grid: "auto / 18vw 18vw 18vw 18vw",
  gridGap: "4.5vw",
  justifyContent: "center"
});


export const Sorting = glamorous.div({
  display: "flex",
  // gridTemplateRows: "8% 25% 10% 55%",
  alignContent: "center",
  height: "100%",
  marginLeft: "7%",
});


export const Time = glamorous.div({
  display: "flex",
  fontFamily: "Orbitron",
  fontWeight: 600,
  fontSize: "2em",
  letterSpacing: "0.1em",
  zIndex: 2,
  alignSelf: "center",
  alignItems: "center"
});


export const SortBy = glamorous.select({
  fontSize: "2em",
  width: "50%",
  padding: "2.5%",

  ":hover": {
    cursor: "pointer"
  },

  ":focus": {
    outline: "none"
  }
});