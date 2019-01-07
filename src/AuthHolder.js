import React from "react";
import { Container, Segment } from "semantic-ui-react";

const AuthHolder = () => (
  <Container>
    <Segment inverted color="pink">
      {children}
    </Segment>
  </Container>
);

export default AuthHolder;
