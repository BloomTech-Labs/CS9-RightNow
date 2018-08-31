import React, { Component } from 'react';
// Firebase
import PlacesAPI from '../placesAPI/search_autocomplete';
import { auth } from '../../firebase/firebase';
import { doSignInWithEmailAndPassword, doCreateUserWithEmailAndPassword } from '../../firebase/auth';
// react scroll
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// glamorous stuff
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

import axios from 'axios';

export default class BusinessAccount extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email_reg: '',
			first_name: '',
			last_name: '',
			password_reg: '',
			phone: '',
			email_log: '',
			password_log: ''
		};
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', function() {
			console.log('begin', arguments);
		});

		Events.scrollEvent.register('end', function() {
			console.log('end', arguments);
		});
	}

	scrollToTop() {
		scroll.scrollToTop();
	}
	scrollTo() {
		scroller.scrollTo('scroll-to-element', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		});
	}
	scrollToWithContainer() {
		let goToContainer = new Promise((resolve, reject) => {
			Events.scrollEvent.register('end', () => {
				resolve();
				Events.scrollEvent.remove('end');
			});

			scroller.scrollTo('scroll-container', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart'
			});
		});

		goToContainer.then(() =>
			scroller.scrollTo('scroll-container-second-element', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart',
				containerId: 'scroll-container'
			})
		);
	}
	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	submitForm = async () => {
		const userId = await auth.currentUser.uid;

		const owner = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email_reg,
			phone: this.state.phone,
			password: this.state.password_reg
		};

		const business = this.props.value.data.business;

		const allData = {
			uid: userId,
			business_information: business,
			owner_information: owner
		};

		axios
			.post('https://us-central1-sesho-dev.cloudfunctions.net/haveAsesh/business', allData)
			.then((res) => console.log(`\nsuccessfuly created new business\n${res}`))
			.catch((err) => console.log(`\nerror creating new business\n${err}`));

		doCreateUserWithEmailAndPassword(this.state.email_reg, this.state.password_reg);
		this.setState({
			first_name: '',
			last_name: '',
			email_reg: '',
			phone: '',
			password_reg: ''
		});
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<Container1>
					<TitleBackdrop>
						<div>
							<Title>
								<TitleBorder>Sesho: Manager</TitleBorder>
								<Description>MANAGE YOUR APPOINTMENTS WITH A SIMPLE SESSION OF SESHO</Description>
							</Title>
							<ButtonContainer>
								<RegButton>
									<Link
										activeClass="active"
										className="toRegister"
										to="toRegister"
										spy={true}
										smooth={true}
										duration={500}
									>
										Register
									</Link>
								</RegButton>
								<CenterLine />
								<LoginButton>
									<Link
										activeClass="active"
										className="toRegister"
										to="toLogin"
										spy={true}
										smooth={true}
										duration={500}
									>
										Login
									</Link>
								</LoginButton>
							</ButtonContainer>
						</div>
					</TitleBackdrop>
				</Container1>

				<Element name="toRegister" className="element" />
				<Container2>
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
							name="email_reg"
							placeholder="Email"
							value={this.state.email}
							required
							autocomplete="off"
						/>
						<div>Password</div>
						<Input
							type="password"
							onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
							name="password_reg"
							placeholder="Password"
							value={this.state.phone}
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
				</Container2>

				<Element name="toLogin" className="element" />
				<Container3>
					<div>Not a family of Sesho? click here</div>

					<BottomWrapper>
						<div>Email:</div>
						<Input
							type="email"
							onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
							name="email_log"
							placeholder="Email"
							value={this.state.email}
							required
							autocomplete="off"
						/>
						<div>Password</div>
						<Input
							type="password"
							onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
							name="password_log"
							placeholder="Password"
							value={this.state.phone}
							required
							autocomplete="off"
						/>

						<Bottom>
							<div>Or Sign up with </div>
						</Bottom>
					</BottomWrapper>
				</Container3>

				{this.state.displaySuccess ? <h3>We got your application, thank you for the submission</h3> : null}
			</div>
		);
	}
}
