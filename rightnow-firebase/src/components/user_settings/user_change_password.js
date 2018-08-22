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
            Old Password
            <ChangePasswordInput/>
            New Password
            <ChangePasswordInput/>
        </div>
    );
};
export default UserChangePassowrd;