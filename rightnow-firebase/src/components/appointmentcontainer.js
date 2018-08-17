import React, { Component } from 'react';
import Appointment from './appointment';

class AppointmentContainer extends Component {
     
    render() {
        return (
            <div>
                Test
             <Appointment title ='test' time = '12:00PM' />
             <Appointment title = 'test2' time = '12:30PM' />
             <Appointment title = 'test3' time = '12:45PM' />
            </div>
        );
    }
}

export default AppointmentContainer;