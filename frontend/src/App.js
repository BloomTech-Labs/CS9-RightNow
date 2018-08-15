import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Navbar /> */}
				<Route exact path="/" render={() => <Redirect from="/" to="/login" />} />
				<Route exact="/login" component={Login} />
			</div>
		);
	}
}

export default App;
