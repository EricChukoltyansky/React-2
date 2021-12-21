import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <img src={this.props.src} alt="" />
        <p>{this.props.price}</p>
        <p>{this.props.size}</p>
      </div>
    );
  }
}
