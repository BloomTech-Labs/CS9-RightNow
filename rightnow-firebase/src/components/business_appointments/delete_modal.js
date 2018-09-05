import React, { Component } from "react";
import glamorous from "glamorous";
import moment from "moment";


export const Darkness = glamorous.div({
  height: "100vh",
  width: "100vw",
  position: "fixed",
  background: "rgba(0, 0, 0, 0.65)",
  zIndex: 5,
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Modal = glamorous.div({
  height: "30vh",
  width: "30vw",
  zIndex: 6,
  borderRadius: "5px",
  background: "#EBEBEB",
  display: "flex",
  flexDirection: "column",

  "@media(max-width: 1550px)": {
    height: "40vh",
    width: "40vw"
  }
});

const Title = glamorous.div({
  width: "100%",
  height: "20%",
  fontFamily: "Raleway, sans-serif",
  fontSize: "1.5em",
  fontWeight: 600,
  color: "#EBEBEB",
  background: "rgba(190, 50, 50, 1)",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Content = glamorous.div({
  height: "100%",
  margin: "auto",
  padding: "0 2%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});

const Detail = glamorous.div({ color: "black" });

const ButtonContainer = glamorous.div({
  width: "100%",
  height: "30%",
  display: "flex",
  justifyContent: "flex-end",
});

const DeleteButton = glamorous.button({
  width: "25%",
	fontFamily: 'Raleway, sans-serif',
	margin: '2.5% 3%',
  padding: '1% 3%',
	color: '#EBEBEB',
	fontWeight: 800,
	fontSize: '1.3em',
	border: '3px solid rgba(190, 50, 50, 1)',
	borderRadius: '5px',
	backgroundColor: 'rgba(190, 50, 50, 1)',
	':hover': { color: 'rgba(190, 50, 50, 1)', backgroundColor: '#EBEBEB', cursor: 'pointer'  },
	':focus': { outline: "none", textDecoration: "none" }
});

const AbortButton = glamorous.button({
  width: "25%",
	fontFamily: 'Raleway, sans-serif',
	margin: '2.5% 3%',
  padding: '1% 3%',
	color: '#EBEBEB',
	fontWeight: 800,
	fontSize: '1.3em',
	border: '3px solid #353A50',
	borderRadius: '5px',
	backgroundColor: '#353A50',
	':hover': { cursor: 'pointer', backgroundColor: '#EBEBEB', color: "#353A50"  },
	':focus': { outline: "none", textDecoration: "none" }
});


export default class DeleteModal extends Component {
  render() {

    const { start, end, service, cost, customer_ref, is_available } = this.props.busnContext.selected_appointment;

    return (
      <Darkness>
        <Modal>
          <Title>Are you sure you want to delete this?</Title>

          <div style={{ height: "50%", margin: "2%" }}>
            <Content>
              <div style={{display: "flex", alignItems: "center"}}>
                  <i style={{ marginRight: "2%", marginTop: 0, color: "black" }} className="fas fa-briefcase"></i><Detail>{service}</Detail>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                  <i style={{ marginRight: "2%", marginTop: 0, color: "black" }} className="far icon fa-clock"></i><Detail>{`${moment(start).format("LLL")} - ${moment(end).format("h:mm A")}`}</Detail>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                  <i style={{ marginRight: "2%", marginTop: 0, color: "black" }} className={is_available ? "fas fa-user-times" : "fas icon fa-user-check"}></i><Detail>{!is_available && customer_ref ? customer_ref : "this appointment is still available"}</Detail>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                  <i style={{ marginRight: "2%", marginTop: 0, color: "black" }} className="far icon fa-money-bill-alt"></i><Detail>{cost}</Detail>
              </div>
            </Content>
          </div>

          <ButtonContainer>
            <AbortButton onClick={() => this.props.busnContext.updateState({ display_delete_modal: false })}>Abort</AbortButton>
            <DeleteButton onClick={() => this.props.busnContext.delete_appointment()}>Delete</DeleteButton>
          </ButtonContainer>

        </Modal>
      </Darkness>
    )
  }
}