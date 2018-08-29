import React, { Component } from "react";
import glamorous from "glamorous";
import axios from "axios";


const Container = glamorous.div({
  width: "85%",
  height: "25%",
  border: "1px solid black"
})


export default class PostAppointment extends Component {
  state = {
    time: "",
    type: "",
    cost: ""
  }

  handleSubmit = () => {
    axios
      .post("https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/appointment", this.state)
      .then(res => console.log("success\n", res))
      .catch(err => console.log("error\n", err));
    
    this.setState({ time: "", type: "", cost: "" });
  }

  render() {
    return (
      <Container>
        <input 
          type="text"
          name="type"
          value={this.state.type}
          placeholder="type"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input 
          type="text"
          name="time"
          value={this.state.time}
          placeholder="time"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input 
          type="text"
          name="cost"
          value={this.state.cost}
          placeholder="cost"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button onClick={() => this.handleSubmit()}>submit</button>
      </Container>
    )
  }
}