import React from "react";
import "./Box.css";

class Box extends React.Component {
  state = { class: "" };

  componentDidMount = () => {
    this.setState(() => {
      return { class: "blue" };
    });
    setTimeout(() => {
      this.setState(() => ({ class: "green" }));
    }, 500);
    setTimeout(() => {
      this.setState(() => ({ class: "red" }));
    }, 1000);
    setTimeout(() => {
      this.setState(() => ({ class: "yellow" }));
    }, 1500);
    setTimeout(() => {
      this.setState(() => ({ class: "circle blue" }));
    }, 5000);
  };

  render() {
    return (
      <>
        <div className={this.state.class + " box"}></div>
      </>
    );
  }
}

export default Box;
