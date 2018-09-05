import React, { Component } from 'react';
import {
	Container,
	BusinessImage,
	BusinessInfo,
	AvailableAppts,
	BusinessName,
	Address,
	Appointment,
	Type,
	Time,
	Cost
} from './appt_card_styles';
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
		this.state = {};
	}

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

								<AvailableAppts>
									{appointments.slice(0, 3).map((appt, index) => (
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
							</Container>
						);
					}}
				</UserContext.Consumer>
			</div>
		);
	}
}
