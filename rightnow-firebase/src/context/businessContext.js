import React, { Component } from "react";
import { createNewBusiness } from "../firebase/db_interact";


export const BusinessContext = React.createContext();


export default class BusinessProvider extends Component {
  state = {
    personal: {
      first_name: "",
      last_name: "",
      email: "",
      phone: ""
    },
    business: {
      name: "",
      fullAddress: "",
      street_number: "",
      street_name: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      rating: "",
      photos: []
    },
    available_appointments: [],
    booked_appointments: []
  }

  updateBusiness = data => this.setState({ business: data });

  updatePersonal = data => {
    // createNewBusiness({ personal: data, business: this.state.business });
  }

  updateAppointments = data => this.setState({ data });

  render() {
    return (
      <BusinessContext.Provider 
        value={{
          data: this.state, 
          updateBusiness: this.updateBusiness,
          updatePersonal: this.updatePersonal,
          updateAppointments: this.updateAppointments
          }}
        >
        {this.props.children}
      </BusinessContext.Provider>
    )
  }
}


/*

DIRECTIONS TO USE CONTEXT:

  0. open the component file that you're working on

  1. import { BusinessContext } from "../some_path/context/BusinessContext";

  2. inside of your render/return ...

    <BusinessContext.Consumer>
      {value => {

        // you can update state via value.updateState({ key: value })
        // you can access name, email, phone, etc. via value.data

        return (
          // whatever you want the component to display
          // see login_modal.js lines 43-56 for example
        )
        
      }}
    </BusinessContext.Consumer>

*/