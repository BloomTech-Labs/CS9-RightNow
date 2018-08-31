import React, { Component } from 'react';
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

	handleEmailLogin = () => {
		this.props.emailLogin(this.state.email, this.state.password);
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
						<LoginButton onClick={() => this.handleEmailLogin()}>Sign In</LoginButton>

						<Or>
							<span style={{ backgroundColor: '#353A50', padding: '0 3%' }}>or</span>
						</Or>


						<OAuthContainer>
							<OAuthButton onClick={() => this.props.providerLogin("google")}>
								<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
								Login with Google
							</OAuthButton>
							<OAuthButton onClick={() => this.props.providerLogin("facebook")}>
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
