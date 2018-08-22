import React, {Component} from 'react';
import {FormContainer, Email} from './user_settings_form_styles'
import EmailPhone from './email_phone'
import UserNotification from './user_notification';
import UserChangePassword from './user_change_password';
class UserSettings extends Component {

    render() {
        return(
            <div>
                <h1>User Settings</h1>
                <EmailPhone/>
                <UserNotification/>
                <UserChangePassword/>
            </div>
        );
    }
}
export default UserSettings;