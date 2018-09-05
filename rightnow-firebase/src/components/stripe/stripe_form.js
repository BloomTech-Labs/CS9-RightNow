import React, { Component } from "react";
import { injectStripe, CardElement } from "react-stripe-elements";


const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};



class StripeForm extends Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({elementFontSize: '14px'});
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({elementFontSize: '18px'});
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.stripe.createToken({ name: 'Jenny Rosen' })
      .then(({token}) => console.log('Received Stripe token:', token))
      .catch(err => console.log("error with stripe token\n", err));
  }

  render() {
    return (
      <form>
        <label>Card details
          <CardElement {...createOptions(this.state.elementFontSize)} />
        </label>
        <button>Pay</button>
      </form>
    )
  }
}


export default injectStripe(StripeForm);