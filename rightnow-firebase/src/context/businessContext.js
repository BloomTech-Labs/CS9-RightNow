import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import axios from 'axios';
import moment from 'moment';

import swal from 'sweetalert2/dist/sweetalert2.js';
import '../z_sweetAlert/sweetalert2.css';

export const BusinessContext = React.createContext();

export default class BusinessProvider extends Component {
	state = {
		uid: null,
		userSignedIn: false,
		display_delete_modal: false,
		display_payment_modal: true,

		personal: {
			full_name: '',
			first_name: '',
			last_name: '',
			email: '',
			phone: ''
		},

		business: {
			name: '',
			fullAddress: '',
			street_number: '',
			street_name: '',
			city: '',
			state: '',
			zip: '',
			phone: '',
			rating: '',
			photos: []
		},

		selectedItem: '',

		appointments: [],
		selected_appointment: null,

		future_appointments: [],
		available_appointments: [],
		booked_appointments: [],

		updateBusiness: (data) => this.setState({ business: data }), // PLACES API USES THIS

		updateState: async (data) => await this.setState(data),

		business_logout: () => {
			firebase.auth().signOut();
			this.unsubscribe();
		},

		delete_appointment: () => {
			if (!this.state.selected_appointment.is_available) return false;

			const appt_id = this.state.selected_appointment.id;

			firebase
				.firestore()
				.collection('_appointment_')
				.doc(appt_id)
				.delete()
				.then((res) => console.log('success', res))
				.catch((err) => console.log('error', err));

			firebase
				.firestore()
				.collection('_business_')
				.doc(this.state.uid)
				.collection('future_appointments')
				.doc(appt_id)
				.delete()
				.then((res) => console.log('success', res))
				.catch((err) => console.log('error', err));

			this.setState({ display_delete_modal: false, selected_appointment: null });

			return true;
		},
		get_business_details: async (id) => {
			const busn_details = await firebase
				.firestore()
				.collection('_business_')
				.doc(id)
				.get()
				.then((doc) => doc.data())
				.then((data) => this.setState({ business: data.business_information }))
				.catch((err) => console.log('error', err));
			return busn_details;
		},

		// SweetAlert Stuff
		fireSweetAlert_waiting: (type) => {
			swal({
				title: 'Logging you in now...',
				onOpen: () => {
					swal.showLoading();
				}
			});
		},
		fireSweetAlert_success: (type) => {
			const toast = swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000
			});
			if (type === 'login') {
				toast({
					type: 'success',
					title: 'Signed in successfully'
				});
			} else if (type === 'logout') {
				toast({
					type: 'success',
					title: 'Successfully signed off'
				});
			}
		},

		fireSweetAlert_error: (type) => {
			const toast = swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000
			});

			toast({
				type: 'error',
				title: 'Wrong email / password'
			});
		},
		fireSweetAlert_error_notBiz: (type) => {
			const toast = swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000
			});

			toast({
				type: 'error',
				title: 'Your account is not a registered business account.'
			});
		},
		fireSweetAlert_error_emptyField: (type) => {
			const toast = swal.mixin({
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3000
			});

			toast({
				type: 'error',
				title: 'You have incomplete fields'
			});
		}
	};

	componentDidMount() {
		console.log('BBBBBB', this);
		firebase.auth().onAuthStateChanged((user) => {
			console.log(`current user:`, user);

			if (user && !this.state.userSignedIn) {
				user
					.getIdTokenResult()
					.then((token) => (token.claims.business ? true : false))
					.then((isBusiness) => {
						if (!isBusiness) {
							console.log('BB111a', this);

							// firebase.auth().signOut();
							// .then((res) => setTimeout(this.fireSweetAlert_error_notBiz, 600))
							// .catch((err) => console.log('something went wrong:', err));
						} else {
							console.log('BB111b', this);

							this.setState({
								userSignedIn: true,
								uid: user.uid,
								personal: {
									full_name: user.displayName,
									email: user.email,
									phone: user.phoneNumber,
									photo: user.photoURL
								}
							});
							this.initSnapshot();
						}
					})
					.catch((err) => console.log('error', err));
				console.log('BBB111', this);
			} else if (!user && this.state.userSignedIn) {
				// empty state
				this.setState({
					userSignedIn: false,
					uid: null,
					personal: { full_name: null, first_name: null, last_name: null, email: null, phone: null },
					business: {
						name: null,
						fullAddress: null,
						street_number: null,
						street_name: null,
						city: null,
						state: null,
						zip: null,
						phone: null,
						rating: null,
						photos: []
					},
					appointments: [],
					future_appointments: [],
					available_appointments: [],
					booked_appointments: []
				});
				console.log('BBB222', this);
			} else return;
		});
	}

	initSnapshot = () => {
		this.unsubscribe = firebase
			.firestore()
			.collection('_appointment_')
			.where('business_ref', '==', this.state.uid)
			.onSnapshot((snapshot) => {
				snapshot.docChanges().forEach((change) => {
					// id of the document that was changed
					const id = change.doc.id;
					// all data in the document
					const doc = change.doc.data();
					// format start/end times and appt title for calendar -- add doc id for future reference
					const formatted = {
						...doc,
						start: moment(doc.start).toDate(),
						end: moment(doc.end).toDate(),
						title: doc.service,
						id: id
					};
					// new array of appts with everything except for the altered appointment
					const filtered = this.state.appointments.filter((appt) => appt.id !== id);

					// if appt was deleted, set state to all appts except for this one
					if (change.type === 'removed') {
						this.setState({ appointments: filtered });
					} else if (!filtered) {
						// i'm not entirely sure why this works right now lol
						this.setState({ appointments: [ ...this.state.appointments, formatted ] });
					} else {
						this.setState({ appointments: [ ...filtered, formatted ] });
					}
				});
			});
	};

	render() {
		return <BusinessContext.Provider value={this.state}>{this.props.children}</BusinessContext.Provider>;
	}
}

/*

DIRECTIONS TO USE CONTEXT:

  0. open the component file that you're working on

  1. import { BusinessContext } from "../some_path/context/BusinessContext";

  2. inside of your render/return ...

    <BusinessContext.Consumer>
      {value => {

        // you can update state via value.updateState({ key: value })
        // you can access name, email, phone, etc. via value.data

        return (
          // whatever you want the component to display
          // see login_modal.js lines 43-56 for example
        )
        
      }}
    </BusinessContext.Consumer>

*/
