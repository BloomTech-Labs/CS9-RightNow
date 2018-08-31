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
import axios from "axios";


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
  state = {
    testing: null
  }

  render() {
    console.log("STATE\n", this.state.testing);
    let notState = null;
    return (
      <UserContext.Consumer>
        {value => {
          if (value.finished) {

            const appointments = value.queryResults; // called properly
            
						const testfunction = async (appointments) => {
							const x = await Promise.all(
								appointments.map(appt => {
									return axios.get(`https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/business/${appt.business_ref}`);
								})
							).then((res) => {

                const final = [];

                for (let i = 0; i < appointments.length; i++) {
                  const temp = {
                    appointment: appointments[i],
                    business_details: res[i].data.business_information
                  }
                  final.push(temp);
                }

                return final;
              })
              .then(actual => value.updateState({ this_is_it: actual, finished: false }))
              
              return x;
            };
            
            testfunction(appointments);
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
