import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import axios from 'axios';

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

		init_appointment: {},
		displayConfirm: false,
		confirm: false,

		query: '',
		queryResults: [],
		finished: false,
		full_query: [],

		userSignedIn: false,
		clientZip: null,

		updateState: async (data) => await this.setState(data),

		customerLogout: () => {
			firebase.auth().signOut();
			this.unsubscribe();
		},

		searchAll: async () => {
			const x = await firebase
				.firestore()
				.collection('_appointment_')
				.where('is_available', '==', true)
				.get()
				.then((res) => res.docs.map((doc) => doc.data()))
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
			this.setState({ init_appointment: full_appointment, displayConfirm: true });
		},

		confirmAppointment: () => {
			if (!this.state.confirm || !this.state.uid) return;

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
			this.unsubscribe = firebase
				.firestore()
				.collection('_appointment_')
				.where('service', '==', this.state.query)
				.onSnapshot((snapshot) => {
					snapshot.docChanges().forEach((change) => {
						const id = change.doc.id;
						const doc = change.doc.data();
						const busn_ref = doc.business_ref;

						if (change.type === 'modified' || change.type === 'removed') {
							const copy = { ...this.state.full_query };
							const busn_appts = copy[busn_ref].appointments;

							copy[busn_ref].appointments = busn_appts.filter((appt) => appt.id !== id);

							this.setState({ full_query: copy });
						}
					});
				});
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
							this.setState({
								userSignedIn: true,
								uid: user.uid,
								name: user.displayName,
								email: user.email,
								phone: user.phoneNumber,
								photo: user.photoURL
							});
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
					photo: null
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
