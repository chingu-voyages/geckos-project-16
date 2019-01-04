import React from "react";
import { Container, Grid, List, Segment } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => (
  <Segment inverted vertical>
    <Container>
      <List horizontal className="top-items">
        <List.Item as="a" href="/login">
          Login
        </List.Item>
        <List.Item as="a" href="/register" className="footer-item">
          Register
        </List.Item>
      </List>
      <List horizontal className="top-items">
        <List.Item as="a" href="/">
          Create Listing
        </List.Item>
        <List.Item as="a" href="/listings">
          View Listings
        </List.Item>
        <List.Item as="a" href="/listingpolicy" className="footer-item">
          Listing Policy
        </List.Item>
      </List>
      <p>
        Built with{" "}
        <span role="img" aria-label="sheep">
          ❤️
        </span>{" "}
        and{" "}
        <span role="img" aria-label="coffe">
          ☕
        </span>{" "}
        by some <a href="https://github.com/chingu-voyages/geckos-project-16">Geckos</a>.
      </p>
    </Container>
  </Segment>
);

export default Footer;
