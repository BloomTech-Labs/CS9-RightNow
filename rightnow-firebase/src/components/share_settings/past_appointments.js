import React from "react";
import glamorous from "glamorous";

const Appointment = glamorous.div({
  // width: '50%',
  // border: '1px solid blue',
  // boxSizing: 'border-box',
  // position: 'absolute',
  // margin: 'auto'
  // padding: "70px",
  // margin: "7%",
  // border: "3px solid white",
  // backgroundColor: "#fff",
  // color: "black",
  // boxShadow: '#0 10px 6px -6px #777',
  // borderRadius: "5px",
  // textAlign: "center"
  padding: "40px",
  margin: "7%",
  border: "3px solid white",
  color: "black",
  backgroundColor: "#fff",
  boxShadow: "0 10px 6px -6px #777",
  borderRadius: "5px",
  textAlign: "center",
});

const Past = glamorous.h3({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  margin: "auto"
});

const PastAppointments = () => {
  return (
    <Appointment>
      <Past>Past Appointments</Past>
    </Appointment>
  );
};

export default PastAppointments;
