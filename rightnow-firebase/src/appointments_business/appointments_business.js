import React, { Component } from "react";
import "./appointments_business_styles.css";
import firebase from '../firebase/firebase';
const db = firebase.firestore();

class Biz_Appointments extends React.Component {
    constructor(){
        super();
        this.state = {
            service: '',
            date: '',
            cost: '',
            startTime: '',
            endTime: '',
        };
        // this.handleSubmitAppointment = this.handleSubmitAppointment.bind(this);
    }
    componentDidMount() {
        // Upon mounting, this sets the state of this component to what is inside of the database.
        let initalServiceState = [];
        db.collection('businesses').doc('barber, inc.').get().then(function(query) {
            initalServiceState.push(query.data().service)
        }).then(data => {
            this.setState({ service: initalServiceState[0] });
        });
    }

  render() {
    return (
      <div id="background">
        <div className="dashboard">
          <div className="three-four">
            <div className='dateCard yellow'>
                <div>Monday 1</div>
                <div>69%</div>
            </div>
            <div className='dateCard green'>
                <div>Tuesday 2</div>
                <div>89%</div>
            </div>
            <div className='dateCard red'>
                <div>Wednesday 3</div>
                <div>43%</div>
            </div>
            <div className='dateCard red'>
                <div>Thursday 4</div>
                <div>35%</div>
            </div>
            <div className='dateCard yellow'>
                <div>Friday 5</div>
                <div>55%</div>
            </div>
            <div className='dateCard green'>
                <div>Saturday 6</div>
                <div>80%</div>
            </div>
            <div className='dateCard'>
                <div>Sunday 7</div>
                <div>Closed</div>
            </div>
            <div className='dateCard yellow'>
                <div>Monday 1</div>
                <div>69%</div>
            </div>
            <div className='dateCard green'>
                <div>Tuesday 2</div>
                <div>89%</div>
            </div>
            <div className='dateCard red'>
                <div>Wednesday 3</div>
                <div>43%</div>
            </div>
            <div className='dateCard red'>
                <div>Thursday 4</div>
                <div>35%</div>
            </div>
            <div className='dateCard yellow'>
                <div>Friday 5</div>
                <div>55%</div>
            </div>
            <div className='dateCard green'>
                <div>Saturday 6</div>
                <div>80%</div>
            </div>
            <div className='dateCard'>
                <div>Sunday 7</div>
                <div>Closed</div>
            </div>
            <div className='dateCard yellow'>
                <div>Monday 1</div>
                <div>69%</div>
            </div>
            <div className='dateCard green'>
                <div>Tuesday 2</div>
                <div>89%</div>
            </div>
            <div className='dateCard green'>
                <div>Wednesday 3</div>
                <div>93%</div>
            </div>
            <div className='dateCard red'>
                <div>Thursday 4</div>
                <div>35%</div>
            </div>
            <div className='dateCard yellow'>
                <div>Friday 5</div>
                <div>55%</div>
            </div>
            <div className='dateCard green'>
                <div>Saturday 6</div>
                <div>80%</div>
            </div>
            <div className='dateCard'>
                <div>Sunday 7</div>
                <div>Closed</div>
            </div>
            <div className='dateCard yellow'>
                <div>Monday 1</div>
                <div>69%</div>
            </div>
            <div className='dateCard green'>
                <div>Tuesday 2</div>
                <div>89%</div>
            </div>
            <div className='dateCard green'>
                <div>Wednesday 3</div>
                <div>83%</div>
            </div>
            <div className='dateCard green'>
                <div>Thursday 4</div>
                <div>75%</div>
            </div>
            <div className='dateCard yellow'>
                <div>Friday 5</div>
                <div>65%</div>
            </div>
            <div className='dateCard red'>
                <div>Saturday 6</div>
                <div>20%</div>
            </div>
            <div className='dateCard'>
                <div>Sunday 7</div>
                <div>Closed</div>
            </div>
            <div className='dateCard yellow'>
                <div>Thursday 4</div>
                <div>65%</div>
            </div>
            <div className='dateCard green'>
                <div>Friday 5</div>
                <div>95%</div>
            </div>
            <div className='dateCard red'>
                <div>Saturday 6</div>
                <div>10%</div>
            </div>
          </div>

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
              <div className='filterButton'>Create Appointments</div>
            </div>
            <div className="slide">
              <h4>Create a Single Appointment</h4>
              <input placeholder="Type of Service" />
              <input placeholder="Date (MM/DD/YY)" />
              <input placeholder="Cost ($)" />
              <input placeholder="Time" />
              <div className='filterButton'>Create Appointment</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Biz_Appointments;
