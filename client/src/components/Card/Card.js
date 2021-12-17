import React from "react";
import "./Card.scss";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card__image-container">
        <p className="card__name">{props.item}</p>
        <img className="card__image" src={props.image} />
      </div>
    </div>
  );
};

export default Card;
