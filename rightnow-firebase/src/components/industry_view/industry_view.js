import React, { Component } from 'react';
import { Header, Container } from '../featured_appointments/feat_appts_styles';
import { CircleOption, OptionContainer, DropDown, Options } from './industry_view_styles';
import Results from './selection_results';
import QuickSearch from '../_quickSearch/quickSearch';

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
	state = { industry_actual: 'All', time_actual: 'All' };

	componentDidMount() {
		const defaultIndustry = document.querySelector('#defaultSelection');
		this.setState({ currentSelection: defaultIndustry });
	}

	handleIndustrySelection = (e) => {
		e.target.style.border = '3px solid red';
		this.state.currentSelection.style.border = '1px solid black';
		this.setState({ currentSelection: e.target });
	};

	render() {
		return (
			<Container>
				<Header id="appointments">View Appointments by Industry</Header>
				<QuickSearch updateResults={(data) => this.setState(data)} />
				<Header>
					{this.state.time_actual !== 'All' ? (
						`${this.state.industry_actual} Services within the next ${this.state.time_actual}`
					) : (
						`${this.state.industry_actual} Services`
					)}
				</Header>
				<Results value={this.props.value} industry={this.state.currentSelection} />
			</Container>
		);
	}
}
