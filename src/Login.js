import React, { Component, Fragment } from "react";
import { Button, Container, Divider, Icon, Segment, Form } from "semantic-ui-react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Temporary placeholder code
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <Fragment>
        <Container id="login-container">
          <Segment id="login-container-segment" textAlign="center">
            <h2>Log In</h2>
            <div id="login-social-media">
              <Button color="facebook">
                <Icon name="facebook" /> Log In with Facebook
              </Button>
              <Button color="google plus">
                <Icon name="google" /> Log In with Google
              </Button>
            </div>
            <div id="login-divider-container">
              <Divider horizontal id="login-divider-item">
                or
              </Divider>
            </div>
            <div id="login-input-form">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    placeholder="Email"
                    id="login-input-email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    placeholder="Password"
                    id="login-input-password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button id="login-submit-button">Login</Button>
              </Form>
            </div>
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
