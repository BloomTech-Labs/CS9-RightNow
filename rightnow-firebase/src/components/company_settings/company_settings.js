import React, { Component } from 'react';
// import EmailPhone from '../share_settings/email_phone'
import UserNotification from '../share_settings/user_notification';
import UserChangePassword from '../share_settings/user_change_password';
import UpcomingAppointments from '../share_settings/upcoming_appointments';
import PastAppointments from '../share_settings/past_appointments';
import CompanyContactForm from './company_contact_form';
import BusinessProvider, { BusinessContext } from '../../context/businessContext';

import glamorous from 'glamorous';

export const FormContainer = glamorous.div({
    // border: '1px solid blue',
    width: '100%',
    // margin: "2%",
    border: '10px 10px',
    backgroundColor: '#232123',
    cover: 'no-repeat',
    textAlign: 'center',
    paddingTop: '2%'
});

export const Title = glamorous.h3({
    color: 'white'
})

const Button = glamorous.button({
    borderRadius: '7px',
    background: '#00c6fd',
    width: '60%',
    height: '100%',
    alignSelf: 'center',
    //margin: "0 1%",
    padding: '0 3%',
    fontWeight: 600,
    fontSize: '1.3em',
    color: '#EBEBEB',
    ':hover': {
        cursor: 'pointer',
        boxShadow: '2px 2px gray'
    }
});

class UserSettings extends Component {
    render() {
        return (
            <BusinessProvider>
                <BusinessContext.Consumer>
                    {(value) => {
                        // value.getCustomerAppt(); // Get all appointments booked by the customer/user
                        // if (value.finished) {
                        // if axios request is finished
                        // if (value.queryResults.length !== 0) {
                        // check if the array is empty or not
                        // console.log('get appts', value.getCustomerAppt());
                        console.log('test',value);
                        return (
                            <FormContainer>
                                <Title>Business Settings</Title>
                                <UpcomingAppointments userState={value.queryResults} />
                                <PastAppointments userState={value} />
                                <CompanyContactForm userState={value} />
                                <UserChangePassword />
                                {/* <UserNotification /> */}
                                <Button onClick={() => this.props.UserProvider}>Save</Button>
                            </FormContainer>
                        );
                        // }
                        // }
                    }}
                </BusinessContext.Consumer>
            </BusinessProvider>
        );
    }
}

export default UserSettings;