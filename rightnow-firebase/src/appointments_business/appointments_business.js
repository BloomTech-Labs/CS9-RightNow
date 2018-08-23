import React, { Component } from "react";
import "./appointments_business_styles.css";
import firebase from "../firebase/firebase";
const db = firebase.firestore();

class Biz_Appointments extends React.Component {
  constructor() {
    super();
    this.state = {
// Inital State
        service: '',
        date: '',
        cost: '',
        startTime: '',
        endTime: '',
// Create Multiple Sessions
        newMultipleSeshService: '',
        newMultipleSeshDate: '',
        newMultipleSeshCost: '',
        newMultipleSeshStartTime: '',
        newMultipleSeshEndTime: '',

// Create Single Session
        newSeshService: '',
        newSeshDate: '',
        newSeshCost: '',
        newSeshStartTime: '',
        newSeshEndTime: '',
    };
    this.submitSession = this.submitSession.bind(this);
    this.submitMultipleSessions = this.submitMultipleSessions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Upon mounting, this sets the state of this component to what is inside of the database.
    let initalServiceState = [];
    console.log('inside cdm');
    db.collection("businesses")
      .doc("barber, inc.")
      .get()
      .then(function(query) {
        initalServiceState.push(query.data().service);
      })
      .then(data => {
        this.setState({ service: initalServiceState[0] });
      });
  }

  handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitSession(e) {
        e.preventDefault();
        // const newFirestorePlaceholder = db... // Set space in the firestore db for the new session
        // const item = { // Pick the items from state which are going to be added to the db
        //   newSeshService: '',
        //   newSeshDate: '',
        //   newSeshCost: '',
        //   newSeshStartTime: '',
        //   newSeshEndTime: '',
        // }
            // newFirestorePlaceholder.push(item); // Push the new session to the db
            // Reset the state for the next input
            this.setState({
                newSeshService: '',
                newSeshDate: '',
                newSeshCost: '',
                newSeshStartTime: '',
                newSeshEndTime: '',
            })
        }
  
  submitMultipleSessions(e) {
        e.preventDefault();

        this.setState({
            newMultipleSeshService: '',
            newMultipleSeshDate: '',
            newMultipleSeshCost: '',
            newMultipleSeshStartTime: '',
            newMultipleSeshEndTime: '',
        })
    }

  render() {
    return (
      <div id="background">
        <div className="dashboard">
          <div className="three-four">
            <div className="dateCard yellow">
              <div>Monday 1</div>
              <div>69%</div>
            </div>
            <div className="dateCard green">
              <div>Tuesday 2</div>
              <div>89%</div>
            </div>
            <div className="dateCard red">
              <div>Wednesday 3</div>
              <div>43%</div>
            </div>
            <div className="dateCard red">
              <div>Thursday 4</div>
              <div>35%</div>
            </div>
            <div className="dateCard yellow">
              <div>Friday 5</div>
              <div>55%</div>
            </div>
            <div className="dateCard green">
              <div>Saturday 6</div>
              <div>80%</div>
            </div>
            <div className="dateCard">
              <div>Sunday 7</div>
              <div>Closed</div>
            </div>
            <div className="dateCard yellow">
              <div>Monday 1</div>
              <div>69%</div>
            </div>
            <div className="dateCard green">
              <div>Tuesday 2</div>
              <div>89%</div>
            </div>
            <div className="dateCard red">
              <div>Wednesday 3</div>
              <div>43%</div>
            </div>
            <div className="dateCard red">
              <div>Thursday 4</div>
              <div>35%</div>
            </div>
            <div className="dateCard yellow">
              <div>Friday 5</div>
              <div>55%</div>
            </div>
            <div className="dateCard green">
              <div>Saturday 6</div>
              <div>80%</div>
            </div>
            <div className="dateCard">
              <div>Sunday 7</div>
              <div>Closed</div>
            </div>
            <div className="dateCard yellow">
              <div>Monday 1</div>
              <div>69%</div>
            </div>
            <div className="dateCard green">
              <div>Tuesday 2</div>
              <div>89%</div>
            </div>
            <div className="dateCard green">
              <div>Wednesday 3</div>
              <div>93%</div>
            </div>
            <div className="dateCard red">
              <div>Thursday 4</div>
              <div>35%</div>
            </div>
            <div className="dateCard yellow">
              <div>Friday 5</div>
              <div>55%</div>
            </div>
            <div className="dateCard green">
              <div>Saturday 6</div>
              <div>80%</div>
            </div>
            <div className="dateCard">
              <div>Sunday 7</div>
              <div>Closed</div>
            </div>
            <div className="dateCard yellow">
              <div>Monday 1</div>
              <div>69%</div>
            </div>
            <div className="dateCard green">
              <div>Tuesday 2</div>
              <div>89%</div>
            </div>
            <div className="dateCard green">
              <div>Wednesday 3</div>
              <div>83%</div>
            </div>
            <div className="dateCard green">
              <div>Thursday 4</div>
              <div>75%</div>
            </div>
            <div className="dateCard yellow">
              <div>Friday 5</div>
              <div>65%</div>
            </div>
            <div className="dateCard red">
              <div>Saturday 6</div>
              <div>20%</div>
            </div>
            <div className="dateCard">
              <div>Sunday 7</div>
              <div>Closed</div>
            </div>
            <div className="dateCard yellow">
              <div>Thursday 4</div>
              <div>65%</div>
            </div>
            <div className="dateCard green">
              <div>Friday 5</div>
              <div>95%</div>
            </div>
            <div className="dateCard red">
              <div>Saturday 6</div>
              <div>10%</div>
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
            <div className="slide">
              <h4>Create Recurring Sessions</h4>
              <input onChange={this.handleChange} name='newMultipleSeshService' value={this.state.newMultipleSeshService} placeholder='Type of Service' />
              <input onChange={this.handleChange} name='newMultipleSeshDate' value={this.state.newMultipleSeshDate} placeholder='Which days are you available?' />
              <input onChange={this.handleChange} name='newMultipleSeshStartTime' value={this.state.newMultipleSeshStartTime} placeholder='What hours are you available?' />
              <input onChange={this.handleChange} name='newMultipleSeshCost' value={this.state.newMultipleSeshCost} placeholder='Cost ($)' />
              <input onChange={this.handleChange} name='newMultipleSeshEndTime' value={this.state.newMultipleSeshEndTime} placeholder='When does this session end?' />
              <button className='filterButton'onClick={this.submitMultipleSessions}>Create Multiple Appointments</button>
            </div>
            <div className='slide'>
              <h4>Create a Single Session</h4>
              <input onChange={this.handleChange} name='newSeshService' value={this.state.newSeshService}placeholder='Type of Service' />
              <input onChange={this.handleChange} name='newSeshDate' value={this.state.newSeshDate} placeholder='Day of the Week' />
              <input onChange={this.handleChange} name='newSeshCost' value={this.state.newSeshCost} placeholder='Cost ($)' />
              <input onChange={this.handleChange} name='newSeshStartTime' value={this.state.newSeshStartTime} placeholder='Time' />
              <div className='filterButton' onClick={this.submitSession}>Create Single Session</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Biz_Appointments;
