import React, { Component } from 'react';
import NavBar from './components/nav/nav_bar';
import UserProvider from './context/userContext';
import BusinessProvider from "./context/businessContext";
import { Route } from 'react-router-dom';
import BusinessLanding from './components/business_page/business_landing';
import BusinessAccount from './components/business_page/business_register';
import Customer from './components/customers/customers';
import UserSettings from './components/user_settings/user_settings_form';
import CompanySettings from './components/company_settings/company_settings';
import BizAppointments from './components/appointments_business/appointments_business';

class App extends Component {
    constructor() {
        super();
        // firebaseInit();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <UserProvider>
                    <NavBar />
                    <Route exact path="/" component={Customer} />
                    <Route exact path="/user-settings" component={UserSettings}/>
                    <BusinessProvider>
                        <Route exact path="/biz-account" component={BusinessAccount} props={this.props.value} />
                        <Route exact path="/biz-landing" component={BusinessLanding} props={this.props.value} />
                        <Route exact path="/biz-landing" component={BizAppointments} />
                        <Route exact path="/company-settings" component={CompanySettings}/>
                    </BusinessProvider>
                </UserProvider>
            </div>
        );
    }
}
export default App;

