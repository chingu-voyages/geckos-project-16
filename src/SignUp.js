import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Segment,
  Form,
  Input,
  Message,
  Checkbox,
  Header,
} from "semantic-ui-react";
import "./SignUp.css";

const values = {
  email: "",
  contactName: "",
  password: "",
  confirmPassword: "",
  isAgreed: false,
};

class SignUp extends Component {
  state = {
    ...values,
    states: {
      email: null,
      contactName: null,
      password: null,
      confirmPassword: null,
      isAgreed: null,
    },
    passwordsMatch: null,
    passwordsAccept: null,
    successStatus: null,
    errorStatus: null,
    isProcessing: false,
  };

  comparePasswords = () => {
    const { password, confirmPassword, passwordsMatch } = this.state;
    const isOneEmpty = !password || !confirmPassword;
    if (isOneEmpty && passwordsMatch === null) return;
    isOneEmpty || password.length !== confirmPassword.length
      ? this.setState({ passwordsMatch: null })
      : this.setState({ passwordsMatch: password === confirmPassword });
  };

  handleSignUp = async () => {
    try {
      const { contactName, password, email } = this.state;
      const url = "http://localhost:4000/users";
      const call = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactName,
          email,
          password,
        }),
      });
      const user = await call.json();
      console.log(user);
      this.setState({ successStatus: true, ...values, isProcessing: false });
    } catch (err) {
      this.setState({ errorStatus: true, isProcessing: false });
      console.log(err);
    }
  };

  handleChange = (e, { name, checked, value }) => {
    this.setState(
      { [name]: name === "isAgreed" ? checked : value },
      this.comparePasswords
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true }, () => setTimeout(this.handleSignUp, 3000));
  };

  render() {
    const {
      contactName,
      email,
      password,
      confirmPassword,
      passwordsMatch,
      isAgreed,
      successStatus,
      errorStatus,
      isProcessing,
    } = this.state;
    const [pwIcon, pwColor] = passwordsMatch ? ["lock", "green"] : ["lock open", "red"];
    return (
      <Container className="signup-container">
        <Segment inverted color="pink" textAlign="center">
          <Segment>
            <Header as="h1" color="violet" content="Create an Account" dividing />
            <Form
              loading={isProcessing}
              className="signup-form"
              success={successStatus}
              error={errorStatus}
              warning={passwordsMatch !== null && !passwordsMatch}
              onSubmit={this.handleSubmit}
            >
              <Form.Group widths="equal">
                <Form.Input
                  placeholder="Full Name *"
                  name="contactName"
                  value={contactName}
                  onChange={this.handleChange}
                />
                <Form.Input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <Input
                    label={{ icon: pwIcon, color: pwColor }}
                    labelPosition="right corner"
                    type="password"
                    placeholder="Password *"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label={{ icon: pwIcon, color: pwColor }}
                    labelPosition="right corner"
                    type="password"
                    placeholder="Confirm Password *"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>
              <Message
                warning
                hidden={passwordsMatch || passwordsMatch === null}
                header="Passwords do not match"
              />
              <Form.Field inline required>
                <Checkbox
                  name="isAgreed"
                  onClick={this.handleChange}
                  label={
                    <label>
                      I Agree to the <Link to="/listingpolicy">Listing Policies</Link>
                    </label>
                  }
                />
              </Form.Field>
              <Form.Button
                color="purple"
                size="big"
                type="submit"
                content={isProcessing ? "Processing" : "Create an Account"}
                disabled={!email || !contactName || !passwordsMatch || !isAgreed}
              />
              <Message
                hidden={!successStatus && !errorStatus}
                success={successStatus}
                error={errorStatus}
                header={
                  successStatus
                    ? "Success, you're good to go"
                    : "Error, something went wrong"
                }
              />
            </Form>
            <Divider section horizontal content="OR" />
            <Button
              color="facebook"
              icon="facebook"
              className="social-signup"
              content="Sign Up with Facebook"
            />
            <Button
              color="google plus"
              icon="google"
              className="social-signup"
              content="Sign Up with Google"
            />
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default SignUp;
