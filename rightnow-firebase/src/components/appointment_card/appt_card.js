import React, { Component } from 'react';
import {
	Container,
	BusinessImage,
	BusinessInfo,
	AvailableAppts,
	BusinessName,
	Address,
	Appointment,
	MoreAppointments,
	Type,
	Time,
	Cost
} from './appt_card_styles';

import ViewMoreModal from './view_moreModal';

import StarRatings from 'react-star-ratings';
import { UserContext } from '../../context/userContext';
import moment from 'moment';

// import 'simplebar';
// import 'simplebar/dist/simplebar.css';

/*
INFORMATION REQUIRED FOR THIS COMPONENT:
  * Business image
  * Business name
  * Business rating
  * Business address
  * Available appointments
*/

export default class AppointmentCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view_more: false,
			display_more_appts: false
		};
	}

	componentDidMount() {
		if (this.props.appointments.length > 3) this.setState({ view_more: true });
	}
	
	openViewMore = () => {
		this.setState({ display_more_appts: true });
		document.body.style.overflowY = 'hidden';
		document.querySelector('#primary_input').style.zIndex = 0;
	};

	closeViewMore = () => {
		this.setState({ display_more_appts: false });
		document.body.style.overflowY = 'scroll';
		document.querySelector('#primary_input').style.zIndex = 1;
	};

	render() {
		const { appointments, businessDetails } = this.props;

		const { name, street_number, street_name, city, state, zip, rating, photos, phone } = businessDetails;
				
		return (
			<div>
				<UserContext.Consumer>
					{(value) => {
						return (
							<Container>
								<BusinessImage src={photos[0]} />

								<BusinessInfo>
									<BusinessName>{name}</BusinessName>
									<StarRatings
										rating={rating || 0}
										numberOfStars={5}
										starRatedColor="red"
										starEmptyColor="grey"
										starDimension="19px"
									/>
									<Address>
										<div style={{ fontSize: '1.3em', fontWeight: 500 }}>{`${city}`}</div>
										<div>{`${state}, ${zip}`}</div>
										<div>{`${street_number} ${street_name}`}</div>
									</Address>
								</BusinessInfo>

								{appointments !== null ? (
										<AvailableAppts>
											{appointments.slice(0, 3).map((appt, index) => (
												<Appointment key={index} onClick={() => value.initializeAppointment(appt)} >
													<Type>{appt.service}</Type>
													<Time>{`${moment(appt.start).format('h:mm')} - ${moment(appt.end).format('h:mm')}`}</Time>
													<Cost>{appt.cost}</Cost>
												</Appointment>
											))}
											{this.state.view_more ? (
												<MoreAppointments onClick={() => this.openViewMore()}>View More</MoreAppointments>
											) : null}
										</AvailableAppts>
								) : null}

								{this.state.display_more_appts ? (
									<ViewMoreModal appointments={appointments} closeViewMore={() => this.closeViewMore()} />
								) : null}

							</Container>
						);
					}}
				</UserContext.Consumer>
			</div>
		);
	}
}
