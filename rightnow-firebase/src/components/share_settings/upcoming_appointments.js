import React from "react";
import glamorous from "glamorous";

const Appointment = glamorous.div({
  // width: '50%',
  // border: '1px solid blue',
  // boxSizing: 'border-box',
  // position: 'absolute',
  // margin: 'auto'
  padding: "40px",
  margin: "7%",
  border: "3px solid white",
  color: "black",
  backgroundColor: "#fff",
  boxShadow: "0 10px 6px -6px #777",
  borderRadius: "5px",
  textAlign: "center",
});

const Upcoming = glamorous.h3({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  margin: "auto"
});

const UpcomingAppointment = (props) => {
  
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
