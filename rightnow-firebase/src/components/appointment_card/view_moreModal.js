import React, { Component } from 'react';
import moment from 'moment';
import glamorous from 'glamorous';

// may have to use its own styling sheet later
import { AvailableAppts, Appointment, MoreAppointments, Type, Time, Cost } from './appt_card_styles';

import { UserContext } from '../../context/userContext';

const Darkness = glamorous.div({
	height: '100vh',
	width: '100vw',
	position: 'fixed',
	background: 'rgba(0, 0, 0, 0.65)',
	zIndex: 1,
	top: 0,
	left: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});

const Modal = glamorous.div({
	position: 'relative',
	height: '30vh',
	width: '30vw',
	zIndex: 2,
	borderRadius: '5px',
	border: '1px solid #EBEBEB',
	background: '#EBEBEB',
	display: 'flex',
	flexDirection: 'column',

	'@media(max-width: 1550px)': {
		height: '55vh',
		width: '30vw'
	}
});

export const ButtonContainer = glamorous.div({
	padding: '0 3%',
	width: '100%'
});

export const Button = glamorous.div({
	fontFamily: 'Quicksand, sans-serif',
	// fontWeight: 600,
	// fontSize: '1.2em',

	display: 'flex',
	width: '50%',
	padding: '2% 0',
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	marginTop: '3%',
	fontSize: '1em',
	fontWeight: 600,
	border: '1px solid lightgray',
	borderRadius: '5px',
	transition: 'background .25s, border .25s',
	':hover': { backgroundColor: 'rgba(225, 225, 225, 0.6)', cursor: 'pointer' }
});

export default class ConfirmModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.style.overflowY = 'hidden';
	}

	componentWillUnmount() {
		document.body.style.overflowY = 'scroll';
	}

	render() {
		console.log('appointments in View More', this.props.appointments);
		console.log('Close function in View More', this.props.closeViewMore);
		return (
			<UserContext.Consumer>
				{(value) => (
					<Darkness>
						<Modal>
							<div>Currently avaialbe Seshos:</div>
							<div>
								{this.props.appointments !== null ? (
									<AvailableAppts>
										{this.props.appointments.map((appt, index) => (
											<Appointment key={index} onClick={() => value.initializeAppointment(appt)}>
												<Type>{appt.service}</Type>
												<Time>{`${moment(appt.start).format('h:mm')} - ${moment(
													appt.end
												).format('h:mm')}`}</Time>
												<Cost>{appt.cost}</Cost>
											</Appointment>
										))}
									</AvailableAppts>
								) : null}
								<ButtonContainer>
									<Button onClick={() => this.props.closeViewMore()}>Go back</Button>
								</ButtonContainer>
							</div>
						</Modal>
					</Darkness>
				)}
			</UserContext.Consumer>
		);
	}
}
