import React from 'react';
import glamorous from "glamorous";

const Wrapper = glamorous.div({
    padding: "40px",
    margin: "7%",
    border: "3px solid white",
    color: "black",
    backgroundColor: "#fff",
    boxShadow: "0 10px 6px -6px #777",
    borderRadius: "5px",
    textAlign: "center",
})

const Label = glamorous.label({
  display: "block",
    textAlign: "left",
    color: "lightgrey",
     padding: '1rem 0'
});

const ChangePasswordInput = glamorous.input({
    width: '100%',
    // padding: '12px 20px',
    padding: '8px 0',
    boxSizing: 'border-box',
    //border: 'none',
    // borderBottom: '2px solid red',
    fontSize: "18px",
    borderRadius: '2px'
});

// const showPassword = () => {
//     let x = document.getElementById("myInput");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password";
//     } 
// }

const UserChangePassword = () => {
    return (

        <Wrapper>
        <h3>Password</h3>
            <Label>Password</Label>
            <ChangePasswordInput type="password" placeholder="password" id="MyInput" />
            <Label>Re-Enter Password</Label>
            <ChangePasswordInput type="password" placeholder="enter password" id="MyInput" />        
        </Wrapper>
    );
};

export default UserChangePassword;