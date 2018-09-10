// import 'rc-select/assets/index.css';
import firebase from '../../firebase/firebase';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar_style.css';
import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
// import Select from 'rc-select';
import iziToast from 'izitoast';

// Calendar.setLocalizer(Calendar.momentLocalizer(moment));
Calendar.momentLocalizer(moment);

const today = new Date(moment());
const minTime = new Date(moment().hour(6).minute(0));
const maxTime = new Date(moment().hour(23).minute(59)); // INCLUSIVE

const formats = {
	eventTimeRangeFormat: ({ start, end }) => moment(start).format('hh:mm')
};

// iziToast notification
const iziToastNotification = (event) => {
	// if (type === 'customer') {
	// 	iziToast.info({
	// 		titleSize: '1.3em',
	// 		messageSize: '1em',
	// 		closeOnClick: true,
	// 		position: 'bottomRight',
	// 		title: `You're all booked!`,
	// 		message: 'Your appointment has been booked!'
	// 	});
	// }
	// if (type === 'business') {
	iziToast.warning({
		titleSize: '1.3em',
		messageSize: '1em',
		closeOnClick: true,
		timeout: 15000,
		position: 'bottomRight',
		title: `New booking!`,
		message: `${moment(event.start).format('LLL')}`
	});
	// }
};

const propGetter = (event, start, end, isSelected) => {
	let newStyle = {
		backgroundColor: 'rgba(60, 70, 100, 0.95)', // "#70768f",
		color: 'white',
		borderRadius: '5px',
		border: '2px solid black'
	};

	if (!event.is_available) {
		// if newly booked appointment
		if (event.new_appointment) {
			iziToastNotification(event);
			firebase
				.firestore()
				.collection('_appointment_')
				.doc(event.id)
				.update({ new_appointment: false })
				.then(() => console.log('successful update'))
				.catch((err) => console.log('error updating appointment', err));
		}
		// if appointment was never checked/clicked
		if (!event.new_apptChecked) {
			newStyle.color = 'yellow';
		}
		// if appointment was selected
		if (isSelected) {
			newStyle.color = 'white';
			firebase
				.firestore()
				.collection('_appointment_')
				.doc(event.id)
				.update({ new_apptChecked: true })
				.then(() => console.log('successful update'))
				.catch((err) => console.log('error updating appointment', err));
		}
	}

	if (event.is_available === false) {
		newStyle.backgroundColor = 'rgba(190, 50, 50, 0.95)'; // "#c95050"
		// newStyle.color = 'yellow';
	}

	return {
		// className: "",
		style: newStyle
	};
};

export default class BusnCalendar extends Component {
	apptSelect = (data) => {
		this.props.busnContext.updateState({ selected_appointment: data });
		const { start, end } = data;
		console.log(moment(start).format('LLL'), ' --- ', moment(end).format('LLL'));
		console.log('\n\n', data);
	};

	render() {
		return (
			<div>
				{/* {console.log(this.props.busnContext.appointments, 'Hi Henry')} */}

				<Calendar
					id="calendar"
					formats={formats}
					defaultDate={today}
					defaultView="week"
					events={this.props.busnContext.appointments}
					onSelectEvent={(details) => {
						this.apptSelect(details);
					}}
					step={15} // 6 steps * 10 timeslots = 60min intervals for inter-week
					timeslots={4}
					min={minTime}
					max={maxTime}
					style={{ height: '100vh' }}
					eventPropGetter={propGetter}
				/>
			</div>
		);
	}
}
