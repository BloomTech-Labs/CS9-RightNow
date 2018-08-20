import React, { Component } from 'react';
import {
	Container,
	Modal,
	Header,
	// NormalSignIn,
	// Input,
	Button,
	Or,
	OAuthContainer,
	OAuthButton,
	AuthLogo,
	EmailButton,
	NewUser,
	CloseX
} from './reg_modal_styles';

export default class RegisterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleRegister = (method) => {
		switch (method) {
			case 'email':
				break;
			case 'google':
				break;
			case 'facebook':
				break;
			default:
				break;
		}
	};

	render() {
		return (
			<Container>
				<Modal>
					<Header>Lets get started.</Header>
					{/* <NormalSignIn>
						<Input type="text" placeholder="Email" />
						<Input type="password" placeholder="Password" />
						<Button onClick={() => this.handleSignIn('email')}>Sign In</Button>
          </NormalSignIn> */}

					<OAuthContainer>
						<OAuthButton onClick={() => this.handleRegister('google')}>
							<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
							Sign Up with Google
						</OAuthButton>
						<OAuthButton onClick={() => this.handleRegister('facebook')}>
							<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" />
							Sign Up with Facebook
						</OAuthButton>
					</OAuthContainer>

					<Or>
						<span style={{ backgroundColor: 'white', padding: '0 3%' }}>or</span>
					</Or>

					<EmailButton>
						<AuthLogo src="https://www.dining-out.co.za/ftp/themes/desk/images/Email_Icon.svg" />
						Sign Up with your email
					</EmailButton>

					<NewUser>
						<p style={{ marginRight: '2%' }}>Already have an account?</p>
						<p style={{ color: 'green' }} onClick={this.props.regToLog }>Log in Here</p>
					</NewUser>
				</Modal>
				<CloseX onClick={() => this.props.closeModal()}>x</CloseX>
			</Container>
		);
	}
}
