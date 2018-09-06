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
<<<<<<< HEAD
import BusinessContext from "../../context/businessContext";
import AppointmentDetails from "./appointmentDetails/appointmentDetailsCustomerView"
=======
import { BusinessContext } from "../../context/businessContext";
import AppointmentDetails from "../appointmentDetails/appointmentDetailsCustomerView";
import DeleteModal from "./delete_modal";
>>>>>>> 5ebe0e4861b7622046e050210ae855c339e1cafb


class BusnApptsView extends Component {
  state = {
    delete_modal: false
  }


  render() {  
    return (
<<<<<<< HEAD
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
=======
      <BusinessContext.Consumer>
        {value => {

          if (this.props.value.userSignedIn === false) {
            console.log("here")
            return (<Redirect to="/biz-account" />)
          }

          return (
            <PrimaryWrapper>
      
              <BusnNav logout={() => value.business_logout()} />
      
              <Container>
                <CalendarWrapper>
                  <Calendar busnContext={value} />
                </CalendarWrapper>
                <ApptsWrapper>
                  <PostAppointment busnContext={value} />
                  <AppointmentDetails busnContext={value} />
                </ApptsWrapper>
              </Container>
      
              {value.display_delete_modal ? <DeleteModal busnContext={value} /> : null}
      
            </PrimaryWrapper>
          )
        }}
      </BusinessContext.Consumer>
>>>>>>> 5ebe0e4861b7622046e050210ae855c339e1cafb
    )
  }
}


export default withRouter(BusnApptsView);