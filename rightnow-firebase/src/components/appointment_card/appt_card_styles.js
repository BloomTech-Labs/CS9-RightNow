import glamorous from "glamorous";

export const Container = glamorous.div({
  width: "15vw",
  border: "1px solid gray",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  margin: "5%"
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
  alignItems: "center",
  borderBottom: "0.5px solid lightgray",
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
  marginBottom: "5%"
});


export const AvailableAppts = glamorous.div({
  width: "100%",
  padding: "5% 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});


export const Appointment = glamorous.div({
  width: "95%",
  display: "grid",
  gridTemplateColumns: "33% 34% 33%",
  border: "1px solid black",
  borderRadius: "5px",
  margin: "0 0 3%",
  padding: "3%"
});

export const Type = glamorous.div({
  textAlign: "start"
});

export const Time = glamorous.div({
  textAlign: "center"
})

export const Cost = glamorous.div({
  textAlign: "end"
})


// const ComponentName = glamorous.any_html_element({
//   alwaysCammelCase: "exactly the same as you would with css - except as a string", // comma
// })


