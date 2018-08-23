import React, { Component } from 'react';
// import GoogleLogIn from '../../firebase/auth.google.services';
// import FacebookLogIn from '../../firebase/auth.facebook.services';

import {
	Container,
	ModalWrapper,
	Greeting,
	YourSesh,
	Activity,
	BusinessName,
	Location,
	Time,
	Cost,
  Agreement,
  ButtonContainer,
  Button,
	CloseX
} from './confirm_modal_styles';

export default class ConfirmModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	engageForms = () => {
		this.setState({ showRegMethods: false, showForms: true });
	};

	// componentDidMount() {
	// 	console.log('GrandChild did mount.');
	// }

	render() {
		return (
			<Container>
				<ModalWrapper>
					<Greeting>Hey 'name',</Greeting>
					<YourSesh>Your Sesh is:</YourSesh>
					<Activity>Type of activity</Activity>
					<BusinessName>at 'Business Name'</BusinessName>
					<Location>on 'Location' using Google API</Location>
					<Time>At 'Time'</Time>
					<Cost>Estimated cost: $'cost'</Cost>
					<Agreement>Agreement box</Agreement>
					<ButtonContainer>
						<Greeting>Got it!</Greeting>
						<Greeting>Let's change something</Greeting>
					</ButtonContainer>

					<CloseX onClick={() => this.props.closeModal()}>x</CloseX>
				</ModalWrapper>
			</Container>
		);
	}
}
