import React, { Component } from "react";
import {
  Container,
  Modal,
  Header,
  NormalSignIn,
  Input,
  Button,
  Or,
  OAuthContainer,
  OAuthButton,
  AuthLogo,
  NewUser
} from "./login_modal_styles";


export default class SignInModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        <Modal>

          <Header>Please sign in.</Header>
          <NormalSignIn>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign In</Button>
          </NormalSignIn>

          <Or><span style={{ backgroundColor: "white", padding: "0 3%" }}>or</span></Or>

          <OAuthContainer>
            <OAuthButton>
              <AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
              Login with Google
            </OAuthButton>
            <OAuthButton>
              <AuthLogo src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" />
              Login with Facebook
            </OAuthButton>
          </OAuthContainer>
          
          <NewUser>
            <h1 style={{ marginRight: "2%" }}>Don't have an account?</h1>
            <Button style={{ padding: "1.5%", fontSize: "1.5em" }}>Register Here</Button>
          </NewUser>

        </Modal>
        {/* <CloseX onClick={() => this.props.closeModal()}>x</CloseX> */}
      </Container>
    )
  }
}