import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import UserLanding from './components/user_landing';
import BusinessLanding from './components/business_landing';
import { Route } from 'react-router-dom';
import { init as firebaseInit } from './firebase/firebase';

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
				<Route to="/biz_landing" component={BusinessLanding} />
			</div>
		);
	}
}

export default App;
