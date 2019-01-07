import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Icon,
  Segment,
  Form,
  Input,
  Message,
} from "semantic-ui-react";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    email: "",
    contactName: "",
    password: "",
    confirmPassword: "",
    passwordsMatch: null,
    isAgreed: false,
    wasSuccessful: 0,
  };

  comparePasswords = () => {
    const { password, confirmPassword } = this.state;
    if (!password || !confirmPassword) return;
    this.setState({ passwordsMatch: password === confirmPassword });
  };

  handleChange = e => {
    const { type, name, checked, value } = e.target;
    this.setState(
      { [name]: type === "checkbox" ? checked : value },
      this.comparePasswords
    );
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    const { contactName, password, email } = this.state;
    const url = "http://localhost:4000/users";
    try {
      const call = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactName,
          email,
          password,
        }),
      });
      const response = await call.json();
      this.setState({ wasSuccessful: 1 });
    } catch (err) {
      this.setState({ wasSuccessful: 2 });
      console.log(err);
    }
  };

  render() {
    const {
      contactName,
      email,
      password,
      confirmPassword,
      passwordsMatch,
      isAgreed,
      wasSuccessful,
    } = this.state;
    return (
      <Container id="container">
        <Segment color="pink" id="container-segment" textAlign="center">
          <Form
            success={wasSuccessful === 1}
            error={wasSuccessful === 2}
            onSubmit={this.handleSubmit}
          >
            <Form.Group widths="equal">
              <Form.Input
                placeholder="Full Name"
                name="contactName"
                value={contactName}
                onChange={this.handleChange}
              />
              <Form.Input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Input
                label={{
                  icon: passwordsMatch ? "lock" : "lock open",
                  color: passwordsMatch ? "green" : "red",
                }}
                labelPosition="right corner"
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="new-password"
                value={password}
                onChange={this.handleChange}
                onBlur={this.comparePasswords}
                error={this.state.passwordError || this.state.passwordMatchError}
              />
              <Input
                label={{
                  icon: passwordsMatch ? "lock" : "lock open",
                  color: passwordsMatch ? "green" : "red",
                }}
                labelPosition="right corner"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={this.handleChange}
                onBlur={this.comparePasswords}
                error={this.state.confirmPasswordError || this.state.passwordMatchError}
              />
            </Form.Group>
            <Form.Checkbox
              inline
              required
              name="isAgreed"
              type="checkbox"
              onClick={this.handleChange}
              label="I agree to the Listing Policies"
            />
            <Form.Button
              positive
              id="login-button"
              type="submit"
              disabled={!email || !contactName || !passwordsMatch || !isAgreed}
            >
              Sign Up
            </Form.Button>
            <Message
              hidden={!wasSuccessful}
              success={wasSuccessful === 1}
              error={wasSuccessful === 2}
              header={
                wasSuccessful === 1
                  ? "Success, you're good to go"
                  : "Error, something went wrong"
              }
            />
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default SignUp;

{
  /* <Container id="container">
  <Segment color="pink" id="container-segment" textAlign="center">
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
      <Form
        success={wasSuccessful === 1}
        error={wasSuccessful === 2}
        onSubmit={this.handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Full Name"
            className="input"
            name="contactName"
            value={contactName}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={this.handleChange}
            error={this.state.passwordError || this.state.passwordMatchError}
          />
          <Form.Input
            type="password"
            placeholder="Confirm Password"
            className="input"
            name="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={this.handleChange}
            error={this.state.confirmPasswordError || this.state.passwordMatchError}
          />
        </Form.Group>
        <div id="checkbox">
          <Form.Field inline>
            <Input name="isAgreed" type="checkbox" onClick={this.handleChange} />
            <label>
              I Agree to the <Link to="/listingpolicy">Listing Policies</Link>
            </label>
          </Form.Field>
        </div>
        <Form.Button
          positive
          id="login-button"
          type="submit"
          disabled={
            !email || !contactName || !password || !confirmPassword || !isAgreed
          }
        >
          Sign Up
        </Form.Button>
        <Message
          success
          header="Form Completed"
          content="You're all signed up for the newsletter"
        />
      </Form>
    </div>
  </Segment>
</Container> */
}
