import React, { Component } from "react";
import {
  Container,
  CalendarWrapper,
  ApptsWrapper,
  PrimaryWrapper
} from "./busn_appts_style";
import PostAppointment from "./post_availability";
import Calendar from "./calendar";
import BusnNav from "./busn_nav";
import { Redirect, withRouter } from "react-router-dom";
import { BusinessContext } from "../../context/businessContext";
import AppointmentDetails from "../appointmentDetails/appointmentDetailsCustomerView";
import DeleteModal from "./delete_modal";
import PaymentForm from "../_Payment-Form/PaymentForm";
import { StripeProvider } from "react-stripe-elements";
import { configs } from "../../environment";

class BusnApptsView extends Component {
	state = {
		delete_modal: false,
		isBusiness: true
	};

	render() {
		return (
			<BusinessContext.Consumer>
				{(value) => {
					if (this.props.value.userSignedIn === false) {
						return <Redirect to="/biz-account" />;
					}

          return (
            <StripeProvider apiKey={configs.STRIPE_API_KEY}>
              <PrimaryWrapper>
                <BusnNav
                  logout={() => value.business_logout()}
                  updateState={data => value.updateState(data)}
                />

                <Container>
                  <CalendarWrapper>
                    <Calendar busnContext={value} />
                  </CalendarWrapper>
                  <ApptsWrapper>
                    <PostAppointment busnContext={value} />
                    <AppointmentDetails busnContext={value} />
                  </ApptsWrapper>
                </Container>

                {value.display_delete_modal ? <DeleteModal busnContext={value} /> : null}
								{value.display_payment_modal ? <PaymentForm busnContext={value} /> : null}
              </PrimaryWrapper>
            </StripeProvider>
          )
        }}
      </BusinessContext.Consumer>
    );
  }
}

export default withRouter(BusnApptsView);
