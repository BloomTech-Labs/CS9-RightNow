import React from 'react'
import glamorous from "glamorous";

const UserInput = glamorous.input({
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid red',
    fontSize: '32px'
});
const emailPassword = () => {
    return (
        <div>
            <h3>Email</h3>
            <UserInput/>
            <h3>Phone</h3>
            <UserInput />
        </div>
    );
};
export default emailPassword;