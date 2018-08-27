import React, { Component } from 'react';
<<<<<<< HEAD
import NavBar from './components/nav_bar';
// import { init as firebaseInit } from './firebase/firebase';
=======
import NavBar from './components/nav/nav_bar';
>>>>>>> 955aeeee21f5c3a3a8c3382c396504dc929c5ed4
import UserProvider from './context/userContext';
import BusinessProvider, { BusinessContext } from "./context/businessContext";
import { Route } from 'react-router-dom';
import BusinessLanding from './components/business_page/business_landing';
import BusinessAccount from './components/business_page/business_register';
import Customer from './components/customers/customers';
import UserSettings from './components/user_settings/user_settings_form';
import CompanySettings from './components/company_settings/company_settings';

class App extends Component {
<<<<<<< HEAD
    constructor() {
        super();
        // firebaseInit();
=======
    constructor(props) {
        super(props);
>>>>>>> 955aeeee21f5c3a3a8c3382c396504dc929c5ed4
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <UserProvider>
<<<<<<< HEAD
                    <NavBar/>
                    <Route exact path="/" component={Customer} />
                    <Route exact path="/biz-account" component={BusinessAccount} />
                    <Route exact path="/biz-landing" component={BusinessLanding}/>
                    <Route exact path="/user-settings" component={UserSettings}/>
                    <Route exact path="/company-settings" component={CompanySettings}/>
                    <Route exact path="/biz-app" component={Biz_Appointments}/>
                </UserProvider>

                {/* <Biz_Appointments /> */}
=======
                    <BusinessProvider>
                        <NavBar />
                        <Route exact path="/" component={Customer} />
                        <Route exact path="/user-settings" component={UserSettings}/>
                        
                        <BusinessContext.Consumer>
                            {value => (
                                <div>
                                    <Route exact path="/biz-landing" component={BusinessLanding} />
                                    <Route exact path="/biz-account" render={() => <BusinessAccount value={value} />} />
                                    <Route exact path="/company-settings" component={CompanySettings}/>
                                </div>
                            )}
                        </BusinessContext.Consumer>
                        
                    </BusinessProvider>
                </UserProvider>
>>>>>>> 955aeeee21f5c3a3a8c3382c396504dc929c5ed4
            </div>
        );
    }
}
export default App;

