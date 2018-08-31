import React, { Component } from "react";
import {
  Container,
  CalendarWrapper,
  ApptsWrapper,
} from "./busn_appts_style";
import PostAppointment from "./post_availability";


export default class BusnApptsView extends Component {
  render() {
    return (
      <Container>
        <CalendarWrapper></CalendarWrapper>
        <ApptsWrapper>
          <PostAppointment />
        </ApptsWrapper>
      </Container>
    )
  }
}