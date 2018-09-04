import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Container = glamorous.div({
	margin: '4% auto',
	boxSizing: 'border-box',
	width: '80%',
	height: '100%',
	border: '3px solid grey'
});

const Title = glamorous.div({
	background: '#353A50',
	width: '100%',
	fontSize: '1.5em',
	fontWeight: 600,
	color: 'white',
	fontFamily: 'Open Sans, sans-serif'
});

const Description = glamorous.textarea({
	height: '15%',
	maxWidth: '100%',
	boxSizing: 'border-box'
});

export default class PostAppointment extends Component {
	state = {
		today: moment(),
		start_time: moment(),
		end_time: moment().add(30, 'm'),
		service: '',
		cost: '',
		description: '',
		business_ref: this.props.busnContext.uid
	};

	handleSubmit = () => {
		this.state.start_time.set({
			year: this.state.today.year(),
			month: this.state.today.month(),
			day: this.state.today.day()
		});

		this.state.end_time.set({
			year: this.state.today.year(),
			month: this.state.today.month(),
			day: this.state.today.day()
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
			.post('https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/appointment', appointment_details)
			.then((res) => console.log('success\n', res))
			.catch((err) => console.log('error\n', err));

		// this.setState({ time: "", service: "", cost: "", description: "" });
	};

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
				<div style={{ padding: '3%' }}>
					<input
						style={{
							border: '1px solid grey',
							width: '40%',
							background: '#dee1ed',
							fontSize: '1.2em'
						}}
						type="text"
						name="service"
						value={this.state.service}
						placeholder="type of service"
						onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
					/>
					<DatePicker
						placeholderText="Select a Date"
						className="dmyField"
						style={{
							border: '1px solid grey',
							width: '40%',
							margin: '2%',
							background: '#dee1ed',
							width: '100%'
						}}
						selected={this.state.today}
						onChange={(date) => this.setState({ today: date.local() })}
					/>

					<div style={{ border: '1px solid blue', display: 'flex' }}>
						<DatePicker
							placeholderText="Start time"
							selected={this.state.start_time}
							onChange={(date) => this.setState({ start_time: date })}
							showTimeSelect
							showTimeSelectOnly
							imeIntervals={15}
							dateFormat="LT"
							timeCaption="Time"
							className="timeFields"
							// style={{
							// 	border: '1px solid grey',
							// 	width: '30%',
							// 	margin: '2%',
							// 	marginLeft: '2%',
							//   background: '#dee1ed',
							//   color: 'red'
							// }}
						/>

						<DatePicker
							placeholderText="End time"
							selected={this.state.end_time}
							onChange={(date) => this.setState({ end_time: date })}
							showTimeSelect
							showTimeSelectOnly
							imeIntervals={15}
							dateFormat="LT"
							timeCaption="Time"
							className="timeFields"
							// style={{
							// 	border: '1px solid grey',
							// 	width: '30%',
							// 	margin: '2%',
							// 	marginLeft: '2%',
							// 	background: '#dee1ed'
							// }}
						/>
					</div>
					<input
						type="text"
						name="cost"
						value={this.state.cost}
						placeholder="cost"
						onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
						style={{
							border: '1px solid grey',
							width: '30%',
							background: '#dee1ed',
							display: 'block'
						}}
					/>
					<Description
						placeholder="description"
						name="description"
						value={this.state.description}
						onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
					/>
					<button onClick={() => this.handleSubmit()}>submit</button>
				</div>
			</Container>
		);
	}
}
