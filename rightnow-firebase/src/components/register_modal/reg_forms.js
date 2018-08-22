import React, { Component } from 'react';
import {
	FormContainer,
	Email,
	NameContainer,
	NamePlace,
	NamePlace2,
	PhoneNumber,
	Location,
	CheckBoxWrapper,
	CheckBoxContainer,
	CheckBox,
	RegisterButton
} from './reg_forms_styles';

export default class RegisterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<FormContainer>
				<Email type="text" placeholder="Your Email Address" />
				<NameContainer>
					<div>
						<NamePlace type="text" placeholder="First Name" />
					</div>
					<div>
						<NamePlace2 type="text" placeholder="Last Name" />
					</div>
				</NameContainer>
				<PhoneNumber type="text" placeholder="Phone number" />
				<Location type="text" placeholder="Preferred location" />

				<CheckBoxWrapper>
					<legend style={{ padding: '0 1%' }}>Contact me by</legend>
					<CheckBoxContainer>
						<CheckBox>
							<div className="pretty p-default">
								<input type="checkbox" />
								<div className="state p-primary">
									<label>Email</label>
								</div>
							</div>
						</CheckBox>

						<CheckBox>
							<div className="pretty p-default">
								<input type="checkbox" />
								<div className="state p-warning">
									<label>Text</label>
								</div>
							</div>
						</CheckBox>
					</CheckBoxContainer>
				</CheckBoxWrapper>
				<RegisterButton>Let's Go!</RegisterButton>
			</FormContainer>
		);
	}
}
