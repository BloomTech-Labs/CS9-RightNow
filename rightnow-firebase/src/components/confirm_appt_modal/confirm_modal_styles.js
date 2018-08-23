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
	// width: '40%',
	padding: '0 15%',
	paddingTop: '20vh',
	zIndex: 2,
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	opacity: '0.95'
});

export const ElementConainer = glamorous.div({
	// textAlign: 'center',
	border: '8px solid black',
	borderRadius: '15px 0 15px 0',
	borderColor: '#353A50',
	color: '#353A50',
	fontFamily: 'Quicksand, sans-serif',
	background: '#fffaf4',
	width: '40%',
	padding: '2%',
	zIndex: 2
});

export const DetailContainer = glamorous.div({
	textAlign: 'center'
	// display: 'flex'
});

export const Greeting = glamorous.div({
	textAlign: 'center',
	fontFamily: 'Pacifico, cursive',
	fontSize: '40px'
	// paddingBottom: '1%',
});
export const YourSesh = glamorous.div({
	paddingTop: '1%',
	fontFamily: 'Nunito, sans-serif',
	fontSize: '2em',
	fontWeight: 600,
	borderBottom: '2px solid #605e70'
});
export const Activity = glamorous.div({
	width: '100%',
	marginTop: '1%',
	fontFamily: 'Nunito, sans-serif',
	fontSize: '1.5em',
	fontWeight: 500
});
export const Spanner = glamorous.span({
	color: '#C23020',
	// textDecoration: 'underline',
	padding: '0 0.5%',
	width: '100%',
	fontFamily: 'Nunito, sans-serif',
	fontWeight: 600
});
export const Location = glamorous.div({
	marginTop: '1%',

	fontFamily: 'Nunito, sans-serif',
	fontSize: '1.5em',
	fontWeight: 500
});
export const Time = glamorous.div({
	fontFamily: 'Nunito, sans-serif',
	fontSize: '1.5em',
	fontWeight: 500
});
export const Cost = glamorous.div({
	fontFamily: 'Nunito, sans-serif',
	fontSize: '1.5em',
	fontWeight: 500
});
export const Agreement = glamorous.div({
	fontFamily: 'Nunito, sans-serif',
	fontSize: '1.5em',
  fontWeight: 500,
  paddingBottom: '1%',
	borderBottom: '2px solid #605e70'
});
export const ButtonContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	fontFamily: 'Nunito, sans-serif',
	fontSize: '1.5em',
	fontWeight: 500
});
export const Button = glamorous.div({
	fontFamily: 'Quicksand, sans-serif',
	// fontWeight: 600,
	// fontSize: '1.2em',

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
	transition: 'background .25s, border .25s',
	':hover': { backgroundColor: 'rgba(225, 225, 225, 0.6)', cursor: 'pointer' }
});

export const Icon = glamorous.img({
  width: '5%'
})

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
