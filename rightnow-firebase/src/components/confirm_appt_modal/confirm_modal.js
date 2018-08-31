import React, { Component } from 'react';

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
	FinePrint,
	ButtonContainer,
	Button,
	CloseX
} from './confirm_modal_styles';

import { UserContext } from '../../context/userContext';

export default class ConfirmModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.style.overflowY = 'hidden';
	}

	componentWillUnmount() {
		document.body.style.overflowY = 'scroll';
	}

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
									<Agreement>
										<div className="pretty p-default p-curve">
											<input type="checkbox" />
											<div className="state p-danger">
												<label>
													<FinePrint>
														I acknowledge that by confirming this session, I am solely
														responsible for <br />any disputes regarding the cost, time and
														type of service I am receiveing.
													</FinePrint>
												</label>
											</div>
										</div>
									</Agreement>
									<ButtonContainer>
										<Button>Got it!</Button>
										<Button onClick={() => value.updateState({ displayConfirm: false })}>
											Go back
										</Button>
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
