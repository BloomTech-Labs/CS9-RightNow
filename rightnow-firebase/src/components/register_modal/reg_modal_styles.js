import glamorous from 'glamorous';

export const Container = glamorous.div({
	width: '100vw',
	height: '100vh',
	position: 'absolute',
	zIndex: 1,
	background: 'rgba(0, 0, 0, 0.5)',
	overflow: 'hidden'
	// add filter: blur() later; should affect App.js when modal is active.
});

export const ModalWrapper = glamorous.div({
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
	background: '#494755',
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
	// 	width: '25%'
	// },
	// '@media(max-width: 1024px)': {
	// 	width: '50%'
	// },
	// '@media(max-width: 793px)': {
	// 	width: '65%'
	// },
	// '@media(max-width: 350px)': {
	// 	width: '90%'
	// }
});

export const Header = glamorous.div({
	fontSize: '1em',
	marginBottom: '3%',
	paddingBottom: '2%',
	borderBottom: '0.5px solid #605e70',

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

export const Button = glamorous.button({
	fontSize: '2em',
	fontWeight: 600,
	padding: '1.5% 0',
	borderRadius: '5px',
	backgroundColor: '#00c6fd',
	color: 'white',
	transition: 'background .4s, border .4s',
	':hover': { cursor: 'pointer' },

	'@media(min-width: 1024px)': {
		fontSize: '1.3em'
	},

	'@media(max-width: 1024px)': {
		fontSize: '1.1em'
	}
});

export const OAuthContainer = glamorous.div({
	display: 'block',
	// justifyContent: "space-between",
	width: '100%',

	'@media(min-width: 1024px)': {
		paddingBottom: '5%',
		paddingTop: '0.2%'
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

export const OAuthButton = glamorous.div({
	display: 'flex',
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	width: '100%',
	padding: '2% 0',
	marginTop: '1%',
	margin: 'auto',
	fontSize: '1em',
	fontWeight: 500,
	border: '1px solid lightgray',
	borderRadius: '5px',
	transition: 'background .25s, border .25s',
	':hover': { backgroundColor: 'rgba(225, 225, 225, 0.6)', cursor: 'pointer' },

	'@media(min-width: 1024px)': {
		fontSize: '1.2em',
		marginTop: '2%'
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

export const Or = glamorous.div({
	width: '100%',
	textAlign: 'center',
	borderBottom: '0.5px solid #605e70',
	lineHeight: '0.1em',

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

export const EmailButton = glamorous.div({
	display: 'flex',
	width: '100%',
	padding: '2% 0',
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	margin: '3% 0',
	fontSize: '1em',
	fontWeight: 500,
	color: 'white',
	backgroundColor: '#FF9756',
	border: '1px solid #FF9756',
	borderRadius: '5px',
	transition: 'background .4s, border .4s',
	':hover': { border: '1px solid #FFAF74', backgroundColor: '#FFAF74', cursor: 'pointer' },

	'@media(min-width: 1024px)': {
		fontSize: '1.2em',
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

export const AuthLogo = glamorous.img({
	height: '100%',
	width: '6%',
	paddingRight: '3%',

	// fix it later
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

export const NewUser = glamorous.div({
	width: '100%',
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

export const LoginClickHere = glamorous.p({
	color: '#7cff92',
	':hover': { textDecoration: 'underline', cursor: 'pointer' }
});

export const CloseX = glamorous.div({
	height: '100%',
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
