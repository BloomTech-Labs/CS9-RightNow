import React, { Component } from "react";
import "./appointmentDetailsStyles.css";
import glamorous from "glamorous";


const Container = glamorous.div({
    alignSelf: "flex-start",
    width: "100%",
    height: "35%",
    color: "#EBEBEB",
    background: "#353A50",
    border: "1px solid #353A50",
});


const TrashCan = glamorous.div({
    position: "relative",
    top: "5",
    right: "5"
});

class AppointmentDetails extends Component {
    constructor() {
		super();
    } 
    
    onDeleteClick = () => {
        console.log(this.props)
        // axios... for delete appointment function
        // app.delete("/appointment/:id", (req, res) => {
        //     db
        //     .collection(APPT)
        //     .doc(req.params.id)
        //     .delete()
        //     .then(() => res.send("success"))
        //     .catch(err => res.send("error"));
        // });
    }

    render() {
        return (
            <Container>


                <div className='content'>

                        <TrashCan onClick={() => this.onDeleteClick()} className="far delete fa-trash-alt"></TrashCan>
                        <h3 className="Detail__header">Sesh Details</h3>
                        

                    <div className="Detail__content">
                        <div>
                            <i class="fas icon fa-cut"></i><div className="apptProps"> this.target.props.service</div>
                        </div>
                        <div>
                            <i class="far icon fa-clock"></i><div className="apptProps">this.target.props.startTime - this.props.endTime</div>
                        </div>
                        <div>
                            <i class="far icon fa-calendar-plus"></i><div className="apptProps">this.target.props.day</div>
                        </div>
                        <div>
                            <i class="fas icon fa-user-check"></i><div className="apptProps">this.target.props.customer.name</div> {/* user-times */}
                        </div>
                        <div>
                            <i class="far icon fa-money-bill-alt"></i><div className="apptProps">this.target.props.cost</div>
                        </div>
                    </div>

                </div>


            </Container>
        );
    }
}

export default AppointmentDetails;