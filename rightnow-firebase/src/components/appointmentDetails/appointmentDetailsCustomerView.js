import React, { Component } from 'react';
import './appointmentDetailsStyles.css';
import glamorous from 'glamorous';
import axios from 'axios';
import moment from 'moment';

const Container = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '37%',
	color: '#EBEBEB',
	background: '#353A50',
	border: '1px solid #353A50',
	borderRadius: '5px'
});

const Header = glamorous.div({
	display: 'flex',
	justifyContent: 'space-between',
	alignContent: 'center',
	padding: '1%'
});

const Title = glamorous.div({
	fontFamily: 'Raleway, sans-serif',
	fontSize: '1.3em',
	fontWeight: 600,
	color: '#EBEBEB',
	padding: '2%'
});

const TrashCan = glamorous.div({
	height: '100%',
	width: '10%',
	marginRight: '3%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	':hover': {
		cursor: 'pointer'
	}
});

const Content = glamorous.div({
	height: '100%',
	padding: '0 3%',
	backgroundColor: '#EBEBEB',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around'
});

const Detail = glamorous.div({ color: '#353A50' });

class AppointmentDetails extends Component {
	onDeleteClick = () => {
		axios
			.delete(
				`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/appointment/${this.props.busnContext
					.selected_appointment.id}`
			)
			.then((res) => console.log(res, 'success'))
			.then(() => this.props.busnContext.updateState({ selected_appointment: null }))
			.catch((err) => err);
	};

	render() {
		if (this.props.busnContext.selected_appointment) {
			const {
				start,
				end,
				service,
				cost,
				description,
				customer_ref,
				is_available
			} = this.props.busnContext.selected_appointment;

			return (
				<Container>
					<Header>
						<Title>Sesh Details</Title>
						<TrashCan onClick={() => this.onDeleteClick()}>
							<i className="far delete fa-trash-alt" />
						</TrashCan>
					</Header>

					<Content>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<i style={{ marginRight: '2%', color: '#353A50' }} className="fas fa-briefcase" />
							<Detail>{service}</Detail>
						</div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<i style={{ marginRight: '2%', color: '#353A50' }} className="far icon fa-clock" />
							<Detail>{`${moment(start).format('LLL')} - ${moment(end).format('h:mm A')}`}</Detail>
						</div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<i
								style={{ marginRight: '2%', color: '#353A50' }}
								className={is_available ? 'fas fa-user-times' : 'fas icon fa-user-check'}
							/>
							<Detail>
								{!is_available && customer_ref ? customer_ref : 'this appointment is still available'}
							</Detail>{' '}
							{/* user-times */}
						</div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<i style={{ marginRight: '2%', color: '#353A50' }} className="far icon fa-money-bill-alt" />
							<Detail>{cost}</Detail>
						</div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<i style={{ marginRight: '2%', color: '#353A50' }} className="far fa-sticky-note" />
							<Detail>{description}</Detail>
						</div>
					</Content>
				</Container>
			);
		} else return <div />;
	}
}

export default AppointmentDetails;
