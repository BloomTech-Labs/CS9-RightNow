import React, { Component } from 'react';
// import GoogleLogIn from '../../firebase/auth.google.services';
// import FacebookLogIn from '../../firebase/auth.facebook.services';

import { Container, ModalWrapper, CloseX } from './confirm_modal_styles';

export default class ConfirmModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	engageForms = () => {
		this.setState({ showRegMethods: false, showForms: true });
	};

	// componentDidMount() {
	// 	console.log('GrandChild did mount.');
	// }

	render() {
		return (
			<Container>
				<ModalWrapper>
					<CloseX onClick={() => this.props.closeModal()}>x</CloseX>
				</ModalWrapper>
			</Container>
		);
	}
}
