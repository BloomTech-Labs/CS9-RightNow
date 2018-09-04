import glamorous, { P } from 'glamorous';

export const FixedContainer = glamorous.div({
	height: '100vh',
	width: '100vw',
	position: 'relative',
	overflow: 'hidden',
	background:
		'linear-gradient(30deg, rgba(0, 0, 0, 0.80) 20%, rgba(0, 0, 0, 0.85)) 100%, url("https://images.unsplash.com/photo-1535232843222-a40c29436fd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09c323bdb9e5c76f82339cd9b4247a57&auto=format&fit=crop&w=1959&q=80")',
	backgroundRepeat: 'repeat',
	backgroundSize: 'cover',
	backgroundAttachment: 'fixed'
});

export const Fieldset = glamorous.fieldset({
	border: '3px solid white',
	borderRadius: '10px',
	padding: '4%',
	background: 'rgba(32, 32, 32, 0.80)'
});

export const Legend = glamorous.legend({
	padding: '0 3%',
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 400,
	fontSize: '1.5em',
	color: 'white'
});

export const LandingContainer = glamorous.div({
	position: 'absolute',
	height: '100vh',
	width: '100vw',
	background: 'transparent',
	transition: 'all 1.2s'
});

export const WelcomePage = glamorous.div({
	position: 'absolute',
	height: '100vh',
	width: '100vw',
	top: '30%',
	background: 'transparent',
	transition: 'all 1.2s'
});

export const FormContainerReg = glamorous.div({
	position: 'absolute',
	height: '100vh',
	width: '100vw',
	top: '-100vh',
	background: 'transparent',
	transition: 'all 1.2s'
});

export const FormContainerLog = glamorous.div({
	position: 'absolute',
	height: '100vh',
	width: '100vw',
	top: '100vh',
	background: 'transparent',
	transition: 'all 1.2s'
});

export const Container = glamorous.div({
	position: 'absolute',
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: '100%',
	height: '25%',
	margin: 'auto',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent: 'center'
});

export const Input = glamorous.input({
	fontFamily: 'Open Sans, sans-serif',
	margin: '1% auto',
	width: '23%',
	padding: '.7% 0',
	border: 'rgba(0, 0, 0, 0.0) 1px solid',
	borderRadius: '2px',
	fontSize: '1.3rem',
	fontWeight: 400,
	color: 'white',
	textAlign: 'center',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	':focus': {
		border: '1px solid #e5e3e3',
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
	}
});

export const Button = glamorous.button({
	fontFamily: 'Open Sans, sans-serif',
	width: '100%',
	margin: '3% auto',
	padding: '1% 0',
	color: 'white',
	fontWeight: 500,
	fontSize: '1.3em',
	border: '1px solid white',
	borderRadius: '5px',
	backgroundColor: 'transparent',
	':hover': { color: 'white', backgroundColor: 'rgba(225, 225, 225, 0.1)', cursor: 'pointer' },
	':focus': { color: 'white', backgroundColor: 'rgba(225, 225, 225, 0.1)' }
});

export const Title = glamorous.div({
	color: 'white',
	// paddingTop: '60vh',
	margin: 'auto',
	display: 'flex',
	marginBottom: '2%',
	width: '30%',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column'
});

export const TitleBorder = glamorous.div({
	fontSize: '2.8em',
	fontFamily: 'Open Sans, sans-serif',
	fontWeight: 700,
	padding: '3% 0',
	borderTop: '2px solid white',
	borderBottom: '2px solid white'
});

export const Description = glamorous.div({
	textAlign: 'center',
	letterSpacing: '3px',
	marginTop: '7%',
	display: 'flex',
	fontSize: '1.5em',
	fontFamily: 'Quicksand, sans-serif',
	fontWeight: 300
});

export const ButtonContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'center'
});

export const RegButton = glamorous.div({
	borderRadius: '4px',
	fontSize: '1.2em',
	color: 'white',
	border: '1px solid white',
	padding: '1% 2%',
	transition: 'background .25s, border .25s',
	':hover': { backgroundColor: 'rgba(225, 225, 225, 0.6)', cursor: 'pointer' }
});

export const CenterLine = glamorous.div({
	borderLeft: '4px solid white',
	marginLeft: '1.5%',
	paddingRight: '1.5%'
});

export const LoginButton = glamorous.div({
	borderRadius: '4px',
	fontSize: '1.2em',
	color: 'white',
	border: '1px solid white',
	padding: '1% 2%',
	transition: 'background .25s, border .25s',
	':hover': { backgroundColor: 'rgba(225, 225, 225, 0.6)', cursor: 'pointer' }
});

export const ChangeForm = glamorous.div({
	fontFamily: 'Quicksand, sans-serif',
	color: 'white',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: 'auto',

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

export const RegClickHere = glamorous.p({
	fontFamily: 'Open Sans, sans-serif',
	color: '#FF9756',
	':hover': { textDecoration: 'underline', cursor: 'pointer' }
});

export const LogClickHere = glamorous.p({
	fontFamily: 'Open Sans, sans-serif',
	color: '#7cff92',
	':hover': { textDecoration: 'underline', cursor: 'pointer' }
});
