import glamorous from "glamorous";


export const Container = glamorous.div({
  display: "grid",
  grid: "auto / 18vw 18vw 18vw 18vw",
  gridGap: "4.5vw",
  justifyContent: "center"
});


export const Sorting = glamorous.div({
  display: "grid",
  gridTemplateRows: "20% 10% 10% 60%",
  gridGap: "5vw",
  justifyItems: "center"
});


export const Time = glamorous.div({
  fontFamily: "Orbitron",
  fontWeight: 600,
  fontSize: "3em",
  letterSpacing: "0.1em"
});