import React, { Component } from "react";
import "./appointmentDetailsStyles.css";
import moment from 'moment';
import axios from "axios";

class AppointmentDetails extends Component {
    constructor() {
		super();
    } 
    
    onDeleteClick = () => {
        // console.log(this.props.busnContext.selectedItem.id)
        axios.delete(`https://us-central1-cs9-rightnow.cloudfunctions.net/haveAsesh/appointment/${this.props.busnContext.selectedItem.id}`)
            .then(res => {
                console.log(res, "success");
            })
            .catch(err => err)
        }

    render() {
        return (
            <div>
                <div className="Detail__Container">
                    <div className='content'>
                            <div onClick={() => this.onDeleteClick()}><i class="far delete fa-trash-alt"></i></div>
                            <h3 className="Detail__header">Sesh Details</h3>
                        <div className="Detail__content">
                            <div>
                                <i class="fas icon fa-cut"></i><div className="apptProps">{this.props.busnContext.selectedItem.service}</div>
                            </div>
                            <div><i class="far icon fa-clock"></i><div className="apptProps">{`${moment(this.props.busnContext.start).format('LLL')} --- ${moment(this.props.busnContext.end).format('LLL')}`}</div></div>
                            {/* <div><i class="far icon fa-calendar-plus"></i><div className="apptProps">{this.props.busnContext.service}</div></div> */}
                            <div>
                                <i class="fas icon fa-user-check"></i><div className="apptProps">{this.props.busnContext.personal.full_name}</div> {/*{this.props.busnContext.selectedItem.customer_ref} */}
                            </div>
                            <div>
                                <i class="far icon fa-money-bill-alt"></i><div className="apptProps">{this.props.busnContext.selectedItem.cost}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppointmentDetails;