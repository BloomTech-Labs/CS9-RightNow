import React, { Component } from "react";
import {
  Container,
  CalendarWrapper,
  ApptsWrapper,
} from "./busn_appts_style";
import PostAppointment from "./post_availability";
import Calendar from "./calendar";


export default class BusnApptsView extends Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        <CalendarWrapper>
          <Calendar busnContext={this.props.value} />
        </CalendarWrapper>
        <ApptsWrapper>
          <PostAppointment busnContext={this.props.value} />
        </ApptsWrapper>
      </Container>
    )
  }
}