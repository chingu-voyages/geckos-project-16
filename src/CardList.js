import React from "react";
import CardComponent from "./CardComponent";
import { Grid } from "semantic-ui-react";

const CardList = ({ pets, ...sizes }) => (
  <Grid style={{ justifyContent: "center" }}>
    {pets.map(({ id, images, ...rest }) => (
      <CardComponent key={id} id={id} image={images[0]} {...rest} {...sizes} />
    ))}
  </Grid>
);

export default CardList;
