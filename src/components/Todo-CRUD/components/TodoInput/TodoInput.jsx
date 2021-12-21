import React, { Component } from "react";

export default class TodoInput extends Component {
  state = {
    term: "",
  };

  handleChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
