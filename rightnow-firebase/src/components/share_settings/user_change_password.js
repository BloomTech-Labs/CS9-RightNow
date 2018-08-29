import React from 'react';
import glamorous from "glamorous";

const Wrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: "70px",
    border: "3px solid white",
    borderRadius: "5px",
    textAlign: "center",
    margin: "20px",
    color: 'black',
    backgroundColor: '#fff',
})

const Label = glamorous.label({
  display: "block",
    textAlign: "left",
  color: "lightgrey"
});

const ChangePasswordInput = glamorous.input({
    width: '100%',
    // padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    //border: 'none',
    // borderBottom: '2px solid red',
    height: "25px",
    fontSize: "18px"
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