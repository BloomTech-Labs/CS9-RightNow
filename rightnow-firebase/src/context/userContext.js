import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import axios from 'axios';
import swal from 'sweetalert2/dist/sweetalert2.js';
import '../z_sweetAlert/sweetalert2.css';

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

		query: '',
		queryResults: [],
		finished: false,
		full_query: null,

		userSignedIn: false,
		clientZip: null,
		ifOAuth: '',

		updateState: async (data) => await this.setState(data),

		customerLogout: () => {
			firebase.auth().signOut();
			this.unsubscribe();
		},

		upcomingAppointment: async () => {
			// console.log("Starting!");
			// console.log('uid', this.state);
			const db = firebase.firestore();

			const appointmentRef = await db
				.collection('_customer_')
				.doc(this.state.uid)
				.collection('future_appointments')
				.get();
			// console.log('ApptRef', appointmentRef);
			const apptIds = await appointmentRef.docs.map((doc) => doc.data());

			///////////////////////////////////////////////////////////////////////
			const future_appointments = await Promise.all(
				apptIds.map(async (appt) => {
					const currentRef = await db.collection('_appointment_').doc(appt['appointment_id']).get();
					// console.log(currentRef.data());
					const appointment = await currentRef.data();
					// console.log(appointment);
					return appointment;
				})
			);

			// console.log('appts', future_appointments);
			this.setState({ upcoming_appointments: future_appointments });

			console.log('Hello', this.state.upcoming_appointments.length);

			const names = await Promise.all(
				this.state.upcoming_appointments.map(async (appt) => {
					const businessRef = await db.collection('_business_').doc(appt['business_ref']).get();
					console.log('buss Ref', businessRef);
					const business = await businessRef.data();
					console.log(business['business_information'].name);
					return business['business_information'].name;
				})
			);

			this.setState({ companyNames: names });
		},

		getCompanyName: async () => {
			// const db = firebase.firestore();
			// console.log('Hello', this.state.upcoming_appointments.length);
			//
			// const names = await Promise.all(this.state.upcoming_appointments.map(async (appt) => {
			// 	const businessRef = await db.collection('_business_').doc(appt['business_ref']).get();
			// 	console.log('buss Ref', businessRef);
			// 	const business = await businessRef.data();
			// 	console.log(business['business_information'].name);
			// 	return business['business_information'].name;
			// }));
			//
			// this.setState({companyNames: names})
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
			await axios
				.get(
					`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/appointment?term=${this.state.query}`
				)
				.then((res) => this.setState({ queryResults: res.data, finished: true }))
				.catch((err) => console.log('error', err));
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

			// axios
			// 	.put(
			// 		`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/customer/${this.state.uid}`,
			// 		payload
			// 	)
			// 	.then((res) => console.log(res));
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
			const query =
				this.state.query === ''
					? firebase.firestore().collection('_appointment_')
					: firebase.firestore().collection('_appointment_').where('service', '==', this.state.query);

			this.unsubscribe = query.onSnapshot((snapshot) => {
				snapshot.docChanges().forEach((change) => {
					const id = change.doc.id;
					const doc = change.doc.data();
					const busn_ref = doc.business_ref;

					console.log(change.type);
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
						// if logged in as Business
						if (isBusiness) {
							return;
						} else {
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
