import React, { Component } from "react";
import { Header, Container } from "../featured_appointments/feat_appts_styles";
import Results from "./selection_results";
import QuickSearch from "../_quickSearch/quickSearch";


export default class IndustryView extends Component {
  state = {
    industries: ["All", "Hair", "Auto", "Nails", "etc.", "etc."],
    currentSelection: "All"
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
      <Container>
        <Header id="appointments">View Appointments by Industry</Header>

        <QuickSearch />

        {/* <OptionContainer>
          {this.state.industries.map((industry, index) => (
            <IndustryOption 
              key={index}
              text={industry} 
              handleSelection={this.handleIndustrySelection} 
              />
          ))}
        </OptionContainer> */}

        {/* {this.state.currentSelection ? <Header >{`${this.state.currentSelection.innerHTML} Services`}</Header> : null} */}
        <Header>All Services</Header>

        <Results value={this.props.value} industry={this.state.currentSelection} />
        
      </Container>
    )
  }
}