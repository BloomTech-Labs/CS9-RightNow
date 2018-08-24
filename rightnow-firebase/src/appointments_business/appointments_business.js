import React, { Component } from "react";
import "./appointments_business_styles.css";
import AppointmentCard from './appointment_card/appointment_card.js';
import firebase from "../firebase/firebase";
const db = firebase.firestore();

class Biz_Appointments extends React.Component {
  constructor() {
    super();
    this.state = {
// Inital State
        service: [], // ['Hair Coloring', 'Hair Styling', 'Hair Cut', 'Hair Styling', 'Hair Extensions', 'Hair Coloring', 'Hair Styling', 'Hair Cut', 'Hair Styling', 'Hair Extensions', 'Hair Coloring', 'Hair Styling', 'Hair Cut', 'Hair Styling', 'Hair Extensions', 'Hair Coloring', 'Hair Styling', 'Hair Cut', 'Hair Styling', 'Hair Extensions']
        day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        dateNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,27, 28, 29, 30, 31],
        occupancy: [68 + '%', 89 + '%', 43+'%', 35+'%', 55+'%', 80+'%', 'closed'],
        cost: [29.99, 17.79, 15.32, 9.59, 141.41, 43.67, 23.44, 36.67, 78.4, 56, 50],
        startTime: ['3:30 pm'],
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
    this.checkOccupancy = this.checkOccupancy.bind(this);
  }

  componentDidMount() {
    // Upon mounting, this sets the state of this component to what is inside of the database.
    let initalServiceState = [];
    let initalDayState = [];
    let initalCostState = [];
    let initalStartTimeState = [];

  // AS is an array []
    // gets passed into an array []
    // State is set to the array of arrays?
    // state has an array with a single index [0]
      // at index [0]. there is an array with 2 items: [0, 1]
    db.collection("businesses") // Collection name per Firestore
      .doc("A Dog's Day Out")  // Document name per Firestore
      .get()
      .then(function(query) {      
        initalServiceState.push(query.data().appointmentsService);
        initalDayState.push(query.data().appointmentsDays);
        initalCostState.push(query.data().appointmentsCost);
        initalStartTimeState.push(query.data().appointmentsStartTime);
      })
      .then(data => {
        this.setState(prevState => ({ 
          service: initalServiceState, 
          day: [...prevState.day, initalDayState],
          cost: [...prevState.cost, initalCostState],
          startTime: [...prevState.startTime,initalStartTimeState]
        }))
      });
  }

  // Attempting to make a function that will check the occupancy of each card
  //  and color-code it accordingly
  checkOccupancy(e) {
     e.preventDefault();
     console.log('tru')
  //   // const red = document.getElementById('red');
  //   // red.className += '' + 'newClassName'
  //   if (this.state.occupancy[1] > 75 + '%') {
  //     console.log('green')
  //     // const green = document.getElementById('green');
  //     // green.div += '' + 'newClassName';
  //   } 
  //   if ((this.state.occupancy[1] > 50 + '%') && (this.state.occupancy[1] < 75 + '%')) {
  //     console.log('yellow')
  //   } 
  //   if (this.state.occupancy[0] < 50 + '%' ) {
  //     console.log('red')
  //   } 
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
            <div onClick={this.checkOccupancy} className="dateCard yellow">
              <div>{this.state.service[0]}</div>
              <div>{this.state.day[0]} {this.state.dateNumber[0]}</div>
              <div>${this.state.cost[0]}</div>
              <div>{this.state.startTime[0]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard green">
              <div>{this.state.service[1]}</div>
              <div>{this.state.day[1]} {this.state.dateNumber[1]}</div>
              <div>${this.state.cost[1]}</div>
              <div>{this.state.startTime[1]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard green">
              <div>{this.state.service[2]}</div>
              <div>{this.state.day[2]} {this.state.dateNumber[2]}</div>
              <div>${this.state.cost[2]}</div>
              <div>{this.state.startTime[2]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard green">
              <div>{this.state.service[3]}</div>
              <div>{this.state.day[3]} {this.state.dateNumber[3]}</div>
              <div>${this.state.cost[3]}</div>
              <div>{this.state.startTime[3]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard green">
              <div>{this.state.service[4]}</div>
              <div>{this.state.day[4]} {this.state.dateNumber[4]}</div>
              <div>${this.state.cost[4]}</div>
              <div>{this.state.startTime[4]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard green">
              <div>{this.state.service[5]}</div>
              <div>{this.state.day[5]} {this.state.dateNumber[5]}</div>
              <div>${this.state.cost[5]}</div>
              <div>{this.state.startTime[5]}</div>
            </div>
            <div onClick={this.checkOccupancy} className="dateCard green">
              <div>{this.state.service[6]}</div>
              <div>{this.state.day[6]} {this.state.dateNumber[6]}</div>
              <div>${this.state.cost[6]}</div>
              <div>{this.state.startTime[6]}</div>
            </div>
            {/* <div onClick='' className="dateCard green">
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
            </div> */}
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
            {/* <AppointmentCard /> */}
      </div>
    );
  }
}

export default Biz_Appointments;
