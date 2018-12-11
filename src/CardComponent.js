import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardComponent = ({ image, name, gender, age, location }) => (
  <Card>
    <Image src={image} alt="Pets" />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {gender}, {age} years
      </Card.Description>
      <Card.Description>{location}</Card.Description>
    </Card.Content>
  </Card>
);

export default CardComponent;
