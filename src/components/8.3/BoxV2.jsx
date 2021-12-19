import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myColor: "",
      borderRadius: "",
      counter: 0,
    };
  }
  makeRound() {
    this.setState({ borderRadius: "borderRadius" });
  }

  changeColor() {
    let colors = ["red", "blue", "green"];
    let randomColor = Math.floor(Math.random() * colors.length);
    setTimeout(() => {
      this.setState({
        myColor: `${colors[randomColor]}`,
        counter: this.state.counter + 1,
      });
      if (this.state.counter === 8) {
        this.makeRound();
      }
    }, 500);
  }

  componentDidMount() {
    this.changeColor();
  }

  componentDidUpdate() {
    this.changeColor();
  }

  render() {
    return (
      <div className="container">
        <div
          className={`${this.state.myColor} ${this.state.borderRadius}`}
        ></div>
      </div>
    );
  }
}

export default App;
