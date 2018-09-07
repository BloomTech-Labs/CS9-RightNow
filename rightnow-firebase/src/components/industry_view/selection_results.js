import React, { Component } from 'react';
import { Container, Sorting, Time, SortBy } from './selection_results_styles';
import AppointmentCard from '../appointment_card/appt_card';
import { UserContext } from '../../context/userContext';
import firebase from '../../firebase/firebase';
import groupBy from 'lodash.groupby';

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
	render() {
		return (
			<UserContext.Consumer>
				{(value) => {
					if (value.finished) {
						// returns { business_id: [array of corresponding appt objects], etc, etc }
						const query_results_by_business = groupBy(value.queryResults, 'business_ref');
						// array of all business IDs from query
						const all_businesses = Object.keys(query_results_by_business);

						const getBusinessInfo = async () => {
							await Promise.all(
								all_businesses.map((busn) => {
									return firebase
										.firestore()
										.collection('_business_')
										.doc(busn)
										.get()
										.then((doc) => doc.data())
										.catch((err) => console.log('error', err));
								})
							)
								.then((businesses) => {
									return businesses.filter((x) => x !== undefined).reduce((acc, cur) => {
										acc[cur.uid] = {
											business_details: cur.business_information,
											appointments: query_results_by_business[cur.uid]
										};
										return acc;
									}, {});
								})
								.then((final) => value.updateState({ full_query: final, finished: false }))
								.then(() => !value.featured_appointments ? value.retrieveFeaturedAppointments() : null)
								.then(() => value.listenToResults())
								.catch((err) => console.log('oh no', err));
						};

						getBusinessInfo();
					}

					return (
						<Container>
							{value.full_query ? (
								Object.keys(value.full_query).map((busnRef) => {
									const { business_details, appointments } = value.full_query[busnRef];
									return (
										<AppointmentCard
											businessDetails={business_details}
											appointments={appointments}
											key={busnRef}
										/>
									);
								})
							) : null}
						</Container>
					);
				}}
			</UserContext.Consumer>
		);
	}
}
