import React from "react";
import glamorous from "glamorous";

const Appointment = glamorous.div({
  // width: '50%',
  // border: '1px solid blue',
  // boxSizing: 'border-box',
  // position: 'absolute',
  // margin: 'auto'
  padding: "70px",
  border: "3px solid white",
  color: "black",
  backgroundColor: "#fff",
  boxShadow: "0 0 3px #ccc",
  borderRadius: "5px",
  textAlign: "center",
  margin: "20px"
});

const Upcoming = glamorous.h3({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  margin: "auto"
});

const UpcomingAppointment = () => {
  return (
    <Appointment>
      <Upcoming>Upcoming Appointments</Upcoming>
      <hr />
      <div>
        <Upcoming>Current Appointments</Upcoming>
      </div>
    </Appointment>
  );
};

export default UpcomingAppointment;
