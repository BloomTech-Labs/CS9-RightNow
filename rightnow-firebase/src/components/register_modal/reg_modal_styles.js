import glamorous from 'glamorous';

export const Container = glamorous.div({
	width: '100vw',
	height: '100vh',
	position: 'absolute',
	zIndex: 1,
	background: 'rgba(0, 0, 0, 0.5)',
	overflow: 'hidden'
});

export const Modal = glamorous.div({
	position: 'fixed',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: 2,
	background: 'white',
	display: 'flex',
	flexDirection: 'column',
	width: '30%',
	padding: '2%',

	'@media(min-width: 1024px)': {
		width: '25%'
	},

	'@media(max-width: 1024px)': {
		width: '50%'
	},

	'@media(max-width: 793px)': {
		width: '65%'
	},

	'@media(max-width: 350px)': {
		width: '90%'
	}
});

export const Header = glamorous.div({
	fontSize: '1em',
	marginBottom: '3%',
	paddingBottom: '2%',
	borderBottom: '0.5px solid black',

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

// export const NormalSignIn = glamorous.div({
//   borderTop: "0.5px solid lightgray",
//   padding: "4% 0",
//   display: "flex",
//   flexDirection: "column",

//   '@media(min-width: 1024px)': {
//     marginBottom: 0
//   },

//   "@media(max-width: 550px)": {
//     margin: "3% 0",
//     padding: "7% 0"
//   }
// });

export const Input = glamorous.input({
	padding: '1% 2%',
	marginBottom: '2%',
	fontSize: '2em',
	height: '3vh',
	border: '1px solid gray',
	borderRadius: '5px',
	':focus': { outline: 'none' }, // *:focus { outline: none } ~~~ no focus for any elements

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

export const Button = glamorous.button({
	fontSize: '2em',
	fontWeight: 600,
	padding: '1.5% 0',
	borderRadius: '5px',
	backgroundColor: '#00c6fd',
	color: 'white',
	':hover': { cursor: 'pointer' },
	':focus': { outline: 'none' },

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
		paddingBottom: '5%'
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
	width: '100%',
	padding: '2% 0',
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	marginTop: '1%',
	margin: 'auto',
	fontSize: '1em',
	fontWeight: 500,
	border: '1px solid lightgray',
	borderRadius: '5px',
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
	borderBottom: '0.5px solid black',
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
	marginTop: '3%',
	margin: 'auto',
	fontSize: '1em',
	fontWeight: 500,
	color: 'white',
	backgroundColor: '#FF9756',
	border: '1px solid #FF9756',
	borderRadius: '5px',
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
	height: '50%',
	width: '4%',
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
	marginTop: '2.5%',
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

export const CloseX = glamorous.div({
	position: 'fixed',
	top: '30vh',
	right: '36.5vw',
	zIndex: 3,
	fontSize: '1.5em',
	fontWeight: 500,
	color: '#FF6149',
	':hover': { cursor: 'pointer' }
});
