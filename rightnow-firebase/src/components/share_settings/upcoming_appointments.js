import glamorous from 'glamorous';
<<<<<<< HEAD

export const Appointment = glamorous.div({
=======
import AppointmentDetails from './appointmentDetails/appointmentDetailsCustomerView';
import moment from "moment"
const Appointment = glamorous.div({
>>>>>>> 9631ead13ee0d344ea95c1231d4d78865abb8a54
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
	//boxShadow: '0 10px 6px -6px #777',
	borderRadius: '5px',
	textAlign: 'center',

});

export const AppointmentList = glamorous.div({
    display: 'flex',
    // flexShrink: "0"
	flexDirection: 'row',
	justifyContent:'space-between'

});


export const Upcoming = glamorous.h3({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'center',
	margin: 'auto'
<<<<<<< HEAD
});
=======
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
					<AppointmentDetails service={appt['service']}
															time={`${moment(appt['start']).format('h:mm A')} - ${moment(appt['end']).format('h:mm A')}`}
															day={`${moment(appt['start']).format('MMM D YYYY')}`}
															company={appt['business_ref']}
															money={appt['cost']}/>
					)
				})}

			</AppointmentList>
		</Appointment>
	);
};

export default UpcomingAppointment;
>>>>>>> 9631ead13ee0d344ea95c1231d4d78865abb8a54
