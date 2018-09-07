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
            if (value.full_query) {
              // returns an array of arrays
              // each sub array is structured as [business_id, rating]
              const eachRating = Object.keys(value.full_query).map(busn_id => {
                const rating = value.full_query[busn_id].business_details.rating;
                if (rating !== undefined) return [busn_id, rating];
                else return [busn_id, 0];
              });

              // SORT IN DECENDING ORDER -- TAKE THE TOP THREE
              const top3 = eachRating.sort((x, y) => y[1] - x[1]).slice(0, 3);

              // RETRIEVE ALL BUSINESS DETAILS AND THEIR APPOINTMENTS
              const top3_withAllDetails = top3.reduce((acc, cur) => {
                const busn_id = cur[0];
                acc[busn_id] = value.full_query[busn_id];
                return acc;
              }, {});

              // MAP OVER BUSINESSES AND SEND OFF TO APPOINTMENT DISPLAY CARD
              return (
                <CardContainer>
                  {Object.keys(top3_withAllDetails).map(busn_id => {
                    const { business_details, appointments } = value.full_query[busn_id];
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