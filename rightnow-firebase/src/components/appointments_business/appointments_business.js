import React, { Component } from "react";
import "./appointments_business_styles.css";
// import db from "../../firebase/firebase";


export default class BizAppointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: ""
    };
  }

  // componentDidMount() {
  //   db
  //     .collection("busn_ACTUAL")
  //     .doc("Mn5KyfUWPMz4D6aiNT3R")
  //     .collection("available_appointments")
  //     .doc("zX4mSwsfq5lRQSlcZ7X3")
  //     .get().then(doc => console.log(doc.data()))
  //     // .add({ time: "this is for", place: "anthony" })
  //     // .then(() => console.log("success"))
  //     .catch(() => console.log("error")); 
  // }
  
  render() {
    return (
      <div id="background">

        <h4>Create a Single Session</h4>
        
        <input
          name="testing"
          value={this.state.testing}
          placeholder="input"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
          style={{ width: "30vw", padding: "1%", fontSize: "1em" }}
        />

        <div className="filterButton" onClick={() => this.submitSession()}>Create Single Session</div>

      </div>
    );
  }
}
