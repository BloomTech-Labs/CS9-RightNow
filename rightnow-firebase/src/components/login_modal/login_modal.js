import React, { Component } from 'react';
import FacebookLogIn from '../../firebase/auth.facebook.services';
import firebase from "../../firebase/firebase";
import axios from "axios";
import {
	Container,
	ModalWrapper,
	ModalLeft,
	ModalRight,
	Header,
	NormalSignIn,
	Input,
	LoginButton,
	Or,
	OAuthContainer,
	OAuthButton,
	AuthLogo,
	NewUser,
	RegClickHere,
	CloseX
} from './login_modal_styles';


export default class SignInModal extends Component {
	state = {
		email: "",
		password: ""
	}

	handleEmailSignIn = () => {
		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password);
		this.setState({ email: "", password: "" });
		this.props.closeModal();
	}

	handleProviderLogin = type => {
		let provider;

		if (type === "google") provider = new firebase.auth.GoogleAuthProvider();
		if (type === "facebook") provider = new firebase.auth.FacebookAuthProvider();

		if (!provider) return;

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(res => {
				const newUser = res.user;
				
				const data = {
					uid: newUser.uid,
					name: newUser.displayName,
					email: newUser.email,
					phone: newUser.phoneNumber,
					photo: newUser.photoURL
				}

				axios
					.post("https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/customer", data)
					.then(result => console.log(result)).catch(err => console.log(err));
			})
			.then(x => this.props.closeModal())
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Container>
				<ModalWrapper>
					<ModalLeft />
					<ModalRight>
						<Header>Please sign in.</Header>
						<NormalSignIn>
							<Input 
								type="text" 
								placeholder="Email"
								name="email"
								value={this.state.email}
								onChange={e => this.setState({ [e.target.name]: e.target.value })}
							/>
							<Input 
								type="password" 
								placeholder="Password" 
								name="password"
								value={this.state.password}
								onChange={e => this.setState({ [e.target.name]: e.target.value })}
							/>
						</NormalSignIn>
						<LoginButton onClick={() => this.handleEmailSignIn()}>Sign In</LoginButton>

						<Or>
							<span style={{ backgroundColor: '#353A50', padding: '0 3%' }}>or</span>
						</Or>


						<OAuthContainer>
							<OAuthButton onClick={() => this.handleProviderLogin("google")}>
								<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
								Login with Google
							</OAuthButton>
							<OAuthButton onClick={() => this.handleProviderLogin("facebook")}>
								<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" />
								Login with Facebook
							</OAuthButton>
						</OAuthContainer>


						<NewUser>
							<p style={{ marginRight: '2%' }}>Don't have an account?</p>
							<RegClickHere onClick={() => this.props.logToReg()}>Register Here</RegClickHere>
						</NewUser>
					</ModalRight>

					<CloseX onClick={() => this.props.closeModal()}>x</CloseX>
				</ModalWrapper>
			</Container>
		);
	}
}
