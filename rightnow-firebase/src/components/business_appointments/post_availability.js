import React, { Component } from "react";
import glamorous from "glamorous";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const Container = glamorous.div({
  width: "100%",
  height: "45%",
  alignSelf: "start",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  marginBottom: "10%",
  borderRadius: "5px"
});

const Title = glamorous.div({
  // width: "100%",
  fontFamily: "Raleway, sans-serif",
  fontSize: "1.5em",
  fontWeight: 600,
  color: "#EBEBEB",
  backgroundColor: "#353A50",
  padding: "2%"
});

const Input = glamorous.input({
	fontFamily: 'Open Sans, sans-serif',
	margin: '3% 2%',
	width: '80%',
	padding: '3%',
	borderRadius: '2px',
	fontSize: '1.1em',
  fontWeight: 400,
	color: 'black',
  backgroundColor: 'white',
  outline: "none",
  border: "1px solid #353A50"
});

const Description = glamorous.textarea({
	fontFamily: 'Open Sans, sans-serif',
	margin: '2% 2%',
	width: '40%',
	padding: '1%',
	borderRadius: '2px',
	fontSize: '1.1em',
  fontWeight: 400,
	color: 'black',
  backgroundColor: 'white',
  outline: "none",
  border: "1px solid #353A50",
  height: "25%", 
  width: "auto",
  maxWidth: "100%", 
  boxSizing: "border-box"
});

const Button = glamorous.button({
	fontFamily: 'Open Sans, sans-serif',
	width: '30%',
	margin: '2.5% 3%',
  padding: '1%',
  alignSelf: "flex-end",
	color: '#EBEBEB',
	fontWeight: 600,
	fontSize: '1.3em',
	border: '1px solid #353A50',
	borderRadius: '5px',
	backgroundColor: '#353A50',
	':hover': { color: '#353A50', backgroundColor: '#EBEBEB', cursor: 'pointer', fontWeight: 800 },
	':focus': { color: '#353A50', backgroundColor: '#EBEBEB' }
});

const Date = glamorous.input({
  fontFamily: 'Open Sans, sans-serif',
	margin: '5% 0',
  width: '90%',
  textAlign: "center",
	padding: '3% !important',
	borderRadius: '2px',
	fontSize: '1.1em !important',
  fontWeight: "400 !important",
	color: 'black',
  backgroundColor: 'white',
  outline: "none",
  border: "1px solid #353A50",
  alignSelf: "flex-end"
})

const Time = glamorous.input({
  fontFamily: 'Open Sans, sans-serif',
  width: '65%',
  textAlign: "center",
	padding: '3% !important',
	borderRadius: '3px',
	fontSize: '1.1em !important',
  fontWeight: "400 !important",
	color: 'black',
  backgroundColor: 'white',
  outline: "none",
  border: "1px solid #353A50",
  float: "right"
})


export default class PostAppointment extends Component {
  state = {
    today: "",
    start_time: "", // moment(),
    end_time: "", // moment().add(30, "m"),
    service: "",
    cost: "",
    description: "",
    business_ref: this.props.busnContext.uid
  }

  handleSubmit = () => {
    this.state.start_time.set({
      "year": this.state.today.year(),
      "month": this.state.today.month(),
      "day": this.state.today.day()
    });

    this.state.end_time.set({
      "year": this.state.today.year(),
      "month": this.state.today.month(),
      "day": this.state.today.day()
    });

    const appointment_details = {
      start: this.state.start_time,
      end: this.state.end_time,
      service: this.state.service,
      cost: this.state.cost,
      description: this.state.description,
      business_ref: this.state.business_ref,
      is_available: true
    };

    axios
      .post("https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/appointment", appointment_details)
      .then(res => console.log("success\n", res))
      .catch(err => console.log("error\n", err));
    
    // this.setState({ time: "", service: "", cost: "", description: "" });
  }


  render() {
    return (
      <Container>
        <style>
          {`
            .react-datepicker-popper {
              position: relative;
            }
            .react-datepicker__time-container {
              width: 100%;
              padding: 2%;
            }
            .react-datepicker__time {
              width: 100%;
            }
            .react-datepicker__time-box {
              margin: 0 !important;
              width: 100% !important;
            }
            .react-datepicker__time-list {
              padding-left: 0 !important;
              padding-right: 0 !important;
              width: 100% !important;
            }
            .react-datepicker__time-list-item {
              margin: auto !important;
          }`}
        </style>
        <Title>Post New Availability</Title>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", margin: "1%" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "45%" }}>
            <Input 
              type="text"
              name="service"
              value={this.state.service}
              placeholder="type of service"
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            /> 

            <Input 
              type="text"
              name="cost"
              value={this.state.cost}
              placeholder="cost"
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: "45%", alignItems: "flex-end", paddingRight: "2%" }}>
            <DatePicker
              placeholderText="Select a Date"
              selected={this.state.today}
              onChange={date => this.setState({ today: date.local() })}
              customInput={<Date />}
            />

            <div style={{ display: "flex", marginTop: "3%", alignSelf: "flex-end", paddingRight: "2%", width: "90%" }}>
              <DatePicker 
                placeholderText="Start time"
                selected={this.state.start_time}
                onChange={date => this.setState({ start_time: date })}
                showTimeSelect
                showTimeSelectOnly
                imeIntervals={15}
                dateFormat="LT"
                timeCaption="Time"
                customInput={<Time />}
              />

              <DatePicker 
                placeholderText="End time"
                selected={this.state.end_time}
                onChange={date => this.setState({ end_time: date })}
                showTimeSelect
                showTimeSelectOnly
                imeIntervals={15}
                dateFormat="LT"
                timeCaption="Time"
                customInput={<Time />}
              />
            </div>
          </div>
        </div>
        
        
        <Description 
          placeholder="description"
          name="description"
          value={this.state.description}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
          >
          </Description>
        <Button onClick={() => this.handleSubmit()}>submit</Button>
      </Container>
    )
  }
}