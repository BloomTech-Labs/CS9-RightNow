import React, {Component} from 'react';

// import UserLanding from '../user_landing';
import FeaturedAppointments from '../featured_appointments/feat_appts';
import IndustryView from '../industry_view/industry_view';

import glamorous from "glamorous";

import Landing from "./landing";


const HomeContainer = glamorous.div({
    width: "100vw"
});


export default class Customers extends Component {
    render() {
        return (
            <HomeContainer>
                <Landing value={this.props.value} />
                <FeaturedAppointments />
                <IndustryView />
            </HomeContainer>
        );
    }
}