import React, { Component } from "react";
import glamorous from "glamorous";
import axios from "axios";


const Container = glamorous.div({
  width: "85%",
  height: "25%",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column"
});

const Title = glamorous.div({
  width: "100%",
  fontSize: "1.5em",
  fontWeight: 600
});

const Description = glamorous.textarea({
  height: "15%", 
  maxWidth: "100%", 
  boxSizing: "border-box"
});

export default class PostAppointment extends Component {
  state = {
    time: "",
    service: "",
    cost: "",
    description: "",
    business_ref: "xGXdWn7l2mQWiLiVziOv4zJqsGi2"
  }

  handleSubmit = () => {
    axios
      .post("https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/appointment", this.state)
      .then(res => console.log("success\n", res))
      .catch(err => console.log("error\n", err));
    
    this.setState({ time: "", service: "", cost: "", description: "" });
  }

  render() {
    return (
      <Container>
        <Title>Post New Availability</Title>
        <input 
          type="text"
          name="service"
          value={this.state.service}
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
        <Description placeholder="description"></Description>
        <button onClick={() => this.handleSubmit()}>submit</button>
      </Container>
    )
  }
}