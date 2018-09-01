import 'rc-select/assets/index.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from 'moment';
// import Select from 'rc-select';


Calendar.setLocalizer(Calendar.momentLocalizer(moment));


export default class BusnCalendar extends Component {
  state = {
    events: [
      { start: new Date(), end: new Date(moment().add(1, "days")), title: "Some title" }
    ]
  }
  
  render() {
    return (
      <div>

        <Calendar 
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
        />

      </div>
    )
  }
}