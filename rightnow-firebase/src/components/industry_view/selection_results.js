import React, { Component } from 'react';
import { Container, Sorting, Time, SortBy } from './selection_results_styles';
import AppointmentCard from '../appointment_card/appt_card';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import { dummy_data } from '../../dummy_data';

class Clock extends Component {
	state = {
		time: new Date().toLocaleTimeString()
	};

	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick = () => {
		this.setState({ time: new Date().toLocaleTimeString() });
	};

	render() {
		return (
			<Sorting>
				<h2>Current time:</h2>
				<Time>{this.state.time}</Time>
				<SortBy>
					<option disabled defaultValue hidden>
						Sort By
					</option>
					<option value="2">2 hours</option>
					<option value="3">3 hours</option>
					<option value="4">4 hours</option>
					<option value="5">5+ hours</option>
				</SortBy>
			</Sorting>
		);
	}
}

export default class Results extends Component {
	// myself = this;
	state = { testing: null };
	render() {
		return (
			<UserContext.Consumer>
				{(value) => {
					console.log('here');
					if (value.finished) {
						// console.log('finished is true');

						const appointments = value.queryResults; // called properly

						const testfunction = async (appointments) => {
							const x = await Promise.all(
								appointments.map((appt) => {
									return axios.get(
										`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/business/${appt.business_ref}`
									);
								})
							)
								.then((res) => {
									const final = [];

									for (let i = 0; i < appointments.length; i++) {
										const temp = {
											appointment: appointments[i],
											business_details: res[i].data.business_information
										};
										final.push(temp);
									}

									return final;
								})
								.then((actual) => value.updateState({ this_is_it: actual, finished: false }))
								.then((actual) => this.setState({ testing: actual }));

							return x;
						};

						testfunction(appointments);
						// console.log('queryResult', value.queryResults);
						// console.log('this is it', value.this_is_it);
					}

					if (value.this_is_it !== null) {
						return (
							<Container>
								<Clock />

								{value.this_is_it.map((eachData, index) => (
									<AppointmentCard businessInfo={eachData} key={index} />
								))}
							</Container>
						);
					}
				}}
			</UserContext.Consumer>
		);
	}
}
