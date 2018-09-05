import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <StripeProvider apiKey="pk_test_Yf6hb34cfn9IIpM05jOCNSwk">
        <Router>
            <App />
        </Router>
    </StripeProvider>, 
    document.getElementById('root'));
    
registerServiceWorker();
