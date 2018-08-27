import React, { Component } from "react";
import glamorous from "glamorous";
import PlacesAPI from "../placesAPI/search_autocomplete";
import "./business_register_styles.css";
import {
  registerUser,
  getUserId,
  createUser
} from "../../firebase/db_interact";
import {
  Container,
  LeftSide,
  RightSide,
  Bottom,
  Wrapper,
  Button
} from "./business-styles-account";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth"; // Create new user with firebase Auth
// import firebase from "../../firebase/firebase";
// const db = firebase.firestore();

export default class BusinessAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displaySuccess: false, // what does this do?
      displayForms: true, // what does this do?
      email: "",
      password: "",
      business: "",
      first_name: "",
      last_name: "",
      phone: ""
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = () => {
    // Creates a new user, password, user id in firestore (console > authentication > users)
    // console.log('inside createUser');
    const { email, password } = this.state;
    doCreateUserWithEmailAndPassword(email, password);
  };

  saveBusinessUserData = () => {
    console.log("hi");
    //   let business = this.state.business;
    //   let first_name = this.state.first_name;
    //   let last_name = this.state.last_name;
    //   let phone = this.state.phone;

    //   // Create user data on business db
    //   db.collection("businesses") // Collection name per Firestore
    //     .doc() //
    //     .set({
    //       employee_first: first_name,
    //       employee_last: last_name,
    //       phone: phone,
    //       business: business
    //     })
    //     .catch(() => {
    //       console.log("failure");
    //     });
  };

  render() {
    return (
      <Container>
        {this.state.displayForms ? (
          <div>
            <h3>Business SignUp</h3>
            <hr />
            <Wrapper>
              <LeftSide>
                <form>
                  <label>Email:</label>
                  <input
                    type="email"
                    onChange={this.onInputChange}
                    name="email"
                    value={this.state.email}
                    required
                    autocomplete="off"
                  />
                  <label>Password:</label>
                  <input
                    type="password"
                    onChange={this.onInputChange}
                    name="password"
                    value={this.state.password}
                    required
                    autocomplete="off"
                  />
                  <Button onClick={this.createUser()}>Submit</Button>
                </form>
                <form>
                  <label>Business Name:</label>
                  <input
                    type="text"
                    onChange={this.onInputChange}
                    name="business"
                    value={this.state.business}
                    required
                    autocomplete="off"
                  />
                  <label>Employee First Name:</label>
                  <input
                    type="text"
                    name="first_name"
                    onChange={this.onInputChange}
                    value={this.state.first_name}
                    required
                    autocomplete="off"
                  />
                  <label>Employee Last Name:</label>
                  <input
                    type="text"
                    onChange={this.onInputChange}
                    name="last_name"
                    value={this.state.last_name}
                    required
                    autocomplete="off"
                  />
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    onChange={this.onInputChange}
                    name="phone"
                    value={this.state.phone}
                    required
                    autocomplete="off"
                  />
                  {/* <Button onClick={this.saveBusinessUserData}>Submit</Button> */}
                </form>
              </LeftSide>

              <RightSide />
            </Wrapper>

            {/* <Bottom>
                <label>Google API</label>
                <PlacesAPI busnContext={this.props.value} />
                
              </Bottom> */}
          </div>
        ) : null}

        {/* {this.state.displaySuccess ? <h3>We got your application, thank you for the submission</h3> : null} */}
      </Container>
    );
  }
}
