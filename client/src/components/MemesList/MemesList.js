import React from "react";
import MemeCard from "../MemeCard/MemeCard";
import { Link } from "react-router-dom";
import "./MemesList.scss";
import headerImage from "../../assets/images/home-header.png";
import chooseMeme from "../../assets/images/choose-meme.png";

const MemesList = (props) => {
  console.log("props:", props.list);
  return (
    <div className="list__container">
      <img
        className="list__header-image"
        src={headerImage}
        alt="Memenerator by Ashley and Miriam"
      />
      <img
        className="list__choose-image"
        src={chooseMeme}
        alt="choose a meme background"
      />
      {props.list.map((item) => {
        return (
          <Link to={`/meme/${item.id}`} key={item.id}>
            <div>
              <MemeCard item={item.name} image={item.url} />
              {/* <p>{item.name}</p>;
            <img src={item.url} width="300px" />; */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MemesList;
