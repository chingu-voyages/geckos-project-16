import React, { Fragment } from "react";
import CardComponent from "./CardComponent";

const CardList = ({ pets }) => {
  return (
    <Fragment>
      {pets.map((pet, i) => (
        <CardComponent
          key={i}
          image={pet.images[0]}
          name={pet.petName}
          gender={pet.gender}
          age={pet.age}
          location={pet.location}
        />
      ))}
    </Fragment>
  );
};

export default CardList;
