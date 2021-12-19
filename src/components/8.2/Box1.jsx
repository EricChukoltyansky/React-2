import React from "react";
import "./Boxes.css";

class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "" };
  }

  componentDidMount = () => {
    this.setState(() => {
      return { class: "slideIn" };
    });
    setTimeout(() => {
      this.setState(() => ({ class: "slideOut" }));
    }, 4000);
  };

  render() {
    return (
      <>
        <div
          className={this.state.class + " box"}
          style={{ width: this.props.width, height: this.props.height }}
        ></div>
      </>
    );
  }
}

export default Boxes;
