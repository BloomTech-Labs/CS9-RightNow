import React, { Component } from 'react';
import glamorous from 'glamorous';
// sweetAlert2
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import 'sweetalert2/src/sweetalert2.scss';
import withReactContent from 'sweetalert2-react-content';

// Components
import NavBar from './components/nav_bar';
import UserLanding from './components/user_landing';

const MySwal = withReactContent(Swal);

/* Glamorous Section */
const LoginContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'center',
	height: 50
});

class App extends Component {
	state = {
		email: '',
		password: '',
		login_modal: false
	};

	handleLogin = () => {
		console.log('email: ', this.state.email);
		console.log('password: ', this.state.password);
		this.setState({ email: '', password: '' });
	};

	loginModal = () => {
		MySwal.fire({
			title: <p>Hello World!</p>,
			footer: 'Copyright 2018',
			input: 'email',
			inputPlaceholder: 'Enter your email address',
			// onOpen: () => {
			// 	// `MySwal` is a subclass of `Swal`
			// 	//   with all the same instance & static methods
			// 	MySwal.clickConfirm(); // auto-click confirm
			// }
			confirmButtonText: 'Hi there!'
		});
	};


	render() {
		return (
			<div className="App">
				<NavBar />
				<button onClick={this.loginModal}>TRY modal</button>
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
