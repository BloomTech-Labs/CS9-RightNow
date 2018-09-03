import React, { Component } from "react";
import {
  Container,
  CalendarWrapper,
  ApptsWrapper,
  PrimaryWrapper,
} from "./busn_appts_style";
import PostAppointment from "./post_availability";
import Calendar from "./calendar";
import BusnNav from "./busn_nav";


export default class BusnApptsView extends Component {
  render() {
    return (
      <PrimaryWrapper>
        <BusnNav />
        <Container>
          <CalendarWrapper>
            <Calendar busnContext={this.props.value} />
          </CalendarWrapper>
          <ApptsWrapper>
            <PostAppointment busnContext={this.props.value} />
          </ApptsWrapper>
        </Container>
      </PrimaryWrapper>
    )
  }
}