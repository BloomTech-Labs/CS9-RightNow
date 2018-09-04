import glamorous from "glamorous";


export const PrimaryWrapper = glamorous.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column"
});


export const Container = glamorous.div({
  width: "100vw",
  // height: "100vh",
  display: "flex",
  overflowY: "hidden"
});


export const CalendarWrapper = glamorous.div({
  width: "65vw",
  height: "100vh",
  border: "1px solid lightgray"
});


export const ApptsWrapper = glamorous.div({
  width: "35vw",
  height: "90vh",
  display: "flex",
  padding: "2%",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center"
});