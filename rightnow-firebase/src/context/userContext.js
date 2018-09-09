import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import axios from 'axios';
import moment from "moment";

export const UserContext = React.createContext();

export default class UserProvider extends Component {
	state = {
		uid: '',
		name: '',
		email: '',
		phone: '',
		photo: '',
		location: '',
		appointments: [],
		featured_appointments: null,
		upcoming_appointments: [],
		companyNames: [],
		payload: {},

		init_appointment: {},
		displayConfirm: false,
		confirm: false,

		service_query: "",
		city_query: "Manhattan, NY",
		queryResults: [],
		finished: false,
		full_query: null,
		filtered_query: null,
		update_results: false,

		industry_selection: "All",
		time_selection: "All",

		userSignedIn: false,
		clientZip: null,
		ifOAuth: '',

		updateState: async (data) => await this.setState(data),

		customerLogout: () => {
			firebase.auth().signOut();
			this.unsubscribe();
		},

		filter_by_industry: (obj_to_filter, industry_filter=this.state.industry_selection) => {
			const copy_full = {...obj_to_filter};
			const temp_query = {};
			for (let busn in copy_full) {
				const busn_appts= copy_full[busn].appointments;
				const contains_industry = busn_appts.filter(appt => {
						const appt_lower = appt.service.toLowerCase();
						const industry_lower = industry_filter.toLowerCase();
						const singluar = industry_lower.slice(0, industry_lower.length-1);
						return (appt_lower.includes(industry_lower) || appt_lower.includes(singluar)) && appt.is_available;
					});
				if (contains_industry.length !== 0) {
					temp_query[busn] = copy_full[busn];
				}
			}
			return temp_query;
		},

		filter_by_time: (obj_to_filter, time_filter=this.state.time_selection) => {
			const copy_full = {...obj_to_filter};
			const temp_query = {};
			for (let busn in copy_full) {
				const busn_appts= copy_full[busn].appointments;
				const contains_time = busn_appts.filter(appt => {
					const is_after_current_time = moment(appt.start).isAfter(moment());
					const is_before_filter_time = moment(appt.start).isBefore(moment().add(+time_filter[0], "hour"))
					return is_after_current_time && is_before_filter_time;
				});
				if (contains_time.length !== 0) {
					temp_query[busn] = copy_full[busn];
					temp_query[busn].appointments = contains_time;
				}
			}
			return temp_query;
		},

		filter_appointments: data => {
			if (data.industry_selection) {
				if (data.industry_selection === "All" && this.state.time_selection === "All") {
					this.setState({ 
						filtered_query: {...this.state.full_query}, 
						update_results: true, 
						industry_selection: data.industry_selection 
					});
				} else if (data.industry_selection === "All") {
					const filtered = this.state.filter_by_time(this.state.full_query);
					this.setState({ 
						filtered_query: filtered,
						update_results: true, 
						industry_selection: data.industry_selection 
					});
				} else if (this.state.time_selection === "All") {
					const filtered = this.state.filter_by_industry(this.state.full_query, data.industry_selection);
					this.setState({ 
						filtered_query: filtered,
						update_results: true, 
						industry_selection: data.industry_selection 
					});
				} else {
					const filtered = this.state.filter_by_industry(this.state.full_query, data.industry_selection);
					const filtered2 = this.state.filter_by_time(filtered, this.state.time_selection);
					this.setState({ 
						filtered_query: filtered2,
						update_results: true, 
						industry_selection: data.industry_selection 
					});
				}
			} else if (data.time_selection) {
				if (data.time_selection === "All" && this.state.industry_selection === "All") {
					this.setState({ 
						filtered_query: {...this.state.full_query}, 
						update_results: true,
						time_selection: data.time_selection
					});
				} else if (data.time_selection === "All") {
					const filtered = this.state.filter_by_industry(this.state.full_query);
					this.setState({ 
						filtered_query: filtered,
						update_results: true, 
						time_selection: data.time_selection 
					});
				} else if (this.state.industry_selection === "All") {
					const filtered = this.state.filter_by_time(this.state.full_query, data.time_selection);
					this.setState({ 
						filtered_query: filtered,
						update_results: true, 
						time_selection: data.time_selection 
					});
				} else {
					const filtered = this.state.filter_by_time(this.state.full_query, data.time_selection);
					const filtered2 = this.state.filter_by_industry(filtered);
					this.setState({ 
						filtered_query: filtered2,
						update_results: true, 
						time_selection: data.time_selection 
					});
				}
			}
		},

		upcomingAppointment: async () => {
			const db = firebase.firestore();

			const appointmentRef = await db
				.collection('_customer_')
				.doc(this.state.uid)
				.collection('future_appointments')
				.get();

			const apptIds = await appointmentRef.docs.map((doc) => doc.data());

			const future_appointments = await Promise.all(
				apptIds.map(async (appt) => {
					const currentRef = await db.collection('_appointment_').doc(appt['appointment_id']).get();
					const appointment = await currentRef.data();
					return appointment;
				})
			);

			this.setState({ upcoming_appointments: future_appointments });

			const names = await Promise.all(this.state.upcoming_appointments.map(async (appt) => {
				const businessRef = await db.collection('_business_').doc(appt['business_ref']).get();
				console.log('buss Ref', businessRef);
				const business = await businessRef.data();
				console.log(business['business_information'].name);
				return business['business_information'].name;
			}));

			this.setState({companyNames: names})
		},

		searchAll: async () => {
			const x = await firebase
				.firestore()
				.collection('_appointment_')
				.where('is_available', '==', true)
				.get()
				.then((res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))) // FIXED BUG
				.catch((err) => console.log('err', err));

			this.setState({ queryResults: x, finished: true });
		},

		handleSearch: async () => {
			const query = await this.state.city_query === "" ?
				firebase.firestore().collection("_appointment_").where("service", "==", this.state.service_query) :
				firebase.firestore().collection("_appointment_").where("business_address", "==", this.state.city_query);

			const appointments = await query.get()
				.then(res => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
				.then(data => this.setState({ queryResults: data, finished: true, city_query: "", service_query: "" }))
				.catch(err => console.log("error", err));

			return appointments;
		},

		// Update user info from user-setting page
		updateUserBasicInfo: (payload) => {
			const db = firebase.firestore();
			const updateInfo = db.collection('_customer_').doc(this.state.uid);

			return updateInfo
				.update({
					first_name: payload.firstName,
					last_name: payload.lastName,
					email: payload.email,
					location: payload.location,
					phone: payload.phone
				})
				.then((res) => console.log('User info succesffully updated:', res))
				.catch((err) => console.log('something went wrong', err));
		},

		// Update user info from user-setting page
		updateUserPassword: (payload) => {
			const user = firebase.auth().currentUser;
			const newPassword = payload.newPasswordAgain;

			if (newPassword !== '') {
				user
					.updatePassword(newPassword)
					.then((res) => console.log('update successful', res))
					.catch((err) => console.log('error:', err));
			}
		},

		clientLocation: () => {
			axios
				.get('http://ip-api.com/json')
				.then((res) =>
					this.setState({
						query: `${res.data.city}, ${res.data.region}`,
						clientZip: res.data.zip
					})
				)
				.catch((err) => console.log('error', err));
		},

		initializeAppointment: async (appt) => {
			const business_details = await axios
				.get(`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/business/${appt.business_ref}`)
				.then((res) => res.data)
				.catch((err) => console.log('error', err));
			const full_appointment = { ...appt, business_details };
			this.setState({
				init_appointment: full_appointment,
				displayConfirm: true
			});
		},

		confirmAppointment: () => {
			if (!this.state.confirm || !this.state.uid) return;
			console.log(this.state.init_appointment);

			firebase
				.firestore()
				.collection('_appointment_')
				.doc(this.state.init_appointment.id)
				.update({ is_available: false, customer_ref: this.state.uid })
				.then(() => console.log('successful update'))
				.catch((err) => console.log('error updating appointment', err));

			// NEED FIREBASE FUNCTION FOR APPOINTMENT ON-UPDATE
			// appointment does not get added to customer's appoinment collection
			this.setState({ displayConfirm: false });
		},

		listenToResults: () => {
			// THERE IS NO QUERY WHEN WE AUTO POPULATE DEFAULT APPOINTMENTS
			const query = firebase.firestore().collection('_appointment_');
				// this.state.query === ''
					// ? firebase.firestore().collection('_appointment_')
					// : firebase.firestore().collection('_appointment_').where('service', '==', this.state.query);

			this.unsubscribe = query.onSnapshot((snapshot) => {
				snapshot.docChanges().forEach((change) => {
					const id = change.doc.id;
					const doc = change.doc.data();
					const busn_ref = doc.business_ref;

					if (change.type === 'modified' || change.type === 'removed') {
						const copy = { ...this.state.full_query };

						if (!copy[busn_ref].appointments) return;

						const busn_appts = copy[busn_ref].appointments;

						copy[busn_ref].appointments = busn_appts.filter((appt) => appt.id !== id);
						console.log(copy);
						this.setState({ full_query: copy });
					}
				});
			});
		},

		retrieveFeaturedAppointments: async () => {
			// returns an array of arrays
			// each sub array is structured as [business_id, rating]
			const eachRating = Object.keys(this.state.full_query).map((busn_id) => {
				const rating = this.state.full_query[busn_id].business_details.rating;
				if (rating !== undefined) return [ busn_id, rating ];
				else return [ busn_id, 0 ];
			});

			// SORT IN DECENDING ORDER -- TAKE THE TOP THREE
			const top3 = eachRating.sort((x, y) => y[1] - x[1]).slice(0, 3);

			// RETRIEVE ALL BUSINESS DETAILS AND THEIR APPOINTMENTS
			const top3_withAllDetails = top3.reduce((acc, cur) => {
				const busn_id = cur[0];
				acc[busn_id] = this.state.full_query[busn_id];
				return acc;
			}, {});

			this.setState({ featured_appointments: top3_withAllDetails });
		}
	};

	componentDidMount() {
		// this.state.clientLocation(); // set initial query input to client location
		this.state.searchAll(); // searching for all appts: TEMPORARY

		firebase.auth().onAuthStateChanged((user) => {
			console.log(user);

			if (user && !this.state.userSignedIn) {
				user
					.getIdTokenResult()
					.then((token) => (token.claims.business ? true : false))
					.then((isBusiness) => {
						if (isBusiness) return;
						else {
							this.setState(
								{
									userSignedIn: true,
									uid: user.uid,
									name: user.displayName,
									email: user.email,
									phone: user.phoneNumber,
									photo: user.photoURL,
									ifOAuth: user.providerData[0].providerId
								},
								() => {
									this.state.upcomingAppointment();
									// this.state.getCompanyName();
								}
							);
							return;
						}
					})
					.catch((err) => console.log('error', err));
			} else if (!user && this.state.userSignedIn) {
				this.setState({
					userSignedIn: false,
					uid: null,
					name: null,
					email: null,
					phone: null,
					photo: null,
					ifOAuth: ''
				});
			} else return;
		});
	}

	render() {
		return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
	}
}

/*
DIRECTIONS TO USE CONTEXT:
  0. open the component file that you're working on
  1. import { UserContext } from "../some_path/context/userContext";
  2. inside of your render/return ...
    <UserContext.Consumer>
      {value => {
        // you can update state via value.updateState({ key: value })
        // you can access name, email, phone, etc. via value.data
        return (
          // whatever you want the component to display
          // see login_modal.js lines 43-56 for example
        )
        
      }}
    </UserContext.Consumer>
*/

/*

				//  THIS IS A MORE EFFICIENT METHOD TO SORT BY INDUSTRY ONCE OUR DATABASE GROWS
				// 	const busn_tags = copy_full[busn].business_details.tags;
				// 	const contains_industry = busn_tags.filter(tag => {
				// 		const tag_lower = tag.toLowerCase();
				// 		const industry_lower = data.industry_selection.toLowerCase();
				// 		return tag_lower.includes(industry_lower);
				// 	});
				// 	if (contains_industry.length !== 0) {
				// 		temp_query[busn] = copy_full[busn];
				// 	}

*/