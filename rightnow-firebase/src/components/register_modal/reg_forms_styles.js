/* EXTENDED registration form */
import glamorous from 'glamorous';

export const FormContainer = glamorous.div({
  width: "100%",

});

export const Email = glamorous.input({
  width: "100%",
	border: '2px solid red',
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	color: 'white',
	padding: '1% 0.7%',
	marginBottom: '2%',
	fontSize: '1em',
	height: '3vh',
	border: 0,
	borderBottom: '1px solid #ada3a2',
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
});

export const NameContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	// borderBottom: '0.5px solid #605e70',
	paddingBottom: '2%'
});

export const NamePlace = glamorous.input({
  width: "90%",
	border: '2px solid red',
	fontFamily: 'Quicksand, sans-serif',
	background: '#353A50',
	color: 'white',
	padding: '1% 0.7%',
	marginBottom: '2%',
	fontSize: '1em',
	height: '3vh',
	border: 0,
  borderBottom: '1px solid #ada3a2',
  ':firstChild': {paddingRight: '10%'},
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

export const PhoneNumber = glamorous.div({});

export const Location = glamorous.div({});

export const UpdateRadios = glamorous.div({});

export const RegisterButton = glamorous.div({});
