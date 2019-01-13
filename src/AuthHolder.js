import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Container, Segment, Divider, Button, Header } from "semantic-ui-react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import "./AuthHolder.css";

const AuthHolder = ({ match, handleUser }) => {
  const isLogin = match.url.slice(1) === "login";
  return (
    <Container className="auth-container">
      <Segment inverted color="pink" textAlign="center">
        <Segment>
          <Header
            as="h1"
            color="violet"
            content={isLogin ? "Log into your Account" : "Create an Account"}
            dividing
          />
          <Header size="tiny" className="auth-link">
            <Link to={isLogin ? "/signup" : "/login"}>
              {isLogin
                ? "No account? Register here."
                : "Already have an account? Log in here."}
            </Link>
          </Header>
          {/* FORMS ARE HERE */}
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
        </Segment>
      </Segment>
    </Container>
  );
};

export default withRouter(AuthHolder);
