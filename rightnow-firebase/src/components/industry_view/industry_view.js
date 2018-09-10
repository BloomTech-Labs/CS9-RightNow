import React, { Component } from 'react';
import { Header, Container } from '../featured_appointments/feat_appts_styles';
import { CircleOption, OptionContainer, DropDown, Options } from './industry_view_styles';
import Results from './selection_results';
import QuickSearch from '../_quickSearch/quickSearch';
import { UserContext } from '../../context/userContext';

const IndustryOption = (props) => {
	if (props.text === 'All') {
		return (
			<CircleOption
				id="defaultSelection"
				style={{ border: '3px solid red' }}
				onClick={(e) => props.handleSelection(e)}
			>
				{props.text}
			</CircleOption>
		);
	}
	return <CircleOption onClick={(e) => props.handleSelection(e)}>{props.text}</CircleOption>;
};

export default class IndustryView extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {value => {
          return (
            <Container>
              <Header id="appointments">View Appointments by Industry</Header>

              <QuickSearch updateResults={data => value.filter_appointments(data)} />

              <Header id="appt_cards">{value.time_selection !== "All" ? 
                  `${value.industry_selection} Services within the next ${value.time_selection}` :
                  `${value.industry_selection} Services`}</Header>

              <Results value={value} />
              
            </Container>
          )
        }}
      </UserContext.Consumer>
    )
  }
}
