import React from "react";
import "./Spinner.css";

class Spinner extends React.Component {
  state = {
    class: "loading",
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(() => ({ class: "" }));
    }, 5000);
  };

  

  render() {
    return (
      <>
        <div className={this.state.class}></div>
      </>
    );
  }
}

export default Spinner;
