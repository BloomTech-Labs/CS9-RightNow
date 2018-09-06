import glamorous from "glamorous";

export const Wrapper = glamorous.div({
    padding: "40px",
    margin: "7%",
    border: "3px solid white",
    color: "black",
    backgroundColor: "#fff",
    //boxShadow: "0 10px 6px -6px #777",
    borderRadius: "5px",
    textAlign: "center",
})

export const PwLabel = glamorous.label({
  display: "block",
    textAlign: "left",
    color: "lightgrey",
     padding: '1rem 0'
});

export const ChangePasswordInput = glamorous.input({
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

// const UserChangePassword = () => {
    
//     const showPassword = () => {
//         let x = document.getElementById("MyInput");
//         let y = document.getElementById("MyInput2");
//         if (x.type === "password" && y.type === 'password') {
//             console.log("hello");
//             x.type = "text";
//             y.type = "text";
//         } else {
//             x.type = "password";
//             y.type = "password";
//             console.log("hello password")
//         }
//     }
// }
