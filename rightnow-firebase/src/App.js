import React, { Component } from 'react';
import NavBar from './components/nav/nav_bar';
// import UserProvider, { UserContext } from './context/userContext';
import BusinessProvider, { BusinessContext } from "./context/businessContext";
import { Route } from 'react-router-dom';
import BusinessLanding from './components/business_page/business_landing';
import BusinessAccount from './components/business_page/business_register';
import Customer from './components/customers/customers';
import UserSettings from './components/user_settings/user_settings_form';
import CompanySettings from './components/company_settings/company_settings';
import BusnApptsView from "./components/business_appointments/busn_appts";
import { auth } from "./firebase/firebase";

class App extends Component {
	render() {
		return (
			<div className="App">

				<Route exact path="/" render={() => <Customer />} />
				<Route exact path="/user-settings" render={() => <UserSettings />} />

				<BusinessProvider>
					<BusinessContext.Consumer>
						{value => (
							<div>
								<Route exact path="/biz-landing" component={BusinessLanding} />
								<Route exact path="/biz-account" render={() => <BusinessAccount value={value} />} />
								<Route exact path="/company-settings" component={CompanySettings}/>
								<Route path="/busn-appts" render={() => <BusnApptsView value={value} />} />
							</div>
						)}
					</BusinessContext.Consumer>
				</BusinessProvider>

			</div>
		);
	}
}
export default App;
