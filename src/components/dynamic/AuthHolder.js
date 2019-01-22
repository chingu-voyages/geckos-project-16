import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Divider, Button } from "semantic-ui-react";
import StyledContainer from "../reusable/StyledContainer";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import "./AuthHolder.css";

const AuthHolder = ({ match, handleUser }) => {
  const isLogin = match.url.slice(1) === "login";
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
      <Button
        size="big"
        color="facebook"
        icon="facebook"
        className="social-auth"
        content="Sign up with Facebook"
      />
      <Button
        size="big"
        color="google plus"
        icon="google"
        className="social-auth"
        content="Sign up with Google"
      />
    </StyledContainer>
  );
};

export default withRouter(AuthHolder);
