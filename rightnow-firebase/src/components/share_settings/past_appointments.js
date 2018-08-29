import React from "react";
import glamorous from "glamorous";

const Appointment = glamorous.div({
  // width: '50%',
  // border: '1px solid blue',
  // boxSizing: 'border-box',
  // position: 'absolute',
  // margin: 'auto'
  padding: "70px",
  border: "3px solid green",
  borderRadius: "25px",
  textAlign: "center",
  margin: "20px"
});

const Past = glamorous.h3({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  margin: "auto"
});

const PastAppointments = () => {
    return <Appointment>
        <Past>Past Appointments</Past>
    </Appointment>
}

export default PastAppointments;