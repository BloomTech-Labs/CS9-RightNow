import React, { Component } from "react";


const UserContext = React.createContext();


export default class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      location: ""
    }
  }

  updateState = data => this.setState(data);

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}