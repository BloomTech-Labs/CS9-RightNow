import glamorous from 'glamorous';

export const Container = glamorous.div({
	// background: 'rgb(225, 225, 225)',
	background: '#fcfcfc',
	border: '1px solid #353A50',
	borderRadius: '5px',
	width: '100%',
	// minHeight: '100%',
	height: '100%'
});

export const BusinessImage = glamorous.img({
	boxSizing: 'border-box',
	width: '100%',
	height: '20vh',
	border: 'transparent',
	borderRadius: '5px 5px 0 0'
});

export const BusinessInfo = glamorous.div({
	// fontFamily: 'Quicksand, sans-serif',
	fontFamily: 'Raleway, sans-serif',
	fontWeight: 400,
	display: 'grid',
	grid: '30% 30% 30% / 100%',
	justifyItems: 'center',
	marginTop: '2%'
});

export const BusinessName = glamorous.div({
	// fontFamily: 'Quicksand, sans-serif',
	// marginTop: '2%',
	marginBottom: '3%',
	fontFamily: 'Raleway, sans-serif',
	fontWeight: 400,
	textAlign: 'center',
	fontSize: '1.3em'
	// fontWeight: 600
});

export const Address = glamorous.div({
	marginTop: '2%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '1em',
	fontWeight: 500
});

export const AvailableAppts = glamorous.div({
	boxSizing: 'border-box',
	maxHeight: '100%',
	marginTop: '2%',
	padding: '0 3%',
	paddingTop: '3%'
});

export const Appointment = glamorous.div({
	// fontFamily: 'Quicksand, sans-serif',
	boxSizing: 'border-box',
	fontFamily: 'Raleway, sans-serif',
	fontWeight: 400,

	display: 'grid',
	gridTemplateColumns: '33% 34% 33%',
	border: '1px solid #b8bcd1',
	borderRadius: '5px',
	margin: '0 0 3%',
	padding: '3%',

	':hover': {
		border: '1px solid #353A50',
		fontWeight: 600,
		cursor: 'pointer'
	},
	'::active': {
		background: '#ada3a2',
		color: '#ada3a2',
		fontSize: '0.9rem'
	}
});

export const MoreAppointments = glamorous.div({
	boxSizing: 'border-box',
	fontFamily: 'Raleway, sans-serif',
	fontWeight: 400,

	display: 'grid',
	gridTemplateColumns: '33% 34% 33%',
	border: '1px solid #b8bcd1',
	borderRadius: '5px',
	margin: '0 0 3%',
	padding: '3%',

	':hover': {
		border: '1px solid #353A50',
		fontWeight: 600,
		cursor: 'pointer'
	},
	'::active': {
		background: '#ada3a2',
		color: '#ada3a2',
		fontSize: '0.9rem'
	}
});

export const Type = glamorous.div({
	textAlign: 'start'
});

export const Time = glamorous.div({
	textAlign: 'center'
});

export const Cost = glamorous.div({
	textAlign: 'end'
});
