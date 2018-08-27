import React, { Component } from "react";
import "./appointments_business_styles.css";
import AppointmentCard from "./appointment_card/appointment_card.js";
import firebase from "../firebase/firebase";


const db = firebase.firestore();


class BizAppointments extends React.Component {
  constructor() {
    super();
    this.state = {
      // Inital State
      appointment1: "",
      appointment2: "",
      availableAppointments: [],
      service: [],
      day: [],
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
  }

  componentDidMount() {
    // Upon mounting, this sets the state of this component to what is inside of the database.
    db
      .collection("busn_ACTUAL") // Collection name per Firestore
      .doc("Mn5KyfUWPMz4D6aiNT3R")
      .collection("available_appointments")
      .get()
      .then(querySnapshot => {
        let availableAppointments_firestore = [];

        querySnapshot.forEach(doc => {
          availableAppointments_firestore.push({
            newSeshCost: doc.data().newSeshCost,
            newSeshDate: doc.data().newSeshDate,
            newSeshService: doc.data().newSeshService,
            newSeshStartTime: doc.data().newSeshStartTime,
            newSeshEndTime: doc.data().newSeshEndTime,
          });
        });

        this.setState({
          availableAppointments: availableAppointments_firestore,
        });
      });
  }

  // findById = id => {
  //   return db
  //   .collection("busn_ACTUAL")
  //   .doc("Mn5KyfUWPMz4D6aiNT3R")
  //   .collection("available_appointments")
  //   .doc(id)
  //   .get()
  //   .then(x => {
  //     return x.data();
  //   })
  // }


  submitSession = e => {
    const { newSeshCost, newSeshDate, newSeshService, newSeshStartTime, newSeshEndTime } = this.state;
    db.collection("busn_ACTUAL") // Collection name per Firestore
      .doc("Mn5KyfUWPMz4D6aiNT3R")
      .collection("available_appointments")
      .add({ newSeshCost, newSeshDate, newSeshService, newSeshStartTime, newSeshEndTime })
      .then(newSesh => {
          this.setState({
          availableAppointments: [...this.state.availableAppointments, newSesh.id],
        });
      })
      .catch(() => console.log("failure"));
  };

  render() {
    return (
      <div id="background">
        <div className="dashboard">
          <div className="three-four">
            
            {this.state.availableAppointments ? (
              this.state.availableAppointments.map(appt => <AppointmentCard appointment={appt}/>)
            ) : null }
            
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
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
                name="newSeshStartTime"
                value={this.state.newSeshStartTime}
                placeholder="Start Time"
              />
              <input
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
                name="newSeshEndTime"
                value={this.state.newSeshEndTime}
                placeholder="EndTime"
              />
              <input
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
                name="newSeshDate"
                value={this.state.newSeshDate}
                placeholder="Day of the Week"
              />
              <input
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
                name="newSeshService"
                value={this.state.newSeshService}
                placeholder="Type of Service"
              />
              <input
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
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
      </div>
    );
  }
}

export default BizAppointments;
