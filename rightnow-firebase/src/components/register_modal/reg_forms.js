import React, { Component } from 'react';
import {
	FormContainer,
	Email,
	NameContainer,
	NamePlace,
	PhoneNumber,
	Location,
	UpdateRadios,
	RegisterButton
} from './reg_forms_styles';

export default class RegisterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			// <div>
				<FormContainer>
					<Email type="text" placeholder="Your Email Address" />
					<NameContainer>
						<div>
							<NamePlace type="text" placeholder="First Name" />
						</div>
						<div>
							<NamePlace type="text" placeholder="Last Name" />
						</div>
					</NameContainer>
					<PhoneNumber>Area code 3 digit 4 digit</PhoneNumber>
					<Location>Preferred location</Location>
					<UpdateRadios>Email text</UpdateRadios>
					<RegisterButton />
				</FormContainer>
			// </div>
		);
	}
}
