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
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
        render={() => (
          <Button
            size="big"
            color="facebook"
            icon="facebook"
            className="social-auth"
            content="Login with Facebook"
          />
        )}
      />
      <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={() => (
          <Button
            size="big"
            color="google plus"
            icon="google"
            className="social-auth"
            content="Login with Google"
          />
        )}
      />
    </StyledContainer>
  );
};

export default withRouter(AuthHolder);
