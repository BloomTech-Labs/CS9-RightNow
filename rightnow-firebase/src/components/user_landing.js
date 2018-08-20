import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
	padding: '10px',
	width: '100%',
	height: '80vh',
	backgroundImage: 'url( "https://zimmer7.com/fileadmin/_processed_/5/b/csm_photo-1462885928573-b5d04c6855de_9f46a27ab0.jpg")',
	backgroundRepeat: 'no-repeat',
	background: "linear-gradient(rgba(205,133,63, 0.25), rgba(205,133,63, 0.25)), url(https://zimmer7.com/fileadmin/_processed_/5/b/csm_photo-1462885928573-b5d04c6855de_9f46a27ab0.jpg)",
	backgroundSize: 'cover'
});

const Title = glamorous.h3({
	textShadow: '2px 2px 7px #000000',
	margin: '0',
	marginTop: '16%',
	marginBottom: '1%',
	color: 'white',
	// width: "100%",
	fontSize: '40px',
	// height: "80%",
	textAlign: 'center'
	// alignItems: "center"
});

const Search = glamorous.input({
	padding: '10px',
	fontSize: '17px',
	border: '1px solid grey',
	// float: 'left',
	width: '60%',
	background: '#f1f1f1'
});

const SearchBarContainer = glamorous.div({
	display: 'flex',
	width: '80%',
	margin: '0 auto',
	justifyContent: 'center'
	// border: '1px solid black'
});

const Button = glamorous.button({
	// float: 'left',
	width: '15%',
	padding: '10px',
	background: '#2196F3',
	color: 'white',
	fontSize: '17px',
	border: '1px solid grey',
	borderLeft: 'none',
	cursor: 'pointer'
});

const FindAppointment = glamorous.p({
	margin: 0
	// height: '100%'
});

export default class UserLanding extends Component {
	render() {
		return (
			<Container>
				<Title>BOOK YOUR LAST MINUTE APPOINTMENT!</Title>
				<SearchBarContainer>
					<Search type="text" name="search" placeholder="Search..." />
					<Button type="submit">
						<FindAppointment>Find Appointments</FindAppointment>
					</Button>
				</SearchBarContainer>
			</Container>
		);
	}
}
