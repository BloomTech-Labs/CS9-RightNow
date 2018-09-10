import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

const Container = glamorous.div({
	width: '100vw',
	display: 'flex',
	justifyContent: 'space-between',
	alignContent: 'center',
	zIndex: 1,
	backgroundColor: '#353A50'
});

const Logo = glamorous.div({
	fontFamily: 'Syncopate, sans-serif',
	fontSize: '2.5em',
	fontWeight: 800,
	alignSelf: 'center',
	color: '#EBEBEB'
});

const ButtonContainer = glamorous.div({
	height: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
	alignContent: 'center',
	padding: '0',
	width: '70%'
});

const Option = glamorous.div({
	display: 'flex',
	justifyContent: 'center',
	alignContent: 'center',
	textAlign: 'center',
	color: '#EBEBEB',
	fontSize: '1.3em',
	fontWeight: 500,
	margin: '1%',
	border: '1px solid transparent',
	padding: '1%',
	':hover': {
		cursor: 'pointer',
		border: '1px solid white',
		borderRadius: '5px'
	}
});

export default class BusnNav extends Component {
	premiumSignUp = () => {
		this.props.updateState({ display_payment_modal: true });
	};

	render() {
		return (
			<Container>
				<Link
					to=""
					style={{
						textDecoration: 'none',
						padding: '0',
						margin: '1%',
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center'
					}}
				>
					<Logo>Sesho</Logo>
				</Link>

				<ButtonContainer>
					<Option
						onClick={() => this.premiumSignUp()}
						style={{ color: 'rgb(97, 218, 251)', fontWeight: '800' }}
					>
						Premium
					</Option>
					<Option>
						<Link
							to="/company-settings"
							style={{
								textDecoration: 'none',
								padding: '0',
								margin: '1%',
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center'
							}}
						>
							Settings
						</Link>
					</Option>
					<Option
						onClick={() => {
							this.props.logout();
							this.props.updateState({ loggedfrom: '', loggedInAs: '' });
						}}
					>
						Sign Out
					</Option>
				</ButtonContainer>
			</Container>
		);
	}
}
