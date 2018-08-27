import React, { Component } from "react";


export const UserContext = React.createContext();


export default class UserProvider extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    phone: "",
    photo: "",
    location: "",
    appointments: [],
    theo_appt_details: {},
    displayConfirm: false
  }

  updateState = data => this.setState(data);

  render() {
    return (
      <UserContext.Provider value={{data: this.state, updateState: this.updateState}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}


/*

DIRECTIONS TO USE CONTEXT:

  0. open the component file that you're working on

  1. import { UserContext } from "../some_path/context/userContext";

  2. inside of your render/return ...

    <UserContext.Consumer>
      {value => {

        // you can update state via value.updateState({ key: value })
        // you can access name, email, phone, etc. via value.data

        return (
          // whatever you want the component to display
          // see login_modal.js lines 43-56 for example
        )
        
      }}
    </UserContext.Consumer>

*/