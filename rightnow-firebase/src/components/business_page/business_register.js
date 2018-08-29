import React, { Component } from 'react';
import glamorous from 'glamorous';
import PlacesAPI from '../placesAPI/search_autocomplete';
import { registerUser, getUserId } from '../../firebase/db_interact';
import {
	TitleBackdrop,
	Title,
	ButtonContainer,
	RegButton,
	CenterLine,
	LoginButton,
	Container,
	LeftSide,
	RightSide,
	Input,
	Bottom,
	TopWrapper,
	BottomWrapper,
	Button
} from './business_register_styles';

export default class BusinessAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayForms: true,
			displaySuccess: false,
			email: '',
			first_name: '',
			last_name: '',
			phone: ''
		};
	}

	submitForm = async () => {
		const userId = await getUserId();

		const owner = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			phone: this.state.phone
		};

		const business = this.props.value.data.business;

		const allData = {
			uid: userId,
			business_information: business,
			owner_information: owner
		};

		registerUser('busn_ACTUAL', allData);
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<TitleBackdrop>
					<Title>Fire up your business with Sesho</Title>
					<ButtonContainer>
						<RegButton>Register</RegButton>
						<CenterLine />
						<LoginButton>Login</LoginButton>
					</ButtonContainer>
				</TitleBackdrop>

				{this.state.displayForms ? (
					<Container>
						<div>Already a family of Sesho? click here</div>
						<TopWrapper>
							<LeftSide>
								<div>First Name:</div>
								<Input
									type="text"
									name="first_name"
									placeholder="First Name"
									onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
									value={this.state.first_name}
									required
									autocomplete="off"
								/>
							</LeftSide>

							<RightSide>
								<div>Last Name:</div>
								<Input
									type="text"
									onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
									name="last_name"
									placeholder="Last Name"
									value={this.state.last_name}
									required
									autocomplete="off"
								/>
							</RightSide>
						</TopWrapper>

						<BottomWrapper>
							<div>Email:</div>
							<Input
								type="email"
								onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
								name="email"
								placeholder="Email"
								value={this.state.email}
								required
								autocomplete="off"
							/>
							<div>Phone Number:</div>
							<Input
								type="text"
								onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
								name="phone"
								placeholder="Phone Number"
								value={this.state.phone}
								required
								autocomplete="off"
							/>

							<Bottom>
								<div>Google API</div>
								<PlacesAPI busnContext={this.props.value} />
							</Bottom>
						</BottomWrapper>
						<Button onClick={() => this.submitForm()}>Submit</Button>
					</Container>
				) : null}


				{this.state.displayForms ? (
					<Container>
						<div>Not a family of Sesho? click here</div>

						<BottomWrapper>
							<div>Email:</div>
							<Input
								type="email"
								onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
								name="email"
								placeholder="Email"
								value={this.state.email}
								required
								autocomplete="off"
							/>
							<div>Password</div>
							<Input
								type="text"
								onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
								name="phone"
								placeholder="Phone Number"
								value={this.state.phone}
								required
								autocomplete="off"
							/>

							<Bottom>
								<div>Or Sign up with </div>
								<PlacesAPI busnContext={this.props.value} />
							</Bottom>
						</BottomWrapper>
					</Container>
				) : null}

				{this.state.displaySuccess ? <h3>We got your application, thank you for the submission</h3> : null}
			</div>
		);
	}
}
