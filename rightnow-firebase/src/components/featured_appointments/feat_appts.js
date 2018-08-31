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
  },
  1: {
    businessImage: "http://shantltalibarbershop.com/assets/img/gallery/2.jpg",
    businessName: "Shantl Barber Shop",
    streetAddress: "1209 2nd Avenue",
    cityStateZip: "New York, NY 10065",
    rating: 5,
    appointments: {
      0: {
        type: "Shave",
        time: "12:30-2:00",
        cost: "$35"
      },
      1: {
        type: "Shave",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Shave",
        time: "3:30-5:00",
        cost: "$50"
      }
    }
  },
  2: {
    businessImage: "https://resourcedesignlab.files.wordpress.com/2010/08/storefront_smithsbar.jpg",
    businessName: "Smiths",
    streetAddress: "329 Court St",
    cityStateZip: "Brooklyn, NY 11231",
    rating: 4,
    appointments: {
      0: {
        type: "Something",
        time: "1:30-2:00",
        cost: "$45"
      },
      1: {
        type: "Goes",
        time: "2:00-2:30",
        cost: "$55"
      },
      2: {
        type: "Here",
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
        </CardContainer>
      </Container>
    )
  }
}