import React, {Component} from 'react';
import glamorous from "glamorous";
import { Link } from 'react-router-dom';
import SignInModal from '../login_modal/login_modal';
import RegisterModal from '../register_modal/reg_modal';
import RegisterForm from '../register_modal/reg_forms';
import ConfirmModal from '../confirm_appt_modal/confirm_modal';
import { UserContext } from "../../context/userContext";
import firebase, { auth } from "../../firebase/firebase";
import axios from "axios";


const Container = glamorous.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  zIndex: 1
});

const Logo = glamorous.div({
  fontFamily: "Syncopate, sans-serif",
  fontSize: "2.5em",
  fontWeight: 800,
  alignSelf: "center",
  color: "#EBEBEB",
});

const ButtonContainer = glamorous.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "1%",
  width: "70%",
  // paddingRight: "2%"
});

const Option = glamorous.div({
  textAlign: "center",
  width: "8%",
  color: "#EBEBEB",
  fontSize: "1.3em",
  fontWeight: 500,
  marginRight: "2%",
  border: "1px solid transparent",
  padding: "1.5%",
  ":hover": {
    cursor: "pointer",
    border: "1px solid white",
    borderRadius: "5px"
  },
  ":first-child": {
    width: "13%"
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

  handleEmailSignIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
		this.closeModal();
	}

	handleProviderLogin = type => {
		let provider;

		if (type === "google") provider = new firebase.auth.GoogleAuthProvider();
		if (type === "facebook") provider = new firebase.auth.FacebookAuthProvider();

		if (!provider) return;

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(res => {
				const newUser = res.user;
				
				const data = {
					uid: newUser.uid,
					name: newUser.displayName,
					email: newUser.email,
					phone: newUser.phoneNumber,
					photo: newUser.photoURL
				}

				axios
					.post("https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/customer", data)
					.then(result => console.log(result)).catch(err => console.log(err));
			})
			.then(x => this.closeModal())
			.catch(err => console.log(err));
	}
  
  render() {
    return (
      <Container>

        <Link to="/" style={{textDecoration: "none", padding: "1%"}}>
          <Logo>Sesho</Logo>
        </Link>

        <UserContext.Consumer>
          {value => {
            if (value.userSignedIn) {
              return (
                <ButtonContainer>
                  <Option>
                    <Link to="/biz-account" style={{textDecoration: "none", color: "#EBEBEB", width: "100%"}}>Business Owner?</Link>
                  </Option>
                  <Option onClick={() => auth.signOut()} >SignOut</Option>
                </ButtonContainer>
              )
            }
            else return (
              <ButtonContainer>
                <Option>
                  <Link to="/biz-account" style={{textDecoration: "none", color: "#EBEBEB"}}>Business Owner?</Link>
                </Option>
                <Option onClick={() => this.openReg()}>Sign Up</Option>
                <Option onClick={() => this.openLogin()}>Login</Option>
              </ButtonContainer>
            )
          }}
        </UserContext.Consumer>

        {this.state.displayLoginModal ? (
          <SignInModal 
            providerLogin={prov => this.handleProviderLogin(prov)}
            emailLogin={(x, y) => this.handleEmailSignIn(x, y)}
            closeModal={() => this.closeModal()} 
            logToReg={() => this.LogToRegModal()} />
        ) : null}
        
        {this.state.displayRegModal ? (
          <RegisterModal 
            providerLogin={prov => this.handleProviderLogin(prov)}
            emailLogin={(x, y) => this.handleEmailSignIn(x, y)}
            closeModal={() => this.closeModal()} 
            regToLog={() => this.RegToLogModal()} />
        ) : null}
        
        {this.state.displayRegForm ? <RegisterForm closeModal={() => this.closeModal()} /> : null}

        <UserContext.Consumer>
          {value => value.displayConfirm ? <ConfirmModal closeModal={() => this.closeModal()} /> : null}
        </UserContext.Consumer>
        
      </Container>
    )
  }
}