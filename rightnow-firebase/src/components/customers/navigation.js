import React, {Component} from 'react';
import glamorous from "glamorous";
import { Link } from 'react-router-dom';
import SignInModal from '../login_modal/login_modal';
import RegisterModal from '../register_modal/reg_modal';
import RegisterForm from '../register_modal/reg_forms';
import ConfirmModal from '../confirm_appt_modal/confirm_modal';
import { UserContext } from '../../context/userContext';


const Container = glamorous.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  zIndex: 1
});

const Logo = glamorous.div({
  fontSize: "2em",
  fontWeight: 800,
  alignSelf: "center",
  color: "#EBEBEB",
});

const ButtonContainer = glamorous.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "1%",
  width: "50%"
});

const Option = glamorous.div({
  color: "#EBEBEB",
  fontSize: "1.3em",
  fontWeight: 500,
  marginRight: "3%",
  border: "1px solid transparent",
  padding: "1.5%",
  ":hover": {
    cursor: "pointer",
    border: "1px solid white",
    borderRadius: "5px"
  }
});


export default class Navigation extends Component {
  state = {
    displayLoginModal: false, 
    displayRegModal: false,
    displayRegForm: false,
    displayConfirm: false
  }

  openReg = () => {
		this.setState({ displayRegModal: true });
    document.body.style.overflowY = 'hidden';
    document.querySelector("#primary_input").style.zIndex = 0;
	};

	openLogin = () => {
		this.setState({ displayLoginModal: true });
    document.body.style.overflowY = 'hidden';
    document.querySelector("#primary_input").style.zIndex = 0;
	};

  RegToLogModal = () => {
		this.setState({ displayRegModal: false });
		this.setState({ displayLoginModal: true });
	};

	LogToRegModal = () => {
		this.setState({ displayLoginModal: false });
		this.setState({ displayRegModal: true });
  };
  
  CreateUserForm = () => {
		this.setState({ displayRegModal: false });
		this.setState({ displayRegForm: true });
	};

  closeModal = () => {
		document.body.style.overflowY = 'scroll';
    this.setState({ displayRegModal: false, displayLoginModal: false, displayRegForm: false });
    document.querySelector("#primary_input").style.zIndex = 1;
  };
  
  render() {
    return (
      <Container>

        <Link to="/" style={{textDecoration: "none", padding: "1%"}}>
          <Logo>Sesho</Logo>
        </Link>

        <ButtonContainer>
          <Option>Business Owner?</Option>
          <Option onClick={() => this.openReg()}>Sign Up</Option>
          <Option onClick={() => this.openLogin()}>Login</Option>
        </ButtonContainer>

        {this.state.displayLoginModal ? (
					<SignInModal closeModal={() => this.closeModal()} logToReg={() => this.LogToRegModal()} />
        ) : null}
        
        {this.state.displayRegModal ? (
					<RegisterModal closeModal={() => this.closeModal()} regToLog={() => this.RegToLogModal()} />
        ) : null}
        
        {this.state.displayRegForm ? <RegisterForm closeModal={() => this.closeModal()} /> : null}

        <UserContext.Consumer>
					{(value) =>
						value.data.displayConfirm ? (
							<ConfirmModal closeModal={() => this.closeModal()} />
						) : null}
				</UserContext.Consumer>
        
      </Container>
    )
  }
}