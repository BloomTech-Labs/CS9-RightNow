import React, {Component} from 'react';
import UserProvider from '../../context/userContext';
<<<<<<< HEAD
import QuickSearch from "../_quick-Search/quickSearch";
=======
import QuickSearch from "../_quickSearch/quickSearch";

>>>>>>> 5ebe0e4861b7622046e050210ae855c339e1cafb
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
<<<<<<< HEAD
                    {/* <FeaturedAppointments /> */}
                    <QuickSearch />
                    {/* <IndustryView /> */}
=======
                    <QuickSearch />
                    <FeaturedAppointments />
                    <IndustryView />
>>>>>>> 5ebe0e4861b7622046e050210ae855c339e1cafb
                </UserProvider>
            </HomeContainer>
        );
    }
}