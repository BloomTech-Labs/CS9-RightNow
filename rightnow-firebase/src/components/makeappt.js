import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./makeappt.css";
import firebase from "../firebase/firebase";
const db = firebase.firestore();

export default class BusinessAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: "",
      day: "",
      time: "",
      cost: "",
      dbservice: [],
      dbtime: [],
      dbday: [],
      dbcost: [],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  makeAppt = () => {
    const { service, day, time, cost } = this.state;
    db.collection("_Appts_").add({
        cost: cost,
        day: day,
        service: service,
        time: time
    })
  }

  showAppts = () => {
// console.log('HEY')
        db.collection("_Appts_").get("vuu63mHGCpL4abcdzsOW").then(doc => {
            let x = doc.data().cost;
            console.log(x);
        })
}

  render() {
      return(
          <div>
            <form>
                <input 
                    onChange={this.handleChange}
                    name="service"
                    value={this.state.service}
                    placeholder="service"
                />
                <input 
                    onChange={this.handleChange}
                    name="day"
                    value={this.state.day}
                    placeholder="day"
                />
                <input 
                    onChange={this.handleChange}
                    name="time"
                    value={this.state.time}
                    placeholder="time"
                />
                <input 
                    onChange={this.handleChange}
                    name="cost"
                    value={this.state.cost}
                    placeholder="cost"
                />
                <button
                    onClick={this.makeAppt}
                >SUBMIT!</button>
                <button
                    onClick={this.showAppts()}
                >show</button>
            </form>
            <div>This is our State as an appt is being made</div>
            <li>1. {this.state.service}</li>
            <li>2. {this.state.day}</li>
            <li>3. {this.state.time}</li>
            <li>4. {this.state.cost}</li>
            
            <div>This is the first appointment made for this business</div>
                <div> All the days, in order</div>
                {this.state.dbtime.map((x,i) => {
                    return <li key={i}>{x}</li>
                })}
                <div> All the times, in order</div>
                {this.state.dbtime.map((x,i) => {
                    return <li key={i}>{x}</li>
                })}
                <div> All the services, in order</div>
                {this.state.dbservice.map((x,i) => {
                    return <li key={i}>{x}</li>
                })}
                <div> All the costs, in order</div>
                {this.state.dbcost.map((x,i) => {
                    return <li key={i}>{x}</li>
                })}
          </div>
            
          
      )
  }
}



// Fill out form
// Set to state 
// Create a document to the collections in db, delete state
// query all the daya in the db
