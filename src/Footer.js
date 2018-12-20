import React from "react";
import { Container, Header, Grid, List, Segment } from "semantic-ui-react";

const Footer = () => (
  <Segment inverted vertical>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Link 1</List.Item>
              <List.Item as="a">Link 2</List.Item>
              <List.Item as="a">Link 3</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Heading 2" />
            <List link inverted>
              <List.Item as="a">Item 1</List.Item>
              <List.Item as="a">Item 2</List.Item>
              <List.Item as="a">Item 3</List.Item>
              <List.Item as="a">Item 4</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Footer Header
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
