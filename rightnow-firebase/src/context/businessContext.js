import React, { Component } from "react";
import firebase from "../firebase/firebase";
import axios from "axios";
import moment from "moment";


export const BusinessContext = React.createContext();


export default class BusinessProvider extends Component {
  state = {
    userSignedIn: false,
    uid: null,

    personal: {
      full_name: "",
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

    future_appointments: [],
    available_appointments: [],
    booked_appointments: [],

    updateBusiness: data => this.setState({ business: data }), // PLACES API USES THIS

    business_logout: () => {
      firebase.auth().signOut();
      this.unsubscribe();
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);

      if (user && !this.state.userSignedIn) {
        user
          .getIdTokenResult()
          .then(token => token.claims.business ? true : false)
          .then(isBusiness => {
            if (!isBusiness) return;
            else {
              this.setState({
                userSignedIn: true,
                uid: user.uid,
                personal: {
                  full_name: user.displayName,
                  email: user.email,
                  phone: user.phoneNumber,
                  photo: user.photoURL
                }
              });
              this.initSnapshot();
              return this.state.uid;
            }
          })
          // .then(id => {
          //   if (!id) return;
          //   axios.get(`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/business/${id}/available`)
          //     .then(appts => this.setState({ future_appointments: appts.data })).then(() => console.log(this.state.future_appointments))
          //     .catch(err => console.log("error fetching business appointments", err));
          // })
          .catch(err => console.log("error", err));
      }
      
      else if (!user && this.state.userSignedIn) {
        this.setState({
          userSignedIn: false,
          uid: null,
          personal: {
            full_name: null,
            email: null,
            phone: null,
            photo: null
          }
        });
      }

      else return;
    });
  }

  initSnapshot = () => {
    this.unsubscribe = firebase
      .firestore().collection("_appointment_")
      .where("business_ref", "==", this.state.uid)
      .onSnapshot(snapshot => {
        const moar_appts = [];
        snapshot.docChanges().forEach(change => {
          const doc = change.doc.data();
          const docRefurbished = { ...doc, start: moment(doc.start).toDate(), end: moment(doc.end).toDate() };
          moar_appts.push(docRefurbished);
          // this.setState({ future_appointments: [...this.state.future_appointments, docRefurbished] });
        });
        this.setState({ future_appointments: moar_appts });
      });
  }


  render() {
    return (
      <BusinessContext.Provider value={this.state}>
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