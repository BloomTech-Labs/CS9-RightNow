import React, { Component } from "react";
import AppointmentCard from "../appointment_card/appt_card";
import {
  Container,
  Header,
  CardContainer
} from "./feat_appts_styles";


const information = {
  0: {
    businessImage: "https://nyoobserver.files.wordpress.com/2015/12/unnamed2.jpg",
    businessName: "Caputo's Bake Shop",
    streetAddress: "329 Court St",
    cityStateZip: "Brooklyn, NY 11231",
    rating: 4.5,
    appointments: {
      0: {
        type: "Haircut",
        time: "1:30-2:00",
        cost: "$45"
      },
      1: {
        type: "Haircut",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Haircut",
        time: "4:30-5:00",
        cost: "$105"
      }
    }
  }
}

export default class FeaturedAppointments extends Component {
  render() {
    return (
      <Container>
        <Header>Featured Appointments Near You</Header>
        <CardContainer>
          {Object.keys(information).map((key, index) => <AppointmentCard businessInfo={information[key]} key={index} /> )}
          {/* <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard /> */}
        </CardContainer>
      </Container>
    )
  }
}