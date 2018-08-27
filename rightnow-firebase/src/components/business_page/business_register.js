import React, { Component } from "react";
import glamorous from "glamorous";
import PlacesAPI from "../placesAPI/search_autocomplete";
import './business_register_styles.css';
import { registerUser, getUserId, createUser } from "../../firebase/db_interact";
import {
  Container,
  LeftSide,
  RightSide,
  Bottom,
  Wrapper,
  Button
} from "./business-styles-account";
// import firebase, { auth } from '../../firebase/firebase.js';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';



export default class BusinessAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForms: true, // what does this do? 
      // displaySuccess: false, // what does this do?
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      company: ""
    };
  }
  createUser = () => {
    // console.log('inside createUser');
    const { email, password } = this.state;
    doCreateUserWithEmailAndPassword(email, password);
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        {this.state.displayForms ? (
          <div>
            <h3>Business SignUp</h3>
            <hr />
            <Wrapper>

              <LeftSide>

                <form>
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="first_name"
                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                    value={this.state.first_name}
                    required
                    autocomplete="off"
                  />
                  <label>Email:</label>
                  <input
                    type="email"
                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                    name="email"
                    value={this.state.email}
                    required
                    autocomplete="off"
                  />
                  <label>Password:</label>
                  <input
                    type="password"
                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                    name="password"
                    value={this.state.password}
                    required
                    autocomplete="off"
                  />
                  <label>Last Name:</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                    name="last_name"
                    value={this.state.last_name}
                    required
                    autocomplete="off"
                  />
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                    name="phone"
                    value={this.state.phone}
                    required
                    autocomplete="off"
                  />
                  <label>Company Name:</label>
                  <input
                    type="text"
                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                    name="company"
                    value={this.state.company}
                    required
                    autocomplete="off"
                  />
                  <Button onClick={this.createUser}>Submit</Button>
                </form>
              </LeftSide>

              <RightSide>
              </RightSide>
            </Wrapper>

            
              {/* <Bottom>
                <label>Google API</label>
                <PlacesAPI busnContext={this.props.value} />
                
              </Bottom> */}

          </div>
        ) : null}

        {this.state.displaySuccess ? <h3>We got your application, thank you for the submission</h3> : null}
      </Container>
    );
  }
}
