import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";
import "./FeaturedPosts.css";

class FeaturedPosts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    // Temporary code for development purposes. Which pet will be displayed will be more complex in finished product
    try {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      const posts = data.slice(0, 4);
      this.setState({ posts });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { posts } = this.state;
    const featuredPosts = posts.map(({ id, images, user, ...rest }) => (
      <Grid.Column key={id} mobile={16} tablet={8} computer={4}>
        <CardComponent image={images[0]} name={user.name} {...rest} />
      </Grid.Column>
    ));

    return (
      <div className="featured-container">
        <h1>Featured Posts</h1>
        <Grid>{featuredPosts}</Grid>
        <Button
          as={Link}
          to="/listings"
          size="big"
          color="pink"
          content="View More Listings"
        />
      </div>
    );
  }
}

export default FeaturedPosts;
