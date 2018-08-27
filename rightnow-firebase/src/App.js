import React, { Component } from 'react';
import NavBar from './components/nav/nav_bar';
import UserProvider from './context/userContext';
import BusinessProvider, { BusinessContext } from "./context/businessContext";
import { StripeProvider } from 'react-stripe-elements';
import { Route } from 'react-router-dom';
import BusinessLanding from './components/business_page/business_landing';
import BusinessAccount from './components/business_page/business_register';
import Customer from './components/customers/customers';
import UserSettings from './components/user_settings/user_settings_form';
import CompanySettings from './components/company_settings/company_settings';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <UserProvider>
                    <BusinessProvider>
                        <NavBar />
                        <Route exact path="/" component={Customer} />
                        <Route exact path="/user-settings" component={UserSettings}/>
                        
                        <BusinessContext.Consumer>
                            {value => (
                                <div>
                                    <Route exact path="/biz-landing" component={BusinessLanding} />
                                    <Route exact path="/biz-account" render={() => <BusinessAccount value={value} />} />
                                    <Route exact path="/company-settings" component={CompanySettings} />
                                    <Route exact path="/billing" component={Billing} />
                                </div>
                            )}
                        </BusinessContext.Consumer>
                        
                    </BusinessProvider>
                </UserProvider>
            </div>
        );
    }
}
export default App;
