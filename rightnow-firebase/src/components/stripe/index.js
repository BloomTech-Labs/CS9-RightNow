import React, { Component } from "react";
import { Elements } from "react-stripe-elements";
import StripeForm from "./stripe_form";


export default class Stripey extends Component {
  render() {
    return (
      <Elements>
        <StripeForm />
      </Elements>
    )
  }
}