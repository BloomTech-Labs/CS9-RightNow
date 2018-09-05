import React, {Component} from 'react';
import UserProvider from '../../context/userContext';
<<<<<<< HEAD
import QuickSearch from "../_quick-Search/quickSearch";
=======
import QuickSearch from "../_quickSearch/quickSearch";

>>>>>>> 384fb0ddca0c17c9450e31914270c54f5ade1401
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
>>>>>>> 384fb0ddca0c17c9450e31914270c54f5ade1401
                </UserProvider>
            </HomeContainer>
        );
    }
}