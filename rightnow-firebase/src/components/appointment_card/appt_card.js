import React, { Component } from "react";
import {
  Container,
  BusinessImage,
  BusinessInfo,
  AvailableAppts,
  BusinessName,
  Address
} from "./appt_card_styles";
import StarRatings from "react-star-ratings";


export default class AppointmentCard extends Component {
  render() {
    return (
      <Container>

        <BusinessImage src="https://nyoobserver.files.wordpress.com/2015/12/unnamed2.jpg" />

        <BusinessInfo>
          <BusinessName>Caputo's Bake Shop</BusinessName>
          <StarRatings 
            rating={4.5}
            numberOfStars={5}
            starRatedColor="gold"
            starEmptyColor="grey"
            starDimension="35px"
          />
          <Address>
            <div>329 Court St</div>
            <div>Brooklyn, NY 11231</div>
          </Address>
        </BusinessInfo>

        <AvailableAppts>
          <h4>right meow</h4>
        </AvailableAppts>

      </Container>
    )
  }
}