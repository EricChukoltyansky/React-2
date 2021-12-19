import React from "react";
import "./styles.css";

class IncDec extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      hsl: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  getCurrentClass = () => {
    if (this.state.counter > 0) return "green";
    if (this.state.counter < 0) return "red";
    return "black";
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>+</button>
        <div className={this.getCurrentClass()}>{this.state.counter}</div>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default IncDec;
