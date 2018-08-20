import React, { Component } from 'react';
import glamorous from 'glamorous';

import RegModal from './reg_modal';
import LogModal from './log_modal';

const NavContainer = glamorous.div({
	width: '100%',
	background: '#EBEBEB',
	display: 'flex',
	justifyContent: 'space-between'
});

const Logo = glamorous.div({
	color: '#F45B69',
	fontWeight: 600,
	fontSize: '3em',
	alignSelf: 'center',
	margin: '0.5% 1%',
	textShadow: '1px 1px gray'
});

const ButtonContainer = glamorous.div({
	width: '50%',
	display: 'flex',
	justifyContent: 'flex-end',
	marginRight: '1%'
});

const Button = glamorous.button({
	borderRadius: '7px',
	background: '#00c6fd',
	height: '65%',
	alignSelf: 'center',
	margin: '0 1%',
	padding: '0 3%',
	fontWeight: 600,
	fontSize: '1.3em',
	color: '#EBEBEB',
	':hover': {
		cursor: 'pointer',
		boxShadow: '2px 2px gray'
	}
});

const Menu = glamorous.div({
	display: 'inline-block',
	cursor: 'pointer',
	alignSelf: 'center',
	marginLeft: '20px'
});

const MenuLine = glamorous.div({
	width: '35px',
	height: '5px',
	background: 'black',
	margin: '6px 0'
});

export default class NavBar extends Component {
	state = {
		email: '',
		password: '',
		display_regModal: false,
		display_logModal: false
  };
  
  // Modal for registration
	openModal_reg = () => {
		this.setState({ display_regModal: true });
	};

	closeModal_reg = () => {
		this.setState({ display_regModal: false });
  };

  // Modal for logging in
	openModal_log = () => {
		this.setState({ display_logModal: true });
	};

	closeModal_log = () => {
		this.setState({ display_logModal: false });
	};

	render() {
		return (
			<NavContainer>
				<Logo>Right Now</Logo>
				<ButtonContainer>
					<Button onClick={() => this.openModal_reg()}>Sign Up</Button>
					<Button onClick={() => this.openModal_log()}>Login</Button>
					<Menu>
						<MenuLine />
						<MenuLine />
						<MenuLine />
					</Menu>
				</ButtonContainer>
				{this.state.display_regModal ? <RegModal closeModal_reg={this.closeModal_reg.bind(this)} /> : null}
				{this.state.display_logModal ? <LogModal closeModal_log={this.closeModal_log.bind(this)} /> : null}
			</NavContainer>
		);
	}
}
