import React from 'react';
import glamorous from "glamorous";

const Wrapper = glamorous.div({
    padding: "70px",
    border: "3px solid green",
    borderRadius: "25px",
    textAlign: "center",
    margin: "20px"
})

const ChangePasswordInput = glamorous.input({
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid red',
    fontSize: '32px'
});
const UserChangePassword = () => {
    return (
        <Wrapper>
            <h3>Password</h3>
            <label>Password</label>
            <input type="text" placeholder="password" />
            <label>Re-Enter Password</label>
            <input type = "text" placeholder = "enter password" />
        </Wrapper>
    );
};
export default UserChangePassword;