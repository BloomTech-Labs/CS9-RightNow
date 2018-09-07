import React, { Component } from "react";
import glamorous from "glamorous";
import moment from "moment";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  IbanElement,
  IdealBankElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";

export const Darkness = glamorous.div({
  height: "100vh",
  width: "100vw",
  position: "fixed",
  background: "rgba(0, 0, 0, 0.65)",
  zIndex: 5,
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Modal = glamorous.div({
  height: "30vh",
  width: "30vw",
  zIndex: 0,
  borderRadius: "5px",
  background: "#353A50",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  "@media(max-width: 1550px)": {
    height: "60vh",
    width: "40vw"
  }
});

const createOptions = (fontSize, padding) => {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          zIndex: "7",
          '::placeholder': {
              color: '#aab7c4',
              background: "black",
            },
        },
        border: "1px solid black",
        invalid: {
          color: '#9e2146',
        },
      },
    };
   };
  
  const Button = glamorous.button({
    whiteSpace: "nowrap",
    border: 0,
    outline: 0,
    display: "inline-block",
    boxShadow: "0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)",
    color: "#fff",
    background: "#717584",
    borderRadius: "4px",
    fontSize: "15px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.025em",
    textDecoration: "none",
    transition: "all 150ms ease",
    width: "50%",
    padding: "2% 0",
    alignSelf: "flex-end",
    marginRight: "25%",

    ":hover": {
        color: "#fff",
        cursor: "pointer",
        backgroundColor: "rgb(97, 218, 251)",
        transform: "translateY(-1px)",
        boxShadow: "0 7px 14px rgba(50, 50, 93, .10), 0 3px 6px rgba(0, 0, 0, .08)",
    }
  });
  
  const StripeStyles = glamorous.div({
     width: "100%",
     background: "white",
     boxShadow: "rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px",
     padding: "7% 5%",
     borderRadius: "3px",
     marginTop: "3%",
  });

  const StripeStylesCard = glamorous.div({
     width: "94%",
     background: "white",
     boxShadow: "rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px",
     padding: "3% 0% 3% 3%",
     borderRadius: "3px",
     marginTop: "1.5%",
  });

  const AForm = glamorous.form({
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  })

  const ALabel = glamorous.label({
    color: "white",
    width: "90%",
    margin: "0 auto",
  })
  
  const ALabel2 = glamorous.label({
    color: "white",
    width: "33%",
    marginRight: "5%",
  })

  const CvcExpZip = glamorous.div({
    display: "flex",
    width: "90%",
    margin: "0 auto",
  })

  const Close = glamorous.div({
    color: "red",
    marginLeft: "95%",
    marginTop: "2%",
  })

  const PremiumBox = glamorous.div({
    margin: "0% auto",

  })
  
  const PremiumHeader = glamorous.div({
    color: "white",
    fontSize: "2rem",
    marginBottom: "3%",
    textAlign: "center",
  })

  const Premium = glamorous.div({
    color: "white",
    margin: "0% auto",
    marginBottom: "3%"
  })

  const Disclosure = glamorous.div({
    color: "white",
    margin: "0% auto",
    fontStyle: "italic",

  })

class StripeForm extends Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? "14px" : "18px"
    };
    window.addEventListener("resize", () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== "14px") {
        this.setState({ elementFontSize: "14px" });
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== "18px"
      ) {
        this.setState({ elementFontSize: "18px" });
      }
    });
  }

  handleSubmit = async e => {
    e.preventDefault();

    
    const token = await this.props.stripe
      .createToken()
      .then(({ token }) => token) // { stripeToken: token }
      .catch(err => console.log("error with stripe token\n", err));

    console.log("here's a token", token);
    axios
      .post("https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/business/stripe", {
        stripeToken: token
      })
      .then(res => console.log(res))
      .catch(err => console.log("error", err));
  };

  render() {
    console.log(this.props);
    return (
      <Darkness>
        <Modal>
            <Close onClick={() => this.props.busnContext.updateState({ display_payment_modal: false })} className="close"><i className="fas fa-times-circle"></i></Close>
            <PremiumBox>
                <PremiumHeader><span style={{color: "rgb(97, 218, 251)"}}>Sesho Premium</span></PremiumHeader>
                <Premium>Upgrade to <span style={{color: "rgb(97, 218, 251)"}}>Sesho Premium</span> for unlimited appointments!</Premium>
                <Premium>Subscribe now for only $10 per month.</Premium>
                <Disclosure>Sesho free is limited to 10 appointment postings per month.</Disclosure>
            </PremiumBox>
            <AForm onSubmit={() => this.handleSubmit()}>
                <ALabel>Card number<StripeStylesCard><CardNumberElement {...createOptions(this.state.elementFontSize)}/></StripeStylesCard></ALabel>
                <CvcExpZip><ALabel2>Expiration date<StripeStyles><CardExpiryElement {...createOptions(this.state.elementFontSize)} /></StripeStyles></ALabel2>
                <ALabel2>CVC<StripeStyles><CardCVCElement {...createOptions(this.state.elementFontSize)} /></StripeStyles></ALabel2>
                <ALabel2>Postal code<StripeStyles><PostalCodeElement {...createOptions(this.state.elementFontSize)}/></StripeStyles></ALabel2></CvcExpZip>
                <Button onClick={() => this.props.busnContext.updateState({ display_payment_modal: false })}>Pay</Button>
            </AForm>
        </Modal>
      </Darkness>
    );
  }
}

export default injectStripe(StripeForm);
