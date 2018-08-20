import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import UserLanding from "./components/user_landing";

class App extends Component {
	state = {
		email: "",
		password: "",
	}

	render() {
		return (
			<div className="App">
				<NavBar/>
				<UserLanding/>
			</div>
		);
	}
}

export default App;
