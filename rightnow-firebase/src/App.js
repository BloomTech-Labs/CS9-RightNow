import React, { Component } from 'react';
import NavBar from './components/nav/nav_bar';
<<<<<<< HEAD
import UserProvider from './context/userContext';
import BusinessProvider, { BusinessContext } from './context/businessContext';
=======
import UserProvider, { UserContext } from './context/userContext';
import BusinessProvider, { BusinessContext } from "./context/businessContext";
>>>>>>> fc5e490e789e1543c1ac4b7c7e579544eb31eca1
import { Route } from 'react-router-dom';
import BusinessLanding from './components/business_page/business_landing';
import BusinessAccount from './components/business_page/business_register';
import Customer from './components/customers/customers';
import UserSettings from './components/user_settings/user_settings_form';
import CompanySettings from './components/company_settings/company_settings';
import PostAppt from "./components/appointments_business/post_appt";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">

				<UserProvider>
					<UserContext.Consumer>
						{value => (
							<div>
								<Route exact path="/" render={() => <Customer value={value} />} />
								<Route exact path="/user-settings" render={() => <UserSettings value={value} />} />
							</div>
						)}
					</UserContext.Consumer>
				</UserProvider>

				<BusinessProvider>
					<BusinessContext.Consumer>
						{value => (
							<div>
								<Route exact path="/biz-landing" component={BusinessLanding} />
								<Route exact path="/biz-account" render={() => <BusinessAccount value={value} />} />
								<Route exact path="/company-settings" component={CompanySettings}/>
								<Route path="/postappt" component={PostAppt} />
							</div>
						)}
					</BusinessContext.Consumer>
				</BusinessProvider>

			</div>
		);
	}
}
export default App;
