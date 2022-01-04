import React from "react";
import "./MemeCard.scss";

const MemeCard = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card__image-container">
        {/* <p className="card__name">{props.item}</p> */}
        <img className="card__image" src={props.image} alt="meme background" />
      </div>
    </div>
  );
};

export default MemeCard;
