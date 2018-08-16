import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React!</h1>
				</header>
				<p className="App-intro">
					This React app is deployed to heroku using git subtree feature. This is only temporary solution, as
					script will need to be written at root directory as backend is implemented, and deploy both, rather
					than just React.
				</p>
				<p>git subtree push --prefix frontend heroku master</p>
			</div>
		);
	}
}

export default App;
