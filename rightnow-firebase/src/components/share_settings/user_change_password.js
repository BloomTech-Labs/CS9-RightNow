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
    borderRadius: '3px',
    margin: '2px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white'
});

const Button = glamorous.button({
 
});


const UserChangePassword = () => {
    
    const showPassword = () => {
        let x = document.getElementById("MyInput");
        let y = document.getElementById("MyInput2");
        if (x.type === "password" && y.type === 'password') {
            console.log("hello");
            x.type = "text";
            y.type = "text";
        } else {
            x.type = "password";
            y.type = "password";
            console.log("hello password")
        } 
    }
    return (
        <Wrapper>
        <h3>Password</h3>
            <Label>Password</Label>
    
            <ChangePasswordInput type="password" placeholder="password" id="MyInput" />
            <Label>Re-Enter Password</Label>
            <ChangePasswordInput type="password" placeholder="enter password" id="MyInput2" />
            <Label>Show Password</Label>
            <ChangePasswordInput type="checkbox" onClick={showPassword} />
        </Wrapper>
    );
};

export default UserChangePassword;