import React, { Component } from 'react';
import { FormContainer, Email, Name, PhoneNumber, Location, UpdateRadios, RegisterButton } from './reg_forms_styles';

export default class RegisterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<FormContainer>
					<Email>Email Address</Email>
					<Name>FirstName LastName</Name>
					<PhoneNumber>Area code 3 digit 4 digit</PhoneNumber>
					<Location>Preferred location</Location>
					<UpdateRadios>Email text</UpdateRadios>
					<RegisterButton />
				</FormContainer>
			</div>
		);
	}
}
