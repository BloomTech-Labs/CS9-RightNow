import React, { Component } from 'react';
import './styles/App.css';
import glamorous from "glamorous";
import NavBar from './components/nav_bar';
import UserLanding from "./components/user_landing";

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
				<LoginContainer>
					<input 
						type="text"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={event => this.setState({ [event.target.name]: event.targer.value })}
					/>
					<input 
						type="password"
						name="password"
						placeholder="Email"
						value={this.state.password}
						onChange={event => this.setState({ [event.target.name]: event.targer.value })}
					/>
					<button onClick={() => this.handleLogin()}>Submit</button>
				</LoginContainer>
			</div>
		);
	}
}

export default App;
