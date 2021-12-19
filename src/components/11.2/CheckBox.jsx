import React, { Component } from "react";
import "./CheckBox.css";

export default class CheckBox extends Component {
  state = { checked: "checked" };

  render() {
    return (
      <>
        <form action="">
          <input type="checkbox" id="red" defaultChecked={this.state.checked} />
          <label for="read">I read the terms of the app</label>
          <input type="checkbox" id="accept" defaultChecked={this.state.checked}/>
          <label for="accept">I accept the terms of the app</label>
          <input type="checkbox" id="news" />
          <label for="news">I want to get the weekly news letter</label>
          <input type="checkbox" id="sales" />
          <label for="sales">I want to get the sales and offers</label>
        </form>
      </>
    );
  }
}
