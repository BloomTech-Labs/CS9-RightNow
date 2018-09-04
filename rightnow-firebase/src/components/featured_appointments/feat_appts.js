import React, { Component } from "react";
import AppointmentCard from "../appointment_card/appt_card";
import {
  Container,
  Header,
  CardContainer
} from "./feat_appts_styles";

export default class FeaturedAppointments extends Component {
  render() {
    return (
      <Container>
        <Header>Featured Appointments Near You</Header>
        <CardContainer>
          {/* {Object.keys(dummy).map((key, index) => <AppointmentCard businessInfo={dummy[key]} key={index} /> )} */}
        </CardContainer>
      </Container>
    )
  }
}