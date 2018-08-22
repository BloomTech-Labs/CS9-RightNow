import React, {Component} from 'react';
import EmailPhone from './email_phone'
import UserNotification from './user_notification';
import UserChangePassword from './user_change_password';
import glamorous from "glamorous";

export const FormContainer = glamorous.div({
    // border: '1px solid blue',
    width: '50%'
});

class UserSettings extends Component {

    render() {
        return (
            <div>
                <h1>User Settings</h1>
                <FormContainer>
                    <EmailPhone/>
                    <h1>Notifications</h1>
                    <UserNotification/>
                    <h1>Change Password</h1>
                    <UserChangePassword/>
                </FormContainer>
            </div>
        );
    }
}

export default UserSettings;