import React, { Component } from 'react';
import NavBar from './components/nav_bar';
<<<<<<< HEAD
import UserLanding from './components/user_landing';
import { init as firebaseInit } from './firebase/firebase';
database = init.firestore();
import FeaturedAppointments from './components/featured_appointments/feat_appts';
import IndustryView from './components/industry_view/industry_view';
import UserProvider from './context/userContext';
// import Biz_Appointments from './components/view_appointments_business/appointments_business';
// import Biz_Appointments from './view_appointments_business/appointments_business.js';
import Biz_Appointments from './appointments_business/appointments_business.js';
import { database } from 'firebase';

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
					<NavBar />
					<UserLanding />
					<FeaturedAppointments />
					<IndustryView />
				</UserProvider>

				<Biz_Appointments />
			</div>
		);
	}
=======
import { init as firebaseInit } from './firebase/firebase';
import UserProvider from './context/userContext';
import { Route } from 'react-router-dom';
import BusinessLanding from './components/business_page/business_landing';
import BusinessAccount from './components/business_page/business_register';
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
                    <Route exact path="/" component={Customer} />
                    <Route exact path="/biz-account" component={BusinessAccount} />
                    <Route exact path="/biz-landing" component={BusinessLanding}/>
                    <Route exact path="/user-settings" component={UserSettings}/>
                    <Route exact path="/company-settings" component={CompanySettings}/>
                </UserProvider>
            </div>
        );
    }
>>>>>>> d00f4a2cbac6d6558dc4e3a22f113a8b486e69d3
}
export default App;

