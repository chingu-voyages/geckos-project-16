import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Divider, Button } from "semantic-ui-react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import StyledContainer from "../reusable/StyledContainer";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import "./AuthHolder.css";

const AuthHolder = ({ match, handleUser }) => {
  const isLogin = match.url.slice(1) === "login";
  const responseFacebook = response => console.log(response);
  const responseGoogle = response => console.log(response);
  return (
    <StyledContainer
      topHeader={isLogin ? "Log into your Account" : "Create an Account"}
      btmHeader={
        <Link to={isLogin ? "/signup" : "/login"}>
          {isLogin
            ? "No account? Register here."
            : "Already have an account? Log in here."}
        </Link>
      }
    >
      {isLogin ? (
        <LogInForm handleUser={handleUser} />
      ) : (
        <SignUpForm handleUser={handleUser} />
      )}
      <Divider section horizontal content="OR" />
      <FacebookLogin
        appId="323501384952013"
        fields="name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <Button
            size="big"
            color="facebook"
            icon="facebook"
            className="social-auth"
            content="Login with Facebook"
            onClick={renderProps.onClick}
          />
        )}
      />
      <GoogleLogin
        clientId="849865718976-222rlc6r2qnuqd6m7cv9kbnra318e7h7.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={renderProps => (
          <Button
            size="big"
            color="google plus"
            icon="google"
            className="social-auth"
            content="Login with Google"
            onClick={renderProps.onClick}
          />
        )}
      />
    </StyledContainer>
  );
};

export default withRouter(AuthHolder);
