import glamorous from "glamorous";

export const Appointment = glamorous.div({
  padding: "40px",
  margin: "7%",
  border: "3px solid white",
  color: "#353A50",
  backgroundColor: "#f7f9fc",

  borderRadius: "5px",
  textAlign: "center"
});

export const AppointmentList = glamorous.div({
  display: "flex",
  // flexShrink: "0"
  flexDirection: "row",
  justifyContent: "space-between"
});

export const Upcoming = glamorous.h3({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  margin: "auto",
  fontSize: '30px'
});
