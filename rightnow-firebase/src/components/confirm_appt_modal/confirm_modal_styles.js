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
	// display: 'flex',
	justifyContent: 'center',
	opacity: '0.95'
});

export const Greeting = glamorous.div({});
export const YourSesh = glamorous.div({});
export const Activity = glamorous.div({});
export const BusinessName = glamorous.div({});
export const Location = glamorous.div({});
export const Time = glamorous.div({});
export const Cost = glamorous.div({});
export const Agreement = glamorous.div({});
export const ButtonContainer = glamorous.div({});
export const Button = glamorous.div({});

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
