import React, { Component } from "react";
import AppointmentCard from "../appointment_card/appt_card";
import {
  Container,
  Header,
  CardContainer
} from "./feat_appts_styles";
import { UserContext } from "../../context/userContext";

export default class FeaturedAppointments extends Component {
  render() {
    return (
      <Container>
        <Header>Featured Appointments Near You</Header>
        <UserContext.Consumer>
          {value => {
            if (value.featured_appointments) {
              

              // MAP OVER BUSINESSES AND SEND OFF TO APPOINTMENT DISPLAY CARD
              return (
                <CardContainer>
                  {Object.keys(value.featured_appointments).map(busn_id => {
                    const { business_details, appointments } = value.featured_appointments[busn_id];
                    return <AppointmentCard businessDetails={business_details} appointments={appointments} key={busn_id} />
                  })}
                </CardContainer>
              )              
            }
          }}
        </UserContext.Consumer>

      </Container>
    )
  }
}


/**
 * 
 * 
 {value.full_query ? Object.keys(value.full_query).map(busnRef => {
   
      const { business_details, appointments } = value.full_query[busnRef]
      
      return <AppointmentCard businessDetails={business_details} appointments={appointments} key={busnRef} />
      
      
    }) : null}
 */