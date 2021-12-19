import React, { Component } from "react";
import "./Input.css";
export default class Input extends Component {
  
  render() {
    return (
      <>
        <div className="inputs">
          <label>{this.props.labelName}</label>
          <input type={this.props.type} id={this.props.id} />
        </div>
      </>
    );
  }
}
