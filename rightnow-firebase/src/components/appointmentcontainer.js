import React, { Component } from 'react';

class Appointment extends Component {
    render() {
        return (
            <div>
                <h2>{this.state.props.title}</h2>
                <h3>{this.state.props.time}</h3>
            </div>
        );
    }
}


export default Appointment;