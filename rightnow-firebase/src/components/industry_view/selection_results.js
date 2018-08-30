import React, { Component } from "react";
import {
  Container,
  Sorting,
  Time,
  SortBy
} from "./selection_results_styles";
import AppointmentCard from "../appointment_card/appt_card";
import { UserContext } from "../../context/userContext";
import StarRatings from 'react-star-ratings';


import {
  Container as Wrapper,
  BusinessImage,
  BusinessInfo,
  AvailableAppts,
  BusinessName,
  Address,
  displayConfirm,
  Appointment,
  Type,
  // Time,
  Cost
} from '../appointment_card/appt_card_styles';


class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString()
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleTimeString() })
  }

  render() {
    return (
      <Sorting>
        <h2>Current time:</h2>
        <Time>{this.state.time}</Time>
        <SortBy>
          <option disabled selected hidden>Sort By</option>
          <option value="2">2 hours</option>
          <option value="3">3 hours</option>
          <option value="4">4 hours</option>
          <option value="5">5+ hours</option>
        </SortBy>
      </Sorting>
    )
  }
}


export default class Results extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {value => {
          if (value.finished) {
            console.log("here", value.queryResults)

            const appointments = value.queryResults;

            const do_it = async id => {
              const temp = await value.getBusinessInfo(id);
              console.log("!!!", temp);
              return temp;
            }

            const apptsWITHbusnInfo = async () => {
              const temp = await appointments.map(appt =>  ({ ...appt, business_details: do_it(appt.business_ref) }));
              return temp;
            }

            const x = (async () => {
              const y = await apptsWITHbusnInfo();
              console.log("YYYY", y);
              return y;
            })();

            console.log("APPOINTMENTS WITH BUSINESS INFO", x);
          }

          return (
            <Container>

              <Clock />

              {/* {value.queryResults ? await value.queryResults.map(async appt => {
              console.log("here")
              const id = appt.business_ref;
              const data = await value.getBusinessInfo(id);
              console.log("data", typeof data)

              return <div>here</div>

              return (
                <Wrapper>
                  <BusinessImage src={data.businessImage} />

                  <BusinessInfo>
                    <BusinessName>{data.businessName}</BusinessName>
                    <StarRatings
                      rating={data.rating}
                      numberOfStars={5}
                      starRatedColor="gold"
                      starEmptyColor="grey"
                      starDimension="35px"
                    />
                    <Address>
                      <div>{data.streetAddress}</div>
                      <div>{data.cityStateZip}</div>
                    </Address>
                  </BusinessInfo>
                </Wrapper>
              )
            }) : null} */}

            </Container>
          )
        }}
      </UserContext.Consumer>
    )
  }
}
