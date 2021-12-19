import React, { Component } from "react";

export default class FormReview extends Component {
  render() {
    return (
      <>
        <p>{this.props.information.firstNameValue}</p>
        <p>{this.props.information.lastNameValue}</p>
        <p>{this.props.information.selectValue}</p>
        <p>{this.props.information.textAreaValue}</p>
        <button
          onClick={() => {
            this.props.handleChange("isSubmitted", false);
          }}
        >
          Back to the drawing board
        </button>
      </>
    );
  }
}
