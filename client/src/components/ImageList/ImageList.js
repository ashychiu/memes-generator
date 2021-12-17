import React from "react";
import Card from "../Card/Card";

const ImageList = (props) => {
  console.log("props:", props);
  return (
    <div>
      {props.list.map((item) => {
        console.log(item.url);
        return (
          <div>
            <Card item={item.name} image={item.url} />
            {/* <p>{item.name}</p>;
            <img src={item.url} width="300px" />; */}
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
