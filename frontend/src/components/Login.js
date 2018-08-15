import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends component {
	constructor() {
		this.state = {
			username: '',
			password: '',
			// isWrongCred: trigger if the credit/login is wrong
			isWrongCred: false,
			// pwShowToggle: shows password in plain text
			pwShowToggle: false
		};
	}

	inputChangeHandler = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	submitHandler = (e) => {
		// connect to the server that handles token
		const login = axios.post('whatever server', this.state);

		e.preventDefault();

		login
			.then((response) => {
				localStorage.setItem('token', response.data.token);
				// direct to whatever route we want
				this.props.history.push('/main');
			})
			.catch((err) => {
				localStorage.removeItem('token');
				this.setState({ isWrongCred: true });
				this.setState({ password: '' });
			});
	};

	pwToggle() {
		const pwToggle = document.getElementById('pwInput');

		if (pwToggle.type === 'password') {
			pwToggle.type = 'text';
		} else {
			pwToggle.type = 'password';
		}
	}

	render() {
		return (
			<div>
				<h1>Sign in</h1>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							name="username"
							value={this.state.username}
							onChange={this.inputChangeHandler}
							type="text"
						/>
					</div>
					<div>
						<input
							name="password"
							value={this.state.password}
							onChange={this.inputChangeHandler}
							type="password"
							id="pwInput"
						/>
						<br />
						<input type="checkbox" onClick={this.pwToggle} />Show Password
					</div>
					<div>
						<button>Sign in</button>

						<br />
						<br />

						<div>{this.state.isWrongCred ? <h2>Your username/password was incorrect.</h2> : null}</div>

						<br />
						<div>
							Don't have account?
							<br />
							<Link to="/register">
								<button>Sign Up!</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
