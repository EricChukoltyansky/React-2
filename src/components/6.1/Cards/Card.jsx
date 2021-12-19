import React from "react";
import "./card.css";

class Card extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <div className="card">
          <img src={this.props.image} alt="" />
          <h1>{this.props.title}</h1>
          <p>{this.props.desc}</p>
          <div className="links">
            <a href={this.props.leftLink}>SHARE</a>
            <a href={this.props.rightLink}>EXPLORE</a>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
