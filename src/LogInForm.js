import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { fetcher } from "./helpers";
import FormMessages from "./FormMessages";

const initialState = {
  email: "",
  password: "",
  isProcessing: false,
  successStatus: null,
  activeUser: "",
  errorStatus: null,
  errorMsg: "",
};

class LogInForm extends Component {
  state = initialState;

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleLogIn = async () => {
    try {
      const { password, email } = this.state;
      const resp = await fetcher("/users/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
      });
      const user = await resp.json();
      console.log(resp);
      if (!resp.ok) {
        throw user;
      }
      localStorage.setItem("user", JSON.stringify(user));
      this.setState(
        {
          ...initialState,
          successStatus: true,
          activeUser: user.fullName,
        },
        () => this.props.handleUser(user)
      );
    } catch (err) {
      this.setState({
        ...initialState,
        errorStatus: true,
        errorMsg: err.message,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isProcessing: true }, this.handleLogIn);
  };

  render() {
    const {
      email,
      password,
      successStatus,
      errorStatus,
      errorMsg,
      activeUser,
      isProcessing,
    } = this.state;
    return (
      <Form
        loading={isProcessing}
        className="auth-form"
        success={successStatus}
        error={errorStatus}
        onSubmit={this.handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button
          color="purple"
          size="big"
          type="submit"
          content={isProcessing ? "Processing" : "Submit"}
          disabled={!email || !password}
        />
        <FormMessages
          successStatus={successStatus}
          successMsg={`Welcome back, ${activeUser}!`}
          errorStatus={errorStatus}
          errorMsg={errorMsg}
        />
      </Form>
    );
  }
}

export default LogInForm;
