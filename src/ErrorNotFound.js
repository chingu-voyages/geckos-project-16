import React, { Component } from "react";
import { Container, Segment, Image, Header } from "semantic-ui-react";
import "./ErrorNotFound.css";
export default class ErrorNotFound extends Component {
  render() {
    return (
      <Container className="er-container">
        <Segment inverted color="pink" className="er-segment">
          <Segment>
            <Header
              className="er-heading"
              as="h3"
              color="purple"
              content="Sorry, we couldn't find what you're looking for."
            />
            <Image src="/error.svg" fluid />
          </Segment>
        </Segment>
      </Container>
    );
  }
}
