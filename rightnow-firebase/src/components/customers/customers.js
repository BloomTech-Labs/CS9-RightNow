import React, {Component} from 'react';
import UserProvider from '../../context/userContext';
import QuickSearch from "../_quick-Search/quickSearch";
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
                <UserProvider>
                    <Landing />
                    {/* <FeaturedAppointments /> */}
                    <QuickSearch />
                    {/* <IndustryView /> */}
                </UserProvider>
            </HomeContainer>
        );
    }
}