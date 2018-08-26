import React, { Component } from 'react';
import GoogleLogIn from '../../firebase/auth.google.services';
import FacebookLogIn from '../../firebase/auth.facebook.services';
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
import { UserContext } from '../../context/userContext';
import { doSignInWithEmailAndPassword } from "../../firebase/auth";

export default class SignInModal extends Component {
	state = {
		email: "",
		password: ""
	}

	handleEmailSignIn = () => {
		const { email, password } = this.state;
		doSignInWithEmailAndPassword(email, password);
		this.setState({ email: "", password: "" });
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

						<UserContext.Consumer>
							{(value) => (
								<OAuthContainer>
									<OAuthButton onClick={() => GoogleLogIn(value)}>
										<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
										Login with Google
									</OAuthButton>
									<OAuthButton onClick={FacebookLogIn}>
										<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" />
										Login with Facebook
									</OAuthButton>
								</OAuthContainer>
							)}
						</UserContext.Consumer>

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
