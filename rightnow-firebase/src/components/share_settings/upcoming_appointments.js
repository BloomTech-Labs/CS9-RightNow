import React from 'react';
import glamorous from 'glamorous';
import AppointmentDetails from './appointmentDetails/appointmentDetailsCustomerView';

const Appointment = glamorous.div({
	// width: '50%',
	// border: '1px solid blue',
	// boxSizing: 'border-box',
	// position: 'absolute',
	// margin: 'auto'
	padding: '40px',
	margin: '7%',
	border: '3px solid white',
	color: 'black',
	backgroundColor: '#fff',
	boxShadow: '0 10px 6px -6px #777',
	borderRadius: '5px',
	textAlign: 'center',

});

const AppointmentList = glamorous.div({
	display: 'flex',
	// flexShrink: "0"
	flexDirection: 'row',
	justifyContent: 'space-between'

});


const Upcoming = glamorous.h3({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'center',
	margin: 'auto'
});

class UpcomingAppointment extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			appts: []
		};
	}

	// componentDidMount() {
	// 	if (this.props.userState.length > 0) {
	//
	// 		this.setState({appts: this.props.userState});
	// 	}
	// }


	// console.log('props', props);
	render() {


		const list = this.props.userState;
		return (
			<Appointment>
				<Upcoming>Upcoming Appointments</Upcoming>
				<hr/>
				<AppointmentList>



					{/*<AppointmentDetails service={'test'} time={"12:00 PM"} day={"9-20-2018"} company={"ProCuts"} money={"45.00"}/>*/}
					{list.map((appointment) => {
					return (<div>

					</div>)
					})}


					</AppointmentList>
			</Appointment>
		);
	}
}

export default UpcomingAppointment;
