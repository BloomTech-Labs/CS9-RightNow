import React, { Component } from 'react';
import {doCreateUserWithEmailAndPassword} from '../../firebase/auth';
import {
	FormContainer,
	Form,
	Email,
	PW,
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
		this.state = {
			email: '',
			password: ''
		};
	}

    onInputChange = (e) => {

        this.setState({[e.target.name]: e.target.value});
    };

    createrUser = () => {

		const {email, password} = this.state;
    	doCreateUserWithEmailAndPassword(email, password);
    };
	render() {
		return (
			<FormContainer>
				<Form>
					<NameContainer>
						<div>
							<NamePlace type="text" placeholder="First Name" />
						</div>
						<div>
							<NamePlace2 type="text" placeholder="Last Name" />
						</div>
					</NameContainer>
					<Email type="text" placeholder="Your Email Address" name="email" onChange={this.onInputChange}/>
					<PW type="password" placeholder="Password" name="password" onChange={this.onInputChange}/>
					<PhoneNumber name="phoneNum" onBlur="addDashes(this)" type="text" placeholder="Phone number" />
					<Location type="text" placeholder="Preferred location" />
				</Form>

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
				<RegisterButton onClick={this.createrUser}>Let's Go!</RegisterButton>
			</FormContainer>
		);
	}
}
