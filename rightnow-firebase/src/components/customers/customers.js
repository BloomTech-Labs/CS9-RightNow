import React, {Component} from 'react';
import UserProvider from '../../context/userContext';
import QuickSearch from "../_quickSearch/quickSearch";

// import UserLanding from '../user_landing';
import FeaturedAppointments from '../featured_appointments/feat_appts';
import IndustryView from '../industry_view/industry_view';

import glamorous from "glamorous";

import Landing from "./landing";


const HomeContainer = glamorous.div({
    width: "100vw"
});


export default class Customers extends Component {

    componentDidMount() {
        const selectionContainer = document.getElementById("selection_container");
        let sticky = selectionContainer.offsetTop + 566;

        window.onscroll = () => {
            console.log(sticky, window.pageYOffset)
            if (window.pageYOffset > sticky) {
                selectionContainer.style.position = "fixed";
                selectionContainer.style.top = 0;
            } else {
                selectionContainer.style.position = "static";
            }
        }
    }
    
    render() {
        return (
            <HomeContainer>
                <UserProvider>
                    <Landing />
                    <FeaturedAppointments />
                    <IndustryView />
                </UserProvider>
            </HomeContainer>
        );
    }
}