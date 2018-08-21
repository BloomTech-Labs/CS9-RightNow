import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import UserLanding from './components/user_landing';
import { init as firebaseInit } from './firebase/firebase';
import FeaturedAppointments from './components/featured_appointments/feat_appts';
import IndustryView from './components/industry_view/industry_view';
import UserProvider from './context/userContext';

class App extends Component {
	constructor() {
		super();
		firebaseInit();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<UserProvider>
					<NavBar />
					<UserLanding />
					<FeaturedAppointments />
					<IndustryView />
				</UserProvider>
			</div>
		);
	}
}

export default App;
