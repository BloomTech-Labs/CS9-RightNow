import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import * as routes from "../constants/routes"; might not need

import glamorous from 'glamorous';
import SignInModal from '../login_modal/login_modal';
import RegisterModal from '../register_modal/reg_modal';
import RegisterForm from '../register_modal/reg_forms';
import { UserContext } from '../../context/userContext';
import ConfirmModal from '../confirm_appt_modal/confirm_modal';

import { Link } from 'react-router-dom';

import {
	NavContainer,
	Logo,
	Button,
	ButtonContainer,
	Menu,
	MenuLine,
} from './nav-styles';

export default class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			displayLoginModal: false, // true for dev purposes. set to false prior to pull.
			displayRegModal: false,
			displayRegForm: false,
			displayConfirm: false
		};
	}

	openReg = () => {
		this.setState({ displayRegModal: true });
		document.body.style.overflow = 'hidden';
	};

	openLogin = () => {
		this.setState({ displayLoginModal: true });
		document.body.style.overflow = 'hidden';
	};


	RegToLogModal = () => {
		this.setState({ displayRegModal: false });
		this.setState({ displayLoginModal: true });
	};

	LogToRegModal = () => {
		this.setState({ displayLoginModal: false });
		this.setState({ displayRegModal: true });
	};

	CreateUserForm = () => {
		this.setState({ displayRegModal: false });
		this.setState({ displayRegForm: true });
	};

	closeModal = () => {
		document.body.style.overflow = 'scroll';
		this.setState({ displayRegModal: false, displayLoginModal: false, displayRegForm: false });
	};

	render() {
		return (
			<NavContainer>
				<Link to="/">
				<Logo>Sesho</Logo>
				</Link>
				<ButtonContainer>
					<Link to="/biz-landing">
						<Button>Business Sign Up</Button>
					</Link>
					<Link to="/">
						<Button>Sign Out</Button>
					</Link>
					<Link to="/user-settings">
						<Button>User Settings</Button>
					</Link>
					<Link to="/company-settings">
						<Button>Company Settings</Button>
					</Link>
					<Button onClick={() => this.openReg()}>Sign Up</Button>
					<Button onClick={() => this.openLogin()}>Login</Button>
					<Menu>
						<MenuLine />
						<MenuLine />
						<MenuLine />
					</Menu>
				</ButtonContainer>
				{this.state.displayLoginModal ? (
					<SignInModal closeModal={() => this.closeModal()} logToReg={() => this.LogToRegModal()} />
				) : null}
				{this.state.displayRegModal ? (
					<RegisterModal closeModal={() => this.closeModal()} regToLog={() => this.RegToLogModal()} />
				) : null}
				{this.state.displayRegForm ? <RegisterForm closeModal={() => this.closeModal()} /> : null}

				<UserContext.Consumer>
					{(value) =>
						value.data.displayConfirm ? (
							<ConfirmModal closeModal={() => this.closeModal()} />
						) : null}
				</UserContext.Consumer>
			</NavContainer>
		);
	}
}
