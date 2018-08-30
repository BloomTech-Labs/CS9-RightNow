import React, { Component } from 'react';
import {
	Container,
	BusinessImage,
	BusinessInfo,
	AvailableAppts,
	BusinessName,
	Address,
	displayConfirm,
	Appointment,
	Type,
	Time,
	Cost
} from './appt_card_styles';
import StarRatings from 'react-star-ratings';
import { UserContext } from '../../context/userContext';

import ConfirmModal from '../confirm_appt_modal/confirm_modal';

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

	// componentDidMount() {
	// 	console.log("\n\nthis.props", this.props)
	// }

	render() {
		console.log("\n\nappointment details", this.props);

		return (
			<Container>
				{/* <BusinessImage src={businessImage} />

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
						</AvailableAppts> */}
			</Container>
		);
	}
}
