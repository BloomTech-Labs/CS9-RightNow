import glamorous from "glamorous";

export const Container = glamorous.div({
  border: "1px solid gray",
  borderRadius: "5px",
  display: "grid",
  grid: "32% 32% 34% / 100%"
});


export const BusinessImage = glamorous.img({
  width: "100%",
  maxHeight: "25vh",
  minHeight: "25vh"
});


export const BusinessInfo = glamorous.div({
  display: "grid",
  grid: "30% 30% 30% / 100%",
  justifyItems: "center",
  marginTop: "1.5vh"
});


export const BusinessName = glamorous.div({
  fontSize: "2em",
  fontWeight: 600,
});


export const Address = glamorous.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5em",
  fontWeight: 500,
});


export const AvailableAppts = glamorous.div({
  marginTop: "5%",
  display: "grid",
  grid: "30% 30% 30% / 95%",
  gridRowGap: "5%",
  justifyContent: "center"
});


export const Appointment = glamorous.div({
  display: "grid",
  gridTemplateColumns: "33% 34% 33%",
  border: "1px solid black",
  borderRadius: "5px",
  margin: "0 0 3%",
  padding: "3%",

  ":hover": {
    border: "1px solid #353A50",
    fontWeight: 600,
    cursor: "pointer"
  }
});

export const Type = glamorous.div({
  textAlign: "start"
});

export const Time = glamorous.div({
  textAlign: "center"
});

export const Cost = glamorous.div({
  textAlign: "end"
});


