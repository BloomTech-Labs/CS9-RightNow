import React, { Component } from 'react';
import './quickSearchStyles.css';
import glamorous from 'glamorous';
import moment from 'moment';

const Container = glamorous.div({
	position: 'relative',
	width: '85vw',
	height: '15vh',
	margin: 'auto',
	display: 'grid',
	grid: '100% / 80% 20%',
	backgroundColor: 'rgba(255, 255, 255, 0.97)',
	zIndex: 5,
	transition: 'all 0.5s'
});

const SelectionWrapper = glamorous.div({
	width: '100%',
	display: 'grid',
	grid: '50% 50% / 100%',
	margin: '2%'
});

const SelectionSet = glamorous.div({
	display: 'grid',
	grid: '100% / 13% 8% 8% 8% 8% 8% 8% 8% 1fr',
	gridColumnGap: '1%',
	gridRowGap: '3%',
	justifyContent: 'center',
	alignItems: 'center',

	// "@media(min-width: 1475px)": {
	//   grid: "100% / 15% 14% 14% 14% 14% 14% 14%",
	// },

	"@media(min-width: 1200px)": {
	  grid: "100% / 16% 8% 8% 8% 8% 8% 8% 8% 1fr",
	}
});

const SelectionTitle = glamorous.div({
	background: 'none',
	color: '#353A50',
	margin: '1%',
	fontFamily: 'Raleway, sans-serif'
});

const Bubble = glamorous.div({
	margin: '2%',
	background: 'rgb(225, 225, 225)',
	borderRadius: '20px',
	padding: '6% !important',
	fontFamily: 'Raleway, sans-serif',
	textAlign: 'center',

	':hover': {
		cursor: 'pointer'
	}
});

const DateContainer = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'center',
	alignItems: 'flex-end',
	justifyContent: 'center',
	fontFamily: 'Raleway, sans-serif',
	height: '100%',
	width: '100%',
	// marginRight: '43%'
});

const DayOfWeek = glamorous.div({
	fontFamily: 'Raleway, sans-serif',
	fontSize: '1.8em',
	fontWeight: 600
});

const MonthDate = glamorous.div({
	fontFamily: 'Raleway, sans-serif',
	fontSize: '1.8em',
	fontWeight: 600
});

const Time = glamorous.div({
	fontFamily: 'Syncopate, sans-serif',
	fontWeight: 600,
	fontSize: '1.8em'
});

class Clock extends Component {
	state = {
		time: moment().format('h:mm a'),
		day: moment().format('dddd'),
		month: moment().format('MMMM D')
	};

	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 5000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick = () => {
		this.setState({ time: moment().format('h:mm a') });
	};

	render() {
		return (
			<DateContainer>
				<DayOfWeek>{this.state.day}</DayOfWeek>
				<MonthDate>{this.state.month}</MonthDate>
				<Time>{this.state.time}</Time>
			</DateContainer>
		);
	}
}

export default class QuickSearch extends Component {
	state = {
		industries: [ 'Hair', 'Auto', 'Nails', 'Pets', 'Massage', "Active" ],
		times: [ '1 hour', '2 hours', '3 hours', '4 hours', '5+ hours' ],
		active_industry: null,
		active_time: null
	};

	componentDidMount() {
		document.querySelector('#active_industry').style.background = '#353A50';
		document.querySelector('#active_industry').style.color = 'white';
		document.querySelector('#active_time').style.background = '#353A50';
		document.querySelector('#active_time').style.color = 'white';

		document.querySelectorAll('.bubble').forEach((bub) => bub.addEventListener('click', this.handleSelection));

		this.setState({ active_industry: document.querySelector('#active_industry') });
		this.setState({ active_time: document.querySelector('#active_time') });
	}

	handleSelection = (e) => {
		if (e.target.className.includes('time')) {
			e.target.style.background = '#353A50';
			e.target.style.color = 'white';

			this.state.active_time.style.background = 'rgb(225, 225, 225)';
			this.state.active_time.style.color = 'black';
			this.state.active_time.id = '';

			e.target.id = 'active_time';
			this.setState({ active_time: document.querySelector('#active_time') });
			this.props.updateResults({ time_selection: this.state.active_time.innerHTML });
		} else {
			e.target.style.background = '#353A50';
			e.target.style.color = 'white';

			this.state.active_industry.style.background = 'rgb(225, 225, 225)';
			this.state.active_industry.style.color = 'black';
			this.state.active_industry.id = '';

			e.target.id = 'active_industry';
			this.setState({ active_industry: document.querySelector('#active_industry') });
			this.props.updateResults({ industry_selection: this.state.active_industry.innerHTML });
		}
	};

	render() {
		return (
			<Container id="selection_container">
				<SelectionWrapper>
					<SelectionSet>
						<SelectionTitle>Search by Industry:</SelectionTitle>
						<Bubble id="active_industry" className="bubble industry">
							All
						</Bubble>
						{this.state.industries.map((indi) => <Bubble className="bubble industry">{indi}</Bubble>)}
					</SelectionSet>

					<SelectionSet>
						<SelectionTitle>Sort by Time:</SelectionTitle>
						<Bubble id="active_time" className="bubble time">
							All
						</Bubble>
						{this.state.times.map((indi) => <Bubble className="bubble time">{indi}</Bubble>)}
					</SelectionSet>
				</SelectionWrapper>

				<DateContainer>
					<Clock />
				</DateContainer>
			</Container>
		);
	}
}
