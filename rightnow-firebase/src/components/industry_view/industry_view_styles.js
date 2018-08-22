import glamorous from "glamorous";


export const Industry = glamorous.div({
  height: "50px",
  width: "50px",
  border: "1px solid black",
  borderRadius: "50%",
  textAlign: "center"
});


export const OptionContainer = glamorous.div({
  display: "grid",
  grid: "10vw / 10vw 10vw 10vw 10vw 10vw 10vw",
  gridColumnGap: "1.5vw",
  justifyContent: "center"
});


export const CircleOption = glamorous.div({
  width: "100%",
  height: "100%",
  border: "1px solid black",
  borderRadius: "50%",
  fontSize: "2.5em",
  fontWeight: 600,
  textAlign: "center",
  lineHeight: "10vw" // same as OptionContainer height
});