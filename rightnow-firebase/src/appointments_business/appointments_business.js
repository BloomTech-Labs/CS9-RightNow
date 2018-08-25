import React, { Component } from "react";
import "./appointments_business_styles.css";
import AppointmentCard from "./appointment_card/appointment_card.js";

import firebase from "../firebase/firebase";
import { empty } from "glamor";
const db = firebase.firestore();

class Biz_Appointments extends React.Component {
  constructor() {
    super();
    this.state = {
      // Inital State
      appointment1: "",
      appointment2: "",
      availableAppointments: [],
      service: [],
      day: [],
      //  occupancy: [
      //   68 + "%",
      //   89 + "%",
      //   43 + "%",
      //   35 + "%",
      //   55 + "%",
      //   80 + "%",
      //   "closed"
      // ],
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
    // this.submitSession = this.submitSession.bind(this);
    // this.submitMultipleSessions = this.submitMultipleSessions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.checkOccupancy = this.checkOccupancy.bind(this); //Stretch goal
  }

  componentDidMount() {
    // Upon mounting, this sets the state of this component to what is inside of the database.
    let currentAppointments = [];

    db
      .collection("busn_ACTUAL") // Collection name per Firestore
      .doc("Mn5KyfUWPMz4D6aiNT3R")
      .collection("available_appointments")
      .get()
      .then(querySnapshot => {
        let emptyarray = [];
        querySnapshot.forEach(doc => {
          console.log(1, doc)
          emptyarray.push({
            newSeshCost: doc.data().newSeshCost,
            newSeshDate: doc.data().newSeshDate,
            newSeshService: doc.data().newSeshService,
            newSeshStartTime: doc.data().newSeshStartTime,
            newSeshEndTime: doc.data().newSeshEndTime,
          })
        })
        this.setState({
          availableAppointments: emptyarray,
        })
        console.log(this.state.availableAppointments);
      })
  }

  // Stretch Goal: Attempting to make a function that will check the occupancy of each card
  //  and color-code it accordingly
  // checkOccupancy(e) {
  //   e.preventDefault();

  // }

  findById = id => {
    return db
    .collection("busn_ACTUAL")
    .doc("Mn5KyfUWPMz4D6aiNT3R")
    .collection("available_appointments")
    .doc(id)
    .get()
    .then(x => {
      return x.data();
    })
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //
  submitSession = e => {
    db.collection("busn_ACTUAL") // Collection name per Firestore
      .doc("Mn5KyfUWPMz4D6aiNT3R")
      .collection("available_appointments")
      .add({
        newSeshCost: this.state.newSeshCost,
        newSeshDate: this.state.newSeshDate,
        newSeshService: this.state.newSeshService,
        newSeshStartTime: this.state.newSeshStartTime,
        newSeshEndTime: this.state.newSeshEndTime
      })
      .then(x => {
          this.setState({
          availableAppointments: [...this.state.availableAppointments, x.id],
        })
      })
      .catch(x => console.log("failure"));
  };

  // // db.collection("businesses")
  //   .doc("A Dog's Day Out")
  //   };

  //   let a = [...this.state.service, this.state.newSeshService];
  //   let b = [...this.state.day,: this.state.newSeshDate];
  //   let c = [...this.state.cost, this.state.newSeshCost];
  //   let d = [...this.state.startTime, this.state.newSeshStartTime];
  //   let f = [...this.state.endTime, this.state.newSeshEndTime];
  //   this.setState({
  //     service: a,
  //     day: b,
  //     cost: c,
  //     startTime: d,
  //     endTime: f
  //   })
  //   this.setState({
  //     newSeshService: '',
  //     newSeshDate: '',
  //     newSeshCost: '',
  //     newSeshStartTime: '',
  //     newSeshEndTime: '',
  //   })

  componentDidUpdate() {
    // db.collection("businesses")
    //     .doc("A Dog's Day Out")
    //     .set({
    //       appointmentServices: this.state.service,
    //       // appointmentDays: this.state.day,
    //       // appointmentsCost: this.state.cost,
    //       // appointmentsStartTime: this.state.startTime,
    //       // appointmentsEndTime: this.state.endTime
    //     })
    db.collection("busn_ACTUAL") // Collection name per Firestore
      .doc("Mn5KyfUWPMz4D6aiNT3R")
      .collection("available_appointments")
      .get()
      .then(querySnapshot=> {
        querySnapshot.forEach(x => {
        // this.setState({
        //   availableAppointments: [...this.state.availableAppointments, x.data()]
        // });
        })
      })
      .then(x => console.log(this.state.availableAppointments))
      .catch()
  }

  // Stretch Goal
  // submitMultipleSessions(e) {
  //   e.preventDefault();

  //   this.setState({
  //     newMultipleSeshService: "",
  //     newMultipleSeshDate: "",
  //     newMultipleSeshCost: "",
  //     newMultipleSeshStartTime: "",
  //     newMultipleSeshEndTime: ""
  //   });
  // }

  render() {
    console.log(this.state.availableAppointments);
    return (
      <div id="background">
        <div className="dashboard">
          <div className="three-four">
            
            {this.state.availableAppointments ? this.state.availableAppointments.map((element, index) => {
              console.log(element);
              
              return <AppointmentCard appointment={element}/>
            }) : null }

            
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
                // onClick={this.submitMultipleSessions}
              >
                Create Multiple Appointments
              </button>
            </div>

            {/* Create Single Session */}
            <div className="slide">
              <h4>Create a Single Session</h4>
              <input
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                name="newSeshStartTime"
                value={this.state.newSeshStartTime}
                placeholder="Start Time"
              />
              <input
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                name="newSeshEndTime"
                value={this.state.newSeshEndTime}
                placeholder="EndTime"
              />
              <input
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                name="newSeshDate"
                value={this.state.newSeshDate}
                placeholder="Day of the Week"
              />
              <input
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                name="newSeshService"
                value={this.state.newSeshService}
                placeholder="Type of Service"
              />
              <input
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
                name="newSeshCost"
                value={this.state.newSeshCost}
                placeholder="Cost ($)"
              />
              <div
                className="filterButton"
                onClick={e => this.submitSession(e)}
              >
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
