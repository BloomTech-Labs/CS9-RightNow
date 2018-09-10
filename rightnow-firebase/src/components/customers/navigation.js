import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';
import SignInModal from '../login_modal/login_modal';
import RegisterModal from '../register_modal/reg_modal';
import RegisterForm from '../register_modal/reg_forms';
import ConfirmModal from '../confirm_appt_modal/confirm_modal';
import { UserContext } from '../../context/userContext';
import firebase, { auth } from '../../firebase/firebase';
import axios from 'axios';

import { Redirect, withRouter } from 'react-router-dom';

// sweetAlert 2 with custom css
import swal from 'sweetalert2/dist/sweetalert2.js';
import '../../z_sweetAlert/sweetalert2.css';

const Container = glamorous.div({
	// background: 'rgb(24, 24, 25, 0.2)',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	zIndex: 1,
	height: '80%'
	// boxShadow: '0 2px 4px -1px rgba(0,0,0)'
});

const Logo = glamorous.div({
	display: 'display',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Syncopate, sans-serif',
	fontSize: '2.5em',
	fontWeight: 800,
	color: '#EBEBEB',
	padding: 0
});

const ButtonContainer = glamorous.div({
	display: 'flex',
	justifyContent: 'flex-end',
	padding: '0.5% 0',
	width: '70%'
});

const Option = glamorous.div({
  textAlign: "center",
  width: "8%",
  color: "#EBEBEB",
  textShadow: "0 0 3px #ef5b5b",
  fontSize: "1.2em",
  fontWeight: 600,
  marginRight: "2%",
  border: "1px solid transparent",
  padding: "1%",
  ":first-child": {
    width: "17%",
  },
  ":hover": {
    cursor: "pointer",
    border: "1px solid #ebebeb",
    borderRadius: "5px"
  }
});

class Navigation extends Component {
  state = {
    displayLoginModal: false,
    displayRegModal: false,
    displayRegForm: false,
    displayConfirm: false
  };

  openReg = () => {
    this.setState({ displayRegModal: true });
    document.body.style.overflowY = "hidden";
    document.querySelector("#primary_input").style.zIndex = 0;
  };

  openLogin = () => {
    this.setState({ displayLoginModal: true });
    document.body.style.overflowY = "hidden";
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
    document.body.style.overflowY = "scroll";
    this.setState({
      displayRegModal: false,
      displayLoginModal: false,
      displayRegForm: false
    });
    document.querySelector("#primary_input").style.zIndex = 1;
  };

  handleEmailSignIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
    this.closeModal();
  };

  handleProviderLogin = type => {
    let provider;

    if (type === "google") provider = new firebase.auth.GoogleAuthProvider();
    if (type === "facebook")
      provider = new firebase.auth.FacebookAuthProvider();

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
        };

        axios
          .post(
            "https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/customer",
            data
          )
          .then(result => console.log(result))
          .catch(err => console.log(err));
      })
      .then(x => this.closeModal())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Link to="/" style={{ textDecoration: "none", padding: "1%", textShadow: "0 0 3px skyblue", }}>
          <Logo>Sesho</Logo>
        </Link>

        <UserContext.Consumer>
          {value => {
            if (value.userSignedIn) {
              return (
                <ButtonContainer>
                  <Option style={{display: "hidden"}}></Option>
                  <Option>
                    <Link
                      to="/user-settings"
                      style={{
                        textDecoration: "none",
                        color: "#EBEBEB",
                        width: "100%",
                        "&hover": { color: "#353A50 !important" }
                      }}
                    >
                      Settings
                    </Link>
                  </Option>
                  <Option onClick={() => value.customerLogout()}>Sign Out</Option>
                </ButtonContainer>
              );
            } else
              return (
                <ButtonContainer>
                  <Option>
                    <Link
                      to="/biz-account"
                      style={{ textDecoration: "none", color: "#ebebeb" }}
                    >
                      Business Owner?
                    </Link>
                  </Option>
                  <Option onClick={() => this.openReg()}>Sign Up</Option>
                  <Option onClick={() => this.openLogin()}>Login</Option>
                </ButtonContainer>
              );
          }}
        </UserContext.Consumer>

        {this.state.displayLoginModal ? (
          <SignInModal
            providerLogin={prov => this.handleProviderLogin(prov)}
            emailLogin={(x, y) => this.handleEmailSignIn(x, y)}
            closeModal={() => this.closeModal()}
            logToReg={() => this.LogToRegModal()}
          />
        ) : null}

        {this.state.displayRegModal ? (
          <RegisterModal
            providerLogin={prov => this.handleProviderLogin(prov)}
            emailLogin={(x, y) => this.handleEmailSignIn(x, y)}
            closeModal={() => this.closeModal()}
            regToLog={() => this.RegToLogModal()}
          />
        ) : null}

        {this.state.displayRegForm ? (
          <RegisterForm closeModal={() => this.closeModal()} />
        ) : null}

        <UserContext.Consumer>
          {value =>
            value.displayConfirm ? (
              <ConfirmModal closeModal={() => this.closeModal()} />
            ) : null
          }
        </UserContext.Consumer>
      </Container>
    );
  }
}

export default withRouter(Navigation);
