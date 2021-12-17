import React from "react";
import Card from "../Card/Card";
import {Link} from 'react-router-dom'


const ImageList = (props) => {
  console.log("props:", props.list);
  return (
    <div>
      {props.list.map((item) => {
        return (
          <Link to={`/meme/${item.id}`} key={item.id}>
          <div>
            <Card item={item.name} image={item.url} />
            {/* <p>{item.name}</p>;
            <img src={item.url} width="300px" />; */}
          </div>
        </Link>
        );
      })}
    </div>
  );
};

export default ImageList;
