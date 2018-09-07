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
import { BusinessContext } from "../../context/businessContext";
import AppointmentDetails from "../appointmentDetails/appointmentDetailsCustomerView";
import DeleteModal from "./delete_modal";
import PaymentForm from "../_Payment-Form/PaymentForm";


class BusnApptsView extends Component {
  state = {
    delete_modal: false
  }


  render() {  
    return (
      <BusinessContext.Consumer>
        {value => {

          if (this.props.value.userSignedIn === false) {
            console.log("here")
            return (<Redirect to="/biz-account" />)
          }

          return (
            <PrimaryWrapper>
      
              <BusnNav logout={() => value.business_logout()} updateState={data => value.updateState(data)} />
            
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
              {value.display_payment_modal ? <PaymentForm busnContext={value} /> : null}
      
            </PrimaryWrapper>
          )
        }}
      </BusinessContext.Consumer>
    )
  }
}


export default withRouter(BusnApptsView);