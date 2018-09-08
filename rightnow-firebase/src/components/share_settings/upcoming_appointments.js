import glamorous from 'glamorous';

export const Appointment = glamorous.div({

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
	textAlign: 'center'
});

export const AppointmentList = glamorous.div({
	display: 'flex',
	// flexShrink: "0"
	flexDirection: 'row',
	justifyContent: 'space-between'
});

export const Upcoming = glamorous.h3({
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'center',
	margin: 'auto'
});




