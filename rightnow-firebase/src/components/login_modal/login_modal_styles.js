import glamorous from 'glamorous';

export const Container = glamorous.div({
	width: '100vw',
	height: '100vh',
	position: 'absolute',
	zIndex: 1,
	background: 'rgba(0, 0, 0, 0.5)',
	overflow: 'hidden'
});

export const ModalWrapper = glamorous.div({
	fontFamily: 'Quicksand, sans-serif',
	filter: 0,
	padding: '0 15%',
	paddingTop: '30vh',
	zIndex: 2,
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	opacity: '0.95'
});

export const ModalLeft = glamorous.div({
	fontFamily: 'Quicksand, sans-serif',
	writingMode: 'vertical-lr',
	color: 'yellow',
	// background: '#494755',
	background: '#ef5651',
	width: '.6%',
	zIndex: 2
});

export const ModalRight = glamorous.div({
	color: 'white',
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	width: '31%',
	padding: '2%',
	zIndex: 2

	// '@media(min-width: 1024px)': {
	//   width: "615px",
	// },

	// "@media(max-width: 1024px)": {
	//   width: "50%",
	// },

	// "@media(max-width: 793px)": {
	//   width: "65%"
	// },

	// "@media(max-width: 350px)": {
	//   width: "90%"
	// }
});

export const Header = glamorous.div({
	fontSize: '1em',
	marginBottom: '3%',

	'@media(min-width: 1024px)': {
		fontSize: '2.5em'
	},

	'@media(max-width: 1024px)': {
		fontSize: '2em'
	},

	'@media(max-width: 550px)': {
		fontSize: '1.8em'
	}
});

export const NormalSignIn = glamorous.div({
	borderTop: '0.5px solid #605e70',
	padding: '4% 0',
	display: 'flex',
	flexDirection: 'column',

	'@media(min-width: 1024px)': {
		marginBottom: 0
	},

	'@media(max-width: 550px)': {
		margin: '3% 0',
		padding: '7% 0'
	}
});

export const Input = glamorous.input({
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	color: 'white',
	padding: '1% 0.7%',
	marginBottom: '2%',
	// fontSize: '1em',
	height: '3vh',
	border: 0,
	borderBottom: '1px solid #ada3a2',
	// borderRadius: '5px',
	':focus': { borderBottom: '1px solid white' },
	'::placeholder': {
		color: '#ada3a2',
		fontSize: '0.9rem'
	},
	'::active': {
		color: '#ada3a2',
		fontSize: '0.9rem'
	},

	'@media(min-width: 1024px)': {
		fontSize: '1.3em'
	},

	'@media(max-width: 1024px)': {
		fontSize: '1.1em'
	},

	'@media(max-width: 793px)': {
		marginBottom: '3%'
	},

	'@media(max-width: 550px)': {
		marginBlockEnd: '6%',
		padding: '2% 3%'
	}
});

export const LoginButton = glamorous.div({
	border: '1px solid #26c1a2',
	display: 'flex',
	width: '100%',
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	color: 'white',
	fontSize: '1em',
	fontWeight: 500,
	padding: '2% 0',
	background: '#26c1a2',
	marginBottom: '5%',
	borderRadius: '5px',
	':hover': { border: '1px solid #2cd3b2', backgroundColor: '#2cd3b2', cursor: 'pointer' },

	'@media(min-width: 1024px)': {
		fontSize: '1.3em'
	},

	'@media(max-width: 1024px)': {
		fontSize: '1.1em'
	}
});

export const Or = glamorous.div({
	width: '100%',
	textAlign: 'center',
	borderBottom: '0.5px solid #605e70',
	lineHeight: '0.1em',
	// padding: '2% 0',

	'@media(min-width: 1024px)': {
		fontSize: '1.1em',
		fontWeight: 600
	},

	'@media(max-width: 1024px)': {
		fontSize: '1em',
		fontWeight: 600,
		marginBottom: '2.5%'
	},

	'@media(max-width: 550px)': {
		marginBottom: '7%'
	}
});

export const OAuthContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	// borderBottom: '0.5px solid #605e70',
	paddingBottom: '2%',

	'@media(min-width: 1024px)': {
		paddingBottom: '2%'
	},

	'@media(max-width: 793px)': {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: '2%'
	},

	'@media(max-width: 550px)': {
		paddingBottom: '6%'
	}
});

export const AuthLogo = glamorous.img({
	height: '100%',
	width: '9%',
	// paddingLeft: '5%',
	paddingRight: '3%',

	'@media(max-width: 1024px)': {
		height: '40%'
	},

	'@media(max-width: 793px)': {
		height: '35%'
	},

	'@media(max-width: 550px)': {
		height: '45%'
	}
});

export const OAuthButton = glamorous.div({
	display: 'flex',
	width: '48%',
	padding: '2% 0',
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	marginTop: '3%',
	fontSize: '1em',
	fontWeight: 500,
	border: '1px solid lightgray',
	borderRadius: '5px',
	':hover': { backgroundColor: 'rgba(225, 225, 225, 0.6)', cursor: 'pointer' },

	'@media(min-width: 1024px)': {
		fontSize: '.85em',
		marginTop: '5%'
	},

	'@media(max-width: 1024px)': {
		fontSize: '1em',
		padding: '0',
		margin: '2% 0'
	},

	'@media(max-width: 793px)': {
		width: '100%',
		padding: 0,
		fontSize: '1.1em'
	}
});

export const NewUser = glamorous.div({
	fontFamily: 'Quicksand, sans-serif',
	width: '100%',
	// marginTop: '2.5%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'@media(min-width: 1024px)': {
		fontSize: '0.8em'
	},

	'@media(max-width: 1024px)': {
		fontSize: '0.5em'
	},

	'@media(max-width: 450px)': {
		flexDirection: 'column'
	}
});

export const RegClickHere = glamorous.div({
  // width: '50%',
	color: '#FF9756',
	':hover': { textDecoration: 'underline', cursor: 'pointer' }
});

export const CloseX = glamorous.div({
	fontFamily: 'Quicksand, sans-serif',
	position: 'relative',
	top: '0.7vh',
	right: '1.5vw',
	zIndex: 3,
	fontSize: '1.5em',
	fontWeight: 500,
	color: '#FF6149',
	':hover': { cursor: 'pointer' }
});
