import React, { Component } from "react";
import { Elements } from "react-stripe-elements";
import StripeModal from "./StripeModal";

class PaymentForm extends Component {
 
  render() {
    return (
      <Elements>
        <StripeModal busnContext={this.props.busnContext} />
      </Elements>

    )
  }
}

export default PaymentForm;

