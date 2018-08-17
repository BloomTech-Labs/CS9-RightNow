import React, { Component } from 'react';
import glamorous from "glamorous";
import NavBar from './components/nav_bar';
import UserLanding from "./components/user_landing";
import AppointmentContainer from './components/appointmentcontainer';


const LoginContainer = glamorous.div({
	display: "flex",
	justifyContent: "center",
	height: 50
});


class App extends Component {
	state = {
		email: "",
		password: ""
	}

	handleLogin = () => {
		console.log("email: ", this.state.email);
		console.log("password: ", this.state.password);
		this.setState({ email: "", password: "" });
	}

	render() {
		return (
			<div className="App">
				<NavBar/>
				<UserLanding/>
				<AppointmentContainer/>
			</div>
		);
	}
}

export default App;
