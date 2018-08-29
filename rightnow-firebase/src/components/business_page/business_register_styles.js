import glamorous from 'glamorous';

export const TitleBackdrop = glamorous.div({
	background:
		'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")',
	backgroundRepeat: 'repeat',
	border: '1px solid black',
	backgroundSize: 'cover',
	height: '100vh',
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column'
});

export const Title = glamorous.div({
	// textShadow: '2px 2px 7px #000000',
	display: 'flex',
	color: 'white',
	// height: '100%',
	fontFamily: 'Open Sans, sans-serif',
	marginBottom: '2%',
	fontSize: '3em',
	width: '100%',
	fontWeight: 700,
	justifyContent: 'center',
	alignItems: 'center'
});

export const ButtonContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'center'
});

export const RegButton = glamorous.div({
	color: 'white',
	border: '1px solid white',
	padding: '1% 2%'
});

export const CenterLine = glamorous.div({
    borderLeft: '3px solid white',
    // padding: '2% 0',
	marginLeft: '1.5%',
	paddingRight: '1.5%'
});

export const LoginButton = glamorous.div({
	color: 'white',
	border: '1px solid white',
	padding: '1% 2%'
});

export const Container = glamorous.div({
	margin: 'auto',
	boxSizing: 'border-box',
	border: '4px solid black',
	padding: '10px',
	width: '50%',
	height: '80vh',
	marginBottom: '1%',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
});

export const LeftSide = glamorous.div({
	margin: 'auto',
	boxSizing: 'border-box',
	border: '4px solid red',
	width: '50%'
});

export const RightSide = glamorous.div({
	margin: 'auto',
	boxSizing: 'border-box',
	border: '4px solid blue',
	width: '50%'
});

export const Fieldset = glamorous.fieldset({
	margin: '3% 0',
	// border: '1px solid white',
	borderRadius: '5px'
});

export const Input = glamorous.input({
	boxSizing: 'border-box',
	margin: 'auto',
	width: '100%'
});

export const Bottom = glamorous.div({
	boxSizing: 'border-box',
	width: '100%',
	border: '4px solid black'
});

export const TopWrapper = glamorous.div({
	display: 'flex',
	boxSizing: 'border-box'
	// border: '4px solid green',
});

export const BottomWrapper = glamorous.div({
	margin: 'auto',
	width: '100%',
	// display: 'flex',
	boxSizing: 'border-box',
	border: '4px solid green'
});

export const Button = glamorous.button({
	width: '100%'
});
