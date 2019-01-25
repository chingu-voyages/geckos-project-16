import React, { Component, Fragment } from "react";
import { Form, Divider, Button } from "semantic-ui-react";
import { fetcher } from "../../helpers";
import FormMessages from "../reusable/FormMessages";

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

  handleFacebook = () => {
    this.setState(
      { isProcessing: true },
      // use window to access the SDK we loaded in our HTML file
      // use that SDKs login function
      window.FB.login(async resp => {
        if (resp.status === "connected") {
          // if it's succcessful grab that users token
          const token = resp.authResponse.accessToken;
          const url = `https://graph.facebook.com/me?fields=email%20&access_token=${token}`;
          try {
            // use facebook's graph api to get your email
            const blob = await fetch(url);
            const resp = await blob.json();
            if (!blob.ok) throw resp;
            // if it's okay send that email to our API
            const url2 = "http://localhost:3000/api/users/social";
            const blob2 = await fetch(url2, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({ email: resp.email }),
            });
            const user = await blob2.json();
            if (!blob2.ok) throw user;
            // checks if there's a user in the DB with that email
            // if there is it'll send back an obj with everything we need
            // put it in storage
            localStorage.setItem("user", JSON.stringify(user));
            // reset our state and show a successful message
            this.setState(
              {
                ...initialState,
                successStatus: true,
                activeUser: user.fullName,
              },
              // send the user obj back to Navbar
              // this will update the UI
              // logout button, etc
              () => this.props.handleUser(user)
            );
          } catch (err) {
            console.log(err);
            this.setState({
              ...initialState,
              errorStatus: true,
              errorMsg: err.message,
            });
          }
        }
      })
    );
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
      <Fragment>
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
        <Divider section horizontal content="OR" />
        <Button
          size="big"
          color="facebook"
          icon="facebook"
          disabled={!!activeUser}
          className="social-auth"
          content="Log in with Facebook"
          onClick={this.handleFacebook}
        />
        <Button
          size="big"
          color="google plus"
          icon="google"
          className="social-auth"
          content="Sign up with Google"
        />
      </Fragment>
    );
  }
}

export default LogInForm;
