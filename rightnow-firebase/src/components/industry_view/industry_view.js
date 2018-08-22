import React, { Component } from "react";
import { Header } from "../featured_appointments/feat_appts_styles";
import {
  CircleOption,
  OptionContainer
} from "./industry_view_styles";


const IndustryOption = props => {
  return <CircleOption onClick={(e) => props.handleSelection(e)}>{props.text}</CircleOption>
}


export default class IndustryView extends Component {
  state = {
    industries: ["All", "Hair", "Auto", "Nails", "etc.", "etc."],
    lastSelection: null
  }

  handleIndustrySelection = e => {
    const { lastSelection } = this.state;

    e.target.style.border = "3px solid red";
    lastSelection ? lastSelection.style.border = "1px solid black" : null;
    
    this.setState({ lastSelection: e.target });
  }

  render() {
    return (
      <div>
        <Header>View Appointments by Industry</Header>
        <OptionContainer>
          {this.state.industries.map((industry, index) => (
            <IndustryOption 
              text={industry} 
              handleSelection={this.handleIndustrySelection} 
              />
          ))}
        </OptionContainer>
      </div>
    )
  }
}