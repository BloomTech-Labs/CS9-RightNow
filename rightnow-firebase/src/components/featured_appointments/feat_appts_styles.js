import glamorous from "glamorous";


export const Container = glamorous.div({
  width: "100vw",
  // maxWidth: "1024px",
  // margin: "auto",
});


export const Header = glamorous.div({
  width: "35%",
  fontSize: "2.5em",
  fontWeight: 600,
  padding: "1% 1%",
  margin: "1%",
  borderBottom: "1px solid black"
});


export const CardContainer = glamorous.div({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "18% 18% 18% 18% 18%",
  gridColumnGap: "1.5%"
});