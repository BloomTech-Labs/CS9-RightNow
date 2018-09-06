import React, { Component } from "react";
// import "./appointmentDetailsStyles.css";
import axios from "axios";
import moment from "moment";
import {
    Container,
    Header,
    Title,
    TrashCan,
    Content,
    Detail,
} from "./appt_details_styles";



class AppointmentDetails extends Component {

    render() {
        console.log('busnContxt:', this.props.busnContext)
        if (this.props.busnContext.selected_appointment) {

            const { start, end, service, cost, description, customer_ref, is_available } = this.props.busnContext.selected_appointment;

            return (
            
                <Container>

                        <Header>
                            <Title>Sesh Details</Title>
                            <TrashCan onClick={() => this.props.busnContext.updateState({ display_delete_modal: true })}><i className="far delete fa-trash-alt"></i></TrashCan>
                        </Header>

                        <Content>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <i style={{ marginRight: "2%", marginTop: 0, color: "#353A50" }} className="fas fa-briefcase"></i><Detail>{service}</Detail>
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <i style={{ marginRight: "2%", marginTop: 0, color: "#353A50" }} className="far icon fa-clock"></i><Detail>{`${moment(start).format("LLL")} - ${moment(end).format("h:mm A")}`}</Detail>
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <i style={{ marginRight: "2%", marginTop: 0, color: "#353A50" }} className={is_available ? "fas fa-user-times" : "fas icon fa-user-check"}></i><Detail>{!is_available && customer_ref ? customer_ref : "this appointment is still available"}</Detail> {/* user-times */}
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <i style={{ marginRight: "2%", marginTop: 0, color: "#353A50" }} className="far icon fa-money-bill-alt"></i><Detail>{cost}</Detail>
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <i style={{ marginRight: "2%", marginTop: 0, color: "#353A50" }} className="far fa-sticky-note"></i><Detail>{description}</Detail>
                            </div>
                        </Content>

                </Container>

            );
        } else return <div></div>
    }
}

export default AppointmentDetails;