import React, { Component, Fragment } from "react";
import {
  Button,
  Container,
  Divider,
  Icon,
  Segment,
  Form,
  Checkbox,
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
      over18: "",
      koreanResident: false,
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
    const { over18, koreanResident } = this.state;

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
            <h2>Sign Up with Your Email Address</h2>
            <div id="input-form">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    placeholder="First Name"
                    id="input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    placeholder="Last Name"
                    id="input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    fluid
                    placeholder="Email"
                    id="input-email"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Input
                    fluid
                    placeholder="Confirm Password"
                    id="input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    placeholder="Password"
                    id="input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Checkbox label="I am over 18 years of age" />
                </Form.Group>
                <Form.Group>
                  <Checkbox label="I am a South Korean citizen or permanent resident" />
                </Form.Group>
                <Button positive id="login-button">
                  Sign Up
                </Button>
              </Form>
            </div>
          </Segment>
        </Container>
      </Fragment>
    );
  }
}

export default SignUp;
