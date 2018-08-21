import React, { Component } from "react";
import "./appointments_business_styles.css";

class Biz_Appointments extends React.Component {
  render() {
    return (
      <div id="background">
        <div className="dashboard">
          <div className="three-four">Calendar</div>

          <div className="one-four">
            <div className="slide filter">
            <h4>Filter Appointments Dashboard</h4>
                <div className='filterButton'>All Appointments</div>
                <div className='filterButton'>Booked Appointments</div>
                <div className='filterButton'>Open Appointments</div>
                <div className='filterButton'>Past Appointments</div>
            </div>
            <div className="slide">
              <h4>Create Recurring Appointments</h4>
              <input placeholder="Type of Service" />
              <input placeholder="Which days are you available?" />
              <input placeholder="What hours are you available?" />
              <input placeholder="Cost ($)" />
              <input placeholder="How long is each reservation? (30m or 60m)" />

            </div>
            <div className="slide">
              <h4>Create a Single Appointment</h4>
              <input placeholder="Type of Service" />
              <input placeholder="Date (MM/DD/YY)" />
              <input placeholder="Cost ($)" />
              <input placeholder="Type of Service" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Biz_Appointments;
