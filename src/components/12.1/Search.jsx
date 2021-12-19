import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          name="search"
          id="search"
          onSubmit={this.props.onClickFunction}
          value={this.props.searchValue}
        />
      </div>
    );
  }
}
