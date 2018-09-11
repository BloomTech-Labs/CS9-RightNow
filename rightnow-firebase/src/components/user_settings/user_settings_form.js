import React, { Component } from 'react';
import moment from 'moment';

// import EmailPhone from '../share_settings/email_phone'
// import { CheckBoxContainer, CheckTitle, CheckBox, CheckBoxes } from '../share_settings/user_notification';

import { Wrapper, PwLabel, PwTitle, ChangePasswordInput } from '../share_settings/user_change_password';
import AppointmentDetails from '../share_settings/appointmentDetails/appointmentDetailsCustomerView';

import { Appointment, AppointmentList, Upcoming } from '../share_settings/upcoming_appointments';
import { PastAppointment, Past } from '../share_settings/past_appointments';
import { Container, Label, InputField, LeftSide, ContactTitle } from '../share_settings/contact_form';
import UserProvider, { UserContext } from '../../context/userContext';

import glamorous from 'glamorous';

export const FormContainer = glamorous.div({
	// border: '1px solid blue',
	width: '100%',
	// margin: "2%",
	border: '10px 10px',
	backgroundColor: '#353A50',
	cover: 'no-repeat',
	textAlign: 'center',
	paddingTop: '2%'
});

export const UserTitle = glamorous.h3({
	color: 'white',
	fontSize: '40px'
})

const Button = glamorous.button({
	borderRadius: '7px',
	background: '#EF5B5B',
	width: '60%',
	height: '100%',
	alignSelf: 'center',
	//margin: "0 1%",
	padding: '0 3%',
	fontWeight: 600,
	fontSize: '1.3em',
	color: '#EBEBEB',
	':hover': {
		color: 'white',
		cursor: 'pointer',
		boxShadow: '2px 2px gray'
	}
});

class UserSettings extends Component {
  state = {
		firstName: '',
		lastName: '',
		phone: '',
		location: '',
		newPassword: '',
		newPasswordAgain: '',
		passwordMatch: false
	};

	onInputChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	// This is for the user to see the password they are typing
	showPassword() {
		let x = document.getElementById('MyInput');
		let y = document.getElementById('MyInput2');
		if (x.type === 'password' && y.type === 'password') {
			console.log('hello');
			x.type = 'text';
			y.type = 'text';
		} else {
			x.type = 'password';
			y.type = 'password';
			console.log('hello password');
		}
	}
	// This function is to update and save user contact information
	// need to clear form when submit happens so we need e.preventDefault() also
	handleSubmit = (value) => {
		/* if (newPassword !== newPasswordAgain) {
      Idea one (pw): 
      monitor password matching
      
      Idea two (pw):
      1. change border around password fields
      2. shift to top of page
      3. write out which fields are throwing error
      4. show warning at the password fields that they don't match

      } else if (newPassword === newPasswordAgain) {
        value.saveCustomerInfo(this.state)
      } */

		// if not empty and matching new passwords
		if (this.state.newPassword === this.state.newPasswordAgain && this.state.newPassword !== '') {
			value.updateUserPassword(this.state.newPasswordAgain);
		}
		// make it so that any unchange info retains its values rather than overwriting
		// it with empty string ''
		// value.updateUserBasicInfo(this.state);
	};

	render() {
		return (
			<UserProvider>
				<UserContext.Consumer>
					{(value) => {
						return (
							<FormContainer>
								<UserTitle>User Settings</UserTitle>
								{/*<UpcomingAppointments userState={value.queryResults} />*/}
								<Appointment>
									<Upcoming>Upcoming Appointments</Upcoming>
									<hr />
									<AppointmentList>
										{value.upcoming_appointments.map((appt) => {
											return (
												<AppointmentDetails
													service={appt['service']}
													time={`${moment(appt['start']).format('h:mm A')} - ${moment(
														appt['end']
													).format('h:mm A')}`}
													day={`${moment(appt['start']).format('MMM D YYYY')}`}
													company={appt['business_ref']}
													money={appt['cost']}
												/>
											);
										})}
									</AppointmentList>
								</Appointment>
								<PastAppointment>
									<Past>Past Appointments</Past>
								</PastAppointment>
								<Container>
									{/*<PastAppointments userState={value} />*/}
									{/*<ContactForm userState={value} />*/}
									<ContactTitle>Profile Information</ContactTitle>

                  <LeftSide>
                
										<Label for="test">First Name</Label>
										<InputField
											type="text"
											name="firstName"
											value={this.state.firstName}
											onChange={this.onInputChange}
											placeholder={value.name.split(' ')[0]}
										/>
										<Label>Last Name</Label>
										<InputField
											name="lastName"
											value={this.state.lastName}
											onChange={this.onInputChange}
											type="text"
											placeholder={value.name.split(' ')[1]}
										/>
										<Label>Phone Number</Label>
										<InputField
											name="phone"
											value={this.state.phone}
											onChange={this.onInputChange}
											type="text"
											placeholder={value.phone}
										/>
										<Label>Location</Label>
										<InputField
											name="location"
											type="text"
											value={this.state.location}
											onChange={this.onInputChange}
											placeholder={value.location}
										/>
									</LeftSide>
								</Container>

								{value.ifOAuth.includes('google') || value.ifOAuth.includes('facebook') ? null : (
									<Wrapper>
										{/*< UserChangePassword />*/}
										<PwTitle>Password</PwTitle>
										<Label>Password</Label>
										<ChangePasswordInput
											name="newPassword"
											value={this.state.newPassword}
											type="password"
											placeholder="password"
											onChange={this.onInputChange}
											id="MyInput"
										/>
										<PwLabel>Re-Enter Password</PwLabel>
										<ChangePasswordInput
											name="newPasswordAgain"
											value={this.state.newPasswordAgain}
											type="password"
											placeholder="enter password"
											onChange={this.onInputChange}
											id="MyInput2"
										/>
										<PwLabel>Show Password</PwLabel>
										<ChangePasswordInput type="checkbox" onClick={this.showPassword} />
									</Wrapper>
								)}
								{/*<CheckBoxContainer>
									<CheckTitle>Communication Preferences</CheckTitle>
									<CheckBoxes>
										<CheckBox>
											<div className="pretty p-default">
												<input type="checkbox" />
												<div className="state p-primary">
													<label>Email</label>
												</div>
											</div>
										</CheckBox>

										<CheckBox>
											<div className="pretty p-default">
												<input type="checkbox" />
												<div className="state p-warning">
													<label>Text</label>
												</div>
											</div>
										</CheckBox>
									</CheckBoxes>
								</CheckBoxContainer>*/}
								<Button onClick={() => this.handleSubmit(value)}>Save</Button>
							</FormContainer>
						);
					}}
				</UserContext.Consumer>
			</UserProvider>
		);
	}
}

export default UserSettings;
