import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CardList from "../reusable/CardList";
import "./FeaturedPosts.css";

class FeaturedPosts extends Component {
  state = {
    posts: [],
    isLoading: true,
  };

  async componentDidMount() {
    // Temporary code for development purposes. Which pet will be displayed will be more complex in finished product
    try {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      const posts = data.slice(0, 4);
      this.setState({ posts, isLoading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { posts, isLoading } = this.state;
    return (
      <div className="featured-container">
        <CardList
          pets={posts}
          isLoading={isLoading}
          mobile={16}
          tablet={8}
          computer={4}
        />
        {!isLoading && (
          <Button
            as={Link}
            to="/listings"
            size="big"
            color="purple"
            content="View More Listings"
          />
        )}
      </div>
    );
  }
}

export default FeaturedPosts;
