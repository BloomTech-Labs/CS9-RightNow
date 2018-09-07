import glamorous from "glamorous";

export const Container = glamorous.div({
    border: '4px solid black',
    padding: "10px",
    width: "100%",
    height: "80vh",
    marginBottom: "1%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
});

export const LeftSide = glamorous.div({
    //border: '4px solid black',
    display: 'flex',
    flexDirection: 'column'
});

// export const RightSide = glamorous.div({
//     border: "4px solid black"
// });

export const InputField = glamorous.input({
    width: '100%',
    height: '15px'
})

export const Bottom = glamorous.div({
    width: '50%',
    border: "4px solid black"
});

export const Wrapper = glamorous.div({
    display: 'flex',

})

export const Button = glamorous.button({
    width: '40%'
});

