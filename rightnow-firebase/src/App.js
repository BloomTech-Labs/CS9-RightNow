import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import { init as firebaseInit } from './firebase/firebase';
import UserProvider from './context/userContext';
import { Route } from 'react-router-dom';
import BusinessLanding from './components/business_page/business_landing'
import Customer from './components/customers/customers';
import UserSettings from './components/user_settings/user_settings_form';
import CompanySettings from './components/company_settings/company_settings';

class App extends Component {
    constructor() {
        super();
        firebaseInit();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <UserProvider>
                    <NavBar/>
                    <Route exact path="/" component={Customer}/>
                    <Route exact path="/biz-landing" component={BusinessLanding}/>
                    <Route exact path="/user-settings" component={UserSettings}/>
                    <Route exact path="/company-settings" component={CompanySettings}/>
                </UserProvider>
            </div>
        );
    }
}
export default App;

