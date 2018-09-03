import React, { Component } from 'react';
import glamorous from 'glamorous';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Container = glamorous.div({
	margin: '2% auto 0',
	width: '95%',
	height: '35%',
	border: '1px solid black',
	borderRadius: '5px',
	display: 'flex',
	flexDirection: 'column',
	// padding: '5%'
});

const Title = glamorous.div({
	width: '100%',
	fontSize: '1.5em',
	fontWeight: 600,
	backgroundColor: '#353A50',
	color: '#EBEBEB'
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
				<div>
					<Title>Post New Availability</Title>
					<input
						type="text"
						name="service"
						value={this.state.service}
						placeholder="type of service"
						onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
					/>

					<DatePicker
						style={{ display: 'block', width: '50%' }}
						selected={this.state.today}
						onChange={(date) => this.setState({ today: date.local() })}
						// isClearable={true}
						placeholderText="Date"
					/>

					<DatePicker
						placeholderText="Start time"
						selected={this.state.start_time}
						onChange={(date) => this.setState({ start_time: date })}
						showTimeSelect
						showTimeSelectOnly
						imeIntervals={15}
						dateFormat="LT"
						timeCaption="Time"
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
					/>

					<input
						type="text"
						name="cost"
						value={this.state.cost}
						placeholder="cost"
						onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
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
