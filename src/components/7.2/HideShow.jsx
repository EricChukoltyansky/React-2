import React, { Component } from "react";
import './HideShow.css'

class HideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // colorBox: 'color',
      show: false,
    };
  }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <div className="box">
          <button onClick={this.ToggleClick}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          {this.state.show ? (<div className="color"></div>) : ("")}
          
        </div>
      </>
    );
  }
}

export default HideShow;
