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
	Bottom,
	TopWrapper,
	BottomWrapper,
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
	background: "transparent",
	transition: "all 1.2s"
});


const WelcomePage = glamorous.div({
	position: "absolute",
	height: "100vh",
	width: "100vw",
	top: "30%",
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


const Container = glamorous.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '25%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center'
});


const Input = glamorous.input({
  margin: '1% auto',
  width: '23%',
  padding: '.7% 0',
	border: 'none',
	borderRadius: "5px",
  fontSize: '1.3rem',
  fontWeight: 600,
  color: 'white',
	textAlign: 'center',
	textShadow: "1px 1px black",
	backgroundColor: "rgba(225, 225, 225, 0.4)"
});


const Button = glamorous.button({
	width: '21%',
	margin: "auto",
	padding: "0.7% 0",
  color: 'white',
	fontWeight: 600,
	fontSize: "1.3em",
  border: '0.3px solid white',
  borderRadius: '5px',
  backgroundColor: 'transparent',
  ':hover': { color: 'white', backgroundColor: 'rgba(225, 225, 225, 0.1)', cursor: 'pointer' },
  ':focus': { color: 'white', backgroundColor: 'rgba(225, 225, 225, 0.1)' }
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
			isBusiness: false
		};
	}

	handlePhoneInput = e => {
		if (e.target.value.length === 3) {
			this.setState({ phone: `(${e.target.value})-` });
		}
		else if (e.target.value.length === 9) {
			this.setState({ phone: `${e.target.value}-` });
		}
		else this.setState({ [e.target.name]: e.target.value });
	}

	submitForm = async () => {
		const formattedPhoneNumber = this.state.phone.replace(/\D/g,''); 
		
		const owner = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			phone: `+1${formattedPhoneNumber}`, // MUST BE 10 DIGIT NUMBER
			password: this.state.password
		};

		const business = this.props.value.data.business;

		const allData = {
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

	handleEmailSignIn = async () => {
		await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
		await firebase.auth().currentUser.getIdTokenResult().then(token => {
			if (token.claims.business) this.setState({ isBusiness: true, email: "", password: "" });
			else return;
		});
		// this.setState({ email: "", password: "" })
		return;
	}

	handleRegisterDisplay = () => {
		document.querySelector("#landing").style.top = "-100vh";
		document.querySelector("#register").style.top = 0;
	}

	handleLoginDisplay = () => {
		document.querySelector("#landing").style.top = "-100vh";
		document.querySelector("#login").style.top = 0;
	}

	goingUp = () => {
		document.querySelector("#landing").style.top = "30%";
		document.querySelector("#register").style.top = "100vh";
		document.querySelector("#login").style.top = "100vh";
	}

	render() {

		if (this.state.isBusiness) {
			return <Redirect to="/busn-appts" />
		}
		
		else return (
			<FixedContainer>
				<LandingContainer id="swoosh" >


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
						<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", width: "25%", height: "100%", margin: "auto" }}>
							<div style={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100%", margin: "2% auto" }}>
								<Input
									type="text"
									name="first_name"
									placeholder="First Name"
									onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
									value={this.state.first_name}
									required
									autocomplete="off"
									style={{ marginRight: "1%", width: "49%", padding: "2% 0" }}
								/>

								<Input
									type="text"
									onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
									name="last_name"
									placeholder="Last Name"
									value={this.state.last_name}
									required
									autocomplete="off"
									style={{ marginLeft: "1%", width: "49%", padding: "2% 0" }}
								/>
							</div>

							<Input
								type="email"
								onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
								name="email"
								placeholder="Email"
								value={this.state.email}
								required
								autocomplete="off"
								style={{ width: "100%", margin: "2% auto", padding: "2% 0" }}
							/>
							<Input
								type="password"
								onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
								name="password"
								placeholder="Password"
								value={this.state.password}
								required
								autocomplete="off"
								style={{ width: "100%", margin: "2% auto", padding: "2% 0" }}
							/>
							<Input
								id="phone"
								type="text"
								onChange={(e) => this.handlePhoneInput(e)}
								name="phone"
								placeholder="Phone Number"
								value={this.state.phone}
								required
								autocomplete="off"
								style={{ width: "100%", margin: "2% auto", padding: "2% 0" }}
							/>
							<PlacesAPI busnContext={this.props.value} style={{padding: "2% 0"}} />
							<Button onClick={() => this.submitForm()} style={{ margin: "3% auto", width: "50%", padding: "2% 0" }}>Submit</Button>
						</div>
					</FormContainer>


					<FormContainer id="login">
						<Container>
							<Input
								type="email"
								onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
								name="email"
								placeholder="Email"
								value={this.state.email}
								required
							/>
							<Input
								type="password"
								onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
								name="password"
								placeholder="Password"
								value={this.state.password}
								required
							/>
							<Button onClick={() => this.handleEmailSignIn()}>Login</Button>
						</Container>
					</FormContainer>
					
					
				</LandingContainer>
			</FixedContainer>
		);
	}
}


export default withRouter(BusinessAccount);