import React, {Component} from 'react';
import UserLanding from '../user_landing';
import FeaturedAppointments from '../featured_appointments/feat_appts';

import IndustryView from '../industry_view/industry_view';
import LocationSearchInput from '../placesAPI/search_autocomplete';


export default class Customers extends Component {
    render() {
        return (
            <div className="App">
                <UserLanding />
                <FeaturedAppointments />
                <IndustryView />
                <LocationSearchInput />
            </div>
        );
    }
}