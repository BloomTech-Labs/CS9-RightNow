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
    start_time: "",
    end_time: "",
    service: "",
    cost: "",
    description: "",
    business_ref: "xGXdWn7l2mQWiLiVziOv4zJqsGi2"
  }

  handleSubmit = () => {
    axios
      .post("https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/appointment", this.state)
      .then(res => console.log("success\n", res))
      .catch(err => console.log("error\n", err));
    
    // this.setState({ time: "", service: "", cost: "", description: "" });
  }

  render() {
    return (
      <Container>
        <Title>Post New Availability</Title>
        <input 
          type="text"
          name="service"
          value={this.state.service}
          placeholder="type of service"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input 
          style={{ marginTop: "5%" }}
          type="text"
          name="start_time"
          value={this.state.start_time}
          placeholder="start time"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input 
          style={{ marginBottom: "5%" }}
          type="text"
          name="end_time"
          value={this.state.end_time}
          placeholder="end time"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input 
          type="text"
          name="cost"
          value={this.state.cost}
          placeholder="cost"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <Description 
          placeholder="description"
          name="description"
          value={this.state.description}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
          >
          </Description>
        <button onClick={() => this.handleSubmit()}>submit</button>
      </Container>
    )
  }
}