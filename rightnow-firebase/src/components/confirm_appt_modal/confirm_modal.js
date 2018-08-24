import React, { Component } from 'react';
// import GoogleLogIn from '../../firebase/auth.google.services';
// import FacebookLogIn from '../../firebase/auth.facebook.services';

import {
	Container,
	ModalWrapper,
	ElementConainer,
	DetailContainer,
	Greeting,
	YourSesh,
	Activity,
	Spanner,
	Location,
	Icon,
	Time,
	Cost,
	Agreement,
	ButtonContainer,
	Button,
	CloseX
} from './confirm_modal_styles';

import { UserContext } from '../../context/userContext';

export default class ConfirmModal extends Component {
	constructor(props, UserContext) {
		super(props, UserContext);
		this.state = {};
	}

	componentDidMount() {
		document.body.style.overflowY = 'hidden';
		// console.log(UserContext)
	}

	componentWillUnmount() {
		document.body.style.overflowY = 'scroll';
	}

	confirmAppt = (value) => {
		console.log(UserContext.Provider)
		// let newtask = {
		// 	type: value.data.theo_appt_details.type,
		// 	time: value.data.theo_appt_details.time,
		// 	cost: value.data.theo_appt_details.cost
		// };
		value.updateState((value) => ({
			// appointments: [ ...value.data.appointments, newtask ]
		})); 
		value.updateState({ displayConfirm: false });
	};

	// use FieldSet
	render() {
		return (
			<UserContext.Consumer>
				{(value) => (
					<Container>
						<ModalWrapper>
							<ElementConainer>
								<Greeting>Hey John!</Greeting>
								<YourSesh>Your Sesh-o is:</YourSesh>
								<DetailContainer>
									<Activity>
										<Spanner>{value.data.theo_appt_details.type}</Spanner> at{' '}
										<Spanner>Chatters Hair Salon</Spanner>
									</Activity>
									<Location>
										on <Spanner>624 109 St NW, Edmonton, AB</Spanner>{' '}
										<Icon src="https://seeklogo.com/images/G/google-maps-2014-logo-6108508C7B-seeklogo.com.png" />
									</Location>
									<Time>
										at <Spanner>{value.data.theo_appt_details.time}</Spanner>
									</Time>
									<Cost>
										Estimated cost: <Spanner>{value.data.theo_appt_details.cost}</Spanner>
									</Cost>
									<Agreement>Agreement box</Agreement>
									<ButtonContainer>
										<Button onClick={() => this.props.closeModal()}>Got it!</Button>
										<Button onClick={() => this.props.closeModal()}>Go back</Button>
									</ButtonContainer>
								</DetailContainer>
								{/* <CloseX onClick={() => this.props.closeModal()}>x</CloseX> */}
							</ElementConainer>
						</ModalWrapper>
					</Container>
				)}
			</UserContext.Consumer>
		);
	}
}
