import React, { Component } from 'react';

class Appointment extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     title: '',
        //     time: ''
        // }
    }
    
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.time}</h3>
            </div>
        );
    }
}


export default Appointment;