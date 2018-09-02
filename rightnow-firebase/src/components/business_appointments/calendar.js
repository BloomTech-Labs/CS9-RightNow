// import 'rc-select/assets/index.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from 'moment';
// import Select from 'rc-select';


// Calendar.setLocalizer(Calendar.momentLocalizer(moment));
Calendar.momentLocalizer(moment)


const today = new Date(moment())
const minTime = new Date(moment().hour(4).minute(0));
const maxTime = new Date(moment().hour(23).minute(59)); // INCLUSIVE


export default class BusnCalendar extends Component {

  apptSelect = data => {
    const { start, end, service, cost, description } = data;
    console.log(moment(start).format("LLL"), " --- ", moment(end).format("LLL"))
    console.log("service", service)
    console.log("cost", cost)
    console.log("description", description)
  }

  render() {
    return (
      <div>

        <Calendar 
          defaultDate={today}
          defaultView="week"
          events={this.props.busnContext.future_appointments}
          onSelectEvent={(details) => this.apptSelect(details)}
          step={15} // 6 steps * 10 timeslots = 60min intervals for inter-week 
          timeslots={4}
          min={minTime}
          max={maxTime}
          style={{ height: "100vh" }}
        />

      </div>
    )
  }
}