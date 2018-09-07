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
	justifyContent:'space-between'

});


const Upcoming = glamorous.h3({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'center',
	margin: 'auto'
});

const UpcomingAppointment = (props) => {
	// console.log('props', props);
	console.log('appts from upcoming:', props.userState);

	return (
		<Appointment>
			<Upcoming>Upcoming Appointments</Upcoming>
			<hr />
			<AppointmentList>

                    {/*<AppointmentDetails service={"Hair Cut"} time={"12:00 PM"} day={"9-20-2018"} company={"ProCuts"} money={"45.00"}/>*/}

                    {/*<AppointmentDetails service={"Hair Cut"} time={"12:00 PM"} day={"9-20-2018"} company={"ProCuts"} money={"45.00"}/>*/}
                    {/*<AppointmentDetails service={"Hair Cut"} time={"12:00 PM"} day={"9-20-2018"} company={"ProCuts"} money={"45.00"}/>*/}
				{props.userState.map((appt) =>{
					return (
					<AppointmentDetails service={appt['service']} time={appt['start']} day={appt['start']} company={appt['business_ref']} money={appt['cost']}/>
					)
				})}

			</AppointmentList>
		</Appointment>
	);
};

export default UpcomingAppointment;
