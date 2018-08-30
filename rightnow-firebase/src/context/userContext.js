import React, { Component } from "react";
import axios from "axios";


export const UserContext = React.createContext();


export default class UserProvider extends Component {

  state = {
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
    finished: false,
    stupid: null,

    onInputChange: async data => {
      await this.setState(data);
      console.log(this.state.query);
    },

    handleSearch: async () => {
      const data = await axios
        .get(`https://us-central1-react-firebase-auth-f2581.cloudfunctions.net/haveAsesh/appointment?term=${this.state.query}`)
        .then(res => this.setState({ queryResults: res.data, finished: true }))
        // .then(async res => {
        //   const arr = await res.data.map(async appt => {
        //     return { ...appt, business_details: await this.state.getBusinessInfo(appt.business_ref) }
        //   })
        //   return arr;
        // })
        // .then(async res => {
        //   await this.setState({ queryResults: res, finished: true });
        // return res;
        // })
        .catch(err => console.log("error", err));

      // await this.setState({ queryResults: data, finished: true });
      // console.log(this.state);
      // return data;
    },

    getBusinessInfo: async id => {
      let self = this;
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
      // this.setState({ finished: true });
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