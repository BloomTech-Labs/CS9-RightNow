import React from 'react';
import glamorous from "glamorous";

const ChangePasswordInput = glamorous.input({
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid red',
    fontSize: '32px'
});
const UserChangePassowrd = () => {
    return (
        <div>
            <h3> Old Password </h3>
            <ChangePasswordInput/>
            <h3> New Password </h3>
            <ChangePasswordInput/>
        </div>
    );
};
export default UserChangePassowrd;