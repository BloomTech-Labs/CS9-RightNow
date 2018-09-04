import React, { Component } from "react";
import "./quickSearchStyles.css";
import { Clock } from '../industry_view/selection_results'
class QuickSearch extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            day: new Date().toLocaleTimeString(),

        };
    } 

    componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick = () => {
		this.setState({ time: new Date().toLocaleTimeString() });
    };
    
    render() {
        return (
            <div className="QuickSearch" >
                <div className="quickSearchLabels">
                    <div className="qslabel qs">Select by industry:</div>
                    <div className="qslabel activeLabel">All</div>
                    <div className="qslabel">Haircuts</div>
                    <div className="qslabel">Dog Walking</div>
                    <div className="qslabel">Beauty & Nails</div>
                    <div className="qslabel">Available Today</div>
                    <div className="qslabel">Auto Services</div>
                    <div className="time">{this.state.time}</div>
                </div>
                <div className="quickSearchLabels ps">
                    <div className="qslabel qs">Sort by time:</div>
                    <div className="qslabel activeLabel">All</div>
                    <div className="qslabel">1 Hour</div>
                    <div className="qslabel">1.5 Hours</div>
                    <div className="qslabel">2 Hours</div>
                    <div className="qslabel">2.5 Hours</div>
                    <div className="qslabel">3 Hours</div>
                    <div className="qslabel">4+ Hours</div>
                    <div className="time">{this.state.day}</div>
                </div>
            </div>
        );
    }
}

export default QuickSearch;