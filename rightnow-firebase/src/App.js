import React, {Component} from 'react';
import NavBar from './components/nav_bar';
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
                </UserProvider>
            </div>
        );
    }
}
export default App;
