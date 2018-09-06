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
import moment from "moment";

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
			displayViewMore: false
		};
	}

	openViewMore = () => {
		this.setState({ displayViewMore: true });
		document.body.style.overflowY = 'hidden';
		document.querySelector('#primary_input').style.zIndex = 0;
	};

	closeViewMore = () => {
		this.setState({ displayViewMore: false });
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
										rating={rating}
										numberOfStars={5}
										starRatedColor="gold"
										starEmptyColor="grey"
										starDimension="35px"
									/>
									<Address>
										<div>{`${street_number} ${street_name}`}</div>
										<div>{`${city}, ${state} ${zip}`}</div>
									</Address>
								</BusinessInfo>

<<<<<<< HEAD
								{appointments !== null ? (
									<div
										data-simplebar
										id="apptScroll"
										style={{
											maxHeight: '21.5vh'
										}}
									>
										<AvailableAppts>
											{/* {console.log('appointments', appointments)} */}
											{appointments.slice(0, 3).map((appt, index) => (
												<Appointment
													key={index}
													onClick={() => value.initializeAppointment(appt)}
												>
													<Type>{appt.service}</Type>
													<Time>{`${moment(appt.start).format('h:mm')} - ${moment(
														appt.end
													).format('h:mm')}`}</Time>
													<Cost>{appt.cost}</Cost>
												</Appointment>
											))}
											<MoreAppointments onClick={() => this.openViewMore()}>
												View More
											</MoreAppointments>
										</AvailableAppts>
									</div>
								) : null}
								{this.state.displayViewMore ? (
									<ViewMoreModal
										appointments={appointments}
										closeViewMore={() => this.closeViewMore()}
									/>
								) : null}
=======
								<AvailableAppts>
									{appointments.map((appt, index) => (
										<Appointment
											key={index}
											onClick={() => value.initializeAppointment(appt)}
										>
											<Type>{appt.service}</Type>
											<Time>{`${moment(appt.start).format("h:mm")} - ${moment(appt.end).format("h:mm")}`}</Time>
											<Cost>{appt.cost}</Cost>
										</Appointment>
									))}
								</AvailableAppts>
>>>>>>> a390b41619e8840daf27fb8c2ba7e54ce4f2f778
							</Container>
						);
					}}
				</UserContext.Consumer>
			</div>
		);
	}
}
