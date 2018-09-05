import React, { Component } from 'react';
// import EmailPhone from '../share_settings/email_phone'
import UserNotification from '../share_settings/user_notification';
import UserChangePassword from '../share_settings/user_change_password';
import UpcomingAppointments from '../share_settings/upcoming_appointments';
import PastAppointments from '../share_settings/past_appointments';
import ContactForm from '../share_settings/contact_form';
import UserProvider, { UserContext } from '../../context/userContext';

import glamorous from 'glamorous';

export const FormContainer = glamorous.div({
	// border: '1px solid blue',
	width: '100%',
	// margin: "2%",
	border: '10px 10px',
	backgroundColor: '#e6e6e6',
	cover: 'no-repeat',
	textAlign: 'center',
	paddingTop: '2%'
});

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
			<UserProvider>
				<UserContext.Consumer>
          {(value) => {
      
							return ( <FormContainer>
                  <h3>User Settings</h3>
                  <UpcomingAppointments userState={value.queryResults} />
                  <PastAppointments userState={value} />
                  <ContactForm userState={value} />
                {console.log(value)}
                
                {value.ifOAuth.includes("google") || value.ifOAuth.includes("facebook") ? null : <UserChangePassword />}
                  <UserNotification />
                  <Button onClick={() => this.props.UserProvider}>
                    Save
                  </Button>
                </FormContainer>
              )
					}}
				</UserContext.Consumer>
			</UserProvider>
		);
	}
}

export default UserSettings;
