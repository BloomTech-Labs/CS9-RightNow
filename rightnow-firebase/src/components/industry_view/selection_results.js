import React, { Component } from 'react';
import { Container, Sorting, Time, SortBy } from './selection_results_styles';
import AppointmentCard from '../appointment_card/appt_card';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import { dummy_data } from '../../dummy_data';

export class Clock extends Component {
	state = {
		time: new Date().toLocaleTimeString()
	};

	componentDidMount() {
		this.ßintervalID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick = () => {
		this.setState({ time: new Date().toLocaleTimeString({hour: "2-digit", minute: "2-digit"}) });
	};

	render() {
		return (
			<Sorting>
				{/* <h2>Current time:</h2> */}
				<Time>{this.state.time}</Time>
				{/* <SortBy> */}
					{/* <option disabled defaultValue hidden>
						Sort By
					</option>
					<option value="2">2 hours</option>
					<option value="3">3 hours</option>
					<option value="4">4 hours</option>
					<option value="5">5+ hours</option>
				</SortBy> */}
			</Sorting>
		);
	}
}

/* 
A bit of documentation of what's happening:

First, pull a list of all appointments from value.queryResult, defined as 'appointments'(context).
We set an array called 'cache', which will store `unique` businesses. 

Note that each element in 'cache' is a unique business, so lets refer to it as 'unique_business' array. It is an array which stores 3 elements/properties inside.
The elements of 'unique_business' are stored in a format as follows: unique_business = ["UID of business", [Appointments], {Business Information}].
Therefore, a `string` of UID will belong in unique_business[0], an `array` of appointments in unique_business[1], and an `object` of business information in unique_business[2].
---
Secondly, we look/map through all the appointments in 'appointments' list.
While going through each unique appointment:

If 'cache' is empty, or we don't see a unique business in 'cache' that has a matching UID from each unique appointment we're iterating through,
we initially push BOTH the UID, which will become unique_business[0], together with an `array` of appointment, which will become unique_business[1], 
i.e. we push in [UID of business, [Appointments]].
Ultimately, we are pushing all information regarding unique appointment as an array into 'cache': "the UID" and "an array of appointment", 
which will only contain 1 appointment for now.

We also call axios to retrieve the business place info, using UID that was included in the 'appointment'.
The response from axios will be pushed into the 'unique_business' array later.

If we do find a matching UID, then we just skip axios call entirely and push the unique appointment straight into array of appointments that lives in unique_business[1].
Then we can just forget about it.
---
Thirdly, we look through all the appointments again, but we're now looking to see if axios was invoked for each apppointment.
If axios was invoked, then we look through 'cache', checking unique_business[0] for each element of 'cache' to see if UID from appointment matches it.
If it does match, then now we push the business info we got as response from axios, into unique_business. Now we have unique_business[2] for that unique business.

If axios wasn't called, then the appointment is already placed in [Appointments] that live in unique_business[1]; this unique business will already have the business info,
so we can forget about it.
---
Finally, after all that is done, we return cache, then set it to state in context, which we will now be able to use it site wide.

TL;DR:
In the end, cache will have mutliple unique businesses.
Each unique businesses will have 3 properties: UID, an array of appointments, and business info.

UID is a string;
array of appointment is an array containing one or more unique appointments;
business info is an object that contains info like location, phone number, etc.
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
									// if cache is empty
									if (cache.length === 0) {
										// push business_ref into cache, which will be cache[0]
										// then push array of appointments into cache, which will be cache[1]
										// run axios, push the result into cache, which will later become cache[2]; taken care of after all promises are resolved.
										cache.push([ appt.business_ref, [ appt ] ]);
										return axios.get(
											`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/business/${appt.business_ref}`
										);
									} else {
										// if cache is not empty
										let found = false;
										cache.forEach((each) => {
											for (let j = 0; j < each.length; j++) {
												// if we found a matching UID
												if (appt.business_ref === each[j]) {
													// skip axios then push the appointment block to cache[1]
													each[1].push(appt);
													found = true;
												}
											}
										});
										// same as line 85-87
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
									// check if res[i] exists/axios was called
									// if yes: find element in cache with same ID then push it as element[2]
									// if no: skip
									for (let i = 0; i < appointments.length; i++) {
										if (res[i] !== undefined) {
											// console.log(`res ${i}`, res[i].data.business_information);
											// console.log(`appt ${i}`, appointments[i].business_ref);
											cache.forEach((each) => {
												// look for matching UID
												if (appointments[i].business_ref === each[0]) {
													// push business info into cache, which will now be cache[2]
													each.push(res[i].data.business_information);
													// console.log(`sanity check for res ${i}`, each);
												}
											});
											// cache[].push(res[i].data.business_information);
										} else {
											// console.log(`res ${i} does not exist`);
										}
									}
									// return the entire cache
									// console.log('cache', cache);
									return cache;
								})
								// set to state in context
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
					// pass in each UNIQUE business
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
