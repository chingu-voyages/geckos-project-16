import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Icon,
  Segment,
  Form,
  Input,
} from "semantic-ui-react";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    over18: false,
    koreanResident: false,
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Container id="container">
        <Segment id="container-segment" textAlign="center">
          <h2>Sign Up Here</h2>
          <div id="social-media">
            <Button color="facebook">
              <Icon name="facebook" />
              Sign Up with Facebook
            </Button>
            <Button color="google plus">
              <Icon name="google" />
              Sign Up with Google
            </Button>
          </div>
          <div id="divider-container">
            <Divider horizontal id="divider-item">
              or
            </Divider>
          </div>
          <h2 id="signup-email-title">Sign Up with Your Email Address</h2>
          <div id="input-form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input
                  placeholder="First Name"
                  id="input"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Last Name"
                  id="input"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  type="email"
                  placeholder="Email"
                  id="input-email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  type="password"
                  placeholder="Password"
                  id="input"
                  name="password"
                  autoComplete="new-password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  error={this.state.passwordError || this.state.passwordMatchError}
                />
                <Form.Input
                  type="password"
                  placeholder="Confirm Password"
                  id="input"
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  error={this.state.confirmPasswordError || this.state.passwordMatchError}
                />
              </Form.Group>
              <div id="checkbox">
                <Form.Field inline>
                  <Input name="over18" type="checkbox" onClick={this.handleChange} />
                  <label>I am over 18 years of age</label>
                </Form.Field>
                <Form.Field inline>
                  <Input
                    name="koreanResident"
                    type="checkbox"
                    onClick={this.handleChange}
                  />
                  <label>I live in South Korea</label>
                </Form.Field>
              </div>
              <Form.Button
                positive
                id="login-button"
                type="submit"
                disabled={
                  !this.state.email ||
                  !this.state.firstName ||
                  !this.state.lastName ||
                  !this.state.password ||
                  !this.state.confirmPassword ||
                  !this.state.over18 ||
                  !this.state.koreanResident
                }
              >
                Sign Up
              </Form.Button>
            </Form>
          </div>
        </Segment>
      </Container>
    );
  }
}

export default SignUp;
