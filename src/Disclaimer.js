import React from "react";
import { Segment, Header, Container } from "semantic-ui-react";

const Disclaimer = () => (
  <Segment basic inverted color="pink" style={{ margin: 0, padding: "35px 1.5em" }}>
    <Header
      as="h1"
      color="violet"
      content="Disclaimer"
      textAlign="center"
      style={{ textDecoration: "underline" }}
    />
    <Container color="violet">
      <p style={{ color: "#3d0043" }}>
        Chingu Dogs is a free service to list animals for adoption. Chingu Dogs takes no
        responsibility for any content as all listed animals are user-generated, and
        Chingu Dogs has not verified any information regarding health, condition, or any
        other matter. Chingu Dogs is not a shelter, and unfortunately does not have a way
        to accept unwanted animals. All content uploaded is the property of the submitter.
      </p>
    </Container>
  </Segment>
);

export default Disclaimer;
