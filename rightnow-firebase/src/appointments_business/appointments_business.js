import React, { Component } from "react";
import "./appointments_business_styles.css";
import AppointmentCard from "./appointment_card/appointment_card.js";
import firebase from "../firebase/firebase";
const db = firebase.firestore();

class Biz_Appointments extends React.Component {
  constructor() {
    super();
    this.state = {
      // Inital State
      service: [],
      day: [],
      dateNumber: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31
      ],
      occupancy: [
        68 + "%",
        89 + "%",
        43 + "%",
        35 + "%",
        55 + "%",
        80 + "%",
        "closed"
      ],
      cost: [],
      startTime: [],
      endTime: "",

      // Create Multiple Sessions
      newMultipleSeshService: "",
      newMultipleSeshDate: "",
      newMultipleSeshCost: "",
      newMultipleSeshStartTime: "",
      newMultipleSeshEndTime: "",

      // Create Single Session
      newSeshService: "",
      newSeshDate: "",
      newSeshCost: "",
      newSeshStartTime: "",
      newSeshEndTime: ""
    };
    this.submitSession = this.submitSession.bind(this);
    this.submitMultipleSessions = this.submitMultipleSessions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkOccupancy = this.checkOccupancy.bind(this);
  }

  componentDidMount() {
    // Upon mounting, this sets the state of this component to what is inside of the database.
    let initalServiceState = [];
    let initalDayState = [];
    let initalCostState = [];
    let initalStartTimeState = [];
    let initalEndTimeState = [];

    db.collection("businesses") // Collection name per Firestore
      .doc("A Dog's Day Out") // Document name per Firestore
      .get()
      .then(function(querySnapshot) {
        initalServiceState.push(querySnapshot.data().appointmentServices[0]);
        initalServiceState.push(querySnapshot.data().appointmentServices[1]);
        initalServiceState.push(querySnapshot.data().appointmentServices[2]);
        initalServiceState.push(querySnapshot.data().appointmentServices[3]);
        initalServiceState.push(querySnapshot.data().appointmentServices[4]);
        initalServiceState.push(querySnapshot.data().appointmentServices[5]);
        initalServiceState.push(querySnapshot.data().appointmentServices[6]);
        initalServiceState.push(querySnapshot.data().appointmentServices[7]);
        // initalServiceState.push(querySnapshot.data().appointmentServices[9]);
        initalDayState.push(querySnapshot.data().appointmentDays[0]);
        initalDayState.push(querySnapshot.data().appointmentDays[1]);
        initalDayState.push(querySnapshot.data().appointmentDays[2]);
        initalDayState.push(querySnapshot.data().appointmentDays[3]);
        initalDayState.push(querySnapshot.data().appointmentDays[4]);
        initalDayState.push(querySnapshot.data().appointmentDays[5]);
        initalDayState.push(querySnapshot.data().appointmentDays[6]);
        initalDayState.push(querySnapshot.data().appointmentDays[7]);
        // initalDayState.push(querySnapshot.data().appointmentDays[9]);
        initalCostState.push(querySnapshot.data().appointmentsCost[0]);
        initalCostState.push(querySnapshot.data().appointmentsCost[1]);
        initalCostState.push(querySnapshot.data().appointmentsCost[2]);
        initalCostState.push(querySnapshot.data().appointmentsCost[3]);
        initalCostState.push(querySnapshot.data().appointmentsCost[4]);
        initalCostState.push(querySnapshot.data().appointmentsCost[5]);
        initalCostState.push(querySnapshot.data().appointmentsCost[6]);
        initalCostState.push(querySnapshot.data().appointmentsCost[7]);
        // initalCostState.push(querySnapshot.data().appointmentsCost[9]);
        initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[0]);
        initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[1]);
        initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[2]);
        initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[3]);
        initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[4]);
        initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[5]);
        initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[6]);
        initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[7]);
        // initalStartTimeState.push(querySnapshot.data().appointmentsStartTime[9]);
        initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[0]);
        initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[1]);
        initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[2]);
        initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[3]);
        initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[4]);
        initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[5]);
        initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[6]);
        initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[7]);
        // initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[8]);
        // initalEndTimeState.push(querySnapshot.data().appointmentsEndTime[9]);
      })
      .then(data => {
        this.setState(prevState => ({
          service: initalServiceState,
          day: initalDayState,
          cost: initalCostState,
          startTime: initalStartTimeState,
          endTime: initalEndTimeState,
        }));
      })
  }

  // Attempting to make a function that will check the occupancy of each card
  //  and color-code it accordingly
  checkOccupancy(e) {
    e.preventDefault();

  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitSession(e) {
    e.preventDefault();
    this.setState({
      service: [...this.state.service, this.state.newSeshService],
      newSeshService: '',
      day: [...this.state.day, this.state.newSeshDate],
      newSeshDate: '',
      cost: [...this.state.cost, this.state.newSeshCost],
      newSeshCost: '',
      startTime: [...this.state.startTime, this.state.newSeshStartTime],
      newSeshStartTime: '',
      endTime: [...this.state.endTime, this.state.newSeshEndTime],
      newSeshEndTime: '',
    })
    
  }

  componentDidUpdate() {
  db.collection("businesses")
      .doc("A Dog's Day Out")
      .set({
        appointmentServices: this.state.service,
        appointmentDays: this.state.day,
        appointmentsCost: this.state.cost,
        appointmentsStartTime: this.state.startTime,
        appointmentsEndTime: this.state.endTime
      })
    }

  submitMultipleSessions(e) {
    e.preventDefault();

    this.setState({
      newMultipleSeshService: "",
      newMultipleSeshDate: "",
      newMultipleSeshCost: "",
      newMultipleSeshStartTime: "",
      newMultipleSeshEndTime: ""
    });
  }

  
  render() {
    return (
      <div id="background">
        <div className="dashboard">
          <div className="three-four">
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[0]} - {this.state.endTime[0]}</div>
              <div>{this.state.day[0]}</div>
              <div>{this.state.service[0]}</div>
              <div>${this.state.cost[0]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[1]} - {this.state.endTime[1]}</div>
              <div>{this.state.day[1]}</div>
              <div>{this.state.service[1]}</div>
              <div>${this.state.cost[1]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[2]} - {this.state.endTime[2]}</div>
              <div>{this.state.day[2]}</div>
              <div>{this.state.service[2]}</div>
              <div>${this.state.cost[2]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[3]} - {this.state.endTime[3]}</div>
              <div>{this.state.day[3]}</div>
              <div>{this.state.service[3]}</div>
              <div>${this.state.cost[3]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[4]} - {this.state.endTime[4]}</div>
              <div>{this.state.day[4]}</div>
              <div>{this.state.service[4]}</div>
              <div>${this.state.cost[4]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[5]} - {this.state.endTime[5]}</div>
              <div>{this.state.day[5]}</div>
              <div>{this.state.service[5]}</div>
              <div>${this.state.cost[5]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[6]} - {this.state.endTime[6]}</div>
              <div>{this.state.day[6]}</div>
              <div>{this.state.service[6]}</div>
              <div>${this.state.cost[6]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[7]} - {this.state.endTime[7]}</div>
              <div>{this.state.day[7]}</div>
              <div>{this.state.service[7]}</div>
              <div>${this.state.cost[7]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard">
              <div>{this.state.startTime[8]}-{this.state.endTime[8]}</div>
              <div>{this.state.day[8]}</div>
              <div>{this.state.service[8]}</div>
              <div>${this.state.cost[8]}</div>
            </div>

            

          </div>

          <div className="one-four">
            <div className="slide filter">
              <h4>Filter Appointments Dashboard</h4>
              <div className="filterButton">All Appointments</div>
              <div className="filterButton">Booked Appointments</div>
              <div className="filterButton">Open Appointments</div>
              <div className="filterButton">Past Appointments</div>
            </div>
            
            {/* Create Multiple Sessions */}
            <div className="slide">
              <h4>Create Recurring Sessions</h4>
              <input
                onChange={this.handleChange}
                name="newMultipleSeshService"
                value={this.state.newMultipleSeshService}
                placeholder="Type of Service"
              />
              <input
                onChange={this.handleChange}
                name="newMultipleSeshDate"
                value={this.state.newMultipleSeshDate}
                placeholder="Which days are you available?"
              />
              <input
                onChange={this.handleChange}
                name="newMultipleSeshStartTime"
                value={this.state.newMultipleSeshStartTime}
                placeholder="What hours are you available?"
              />
              <input
                onChange={this.handleChange}
                name="newMultipleSeshCost"
                value={this.state.newMultipleSeshCost}
                placeholder="Cost ($)"
              />
              <input
                onChange={this.handleChange}
                name="newMultipleSeshEndTime"
                value={this.state.newMultipleSeshEndTime}
                placeholder="When does this session end?"
              />
              <button
                className="filterButton"
                onClick={this.submitMultipleSessions}
              >
                Create Multiple Appointments
              </button>
            </div>
            
            {/* Create Single Session */}
            <div className="slide">
              <h4>Create a Single Session</h4>
              <input
                onChange={this.handleChange}
                name="newSeshStartTime"
                value={this.state.newSeshStartTime}
                placeholder="Start Time"
              />
              <input
                onChange={this.handleChange}
                name="newSeshEndTime"
                value={this.state.newSeshEndTime}
                placeholder="EndTime"
              />
                <input
                  onChange={this.handleChange}
                  name="newSeshDate"
                  value={this.state.newSeshDate}
                  placeholder="Day of the Week"
                />
              <input
                onChange={this.handleChange}
                name="newSeshService"
                value={this.state.newSeshService}
                placeholder="Type of Service"
              />
              <input
                onChange={this.handleChange}
                name="newSeshCost"
                value={this.state.newSeshCost}
                placeholder="Cost ($)"
              />
              <div className="filterButton" onClick={this.submitSession}>
                Create Single Session
              </div>
            </div>
          </div>
        </div>
        {/* <AppointmentCard /> */}
      </div>
    );
  }
}

export default Biz_Appointments;
