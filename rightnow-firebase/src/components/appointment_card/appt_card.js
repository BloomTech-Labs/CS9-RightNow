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
		// this will break the dummy

		// businessInfo[1] will call up the appointment list
		const appointments = this.props.businessInfo[1];

		// businessInfo[2] will call up the business info
		const {
			city,
			fullAddress,
			name,
			phone,
			photos,
			rating,
			state,
			street_name,
			street_number,
			zip
		} = this.props.businessInfo[2];
		// renaming deconstruction
		const businessImage = photos[0];
		const businessName = name;
		const streetAddress = `${street_number} ${street_name}`
		const cityStateZip = `${city} ${state} ${zip}`

		console.log('this.props.businessInfo', this.props.businessInfo);

		// <BusinessName> info about the place
		// <AvaiableAppts> info about the appointment
		return (
			<div>
				<UserContext.Consumer>
					{(value) => {
						return (
							<Container>
								<BusinessImage src={businessImage} />

								<BusinessInfo>
									<BusinessName>{businessName}</BusinessName>
									<StarRatings
										rating={rating}
										numberOfStars={5}
										starRatedColor="gold"
										starEmptyColor="grey"
										starDimension="35px"
									/>
									<Address>
										<div>{streetAddress}</div>
										<div>{cityStateZip}</div>
									</Address>
								</BusinessInfo>

								<AvailableAppts>
									{appointments.map((appt, index) => (
										<Appointment
											key={index}
											onClick={() =>
												value.updateState({
													theo_appt_details: appt,
													displayConfirm: true
												})}
										>
											<Type>{appt.service}</Type>
											<Time>{appt.time}</Time>
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
