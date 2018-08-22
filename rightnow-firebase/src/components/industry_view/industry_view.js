import React, { Component } from "react";
import { Header } from "../featured_appointments/feat_appts_styles";
import {
  CircleOption,
  OptionContainer,
  DropDown,
  Options
} from "./industry_view_styles";
import Results from "./selection_results";


const IndustryOption = props => {
  if (props.text === "All") {
    return (
      <CircleOption 
        id="defaultSelection"
        style={{ border: "3px solid red" }}
        onClick={(e) => props.handleSelection(e)}>{props.text}</CircleOption>
    );
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

        {this.state.currentSelection ? <Header style={{marginLeft: "5%"}}>{`${this.state.currentSelection.innerHTML} Services`}</Header> : null}

        <Results industry={this.state.currentSelection} />
        
      </div>
    )
  }
}