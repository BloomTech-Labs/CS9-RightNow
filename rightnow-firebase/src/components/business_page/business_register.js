import React, { Component } from 'react';
import PlacesAPI from '../placesAPI/search_autocomplete';
import { withRouter, Redirect } from "react-router-dom";
import axios from 'axios';
import firebase from "../../firebase/firebase";
import glamorous from "glamorous";
import {
	Container1,
	Container2,
	Container3,
	TitleBackdrop,
	Title,
	TitleBorder,
	Description,
	ButtonContainer,
	RegButton,
	CenterLine,
	LoginButton,
	LeftSide,
	RightSide,
	Input,
	Bottom,
	TopWrapper,
	BottomWrapper,
	Button
} from './business_register_styles';


const FixedContainer = glamorous.div({
	height: "100vh",
	width: "100vw",
	position: "relative",
	overflow: "hidden",
	background: 'linear-gradient(30deg, rgba(0, 0, 0, 0.50) 20%, rgba(0, 0, 0, 0.70)) 100%, url("https://images.unsplash.com/photo-1535232843222-a40c29436fd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09c323bdb9e5c76f82339cd9b4247a57&auto=format&fit=crop&w=1959&q=80")',
	backgroundRepeat: 'repeat',
	backgroundSize: 'cover',
	backgroundAttachment: 'fixed',
});


const LandingContainer = glamorous.div({
	position: "absolute",
	height: "100vh",
	width: "100vw",
	top: "30%",
	background: "transparent",
	transition: "all 1.2s"
});


const WelcomePage = glamorous.div({
	position: "absolute",
	height: "100vh",
	width: "100vw",
	background: "transparent",
	transition: "all 1.2s",
});


const FormContainer = glamorous.div({
	position: "absolute",
	height: "100vh",
	width: "100vw",
	top: "100vh",
	background: "transparent",
	transition: "all 1.2s",
});


class BusinessAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			phone: "",
			email: "",
			password: "",
			isBusiness: ""
		};
	}

	submitForm = async () => {
		const userId = await firebase.auth().currentUser.uid;

		const owner = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			phone: this.state.phone,
			password: this.state.password
		};

		const business = this.props.value.data.business;

		const allData = {
			uid: userId,
			business_information: business,
			owner_information: owner
		};

		axios
			.post('https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/business', allData)
			.then((res) => console.log(`\nsuccessfuly created new business\n${res}`))
			.catch((err) => console.log(`\nerror creating new business\n${err}`));


		this.setState({
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			password: '',
			isBusiness: true
		});
	};

	handleEmailSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.auth().currentUser.getIdTokenResult().then(token => {
          if (token.claims.business) this.setState({ isBusiness: true });
          else return;
        });
			}).then(() => this.setState({ email: "", password: "" }));
		return;
	}

	handleRegisterDisplay = () => {
		const landingContainer = document.querySelector("#landing");
		const regContainer = document.querySelector("#register");
		landingContainer.style.top = "-100vh";
		regContainer.style.top = 0;
	}

	handleLoginDisplay = () => {
		const landingContainer = document.querySelector("#landing");
		const loginContainer = document.querySelector("#login");
		landingContainer.style.top = "-100vh";
		loginContainer.style.top = 0;
	}

	render() {

		if (this.state.isBusiness) <Redirect to="/busn-appts" />
		
		return (
			<FixedContainer>

					<LandingContainer >


						<WelcomePage id="landing">
							<Title>
								<TitleBorder>Sesho: Manager</TitleBorder>
								<Description>MANAGE YOUR APPOINTMENTS WITH A SIMPLE SESSION OF SESHO</Description>
							</Title>

							<ButtonContainer>
								<RegButton onClick={() => this.handleRegisterDisplay()}>
										Register
								</RegButton>
								<CenterLine />
								<LoginButton onClick={() => this.handleLoginDisplay()}>
									Login
								</LoginButton>
							</ButtonContainer>
						</WelcomePage>
					
				


				<FormContainer id="register">
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
						<div>Password</div>
						<Input
							type="password"
							onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
							name="password"
							placeholder="Password"
							value={this.state.password}
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
				</FormContainer>


				<FormContainer id="login">
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
							type="password"
							onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
							name="password"
							placeholder="Password"
							value={this.state.password}
							required
							autocomplete="off"
						/>\

						<button onClick={() => this.handleEmailSignIn()}>Login</button>
					</BottomWrapper>
				</FormContainer>

				{this.state.displaySuccess ? <h3>We got your application, thank you for the submission</h3> : null}
				</LandingContainer>
			</FixedContainer>
		);
	}
}


export default withRouter(BusinessAccount);