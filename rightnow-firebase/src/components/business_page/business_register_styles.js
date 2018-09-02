import glamorous from 'glamorous';

// export const TransWrapper= glamorous.div({
// 	opacity: '1'
// });

// export const Container1 = glamorous.div({
// 	// background: 'linear-gradient(30deg, rgba(0, 0, 0, 0.50) 20%, rgba(0, 0, 0, 0.70)) 100%, url("https://images.unsplash.com/photo-1535232843222-a40c29436fd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09c323bdb9e5c76f82339cd9b4247a57&auto=format&fit=crop&w=1959&q=80")',
// 	// backgroundRepeat: 'repeat',
// 	// backgroundSize: 'cover',
// 	// height: '100vh',
// 	// backgroundAttachment: 'fixed'
// });


// export const Container2 = glamorous.div({
// 	margin: 'auto',
// 	boxSizing: 'border-box',
// 	border: '4px solid black',
// 	padding: '10px',
// 	width: '100%',
// 	height: '100vh',
// 	marginBottom: '1%',
// 	backgroundColor: 'rgba(201, 76, 76, 1)'
// });


// export const Container3 = glamorous.div({
// 	margin: 'auto',
// 	boxSizing: 'border-box',
// 	border: '4px solid black',
// 	padding: '10px',
// 	width: '50%',
// 	height: '80vh',
// 	marginBottom: '1%',
// });


// export const TitleBackdrop = glamorous.div({
// 	height: '35vh',
// 	display: 'flex',
// 	justifyContent: 'center',
// 	flexDirection: 'column',
// 	zIndex: 20
// });

export const FixedContainer = glamorous.div({
	height: '100vh',
	width: '100vw',
	position: 'relative',
	overflow: 'hidden',
	background:
		'linear-gradient(30deg, rgba(0, 0, 0, 0.50) 20%, rgba(0, 0, 0, 0.70)) 100%, url("https://images.unsplash.com/photo-1535232843222-a40c29436fd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09c323bdb9e5c76f82339cd9b4247a57&auto=format&fit=crop&w=1959&q=80")',
	backgroundRepeat: 'repeat',
	backgroundSize: 'cover',
	backgroundAttachment: 'fixed'
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
	margin: '1% auto',
	width: '23%',
	padding: '.7% 0',
	border: 'none',
	borderRadius: '5px',
	fontSize: '1.3rem',
	fontWeight: 600,
	color: 'white',
	textAlign: 'center',
	textShadow: '1px 1px black',
	backgroundColor: 'rgba(225, 225, 225, 0.4)'
});

export const Button = glamorous.button({
	width: '21%',
	margin: 'auto',
	padding: '0.7% 0',
	color: 'white',
	fontWeight: 600,
	fontSize: '1.3em',
	border: '0.3px solid white',
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
	borderRadius: '2px',
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
	borderRadius: '2px',
	fontSize: '1.2em',
	color: 'white',
	border: '1px solid white',
	padding: '1% 2%',
	transition: 'background .25s, border .25s',
	':hover': { backgroundColor: 'rgba(225, 225, 225, 0.6)', cursor: 'pointer' }
});


// export const LeftSide = glamorous.div({
// 	margin: 'auto',
// 	boxSizing: 'border-box',
// 	border: '4px solid red',
// 	width: '50%'
// });


// export const RightSide = glamorous.div({
// 	margin: 'auto',
// 	boxSizing: 'border-box',
// 	border: '4px solid blue',
// 	width: '50%'
// });


// export const Fieldset = glamorous.fieldset({
// 	margin: '3% 0',
// 	borderRadius: '5px'
// });


// export const Input = glamorous.input({
// 	boxSizing: 'border-box',
// 	margin: 'auto',
// 	width: '100%'
// });


// export const Bottom = glamorous.div({
// 	boxSizing: 'border-box',
// 	width: '100%',
// 	border: '4px solid black'
// });


// export const TopWrapper = glamorous.div({
// 	display: 'flex',
// 	boxSizing: 'border-box'
// });


// export const BottomWrapper = glamorous.div({
// 	margin: 'auto',
// 	width: '100%',
// 	boxSizing: 'border-box',
// 	border: '4px solid green'
// });


// export const Button = glamorous.button({
// 	width: '100%'
// });
