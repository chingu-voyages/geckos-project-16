import React, { Component } from "react";
import { Container, Segment, Image } from "semantic-ui-react";
import "./ErrorNotFound.css";
export default class ErrorNotFound extends Component {
  render() {
    return (
      <Container className="er-container">
        <Segment inverted color="pink" className="er-segment">
          <Segment>
            <h3 className="er-heading">
              Sorry, we couldn't find what you're looking for.
            </h3>
            <Image src="/error.svg" fluid />
          </Segment>
        </Segment>
      </Container>
    );
  }
}
