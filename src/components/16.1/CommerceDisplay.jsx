import React, { Component } from "react";

import { BrowserRouter, Link } from "react-router-dom";
// import ProductsList from "./ProductsList";
// import HomePage from "./HomePage";
import HomePage from "./HomePage";
import Products from "./Product";

export default class AppDisplay extends Component {
  homepageComponent = () => {
    return (
      <div>
        <HomePage />
      </div>
    );
  };

  productComponent = () => {
    return (
      <div>
        <Products />
      </div>
    );
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/"></Link>
          <Link to="/home" component={this.homepageComponent}></Link>
          <Link to="/home" component={this.productComponent}></Link>
        </BrowserRouter>
      </div>
    );
  }
}
