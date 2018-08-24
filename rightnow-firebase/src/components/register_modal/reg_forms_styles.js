/* EXTENDED registration form */
import glamorous from 'glamorous';

export const FormContainer = glamorous.div({
	// border: '1px solid blue',
	width: '100%'
});

export const Email = glamorous.input({
	boxSizing: 'border-box',
	width: '100%',
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	color: 'white',
	padding: '4% 0.7%',
	marginBottom: '3%',
	fontSize: '1em',
	height: '3vh',
	border: 0,
	borderBottom: '1px solid #ada3a2',
	':focus': {
		borderBottom: '1px solid white',
		outline: 'none',
		'::placeholder': {
			opacity: 0
		}
	},
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
	}
});

export const NameContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	// borderBottom: '0.5px solid #605e70',
	paddingBottom: '2%'
});

export const NamePlace = glamorous.input({
	width: '90%',
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	color: 'white',
	padding: '1.5% 0.7%',
	marginBottom: '3%',
	fontSize: '1em',
	height: '3vh',
	border: 0,
	borderBottom: '1px solid #ada3a2',
	':focus': {
		borderBottom: '1px solid white',
		outline: 'none',
		'::placeholder': {
			opacity: 0
		}
	},
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

export const NamePlace2 = glamorous.input({
	// boxSizing: 'border-box',
	// height: '100%',
	width: '98.5%',
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	color: 'white',
	padding: '1.5% 0.7%',
	// marginBottom: '3%',
	fontSize: '1em',
	height: '3vh',
	border: 0,
	borderBottom: '1px solid #ada3a2',
	':focus': {
		borderBottom: '1px solid white',
		outline: 'none',
		'::placeholder': {
			opacity: 0
		}
	},
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

export const PhoneNumber = glamorous.input({
	boxSizing: 'border-box',
	width: '100%',
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	color: 'white',
	padding: '4% 0.7%',
	marginBottom: '3%',
	fontSize: '1em',
	height: '3vh',
	border: 0,
	borderBottom: '1px solid #ada3a2',
	':focus': {
		borderBottom: '1px solid white',
		outline: 'none',
		'::placeholder': {
			opacity: 0
		}
	},
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
	}
});

export const Location = glamorous.input({
	boxSizing: 'border-box',
	width: '100%',
	// border: '2px solid red',
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	color: 'white',
	padding: '4% 0.7%',
	marginBottom: '2%',
	fontSize: '1em',
	border: 0,
	height: '3vh',
	borderBottom: '1px solid #ada3a2',
	':focus': {
		borderBottom: '1px solid white',
		outline: 'none',
		'::placeholder': {
			opacity: 0
		}
	},
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
	}
});

export const CheckBoxWrapper = glamorous.fieldset({
	margin: '3% 0',
	border: '1px solid white',
	borderRadius: '5px'
});

export const CheckBoxContainer = glamorous.div({
	width: '65%',
	display: 'flex',
	justifyContent: 'space-between'
});

export const CheckBox = glamorous.div(
  
);

export const RegisterButton = glamorous.div({
	fontFamily: 'Quicksand, sans-serif',
  display: 'flex',
	width: '100%',
	padding: '2% 0',
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',
	margin: '3% 0',
	fontSize: '1em',
	fontWeight: 600	,
	color: 'white',
	backgroundColor: '#ef5651',
	border: '1px solid #ef5651',
  borderRadius: '5px',
  transition: 'background .4s, border .4s',
	':hover': { border: '1px solid #ff6b66', backgroundColor: '#ff6b66', cursor: 'pointer' },

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
