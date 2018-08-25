import React, { Component } from "react";
import glamorous from "glamorous";
import PlacesAPI from "../placesAPI/search_autocomplete";
import { registerUser, getUserId } from "../../firebase/db_interact";
import {
  Container,
  LeftSide,
  RightSide,
  Bottom,
  Wrapper,
  Button
} from "./business-styles-account";

export default class BusinessAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForms: true,
      displaySuccess: false,
      email: "",
      first_name: "",
      last_name: "",
      phone: ""
    };
  }

  submitForm = async () => {
    const userId = await getUserId();

    const owner = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone
    };

    const business = this.props.value.data.business;

    const allData = {
      uid: userId,
      business_information: business,
      owner_information: owner
    };

    registerUser("busn_ACTUAL", allData);
  };

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
              </LeftSide>

              <RightSide>
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
              </RightSide>
            </Wrapper>

            
              <Bottom>
                <label>Google API</label>
                <PlacesAPI busnContext={this.props.value} />
                <Button onClick={() => this.submitForm()}>Submit</Button>
              </Bottom>

          </div>
        ) : null}

        {this.state.displaySuccess ? <h3>We got your application, thank you for the submission</h3> : null}
      </Container>
    );
  }
}
