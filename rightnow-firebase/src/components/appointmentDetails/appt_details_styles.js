import glamorous from 'glamorous';

export const Container = glamorous.div({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '37%',
	color: '#EBEBEB',
	background: '#353A50',
	border: '1px solid #353A50',
	borderRadius: '5px'
});

export const Header = glamorous.div({
	display: 'flex',
	justifyContent: 'space-between',
	alignContent: 'center',
	padding: '1%'
});

export const Title = glamorous.div({
	fontFamily: 'Raleway, sans-serif',
	fontSize: '1.3em',
	fontWeight: 600,
	color: '#EBEBEB',
	padding: '2%'
});

export const TrashCan = glamorous.div({
	height: '100%',
	width: '10%',
	marginRight: '3%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	':hover': {
		cursor: 'pointer'
	}
});

export const Content = glamorous.div({
	height: '100%',
	padding: '0 3%',
	backgroundColor: '#EBEBEB',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around'
});

export const Detail = glamorous.div({ color: '#353A50' });
