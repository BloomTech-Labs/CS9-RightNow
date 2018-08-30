import React, { Component } from "react";
import axios from "axios";


export const UserContext = React.createContext();


export default class UserProvider extends Component {
  state = {
    go: false,
    uid: "",
    name: "",
    email: "",
    phone: "",
    photo: "",
    location: "",
    appointments: [],
    theo_appt_details: {},
    displayConfirm: false,
    query: "",
    queryResults: [],

    update: data => this.setState(data),

    handleOnChange: e => this.setState({ [e.target.name]: e.target.value }),

    getBusinessInfo: async id => {
      const data = await axios
        .get(`https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/business/${id}`)
        .then(res => {
          const business_info = res.data.business_information;
          return {
            businessImage: business_info.photos[0],
            businessName: business_info.name,
            streetAddress: `${business_info.street_number} ${business_info.street_name}`,
            cityStateZip: `${business_info.city}, ${business_info.state} ${business_info.zip}`,
            rating: business_info.rating,
            fullAddress: business_info.fullAddress
          }
        }).catch(err => console.log("error", err));
      
      console.log("returning business info", data);
      return data;
    },

    handleSearch: async () => {
      const data = await axios
        .get(`https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/appointment?term=${this.state.query}`)
        // .then(res => this.setState({ queryResults: res.data }))
        .then(async res => {
          const arr = await res.data.map(appt => {
            return { ...appt, business_details: this.state.getBusinessInfo(appt.business_ref) }
          })
          return arr;
        })
        // .then(x => console.log("success", x))
        .catch(err => console.log("error", err));

      this.setState({ queryResults: data, go: true });
      return data;
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
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