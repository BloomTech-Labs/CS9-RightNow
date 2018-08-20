import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import UserLanding from "./components/user_landing";

// FOR DEVELOPMENT
import AppointmentCard from "./components/appointment_card/appt_card";


class App extends Component {
	state = {
		email: "",
		password: ""
	}

	render() {
		return (
			<div className="App">
				<NavBar/>
				{/* <UserLanding/> */}
				<AppointmentCard /> {/* FOR DEVELOPMENT */}
			</div>
		);
	}
}

export default App;
