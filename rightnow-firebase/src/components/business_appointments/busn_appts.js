import React, { Component } from "react";
import {
  Container,
  CalendarWrapper,
  ApptsWrapper
} from "./busn_appts_style";


export default class BusnApptsView extends Component {
  render() {
    return (
      <Container>
        <CalendarWrapper></CalendarWrapper>
        <ApptsWrapper></ApptsWrapper>
      </Container>
    )
  }
}