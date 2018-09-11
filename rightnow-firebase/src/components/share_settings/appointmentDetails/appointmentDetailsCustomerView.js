import React, { Component } from "react";
import "./shareAppointmentDetailsStyles.css";

class AppointmentDetails extends Component {
    constructor(props) {
		super(props);
    } 
    
    onDeleteClick = () => {
        // axios... for delete appointment function
        // app.delete("/appointment/:id", (req, res) => {
        //     db
        //     .collection(APPT)
        //     .doc(req.params.id)
        //     .delete()
        //     .then(() => res.send("success"))
        //     .catch(err => res.send("error"));
        // });
    };

    render() {
        return (
            <div>
                <div className="Detail__Container">
                    <div className='content'>
                            {/*<i onClick={this.onDeleteClick()} class="far delete fa-trash-alt"></i>*/}
                            <h3 className="Detail__header">Sesh Details</h3>
                        <div className="Detail__content">
                            <div>
                                <i class="fas icon fa-cut"></i><div className="apptProps"> {this.props.service}</div>
                            </div>
                            <div>
                                <i class="far icon fa-clock"></i><div className="apptProps">{this.props.time}</div>
                            </div>
                            <div>
                                <i class="far icon fa-calendar-plus"></i><div className="apptProps">{this.props.day}</div>
                            </div>
                            <div>
                                <i class="fas icon fa-user-check"></i><div className="apptProps">{this.props.company}</div> {/* user-times */}
                            </div>
                            <div>
                                <i class="far icon fa-money-bill-alt"></i><div className="apptProps">{this.props.money}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppointmentDetails;