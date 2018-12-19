import React, { Component, Fragment } from "react";
import { Button, Container, Divider, Icon, Segment, Form } from "semantic-ui-react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Container id="container">
          <Segment id="container-segment" textAlign="center">
            <h2>Log In</h2>
            <div id="social-media">
              <Button color="facebook">
                <Icon name="facebook" /> Log In with Facebook
              </Button>
              <Button color="google plus">
                <Icon name="google" /> Log In with Google
              </Button>
            </div>
            <div id="divider-container">
              <Divider horizontal id="divider-item">
                or
              </Divider>
            </div>
            <div id="input-form">
              <Form>
                <Form.Group widths="equal">
                  <Form.Input fluid placeholder="Email" id="input" />
                  <Form.Input fluid placeholder="Password" id="input" />
                </Form.Group>
              </Form>
            </div>
            <Button positive id="login-button">
              Log In
            </Button>
            <h2>
              No account? <a href="#">Sign up here</a>
            </h2>
          </Segment>
        </Container>
      </Fragment>
    );
  }
}

export default Login;
