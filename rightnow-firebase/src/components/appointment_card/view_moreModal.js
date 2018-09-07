import React, { Component } from 'react';
import moment from 'moment';
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
	Button
} from './view_moreModal_styles';
import glamorous from "glamorous";

import { UserContext } from '../../context/userContext';


const Darkness = glamorous.div({
  height: "100vh",
  width: "100vw",
  position: "fixed",
  background: "rgba(0, 0, 0, 0.65)",
  zIndex: 5,
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Modal = glamorous.div({
  height: "30vh",
  width: "30vw",
  zIndex: 6,
	borderRadius: "5px",
	border: "1px solid #EBEBEB",
  background: "#EBEBEB",
  display: "flex",
  flexDirection: "column",

  "@media(max-width: 1550px)": {
    height: "40vh",
    width: "40vw"
  }
});

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

	render() {
    console.log('appointments in View More', this.props.appointments)
    console.log('Close function in View More', this.props.closeViewMore)
		return (
			<UserContext.Consumer>
				{(value) => (
					<Darkness>
						<Modal>
							<ElementConainer>
								<div>Something is working here :)</div>

								{/* <Greeting>{value.name}</Greeting>
								<YourSesh>Avaialbe Seshos:</YourSesh>
								<DetailContainer>
									<Activity>
										<Spanner>{value.init_appointment.service}</Spanner> at{' '}
										<Spanner>Chatters Hair Salon</Spanner>
									</Activity>
									<Location>
										on <Spanner>{value.init_appointment.business_details.business_information.fullAddress}</Spanner>{' '}
										<Icon src="https://seeklogo.com/images/G/google-maps-2014-logo-6108508C7B-seeklogo.com.png" />
									</Location>
									<Time>
										at <Spanner>{`${moment(value.init_appointment.start).format("h:mm")}`}</Spanner>
									</Time>
									<Cost>
										Estimated cost: <Spanner>{value.init_appointment.cost}</Spanner>
									</Cost>
									<Agreement>
										<div className="pretty p-default p-curve">
											<input type="checkbox" onClick={e => value.updateState({ confirm: e.target.checked })} />
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
										<Button onClick={() => value.confirmAppointment()}>Got it!</Button>
										<Button onClick={() => value.updateState({ displayConfirm: false })}>
											Go back
										</Button>
									</ButtonContainer>
								</DetailContainer> */}
							</ElementConainer>
						</Modal>
					</Darkness>
				)}
			</UserContext.Consumer>
		);
	}
}
