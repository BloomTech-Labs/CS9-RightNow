import React, {Component} from 'react';
import glamorous from "glamorous";

const CompanyInput = glamorous.input({
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid red',
    fontSize: '32px'
});

class CompanyInfo extends Component {
    render() {
        return (
            <div>
                <h3>Company Name</h3>
                <CompanyInput/>
                <h3>Company Address</h3>
                <CompanyInput/>
            </div>
        );
    }
}

export default CompanyInfo;