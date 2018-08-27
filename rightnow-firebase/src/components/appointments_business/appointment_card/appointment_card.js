import React, { Component } from "react";
import "./appointment_card_styles.css";

class AppointmentCard extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
      
    return (
      <div className='appointmentDisplay'>
        <div>newSeshCost: {this.props.appointment.newSeshCost}</div>
        <div>newSeshDate: {this.props.appointment.newSeshDate}</div>
        <div>newSeshStartTime: {this.props.appointment.newSeshStartTime}</div>
        <div>newSeshEndTime: {this.props.appointment.newSeshEndTime}</div>
        
      </div>
    );
  }
}

export default AppointmentCard;
