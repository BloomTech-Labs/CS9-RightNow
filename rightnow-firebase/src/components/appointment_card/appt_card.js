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
    const { businessImage, businessName, streetAddress, cityStateZip, rating, appointments } = this.props.businessInfo;
    return (
      <Container>

        <BusinessImage src={businessImage} />

        <BusinessInfo>
          <BusinessName>{businessName}</BusinessName>
          <StarRatings 
            rating={rating}
            numberOfStars={5}
            starRatedColor="gold"
            starEmptyColor="grey"
            starDimension="35px"
          />
          <Address>
            <div>{streetAddress}</div>
            <div>{cityStateZip}</div>
          </Address>
        </BusinessInfo>

        <AvailableAppts>
          {Object.keys(appointments).map((key, index) => (
            <Appointment key={index}>
              <Type>{appointments[key].type}</Type>
              <Time>{appointments[key].time}</Time>
              <Cost>{appointments[key].cost}</Cost>
            </Appointment>
          ))}
        </AvailableAppts>

      </Container>
    )
  }
}