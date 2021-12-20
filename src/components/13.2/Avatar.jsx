import React, { Component } from "react";
import "./Avatar.css";

export default class Avatar extends Component {
  render() {
    return (
      <div className="card-container">
        <h4 className="headline">{this.props.first} {this.props.last}</h4>
        <img className="" src={this.props.src} alt="" />
      </div>
    );
  }
}
