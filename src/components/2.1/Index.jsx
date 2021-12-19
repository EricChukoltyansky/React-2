import logo from "../../logo.svg";
import React from "react";

export default class Index extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AppleSeeds React App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a>
      </header>
    );
  }
}
