import React, { Component } from 'react';

class Appointment extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            time: ''
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <h3>{this.state.time}</h3>
            </div>
        );
    }
}


export default Appointment;