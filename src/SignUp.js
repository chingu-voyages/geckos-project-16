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
                  />
                  <Form.Input
                    type="password"
                    placeholder="Confirm Password"
                    id="input"
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
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
                    <label>I am a South Korean citizen or permanent resident</label>
                  </Form.Field>
                </div>
                <Button id="login-button">Sign Up</Button>
              </Form>
            </div>
          </Segment>
        </Container>
      </Fragment>
    );
  }
}

export default SignUp;
