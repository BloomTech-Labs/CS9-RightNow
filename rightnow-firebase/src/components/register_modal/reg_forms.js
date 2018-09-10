import React, { Component } from 'react';
import firebase from '../../firebase/firebase';
import axios from 'axios';
import {
	FormContainer,
	Form,
	Email,
	PW,
	NameContainer,
	NamePlace,
	NamePlace2,
	PhoneNumber,
	Location,
	CheckBoxWrapper,
	CheckBoxContainer,
	CheckBox,
	RegisterButton
} from './reg_forms_styles';

// sweetAlert 2 with custom css
import swal from 'sweetalert2/dist/sweetalert2.js';
import '../../z_sweetAlert/sweetalert2.css';

export default class RegisterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			phone: '',
			location: '',
			first_name: '',
			last_name: ''
		};
	}

	onInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

	handlePhoneInput = (e) => {
		if (e.target.value.length === 3) {
			this.setState({ phone: `(${e.target.value})-` });
		} else if (e.target.value.length === 9) {
			this.setState({ phone: `${e.target.value}-` });
		} else this.setState({ [e.target.name]: e.target.value });
	};

	submitForm = async () => {
		// regex only digits from phone number
		const formattedPhoneNumber = this.state.phone.replace(/\D/g, '');

		const data = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			phone: `+1${formattedPhoneNumber}`, // MUST BE 10 DIGIT NUMBER
			password: this.state.password,
			location: this.state.location
		};

		await axios
			.post('https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/customer', data)
			.then((res) => console.log(`\nsuccessfuly created new customer\n${res}`))
			.then(() => this.handleEmailSignIn(this.state.email, this.state.password))
			.then(() => console.log("HERE'S THE STATE", this.state))
			.then(() =>
				this.setState({ first_name: '', last_name: '', email: '', phone: '', password: '', location: '' })
			)
			.catch((err) => console.log(`\nerror creating new customer\n${err}`));
	};

	handleEmailSignIn = async (email, password) => {
		const confirm_account = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => this.fireSweetAlert_success())
			.then(() => this.props.closeModal())
			.catch((err) => {
				setTimeout(this.fireSweetAlert_error, 600);
			});

		return confirm_account;
	};

	// SweetAlert Stfuff
	fireSweetAlert_success = (type) => {
		const toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		});

		toast({
			type: 'success',
			title: 'Registered successfully'
		});
	};
	fireSweetAlert_error = (type) => {
		const toast = swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		});

		toast({
			type: 'error',
			title: 'There was an issue with registration'
		});
	};

	render() {
		return (
			<FormContainer>
				<Form>
					<NameContainer>
						<div>
							<NamePlace
								type="text"
								placeholder="First Name"
								onChange={this.onInputChange}
								name="first_name"
								value={this.state.first_name}
							/>
						</div>
						<div>
							<NamePlace2
								type="text"
								placeholder="Last Name"
								onChange={this.onInputChange}
								name="last_name"
								value={this.state.last_name}
							/>
						</div>
					</NameContainer>
					<Email
						type="text"
						placeholder="Your Email Address"
						name="email"
						value={this.state.email}
						onChange={this.onInputChange}
					/>
					<PW
						type="password"
						placeholder="Password"
						name="password"
						value={this.state.password}
						onChange={this.onInputChange}
					/>
					<PhoneNumber
						name="phone"
						value={this.state.phone}
						type="tel"
						placeholder="Phone number"
						onChange={(e) => this.handlePhoneInput(e)}
					/>
					<Location
						name="location"
						value={this.state.location}
						type="text"
						placeholder="Preferred location"
						onChange={this.onInputChange}
					/>
				</Form>

				<CheckBoxWrapper>
					<legend style={{ padding: '0 1%' }}>Contact me by</legend>
					<CheckBoxContainer>
						<CheckBox>
							<div className="pretty p-default">
								<input type="checkbox" />
								<div className="state p-primary">
									<label>Email</label>
								</div>
							</div>
						</CheckBox>

						<CheckBox>
							<div className="pretty p-default">
								<input type="checkbox" />
								<div className="state p-warning">
									<label>Text</label>
								</div>
							</div>
						</CheckBox>
					</CheckBoxContainer>
				</CheckBoxWrapper>

				<RegisterButton onClick={() => this.submitForm()}>Let's Go!</RegisterButton>
			</FormContainer>
		);
	}
}
