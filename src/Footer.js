import React from "react";
import { Container, List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => (
  <Segment inverted color="purple" vertical id="footer">
    <Container>
      <List horizontal className="top-items">
        <List.Item as={Link} to="/login">
          Login
        </List.Item>
        <List.Item as={Link} to="/register" className="footer-item">
          Register
        </List.Item>
      </List>
      <List horizontal className="top-items">
        <List.Item as={Link} to="/">
          Create Listing
        </List.Item>
        <List.Item as={Link} to="/listings">
          View Listings
        </List.Item>
        <List.Item as={Link} to="/listingpolicy" className="footer-item">
          Listing Policy
        </List.Item>
      </List>
      <p>
        Built with{" "}
        <span role="img" aria-label="sheep">
          ❤️
        </span>{" "}
        and{" "}
        <span role="img" aria-label="coffee">
          ☕
        </span>{" "}
        by some{" "}
        <a href="https://github.com/chingu-voyages/geckos-project-16">
          <span role="img" aria-label="gecko">
            🦎
          </span>
        </a>
        's.
      </p>
    </Container>
  </Segment>
);

export default Footer;
