import React, { Component } from 'react';
import GoogleLogIn from '../../firebase/auth.google.services';
import FacebookLogIn from '../../firebase/auth.facebook.services';

import {
	Container,
	ModalWrapper,
	ModalLeft,
	ModalRight,
	Header,
	Or,
	OAuthContainer,
	OAuthButton,
	AuthLogo,
	EmailButton,
	NewUser,
	CloseX,
	LoginClickHere
} from './reg_modal_styles';

import RegForms from './reg_forms';

export default class RegisterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showRegMethods: false, // set only one as false
			showForms: true
		};
	}

	engageForms = () => {
		this.setState({ showRegMethods: false, showForms: true });
	};

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

	// componentDidMount() {
	// 	console.log('GrandChild did mount.');
	// }

	render() {
		return (
			<Container>
				<ModalWrapper>
					<ModalLeft />
					<ModalRight>
						<Header>Lets get started.</Header>
						{this.state.showRegMethods ? (
							<div>
								<OAuthContainer>
									<OAuthButton onClick={GoogleLogIn}>
										<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
										Sign Up with Google
									</OAuthButton>
									<OAuthButton onClick={FacebookLogIn}>
										<AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" />
										Sign Up with Facebook
									</OAuthButton>
								</OAuthContainer>

								<Or>
									<span style={{ backgroundColor: '#353A50', padding: '0 3%' }}>or</span>
								</Or>

								<EmailButton onClick={this.engageForms}>
									<AuthLogo src="https://www.dining-out.co.za/ftp/themes/desk/images/Email_Icon.svg" />
									Sign Up with your email
								</EmailButton>
							</div>
						) : null}
						{this.state.showForms ? <RegForms /> : null}

						<NewUser>
							<p style={{ marginRight: '2%' }}>Already have an account?</p>
							<LoginClickHere onClick={() => this.props.regToLog()}>Log in Here</LoginClickHere>
						</NewUser>
					</ModalRight>
					<CloseX onClick={() => this.props.closeModal()}>x</CloseX>
				</ModalWrapper>
			</Container>
		);
	}
}
