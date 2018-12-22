import React, { Component, Fragment } from "react";
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
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      over18: false,
      koreanResident: false,
      passwordError: false,
      confirmPasswordError: false,
      passwordMatchError: false,
      formError: false,
    };
  }

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

    // Variable to track global error state of the form
    let error = false;

    // Form validation for password length
    if (this.state.password.length < 8) {
      this.setState({ passwordError: true });
      error = true;
    } else {
      this.setState({ passwordError: false });
    }

    // Form validation for confirmed password length
    if (this.state.confirmPassword.length < 8) {
      this.setState({ confirmPasswordError: true });
      error = true;
    } else {
      this.setState({ confirmPasswordError: false });
    }

    // Form validation for password and confirmed password matching
    if (!this.state.password === this.state.confirmPassword) {
      this.setState({ passwordMatchError: true });
      error = true;
    } else {
      this.setState({ passwordMatchError: false });
    }

    // Check whether form error is set to true and, if so, return to end submit form execution
    if (error) {
      this.setState({ formError: true });
      return;
    }

    // If no form errors found then proceed to submit new account details
    this.setState({ formError: false });
  };

  render() {
    return (
      <Fragment>
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
                    type="text"
                    placeholder="First Name"
                    id="input"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    type="text"
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
                    error={
                      this.state.confirmPasswordError || this.state.passwordMatchError
                    }
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
      </Fragment>
    );
  }
}

export default SignUp;
