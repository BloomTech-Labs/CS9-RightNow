import React, { Component } from "react";
import { Header } from "../featured_appointments/feat_appts_styles";
import {
  CircleOption,
  OptionContainer
} from "./industry_view_styles";


export default class IndustryView extends Component {
  render() {
    return (
      <div>
        <Header>View Appointments by Industry</Header>
        <OptionContainer>
          <CircleOption>All</CircleOption>
          <CircleOption>Auto</CircleOption>
          <CircleOption>Hair</CircleOption>
          <CircleOption>Nails</CircleOption>
          <CircleOption>etc.</CircleOption>
          <CircleOption>etc.</CircleOption>
        </OptionContainer>
      </div>
    )
  }
}