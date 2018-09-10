import React, { Component } from 'react';
import moment from 'moment';

// import EmailPhone from '../share_settings/email_phone'
import { CheckBoxContainer, CheckBox, CheckTitle, CheckBoxes } from '../share_settings/user_notification';

import { Wrapper, PwLabel, PwTitle, ChangePasswordInput } from '../share_settings/user_change_password';
import AppointmentDetails from '../share_settings/appointmentDetails/appointmentDetailsCustomerView';

//import { Appointment, AppointmentList, Upcoming } from '../share_settings/upcoming_appointments';
//import { PastAppointment, Past } from '../share_settings/past_appointments';
import { Container, Label, InputField, LeftSide, ContactTitle } from '../share_settings/contact_form';
import { BusinessContext } from '../../context/businessContext';

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

export const BusinessTitle = glamorous.h3({
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
        businessName: '',
        businessPhone: '',
        businessEmail: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
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
                <BusinessContext.Consumer>
                {(value) => {
                        return (
                            <FormContainer>
                                <BusinessTitle>Business Settings</BusinessTitle>
                               
                                <Container>
                                    {/*<PastAppointments userState={value} />*/}
                                    {/*<ContactForm userState={value} />*/}
                                    <ContactTitle>Profile Information</ContactTitle>

                                    <LeftSide>
                                        <Label>Business Name</Label>
                                        <InputField
                                            name="businessName"
                                            //value={this.state.businessName}
                                            onChange={this.onInputChange}
                                            type="text"
                                            placeholder={value.business.name}
                                        />
                                        <Label>Business Address</Label>
                                        <InputField
                                            name="businessAddress"
                                            //value={this.state.businessName}
                                            onChange={this.onInputChange}
                                            type="text"
                                            placeholder={value.business.fullAddress}
                                        />
                                        <Label for="test">Full Name</Label>
                                        <InputField
                                            type="text"
                                            name="firstName"
                                            //value={this.state.firstName}
                                            onChange={this.onInputChange}
                                            placeholder={value.personal.full_name}
                                        />
                                        <Label>Business Number</Label>
                                        <InputField
                                            name="phone"
                                            //value={this.state.phone}
                                            onChange={this.onInputChange}
                                            type="text"
                                            placeholder={value.business.phone}
                                        />
                                        <Label>Email</Label>
                                        <InputField
                                            name="email"
                                            type="text"
                                            //value={this.state.email}
                                            onChange={this.onInputChange}
                                            placeholder={value.personal.email}
                                        />
                                    </LeftSide>
                                </Container>
                                    <Wrapper>
                            
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
                            
                                <CheckBoxContainer>
                                    {/*<UserNotification />*/}
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
                                </CheckBoxContainer>
                                <Button onClick={() => this.handleSubmit(value)}>Save</Button>
                            </FormContainer>
                        );
                    }}
                </BusinessContext.Consumer>
        );
    }
}

export default UserSettings;
