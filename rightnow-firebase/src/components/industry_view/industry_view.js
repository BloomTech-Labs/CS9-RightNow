import React, { Component } from "react";
import { Header } from "../featured_appointments/feat_appts_styles";
import {
  CircleOption,
  OptionContainer
} from "./industry_view_styles";


const IndustryOption = props => {
  if (props.text === "All") {
    return (
      <CircleOption 
        id="defaultSelection"
        onClick={(e) => props.handleSelection(e)} 
        style={{ border: "3px solid red" }}>
        {props.text}
      </CircleOption>
    )
  }
  return <CircleOption onClick={(e) => props.handleSelection(e)}>{props.text}</CircleOption>
}


export default class IndustryView extends Component {
  state = {
    industries: ["All", "Hair", "Auto", "Nails", "etc.", "etc."],
    currentSelection: null
  }

  componentDidMount() {
    const defaultIndustry = document.querySelector("#defaultSelection");
    this.setState({ currentSelection: defaultIndustry });
  }

  handleIndustrySelection = e => {
    e.target.style.border = "3px solid red";
    this.state.currentSelection.style.border = "1px solid black";
    this.setState({ currentSelection: e.target });
  }

  render() {
    return (
      <div>
        <Header>View Appointments by Industry</Header>
        <OptionContainer>
          {this.state.industries.map((industry, index) => (
            <IndustryOption 
              key={index}
              text={industry} 
              handleSelection={this.handleIndustrySelection} 
              />
          ))}
        </OptionContainer>
      </div>
    )
  }
}