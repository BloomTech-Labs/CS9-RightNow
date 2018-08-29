import React from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  padding: "70px",
  border: "3px solid green",
  borderRadius: "25px",
  textAlign: "center",
  margin: "20px",
  
});

const LeftSide = glamorous.div({
    width: '50%'
});

const RightSide = glamorous.div({
    width: '50%'
})

const ContactForm = () => {
    
    return (
        <Container>
        <h3>Contact Information</h3>
        <LeftSide>
            <label>First Name</label>
                <input type="text" />
            <label>Phone Number</label>
                <input type="text" />
            <label>Location</label>
                <input type="text" />
        </LeftSide>
            <RightSide>
                <label>Last Name</label>
                <input type="text" />
                <label>Email</label>
                <input type = "text"/>
            </RightSide>
        </Container>
    )
}

export default ContactForm;