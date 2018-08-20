import React, { Component } from 'react';
import glamorous from 'glamorous';

/* Glamorous Section */
const ModalBackdrop = glamorous.div({
	position: 'fixed' /* Stay in place */,
	zIndex: '1' /* Sit on top */,
	// left: '0',
	// top: '0',
	width: '100vw' /* Full width */,
	height: '100vh' /* Full height */,
	overflow: 'auto' /* Enable scroll if needed */,
	// background: 'rgb(0,0,0)' /* Fallback color */,
	background: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
});

const LoginModal = glamorous.div({
	// position: 'fixed' /* Stay in place */,
	// background: ' #fefefe',
	// margin: '15% auto' /* 15% from the top and centered */,
	// padding: '20px',
	// border: '1px solid #888',
	// width: '30%' /* Could be more or less, depending on screen size */

	position: 'fixed',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: 2,
	background: 'white',
	display: 'flex',
	flexDirection: 'column',
	width: '30%',
	height: '50%',
	padding: '2.5%'
});

export default class Log_modal extends Component {
	state = {
		email: '',
		password: ''
	};

	handleLogin = () => {

	};

	render() {
		console.log(this.props.open_modal);
		return (
			<ModalBackdrop>
				<LoginModal>
					<h1>Login here!</h1>
					<input
						type="text"
						name="email"
						placeholder="email"
						value={this.state.email}
						onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={(event) => this.setState({ [event.target.name]: event.target.value })}
					/>
					<button onClick={() => this.handleLogin()}>Submit</button>
					<button onClick={() => this.props.closeModal_log()}>Close</button>
				</LoginModal>
			</ModalBackdrop>
		);
	}
}
