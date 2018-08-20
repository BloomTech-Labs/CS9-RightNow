import glamorous, { P } from "glamorous";

export const Container = glamorous.div({
  width: "15vw",
  border: "1px solid gray",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
});


export const BusinessImage = glamorous.img({
  maxWidth: "100%",
  // maxHeight: "100px"
});


export const BusinessInfo = glamorous.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});


export const BusinessName = glamorous.div({
  fontSize: "2em",
  fontWeight: 600,
  margin: "4% 0 2.5%"
});


export const Address = glamorous.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5em",
  fontWeight: 500,
  margin: "3% 0"
});


export const AvailableAppts = glamorous.div({
  width: "100%",
  borderTop: "0.5px solid lightgray",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});