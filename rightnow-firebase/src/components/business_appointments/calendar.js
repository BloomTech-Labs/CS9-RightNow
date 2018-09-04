// import 'rc-select/assets/index.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar_style.css";
import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from 'moment';
// import Select from 'rc-select';


// Calendar.setLocalizer(Calendar.momentLocalizer(moment));
Calendar.momentLocalizer(moment)


const today = new Date(moment())
const minTime = new Date(moment().hour(6).minute(0));
const maxTime = new Date(moment().hour(23).minute(59)); // INCLUSIVE

const formats = {
  eventTimeRangeFormat: ({start, end}) => moment(start).format("hh:mm")
}

const propGetter = (event, start, end, isSelected) => {
  let newStyle = {
    backgroundColor: "rgba(60, 70, 100, 0.95)", // "#70768f",
    color: 'white',
    borderRadius: "5px",
    border: "2px solid black"
  };

  if (event.is_available === false){
    newStyle.backgroundColor = "rgba(190, 50, 50, 0.95)" // "#c95050"
  }

  return {
    // className: "",
    style: newStyle
  };
}


export default class BusnCalendar extends Component {
  componentDidMount() {
    const cal = document.querySelector("#calendar");
    const events = document.querySelectorAll(".rbc-event");
    console.log(events);
  }

  apptSelect = data => {
    const { start, end, service, cost, description, id } = data;
    console.log(moment(start).format("LLL"), " --- ", moment(end).format("LLL"))
    console.log("service", service)
    this.props.busnContext.updateState({
      selectedItem: data
    })
    console.log("cost", cost)
    console.log("description", description)
    console.log("\n\n", data);

  }
  
  
  render() {
    return (
      <div>
        {console.log(this.props.busnContext, "Hi Henry")}

        <Calendar 
          id="calendar"
          formats={formats}
          defaultDate={today}
          defaultView="week"
          events={this.props.busnContext.appointments}
          onSelectEvent={(details) => this.apptSelect(details)}
          step={15} // 6 steps * 10 timeslots = 60min intervals for inter-week 
          timeslots={4}
          min={minTime}
          max={maxTime}
          style={{ height: "100vh" }}
          eventPropGetter={propGetter}
          />

      </div>
    )
  }
}