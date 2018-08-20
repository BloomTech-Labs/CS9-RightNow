import React, { Component } from "react";
import {
  Container,
  BusinessImage,
  BusinessInfo,
  AvailableAppts
} from "./appt_card_styles";


export default class AppointmentCard extends Component {
  render() {
    return (
      <Container>
        <BusinessImage src="https://nyoobserver.files.wordpress.com/2015/12/unnamed2.jpg" />
        <BusinessInfo>
          <h3>Caputo's Bake Shop</h3>
        </BusinessInfo>
        <AvailableAppts>
          <h4>right meow</h4>
        </AvailableAppts>
      </Container>
    )
  }
}