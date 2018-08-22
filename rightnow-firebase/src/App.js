import React, { Component } from 'react';
import NavBar from './components/nav_bar';
import { init as firebaseInit } from './firebase/firebase';
import UserProvider from './context/userContext';
import { Route } from 'react-router-dom';
import BusinessLanding from './components/BusinessLanding'
import Customer from './components/customers/customers';

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
                    <Route exact path="/" component={Customer} />
                    <Route exact path="/biz-landing" component={BusinessLanding} />
                </UserProvider>
            </div>
        );
    }
}
export default App;

