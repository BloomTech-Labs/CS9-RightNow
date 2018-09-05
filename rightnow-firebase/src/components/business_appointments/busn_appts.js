import React, { Component } from "react";
import {
  Container,
  CalendarWrapper,
  ApptsWrapper,
  PrimaryWrapper,
} from "./busn_appts_style";
import PostAppointment from "./post_availability";
import Calendar from "./calendar";
import BusnNav from "./busn_nav";
import { Redirect, withRouter } from "react-router-dom";
import BusinessContext from "../../context/businessContext";
<<<<<<< HEAD
import AppointmentDetails from "./appointmentDetails/appointmentDetailsCustomerView"
=======
import AppointmentDetails from "../appointmentDetails/appointmentDetailsCustomerView";
>>>>>>> 384fb0ddca0c17c9450e31914270c54f5ade1401


class BusnApptsView extends Component {
  render() {   

    if (this.props.value.userSignedIn === false) {
      console.log("here")
      return (<Redirect to="/biz-account" />)
    }

    return (
      <PrimaryWrapper>
        <BusnNav logout={() => this.props.value.business_logout()} />
        <Container>
          <CalendarWrapper>
            <Calendar busnContext={this.props.value} />
          </CalendarWrapper>
          <ApptsWrapper>
            <PostAppointment busnContext={this.props.value} />
            <AppointmentDetails busnContext={this.props.value} />
          </ApptsWrapper>
        </Container> 
      </PrimaryWrapper>
    )
  }
}


export default withRouter(BusnApptsView);