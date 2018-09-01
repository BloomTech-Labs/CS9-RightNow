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

/* 
A bit of documentation of what's happening:

*/

export default class Results extends Component {
	// myself = this;
	state = { testing: null };
	render() {
		return (
			<UserContext.Consumer>
				{(value) => {
					// console.log('here');
					if (value.finished) {
						// console.log('finished is true');
						const cache = []; // store all the appointments by unique business ID
						const appointments = value.queryResults; // All the appoints available

						const testfunction = async (appointments) => {
							const z = await Promise.all(
								appointments.map((appt) => {
									if (cache.length === 0) {
										cache.push([ appt.business_ref, [ appt ] ]);
										return axios.get(
											`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/business/${appt.business_ref}`
										);
									} else {
										let found = false;
										cache.forEach((each) => {
											for (let j = 0; j < each.length; j++) {
												if (appt.business_ref === each[j]) {
													// skip axios then push the appointment block to cache[1]
													each[1].push(appt);
													found = true;
												}
											}
										});
										// push business_ref into cache, which will be cache[0]
										// then push arr_Appt into cache, which will be cache[1]
										// run axios, push the result into cache, which will be cache[2]; taken care of after all promises are resolved.
										if (found === false) {
											cache.push([ appt.business_ref, [ appt ] ]);
											return axios.get(
												`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/business/${appt.business_ref}`
											);
										}
									}
								})
							)
								.then((res) => {
									// check if res[i] exists
									// if yes: find element in cache with same ID then push it as element[2]
									// if no: skip
									for (let i = 0; i < appointments.length; i++) {
										if (res[i] !== undefined) {
											// console.log(`res ${i}`, res[i].data.business_information);
											// console.log(`appt ${i}`, appointments[i].business_ref);
											cache.forEach((each) => {
												if (appointments[i].business_ref === each[0]) {
													each.push(res[i].data.business_information);
													console.log(`sanity check for res ${i}`, each);
												}
											});
											// cache[].push(res[i].data.business_information);
										} else {
											console.log(`res ${i} does not exist`);
										}
									}
									console.log('cache', cache);
									return cache;
								})
								.then((actual) => value.updateState({ this_is_it: actual, finished: false }));

							return z;

							/*
							// USE THIS IF YOU WANT EVERY APPOITNMENT TO CARRY BUSINESS INFO

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
								.then((actual) => value.updateState({ this_is_it: actual, finished: false }));
							// .then((actual) => this.setState({ testing: actual }));

							return x;
						*/
						};

						testfunction(appointments);
						// console.log('queryResult', value.queryResults);
						// console.log('this is it', value.this_is_it);
					}

					if (value.this_is_it !== null) {
						/*
						const result = {};
						
						//  const result = [
						// 	 {business_ref: { business_details, appointments[]}},
						// 	 {business_ref: { business_details, appointments[]}},
						//  ]
						 

						// const res = value.this_is_it.filter(x => x.appointment)

						value.this_is_it.forEach((appt) => {
							if (!result[appt.appointment.business_ref]) {
								// if no element
								result[appt.appointment.business_ref] = {
									business_details: appt.appointment.business_details,
									appointments: [ appt.appointment ]
								};
							}
							//  else {
							// 	result[appt.appointment.business_ref] = {
							// 		business_details: appt.appointment.business_details,
							// 		appointments: [ ...appt.appointment.appointments, result[appt.appointment] ]
							// 	};
							// }
						});
						*/
						// console.log(result);
						return (
							<Container>
								<Clock />

								{/* {value.this_is_it.map((eachData, index) => (
									<AppointmentCard businessInfo={eachData} key={index} />
								))} */}
							</Container>
						);
					}
				}}
			</UserContext.Consumer>
		);
	}
}
