import React, { Component } from 'react';
import './appointmentDetailsStyles.css';
import moment from 'moment';

class AppointmentDetails extends Component {
	constructor() {
		super();
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
					<div className="content">
						<i onClick={this.onDeleteClick()} class="far delete fa-trash-alt" />
						<h3 className="Detail__header">Sesh Details</h3>
						<div className="Detail__content">
							<div>
								<i class="fas icon fa-cut" />
								<div className="apptProps">{this.props.busnContext.selectedItem.service}</div>
							</div>
							<div>
								<i class="far icon fa-clock" />
								<div className="apptProps">{`${moment(this.props.busnContext.start).format(
									'LLL'
								)} --- ${moment(this.props.busnContext.end).format('LLL')}`}</div>
							</div>
							{/* <div><i class="far icon fa-calendar-plus"></i><div className="apptProps">{this.props.busnContext.service}</div></div> */}
							<div>
								<i class="fas icon fa-user-check" />
								<div className="apptProps">{this.props.busnContext.selectedItem.customer_ref}</div>{' '}
								{/* user-times */}
							</div>
							<div>
								<i class="far icon fa-money-bill-alt" />
								<div className="apptProps">{this.props.busnContext.selectedItem.cost}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AppointmentDetails;
