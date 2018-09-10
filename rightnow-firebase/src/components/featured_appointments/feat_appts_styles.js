import glamorous from 'glamorous';

export const Container = glamorous.div({
	width: '85vw',
	margin: '1% 5%'
});

export const Header = glamorous.div({
	width: '100%',
	fontFamily: 'Raleway, sans-serif',
	fontSize: '2.2em',
	fontWeight: 600,
	padding: '1% 0.5%',
	margin: '3% 1%',
	borderBottom: '1px solid #b4b4b4',

	'@media(min-width: 1800px)': {
		width: '100%'
	},

	'@media(max-width: 1800px)': {
		fontSize: '2em'
	},

	'@media(max-width: 1265px)': {
		fontSize: '1.8em'
	},

	'@media(max-width: 1000px)': {
		fontSize: '1.5em',
		width: '100%'
	},

	'@media(max-width: 600px)': {
		width: '100%'
	},

	'@media(max-width: 405px)': {
		fontSize: '1.3em'
	}
});

export const CardContainer = glamorous.div({
	display: 'grid',
	grid: 'auto / 20vw 20vw 20vw',
	gridGap: '4.5vw',
	justifyContent: 'center',
	width: '85vw',
	// minHeight: '80vh',
	margin: 'auto'
});
