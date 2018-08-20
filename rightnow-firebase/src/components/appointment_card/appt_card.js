import React, { Component } from "react";
import {
  Container,
  BusinessImage,
  BusinessInfo,
  AvailableAppts,
  BusinessName,
  Address,
  Appointment,
  Type, Time, Cost
} from "./appt_card_styles";
import StarRatings from "react-star-ratings";


/*
INFORMATION REQUIRED FOR THIS COMPONENT:
  * Business image
  * Business name
  * Business rating
  * Business address
  * Available appointments
*/

export default class AppointmentCard extends Component {
  render() {
    return (
      <Container>

        <BusinessImage src="https://nyoobserver.files.wordpress.com/2015/12/unnamed2.jpg" />

        <BusinessInfo>
          <BusinessName>Caputo's Bake Shop</BusinessName>
          <StarRatings 
            rating={4.5} // this.props.rating
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
          <Appointment>
            <Type>Haircut</Type>
            <Time>1:30-2:00</Time>
            <Cost>$45</Cost>
          </Appointment>
          <Appointment>
            <Type>Haircut</Type>
            <Time>2:00-2:30</Time>
            <Cost>$55</Cost>
          </Appointment>
          <Appointment>
            <Type>Haircut</Type>
            <Time>4:30-5:00</Time>
            <Cost>$105</Cost>
          </Appointment>
        </AvailableAppts>

      </Container>
    )
  }
}