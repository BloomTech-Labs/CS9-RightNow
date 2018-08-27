import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import firebase, { auth } from "../../firebase/firebase";
const db = firebase.firestore();

export default class BusinessAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySuccess: false, // what does this do?
      displayForms: true, // what does this do?
      email: "",
      password: "",
      business: "",
      first_name: "",
      last_name: "",
      phone: "",
    };
  }

  onInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = () => {
    // Creates a new user, password, user id in firestore (console > authentication > users)
    const { email, password, first_name, last_name, phone, business } = this.state;
    doCreateUserWithEmailAndPassword(email, password);
  
    // Create user data on business db
    db.collection("biz") // Collection name per Firestore
      .add({
        employee_first: first_name,
        employee_last: last_name,
        phone: phone,
        business: business
      })   
  };

  render() {
    return (
      <Container>
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
                  <Link to="/">
                    <Button onClick={this.createUser()}>Submit</Button>
                  </Link>
                </form>
              </LeftSide>

              <RightSide />
            </Wrapper>

            {/* <Bottom>
                <label>Google API</label>
                <PlacesAPI busnContext={this.props.value} />
                
              </Bottom> */}
          </div>
      </Container>
    );
  }
}
