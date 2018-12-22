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
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    placeholder="Email"
                    id="input"
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    placeholder="Password"
                    id="input"
                    name="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button positive id="login-button">
                  Log In
                </Button>
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
