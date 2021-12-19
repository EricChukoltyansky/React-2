import React from "react";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button className={this.props.styleWithProps}>{this.props.text}</button>
      </>
    );
  }
}

export default Button;
