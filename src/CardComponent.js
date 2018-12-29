import React from "react";
import { Card } from "semantic-ui-react";
import ImgWithPlaceHolder from "./ImgWithPlaceholder";

const CardComponent = ({ image, name, gender, age, location }) => (
  <Card fluid>
    <ImgWithPlaceHolder src={image} alt="Pets" />
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
