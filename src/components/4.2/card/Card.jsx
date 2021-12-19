import React from "react";
import "./card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.image} alt="" />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <div className="links">
          <a href={props.leftLink}>SHARE</a>
          <a href={props.rightLink}>EXPLORE</a>
        </div>
      </div>
    </>
  );
}

export default Card;
