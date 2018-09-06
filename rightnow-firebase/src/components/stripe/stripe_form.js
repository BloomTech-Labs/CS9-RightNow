import React, { Component } from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import glamorous from "glamorous";


/*

    input,
    .StripeElement {
      display: block;
      margin: 10px 0 20px 0;
      max-width: 500px;
      padding: 10px 14px;
      font-size: 1em;
      font-family: 'Source Code Pro', monospace;
      box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
      border: 0;
      outline: 0;
      border-radius: 4px;
      background: white;
    }

    input::placeholder {
      color: #aab7c4;
    }

    input:focus,
    .StripeElement--focus {
      box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
      -webkit-transition: all 150ms ease;
      transition: all 150ms ease;
    }

    .StripeElement.IdealBankElement,
    .StripeElement.PaymentRequestButton {
      padding: 0;
    }


*/

const Label = glamorous.label({
  color: "#6b7c93",
  fontWeight: 300,
  letterSpacing: "0.025em",
});

const Button = glamorous.button({
  whiteSpace: "nowrap",
  border: 0,
  outline: 0,
  display: "inline-block",
  height: "40px",
  lineHeight: "40px",
  padding: "0 14px",
  boxShadow: "0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)",
  color: "#fff",
  borderRadius: "4px",
  fontSize: "15px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.025em",
  backgroundColor: "#6772e5",
  textDecoration: "none",
  // -webkit-transition: all 150ms ease,
  transition: "all 150ms ease",
  marginTop: "10px",

  ":hover": {
      color: "#fff",
      cursor: "pointer",
      backgroundColor: "#7795f8",
      transform: "translateY(-1px)",
      boxShadow: "0 7px 14px rgba(50, 50, 93, .10), 0 3px 6px rgba(0, 0, 0, .08)",
  }
});

const Form = glamorous.form({
  marginBottom: "40px",
  paddingBottom: "40px",
  borderBottom: "3px solid #e6ebf1",
  maxWidth: "500px"
});


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
      <Form>
        <script>
          {`
            .StripeElement {
              display: block;
              margin: 10px 0 20px 0;
              max-width: 500px;
              padding: 10px 14px;
              font-size: 1em;
              font-family: 'Source Code Pro', monospace;
              box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
              border: 0;
              outline: 0;
              border-radius: 4px;
              background: white;
            }
        
            // input::placeholder {
            //   color: #aab7c4;
            // }
        
            // input:focus,
            .StripeElement--focus {
              box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
              -webkit-transition: all 150ms ease;
              transition: all 150ms ease;
            }
        
            .StripeElement.IdealBankElement,
            .StripeElement.PaymentRequestButton {
              padding: 0;
            }
          `}
        </script>
        <Label>Card details
          <CardElement {...createOptions(this.state.elementFontSize)} />
        </Label>
        <Button>Pay</Button>
      </Form>
    )
  }
}


export default injectStripe(StripeForm);