import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import UserLanding from './components/user_landing';
import { init as firebaseInit } from './firebase/firebase';
import FeaturedAppointments from './components/featured_appointments/feat_appts';
import IndustryView from './components/industry_view/industry_view';

class App extends Component {
	constructor() {
		super();
		firebaseInit();
		this.state = {
			email: '',
			password: '',
			currentUser: ''
		};
	}

	render() {
		return (
			<div className="App">
				<NavBar />
				<UserLanding />
				<FeaturedAppointments />
				<IndustryView />
			</div>
		);
	}
}

export default App;
