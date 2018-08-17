import React, { Component } from 'react';
import glamorous from 'glamorous';
import NavBar from './components/nav_bar';
import UserLanding from './components/user_landing';
import tingle from 'tingle.js';

// import stylesheet from 'tingle.min.css';

const LoginContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'center',
	height: 50
});

// modal popup for login
var modal = new tingle.modal({
	footer: true,
	stickyFooter: false,
	closeMethods: [ 'overlay', 'button', 'escape' ],
	closeLabel: 'Close',
	cssClass: [ 'custom-class-1', 'custom-class-2' ],
	onOpen: function() {
		console.log('modal open');
	},
	onClose: function() {
		console.log('modal closed');
	},
	beforeClose: function() {
		// here's goes some logic
		// e.g. save content before closing the modal
		return true; // close the modal
		return false; // nothing happens
	}
	/*
// 

	// set content
modal.setContent('<h1>here\'s some content</h1>');

// add a button
modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

// add another button
modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});

// open modal
modal.open();

// close modal
modal.close();
*/
});

class App extends Component {
	state = {
		email: '',
		password: ''
	};

	handleLogin = () => {
		console.log('email: ', this.state.email);
		console.log('password: ', this.state.password);
		this.setState({ email: '', password: '' });
	};

	render() {
		return (
			<div className="App">
				<NavBar />
				<button onClick={modal.setContent('<h1>here\'s some content</h1>')}>TRY modal</button>
				<button onClick={modal.open()}>TRY modal</button>
				<button onClick={modal.open()}>TRY modal</button>
				<UserLanding />
				{/* <LoginContainer>
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

				</LoginContainer> */}
			</div>
		);
	}
}

export default App;
