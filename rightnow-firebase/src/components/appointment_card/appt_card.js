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

		const { businessImage, businessName, rating, streetAddress, cityStateZip, appointments } = this.props.businessInfo;

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


				<UserContext.Consumer>
					{value => {
						return (
							<AvailableAppts>
								{Object.keys(appointments).map((key, index) => (
									<Appointment
										key={index}
										onClick={() =>
											value.updateState({
												theo_appt_details: appointments[key],
												displayConfirm: true
											})}
									>
										<Type>{appointments[key].type}</Type>
										<Time>{appointments[key].time}</Time>
										<Cost>{appointments[key].cost}</Cost>
								</Appointment>
							))}
						</AvailableAppts>
						)
					}}
				</UserContext.Consumer>
						
			</Container>
		);
	}
}
