import React, { Component } from 'react';
import glamorous from 'glamorous';

/* Glamorous Section */
const ModalBackdrop = glamorous.div({
	display: 'none' /* Hidden by default */,
	position: 'fixed' /* Stay in place */,
	zindex: '1' /* Sit on top */,
	left: '0',
	top: '0',
	width: '100vw' /* Full width */,
	height: '100vh' /* Full height */,
	overflow: 'auto' /* Enable scroll if needed */,
	backgroundcolor: 'rgb(0,0,0)' /* Fallback color */,
	backgroundcolor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
});

const LoginModal = glamorous.div({
	backgroundcolor: ' #fefefe',
	margin: '15% auto' /* 15% from the top and centered */,
	padding: '20px',
	border: '1px solid #888',
	width: '30%' /* Could be more or less, depending on screen size */
});

export default class Modal extends Component {
  state = {
    
  }

  render() {
		const { modal_open } = this.state;
		return (
			<div className="App">
				<ModalBackdrop id="modal_backdrop"> 
					<LoginModal>
						<h1>Sign Up!</h1>
						<input
							type="text"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={(event) => this.setState({ [event.target.name]: event.targer.value })}
						/>
						<input
							type="password"
							name="password"
							placeholder="Email"
							value={this.state.password}
							onChange={(event) => this.setState({ [event.target.name]: event.targer.value })}
						/>
						<button onClick={() => this.handleLogin()}>Submit</button>
						<button onClick={() => this.closeModal()}>Close</button>
					</LoginModal>
				</ModalBackdrop>
			</div>
		);
	}

}