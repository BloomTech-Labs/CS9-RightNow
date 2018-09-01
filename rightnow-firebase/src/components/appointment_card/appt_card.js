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

		// info regarding appointments
		// console.log(this.props.businessInfo)
		const { business_ref, cost, description, service, time } = this.props.businessInfo.appointment;

		// info regarding business itself
		console.log(this.props.businessInfo)
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
		} = this.props.businessInfo.business_details;

		// renaming deconstructed const
		const businessName = name;
		const businessImage = photos[0]; // take the first photo
		const streetAddress = `${street_number} ${street_name}`;
		const cityStateZip = `${city} ${state} ${zip}`;

		// <BusinessName> info about the place
		// <AvaiableAppts> info about the appointment
		return (
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
								<Appointment
									onClick={() =>
										value.updateState({
											// theo_appt_details: { type: service, time: time, cost: cost },
											displayConfirm: true
										})}
								>
									<Type>{service}</Type>
									<Time>{time}</Time>
									<Cost>{cost}</Cost>
								</Appointment>

								{/* BACK UP
								{Object.keys(appointments).map((key, index) => (
									<Appointment
										key={index}
										onClick={() =>
											value.updateState({
												theo_appt_details: appointments[key],
												displayConfirm: true
											})}
									>
										<Type>{service}</Type>
										<Time>{appointments[key].time}</Time>
										<Cost>{appointments[key].cost}</Cost>
									</Appointment>
								))} */}
							</AvailableAppts>
						</Container>
					);
				}}
			</UserContext.Consumer>
		);
	}
}
