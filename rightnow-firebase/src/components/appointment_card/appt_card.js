import React, { Component } from "react";
import {
  Container,
  BusinessImage,
  BusinessInfo,
  AvailableAppts
} from "./appt_card_styles";
import StarRatings from "react-star-ratings";


export default class AppointmentCard extends Component {
  render() {
    return (
      <Container>

        <BusinessImage src="https://nyoobserver.files.wordpress.com/2015/12/unnamed2.jpg" />

        <BusinessInfo>
          <h3>Caputo's Bake Shop</h3>
          <StarRatings 
            rating={4.5}
            numberOfStars={5}
            starRatedColor="gold"
            starEmptyColor="grey"
            starDimension="35px"
          />
          <div>329 Court St</div>
          <div>Brooklyn, NY 11231</div>
        </BusinessInfo>

        <AvailableAppts>
          <h4>right meow</h4>
        </AvailableAppts>

      </Container>
    )
  }
}